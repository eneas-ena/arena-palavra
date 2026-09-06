/* =========================================================
   ARENA DA PALAVRA — sala entre celulares

   Como funciona, em uma frase: os aparelhos não conversam entre si,
   eles conversam com o Supabase. Quem joga descreve o estado inteiro
   da partida e publica; os outros recebem esse estado e redesenham.

   Não usa banco de dados: usa só o canal de transmissão do Supabase
   (Realtime Broadcast). Não há tabela para criar, nem permissão para
   configurar, e nada fica gravado em lugar nenhum.

   ---------------------------------------------------------
   PARA FUNCIONAR, PREENCHA AS DUAS LINHAS ABAIXO
   com os dados do seu projeto Supabase (Settings > API).
   A chave "anon" pode ficar à vista: sem tabela, não há o que ler.
   ---------------------------------------------------------
   sala.js v1.0.0
   ========================================================= */
"use strict";

const SUPABASE_URL   = "https://hyfayoqhaqbsnzyqpeqs.supabase.co";   // ex.: https://xxxxxxxx.supabase.co
const SUPABASE_ANON  = "sb_publishable_N0fGYr9UWwWabfRrTWWjyQ_28QZBQ3K";   // a chave pública "anon"

const Sala = {
  /* ---------- estado interno ---------- */
  transporte: null,
  codigo: null,
  jogoId: null,
  lugares: 2,
  meuLugar: null,
  nomes: [],
  versao: 0,
  souDono: false,
  ligada: false,
  ganchos: {},

  /* ---------- consultas que os jogos usam ---------- */
  ativa(){ return this.ligada; },
  minhaVez(lugarDaVez){ return !this.ligada || this.meuLugar === lugarDaVez; },
  configurada(){ return !!(SUPABASE_URL && SUPABASE_ANON); },

  /* =========================================================
     TRANSPORTE
     Trocável de propósito: em produção é o Supabase, e nos testes
     é um transporte de mentira que roda dentro da própria página.
     ========================================================= */

  usarTransporte(t){ this.transporte = t; },

  criarTransporteSupabase(){
    if(!this.configurada()) throw new Error("Supabase não configurado em sala.js");
    if(!window.supabase) throw new Error("A biblioteca do Supabase não carregou");
    const cliente = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON, {
      realtime: { params: { eventsPerSecond: 20 } }
    });
    let canal = null;
    return {
      async abrir(codigo, aoReceber, aoMudarGente){
        canal = cliente.channel("arena-" + codigo, { config: { broadcast: { self:false }, presence: { key: String(Math.random()).slice(2) } } });
        canal.on("broadcast", { event: "estado" }, ({payload}) => aoReceber(payload));
        canal.on("broadcast", { event: "pedido" }, () => aoReceber({pedido:true}));
        canal.on("presence", { event: "sync" }, () => {
          const gente = canal.presenceState();
          aoMudarGente(Object.keys(gente).length);
        });
        await canal.subscribe(async (status) => {
          if(status === "SUBSCRIBED") await canal.track({ entrou: Date.now() });
        });
      },
      enviar(evento, dados){ if(canal) canal.send({ type:"broadcast", event:evento, payload:dados }); },
      fechar(){ if(canal){ canal.unsubscribe(); canal = null; } }
    };
  },

  /* =========================================================
     ABRIR E FECHAR A SALA
     ========================================================= */

  gerarCodigo(){
    const letras = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";   // sem I, O, 0 e 1
    let c = "";
    for(let i = 0; i < 5; i++) c += letras[Math.floor(Math.random() * letras.length)];
    return c;
  },

  async abrir({codigo, jogoId, lugares, dono, ganchos}){
    this.codigo = codigo;
    this.jogoId = jogoId;
    this.lugares = lugares || 2;
    this.souDono = !!dono;
    this.meuLugar = dono ? 0 : 1;
    this.ganchos = ganchos || {};
    this.versao = 0;

    if(!this.transporte) this.transporte = this.criarTransporteSupabase();

    await this.transporte.abrir(codigo,
      (msg) => this.receber(msg),
      (quantos) => { if(this.ganchos.aoMudarGente) this.ganchos.aoMudarGente(quantos); });

    this.ligada = true;
    // quem entra depois pede o estado atual a quem já estava
    if(!dono) this.transporte.enviar("pedido", {de:this.meuLugar});
  },

  fechar(){
    if(this.transporte) this.transporte.fechar();
    this.ligada = false;
    this.codigo = null;
    this.meuLugar = null;
    this.versao = 0;
  },

  /* =========================================================
     PUBLICAR E RECEBER
     ========================================================= */

  publicar(estado){
    if(!this.ligada) return;
    this.versao++;
    this.transporte.enviar("estado", {
      jogoId: this.jogoId,
      versao: this.versao,
      estado
    });
  },

  receber(msg){
    if(!msg) return;

    // alguém acabou de chegar e quer saber como está a partida
    if(msg.pedido){
      if(this.ganchos.aoPedirEstado){
        const estado = this.ganchos.aoPedirEstado();
        if(estado) this.publicar(estado);
      }
      return;
    }

    if(msg.jogoId && msg.jogoId !== this.jogoId) return;
    // mensagem atrasada, de uma jogada que já foi superada
    if(typeof msg.versao === "number" && msg.versao <= this.versao) return;
    if(typeof msg.versao === "number") this.versao = msg.versao;

    if(this.ganchos.aoReceberEstado) this.ganchos.aoReceberEstado(msg.estado);
  },

  /* =========================================================
     O PAINEL DE SALA — igual em todos os jogos
     ========================================================= */

  montarPainel(container, op){
    const bloco = document.createElement("div");
    bloco.className = "bloco";
    bloco.innerHTML =
      '<h2>Jogar com outro aparelho</h2>' +
      '<div class="escolhas" id="salaModo"></div>' +
      '<div id="salaCorpo" style="margin-top:14px"></div>';
    container.appendChild(bloco);

    const corpo = bloco.querySelector("#salaCorpo");
    let modo = "sozinhos";

    const desenhar = () => {
      UI.escolhas(bloco.querySelector("#salaModo"),
        [{valor:"sozinhos", rotulo:"Neste aparelho"},
         {valor:"criar",    rotulo:"Criar sala"},
         {valor:"entrar",   rotulo:"Entrar numa sala"}],
        modo, v => { modo = v; desenhar(); });

      corpo.innerHTML = "";

      if(modo === "sozinhos"){
        const p = document.createElement("p");
        p.className = "legenda";
        p.style.margin = "0";
        p.textContent = "Todos jogam olhando a mesma tela, como até agora.";
        corpo.appendChild(p);
        if(op.aoDesligar) op.aoDesligar();
        return;
      }

      if(!this.configurada()){
        const p = document.createElement("p");
        p.className = "legenda";
        p.style.margin = "0";
        p.textContent = "Para jogar entre aparelhos é preciso preencher o endereço e a chave do Supabase no arquivo sala.js.";
        corpo.appendChild(p);
        return;
      }

      if(modo === "criar"){
        const codigo = this.gerarCodigo();
        const caixa = document.createElement("div");
        caixa.style.textAlign = "center";
        caixa.innerHTML =
          '<p class="legenda" style="margin:0 0 8px">Diga este código para a outra pessoa:</p>' +
          '<p class="codigo-sala">' + codigo + '</p>' +
          '<p class="legenda" id="salaAviso" style="margin:0">Ninguém entrou ainda.</p>';
        corpo.appendChild(caixa);

        const b = document.createElement("button");
        b.className = "principal";
        b.style.marginTop = "12px";
        b.textContent = "Abrir a sala";
        b.addEventListener("click", async () => {
          b.disabled = true;
          b.textContent = "Abrindo…";
          try {
            await this.abrir({codigo, jogoId:op.jogoId, lugares:op.lugares, dono:true, ganchos:op.ganchos});
            b.textContent = "Sala aberta — você é o jogador 1";
            corpo.querySelector("#salaAviso").textContent = "Esperando a outra pessoa entrar…";
            if(op.aoLigar) op.aoLigar(0);
          } catch(e){
            b.disabled = false;
            b.textContent = "Abrir a sala";
            corpo.querySelector("#salaAviso").textContent = "Não deu para abrir: " + e.message;
          }
        });
        corpo.appendChild(b);
        return;
      }

      // entrar
      const campo = document.createElement("input");
      campo.type = "text";
      campo.maxLength = 5;
      campo.placeholder = "código";
      campo.setAttribute("aria-label", "Código da sala");
      campo.className = "campo-codigo";
      corpo.appendChild(campo);

      const aviso = document.createElement("p");
      aviso.className = "legenda";
      aviso.style.margin = "10px 0 0";
      aviso.textContent = "Digite o código que apareceu no outro aparelho.";

      const b = document.createElement("button");
      b.className = "principal";
      b.style.marginTop = "12px";
      b.textContent = "Entrar";
      b.addEventListener("click", async () => {
        const codigo = campo.value.trim().toUpperCase();
        if(codigo.length !== 5){ aviso.textContent = "O código tem cinco letras."; return; }
        b.disabled = true; b.textContent = "Entrando…";
        try {
          await this.abrir({codigo, jogoId:op.jogoId, lugares:op.lugares, dono:false, ganchos:op.ganchos});
          b.textContent = "Dentro da sala — você é o jogador 2";
          aviso.textContent = "Esperando a partida do outro aparelho…";
          if(op.aoLigar) op.aoLigar(1);
        } catch(e){
          b.disabled = false; b.textContent = "Entrar";
          aviso.textContent = "Não deu para entrar: " + e.message;
        }
      });
      corpo.append(b, aviso);
    };

    desenhar();
  }
};
