/* =========================================================
   ARENA DA PALAVRA — motor compartilhado
   Som, tema claro/escuro, cabeçalho, cortina de pergunta e de regras.
   Corrigiu um som aqui, corrigiu em todos os jogos do kit.
   comum.js v1.0.0
   ========================================================= */
"use strict";

const $  = (s, raiz) => (raiz || document).querySelector(s);
const $$ = (s, raiz) => Array.from((raiz || document).querySelectorAll(s));

/* ---------------------------------------------------------
   SOM — tudo gerado pelo navegador (Web Audio).
   Nenhum arquivo de áudio, funciona sem internet.
   --------------------------------------------------------- */
const Som = {
  ctx:null, ruido:null, ligado:true,

  acordar(){
    if(!this.ctx){
      const AC = window.AudioContext || window.webkitAudioContext;
      if(!AC) return;
      try { this.ctx = new AC(); } catch(e){ return; }
      const n = Math.floor(this.ctx.sampleRate * 0.4);
      const buf = this.ctx.createBuffer(1, n, this.ctx.sampleRate);
      const dados = buf.getChannelData(0);
      for(let i = 0; i < n; i++) dados[i] = Math.random() * 2 - 1;
      this.ruido = buf;
    }
    if(this.ctx.state === "suspended") this.ctx.resume();
  },

  tom(hz, dur, op){
    op = op || {};
    if(!this.ligado || !this.ctx) return;
    const t = this.ctx.currentTime + (op.em || 0);
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = op.tipo || "sine";
    osc.frequency.setValueAtTime(hz, t);
    if(op.ate) osc.frequency.exponentialRampToValueAtTime(op.ate, t + dur);
    const vol = op.vol || 0.15;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.014);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(g); g.connect(this.ctx.destination);
    osc.start(t); osc.stop(t + dur + 0.04);
  },

  chiado(dur, op){
    op = op || {};
    if(!this.ligado || !this.ctx || !this.ruido) return;
    const t = this.ctx.currentTime + (op.em || 0);
    const src = this.ctx.createBufferSource(); src.buffer = this.ruido;
    const f = this.ctx.createBiquadFilter();
    f.type = "bandpass"; f.frequency.value = op.corte || 1500; f.Q.value = 1.2;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(op.vol || 0.11, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f); f.connect(g); g.connect(this.ctx.destination);
    src.start(t); src.stop(t + dur + 0.03);
  },

  /* --- efeitos comuns a todos os jogos --- */
  toque(){       this.tom(520, 0.07, {tipo:"triangle", vol:0.10}); },
  passo(i){      this.tom(430 + ((i||0) % 6) * 26, 0.085, {tipo:"triangle", vol:0.10}); },
  acerto(){      this.tom(659, 0.13, {vol:0.15});
                 this.tom(988, 0.24, {vol:0.14, em:0.11}); },
  erro(){        this.tom(311, 0.17, {tipo:"triangle", vol:0.14});
                 this.tom(233, 0.30, {tipo:"triangle", vol:0.13, em:0.13}); },
  marcar(){      this.chiado(0.06, {corte:2600, vol:0.09});
                 this.tom(620, 0.14, {tipo:"triangle", vol:0.13, ate:880}); },
  avanco(){      [523,659,784,1047].forEach((f,i) => this.tom(f, 0.17, {vol:0.14, em:i*0.075})); },
  recuo(){       [784,659,523,392].forEach((f,i) => this.tom(f, 0.17, {tipo:"triangle", vol:0.14, em:i*0.075})); },
  pausa(){       this.tom(150, 0.42, {tipo:"triangle", vol:0.20, ate:70});
                 this.chiado(0.20, {corte:320, vol:0.13}); },
  comeu(){       this.tom(880, 0.22, {tipo:"sawtooth", vol:0.12, ate:180});
                 this.chiado(0.16, {corte:2400, vol:0.12, em:0.04}); },
  chegou(){      [784,1047,1319].forEach((f,i) => this.tom(f, 0.26, {vol:0.15, em:i*0.09})); },
  empate(){      this.tom(392, 0.30, {tipo:"triangle", vol:0.13});
                 this.tom(392, 0.34, {tipo:"triangle", vol:0.12, em:0.22}); },
  chacoalhar(){  for(let i = 0; i < 7; i++)
                   this.chiado(0.05, {em:i*0.062, corte:900 + Math.random()*1600, vol:0.09}); },
  dadoParou(){   this.chiado(0.09, {corte:700, vol:0.15});
                 this.tom(180, 0.13, {tipo:"triangle", vol:0.13}); },
  vitoria(){
    [[523,0],[659,0.14],[784,0.28],[1047,0.42],[784,0.62],[1047,0.74]].forEach(([f,t]) => {
      this.tom(f, 0.42, {vol:0.17, em:t});
      this.tom(f*2, 0.42, {vol:0.05, em:t});
    });
  }
};

/* ---------------------------------------------------------
   UI — cabeçalho, tema e as duas cortinas
   --------------------------------------------------------- */
const UI = {
  regrasHtml:"",

  iniciar(op){
    document.documentElement.setAttribute("data-tema","escuro");
    document.body.dataset.tema = "escuro";
    this.regrasHtml = op.regras || "";

    const cab = document.querySelector("header") || document.body.insertBefore(
      document.createElement("header"), document.body.firstChild);

    cab.innerHTML =
      (op.voltar ? '<a class="voltar" href="' + op.voltar + '" aria-label="Voltar à Arena">‹</a>' : '') +
      '<h1>' + op.titulo + '</h1>' +
      '<span class="versao">v' + op.versao + '</span>' +
      (op.regras ? '<button class="icone-btn" id="btnRegras" aria-label="Ver as regras">?</button>' : '') +
      '<button class="icone-btn" id="btnSom" aria-pressed="true" aria-label="Desligar o som">\uD83D\uDD0A</button>' +
      '<button class="icone-btn" id="btnTema" aria-label="Alternar tema claro e escuro">\u2600\uFE0F</button>';

    document.body.insertAdjacentHTML("beforeend",
      '<div class="cortina" id="cortinaPergunta">' +
        '<div class="cartao" role="dialog" aria-modal="true" aria-labelledby="enunciado">' +
          '<p class="de-quem" id="perguntaDeQuem"></p>' +
          '<p class="nivel" id="perguntaNivel"></p>' +
          '<p class="enunciado" id="enunciado"></p>' +
          '<div id="alternativas"></div>' +
          '<div class="resultado" id="resultado" style="display:none">' +
            '<p id="resultadoTexto"></p>' +
            '<p class="ref" id="resultadoRef"></p>' +
            '<button class="principal" id="btnContinuar" style="margin-top:12px">Continuar</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="cortina" id="cortinaRegras">' +
        '<div class="cartao regras" role="dialog" aria-modal="true">' +
          this.regrasHtml +
          '<button class="principal" id="btnFecharRegras">Voltar</button>' +
        '</div>' +
      '</div>');

    $("#btnTema").addEventListener("click", () => this.alternarTema());
    $("#btnSom").addEventListener("click", () => this.alternarSom());
    if(op.regras){
      $("#btnRegras").addEventListener("click", () => {
        $("#cortinaRegras").classList.add("ativa");
        $("#btnFecharRegras").focus();
      });
    }
    $("#btnFecharRegras").addEventListener("click", () => $("#cortinaRegras").classList.remove("ativa"));
    $("#cortinaRegras").addEventListener("click", e => {
      if(e.target === $("#cortinaRegras")) $("#cortinaRegras").classList.remove("ativa");
    });
    document.addEventListener("keydown", e => {
      if(e.key === "Escape") $("#cortinaRegras").classList.remove("ativa");
    });

    // o navegador só libera o áudio depois do primeiro toque
    ["pointerdown","keydown"].forEach(ev =>
      document.addEventListener(ev, () => Som.acordar(), {once:true}));
  },

  alternarTema(){
    const novo = document.body.dataset.tema === "escuro" ? "claro" : "escuro";
    document.body.dataset.tema = novo;
    document.documentElement.setAttribute("data-tema", novo);
    const b = $("#btnTema");
    b.textContent = novo === "escuro" ? "\u2600\uFE0F" : "\uD83C\uDF19";
    b.setAttribute("aria-label", novo === "escuro" ? "Mudar para tema claro" : "Mudar para tema escuro");
  },

  alternarSom(){
    Som.ligado = !Som.ligado;
    const b = $("#btnSom");
    b.textContent = Som.ligado ? "\uD83D\uDD0A" : "\uD83D\uDD07";
    b.setAttribute("aria-pressed", String(Som.ligado));
    b.setAttribute("aria-label", Som.ligado ? "Desligar o som" : "Ligar o som");
    if(Som.ligado){ Som.acordar(); Som.toque(); }
  },

  trocarTela(id){
    $$(".tela").forEach(t => t.classList.toggle("ativa", t.id === id));
    window.scrollTo(0,0);
  },

  escolhas(container, valores, atual, aoEscolher){
    container.innerHTML = "";
    valores.forEach(v => {
      const b = document.createElement("button");
      b.className = "escolha";
      b.textContent = (typeof v === "object") ? v.rotulo : v;
      b.setAttribute("aria-pressed", String((typeof v === "object" ? v.valor : v) === atual));
      b.addEventListener("click", () => aoEscolher(typeof v === "object" ? v.valor : v));
      container.appendChild(b);
    });
  }
};

/* ---------------------------------------------------------
   PERGUNTA — a cortina que todo jogo do kit usa
   --------------------------------------------------------- */
const Pergunta = {
  /* op: {para, nivel, aoResponder(acertou, questao)} */
  abrir(op){
    const q = Banco.sortear(op.nivel);

    $("#perguntaDeQuem").textContent = op.para ? "Pergunta para " + op.para : "";
    $("#perguntaNivel").textContent = NOME_NIVEL[op.nivel];
    $("#enunciado").textContent = q.p;
    $("#resultado").style.display = "none";

    const cx = $("#alternativas");
    cx.innerHTML = "";
    q.o.forEach((texto, i) => {
      const b = document.createElement("button");
      b.className = "alternativa";
      b.textContent = texto;
      b.addEventListener("click", () => this.responder(i, q, cx, op));
      cx.appendChild(b);
    });

    $("#cortinaPergunta").classList.add("ativa");
    const primeiro = cx.querySelector("button");
    if(primeiro) primeiro.focus();
  },

  responder(escolha, q, cx, op){
    const acertou = escolha === q.c;
    if(acertou) Som.acerto(); else Som.erro();

    Array.from(cx.children).forEach((b, i) => {
      b.disabled = true;
      if(i === q.c) b.classList.add("certa");
      else if(i === escolha) b.classList.add("errada");
    });

    $("#resultadoTexto").textContent = op.texto ? op.texto(acertou) :
      (acertou ? "Resposta certa." : "Resposta errada.");
    $("#resultadoRef").textContent = q.r;
    $("#resultado").style.display = "block";
    $("#btnContinuar").focus();
    $("#btnContinuar").onclick = () => {
      $("#cortinaPergunta").classList.remove("ativa");
      op.aoResponder(acertou, q);
    };
  }
};
