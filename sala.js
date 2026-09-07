/* =========================================================
   ARENA DA PALAVRA — sala entre celulares

   Como funciona, em uma frase: os aparelhos não conversam entre si,
   eles conversam com o Supabase. Quem joga descreve o estado inteiro
   da partida e publica; os outros recebem esse estado e redesenham.

   Não usa banco de dados: usa só o canal de transmissão do Supabase
   (Realtime Broadcast). Não há tabela para criar, nem permissão para
   configurar, e nada fica gravado em lugar nenhum.

   ---------------------------------------------------------
   O projeto Supabase já está preenchido abaixo. A chave é a
   publicável, feita para ficar à vista no navegador — e como aqui
   não existe tabela nenhuma, não há o que ler nem o que estragar.
   Para trocar de projeto, mude as duas linhas.
   ---------------------------------------------------------
   sala.js v1.3.1
   ========================================================= */
"use strict";

const SUPABASE_URL   = "https://hyfayoqhaqbsnzyqpeqs.supabase.co";
const SUPABASE_ANON  = "sb_publishable_N0fGYr9UWwWabfRrTWWjyQ_28QZBQ3K";

const Sala = {
  /* ---------- estado interno ---------- */
  transporte: null,
  codigo: null,
  jogoId: null,
  lugares: 2,
  meuLugar: null,
  meuId: null,
  lista: [],
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

  /* A biblioteca do Supabase é buscada só quando alguém abre ou entra
     numa sala. Quem está jogando sozinho ou lado a lado nunca a baixa. */
  carregarBiblioteca(){
    if(window.supabase) return Promise.resolve();
    if(this._carregando) return this._carregando;
    this._carregando = new Promise((pronto, falhou) => {
      const tag = document.createElement("script");
      tag.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
      tag.onload = () => window.supabase
        ? pronto()
        : falhou(new Error("a biblioteca carregou mas não se apresentou"));
      tag.onerror = () => falhou(new Error("não deu para baixar a biblioteca do Supabase"));
      document.head.appendChild(tag);
    });
    return this._carregando;
  },

  /* Abre um canal só para conferir se o endereço e a chave estão certos. */
  async testar(){
    if(!this.configurada()) throw new Error("falta preencher o endereço e a chave em sala.js");
    await this.carregarBiblioteca();
    const cliente = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
    return new Promise((pronto, falhou) => {
      const prazo = setTimeout(() => falhou(new Error("o Supabase não respondeu em 8 segundos")), 8000);
      const canal = cliente.channel("arena-teste-" + Math.random().toString(36).slice(2));
      canal.subscribe((status, erro) => {
        if(status === "SUBSCRIBED"){ clearTimeout(prazo); canal.unsubscribe(); pronto(); }
        else if(status === "CHANNEL_ERROR" || status === "TIMED_OUT"){
          clearTimeout(prazo); canal.unsubscribe();
          falhou(new Error(status === "TIMED_OUT" ? "a conexão expirou" : ("o canal recusou" + (erro ? ": " + erro.message : ""))));
        }
      });
    });
  },

  criarTransporteSupabase(){
    if(!this.configurada()) throw new Error("Supabase não configurado em sala.js");
    if(!window.supabase) throw new Error("A biblioteca do Supabase não carregou");
    const cliente = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON, {
      realtime: { params: { eventsPerSecond: 20 } }
    });
    let canal = null;
    return {
      abrir(codigo, aoReceber, aoMudarGente){
        canal = cliente.channel("arena-" + codigo, { config: { broadcast: { self:false }, presence: { key: String(Math.random()).slice(2) } } });
        canal.on("broadcast", { event: "estado" }, ({payload}) => aoReceber(payload));
        canal.on("broadcast", { event: "pedido" }, ({payload}) =>
          aoReceber({pedido:true, id: payload && payload.id}));
        canal.on("broadcast", { event: "lugares" }, ({payload}) =>
          aoReceber({lugares: payload && payload.lista}));
        canal.on("presence", { event: "sync" }, () => {
          const gente = canal.presenceState();
          aoMudarGente(Object.keys(gente).length);
        });

        /* Esperar de verdade pela inscrição no canal. O subscribe() da
           biblioteca devolve na hora, sem aguardar a confirmação do
           servidor — e quem publica antes disso fala sozinho: a mensagem
           sai antes de o canal existir e ninguém recebe. Era isso que
           fazia um aparelho jogar sem o outro ver nada. */
        return new Promise((pronto, falhou) => {
          const prazo = setTimeout(() => falhou(new Error("o Supabase não confirmou a entrada no canal")), 12000);
          canal.subscribe(async (status, erro) => {
            if(status === "SUBSCRIBED"){
              clearTimeout(prazo);
              await canal.track({ entrou: Date.now() });
              pronto();
            } else if(status === "CHANNEL_ERROR" || status === "TIMED_OUT"){
              clearTimeout(prazo);
              falhou(new Error(erro ? erro.message : status));
            }
          });
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
    this.meuId = Math.random().toString(36).slice(2) + Date.now().toString(36);
    this.lista = dono ? [this.meuId] : [];
    this.codigo = codigo;
    this.jogoId = jogoId;
    this.lugares = lugares || 2;
    this.souDono = !!dono;
    this.meuLugar = dono ? 0 : 1;
    this.ganchos = ganchos || {};
    this.versao = 0;

    if(!this.transporte){
      await this.carregarBiblioteca();
      this.transporte = this.criarTransporteSupabase();
    }

    await this.transporte.abrir(codigo,
      (msg) => this.receber(msg),
      (quantos) => {
        /* Rede de segurança: sempre que chega gente, quem abriu a sala
           reenvia o estado. Se o pedido do recém-chegado se perder,
           ele recebe a partida assim mesmo. */
        if(this.souDono && quantos > 1 && this.jogo){
          const estado = this.jogo.retratar();
          if(estado) this.publicar(estado);
        }
        if(this.ganchos.aoMudarGente) this.ganchos.aoMudarGente(quantos);
      });

    this.ligada = true;
    // quem entra depois se apresenta: pede o estado e um lugar na mesa
    if(!dono) this.transporte.enviar("pedido", {id:this.meuId});
  },

  fechar(){
    if(this.transporte) this.transporte.fechar();
    this.ligada = false;
    this.codigo = null;
    this.meuLugar = null;
    this.lista = [];
    this.versao = 0;
  },

  /* quantos aparelhos a sala já reconhece */
  quantosNaSala(){ return this.lista ? this.lista.length : (this.ligada ? 1 : 0); },

  /* =========================================================
     PUBLICAR E RECEBER
     ========================================================= */

  /* O número da mensagem é um relógio lógico: ele nunca anda para trás
     e sobe acima de tudo que já se viu. Se os dois aparelhos publicarem
     no mesmo número, ganha o de lugar menor — assim os dois convergem
     para o mesmo estado em vez de descartarem a mensagem um do outro
     e ficarem esperando eternamente. */
  publicar(estado){
    if(!this.ligada) return;
    this.versao++;
    this.transporte.enviar("estado", {
      jogoId: this.jogoId,
      versao: this.versao,
      lugar: this.meuLugar,
      estado
    });
  },

  receber(msg){
    if(!msg) return;

    /* Alguém chegou. Quem abriu a sala é quem distribui os lugares:
       guarda o recém-chegado na fila, avisa a todos qual é o lugar de
       cada um e reenvia o estado da partida. */
    if(msg.pedido){
      if(this.souDono){
        if(msg.id && this.lista.indexOf(msg.id) < 0) this.lista.push(msg.id);
        this.transporte.enviar("lugares", {lista:this.lista.slice()});
      }
      if(this.ganchos.aoPedirEstado){
        const estado = this.ganchos.aoPedirEstado();
        if(estado) this.publicar(estado);
      }
      return;
    }

    // o dono da sala informou a ordem dos lugares
    if(msg.lugares){
      this.lista = msg.lugares.slice();
      const meu = this.lista.indexOf(this.meuId);
      if(meu >= 0 && meu !== this.meuLugar){
        this.meuLugar = meu;
        if(this.ganchos.aoMudarLugar) this.ganchos.aoMudarLugar(meu);
      }
      if(this.ganchos.aoMudarGente) this.ganchos.aoMudarGente(this.lista.length);
      return;
    }

    if(msg.jogoId && msg.jogoId !== this.jogoId) return;

    if(typeof msg.versao === "number"){
      const maisNova = msg.versao > this.versao;
      const empateResolvido = msg.versao === this.versao
        && typeof msg.lugar === "number" && msg.lugar < this.meuLugar;
      // o relógio sobe mesmo quando a mensagem é descartada,
      // senão os dois lados ficam presos no mesmo número
      this.versao = Math.max(this.versao, msg.versao);
      if(!maisNova && !empateResolvido) return;
    }

    if(this.ganchos.aoReceberEstado) this.ganchos.aoReceberEstado(msg.estado);
  },

  /* =========================================================
     ADAPTADOR — o que todo jogo precisa e ninguém deve reescrever

     Três armadilhas moram aqui, e cada uma me custou um bug no
     jogo da velha:
       1. eco: aplicar o que veio de fora não pode publicar de volta;
       2. pergunta aberta: o estado que chega enquanto alguém responde
          fica guardado e só entra depois;
       3. comando: botões que fazem a partida avançar (próxima rodada,
          novo lance) pertencem a um aparelho só, senão avançam dobrado.
     ========================================================= */

  aplicando: false,
  respondendo: false,
  guardado: null,
  jogo: null,

  /* chamado pelo jogo depois de qualquer mudança que ele mesmo causou */
  enviar(){
    if(this.ligada && !this.aplicando && this.jogo)
      this.publicar(this.jogo.retratar());
  },

  /* o jogo avisa quando abre e quando fecha uma pergunta */
  aoAbrirPergunta(){ this.respondendo = true; },
  aoFecharPergunta(){
    this.respondendo = false;
    if(this.guardado){ const g = this.guardado; this.guardado = null; this.receberEstado(g); }
  },

  receberEstado(d){
    if(!d || !this.jogo) return;
    if(this.respondendo){ this.guardado = d; return; }
    this.aplicando = true;
    try { this.jogo.aplicar(d); } finally { this.aplicando = false; }
  },

  /* true quando este aparelho comanda os botões de avançar a partida */
  comando(){ return !this.ligada || this.meuLugar === 0; },

  /* Botões de escolha. Usa o do comum.js quando existe, mas sabe se virar
     sozinho: a Trilha é anterior aos arquivos compartilhados e não o carrega. */
  escolhas(container, valores, atual, aoEscolher){
    if(typeof UI !== "undefined" && UI && UI.escolhas)
      return UI.escolhas(container, valores, atual, aoEscolher);
    container.innerHTML = "";
    valores.forEach(v => {
      const valor  = (typeof v === "object") ? v.valor  : v;
      const rotulo = (typeof v === "object") ? v.rotulo : v;
      const b = document.createElement("button");
      b.className = "escolha";
      b.textContent = rotulo;
      b.setAttribute("aria-pressed", String(valor === atual));
      b.addEventListener("click", () => aoEscolher(valor));
      container.appendChild(b);
    });
  },

  /* =========================================================
     O PAINEL DE SALA — igual em todos os jogos
     ========================================================= */

  montarPainel(container, op){
    this.jogo = { retratar: op.retratar, aplicar: op.aplicar };
    op.ganchos = {
      aoReceberEstado: (e) => this.receberEstado(e),
      aoPedirEstado:   () => op.retratar(),
      aoMudarGente:    (n) => { if(op.aoMudarGente) op.aoMudarGente(n); },
      aoMudarLugar:    (l) => { if(op.aoMudarLugar) op.aoMudarLugar(l); }
    };

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
      this.escolhas(bloco.querySelector("#salaModo"),
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
        p.textContent = "Para jogar entre aparelhos é preciso preencher o endereço e a chave do Supabase nas duas primeiras linhas do arquivo sala.js.";
        corpo.appendChild(p);
        return;
      }

      const teste = document.createElement("button");
      teste.className = "secundario";
      teste.style.marginTop = "0";
      teste.textContent = "Testar a conexão";
      const resultado = document.createElement("p");
      resultado.className = "legenda";
      resultado.style.margin = "8px 0 14px";
      teste.addEventListener("click", async () => {
        teste.disabled = true;
        resultado.textContent = "Conferindo…";
        try {
          await this.testar();
          resultado.textContent = "Conexão certa: o Supabase respondeu.";
        } catch(e){
          resultado.textContent = "Não conectou — " + e.message;
        }
        teste.disabled = false;
      });
      corpo.append(teste, resultado);

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
