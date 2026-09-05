/* =========================================================
   JOGOS DA PALAVRA — banco de perguntas compartilhado
   90 perguntas: 30 fáceis, 30 médias, 30 difíceis.
   Formato:  n = nível (1 fácil, 2 médio, 3 difícil)
             p = pergunta
             o = alternativas
             c = posição da alternativa certa, contando do zero
             r = referência bíblica
   Para acrescentar, basta copiar uma linha e trocar o conteúdo.
   perguntas.js v1.0.0
   ========================================================= */
"use strict";

const PERGUNTAS = [
/* ---------- NÍVEL 1 — FÁCIL ---------- */
{n:1,p:"Quem construiu a arca?",o:["Abraão","Noé","Moisés","Jó"],c:1,r:"Gênesis 6:14"},
{n:1,p:"Por quantos dias e noites choveu no dilúvio?",o:["7","12","40","70"],c:2,r:"Gênesis 7:12"},
{n:1,p:"Qual é o primeiro livro da Bíblia?",o:["Êxodo","Gênesis","Salmos","João"],c:1,r:"Gênesis 1:1"},
{n:1,p:"Qual é o último livro da Bíblia?",o:["Judas","Apocalipse","Malaquias","Hebreus"],c:1,r:"Apocalipse 1:1"},
{n:1,p:"Quem foi lançado na cova dos leões?",o:["Daniel","Jeremias","Elias","Josué"],c:0,r:"Daniel 6:16"},
{n:1,p:"Em que cidade Jesus nasceu?",o:["Nazaré","Jerusalém","Belém","Cafarnaum"],c:2,r:"Mateus 2:1"},
{n:1,p:"Quem batizou Jesus no rio Jordão?",o:["Pedro","João Batista","André","Simeão"],c:1,r:"Mateus 3:13"},
{n:1,p:"Quantos discípulos Jesus escolheu?",o:["7","10","12","70"],c:2,r:"Marcos 3:14"},
{n:1,p:"Qual discípulo negou Jesus três vezes?",o:["Tomé","Pedro","Tiago","Filipe"],c:1,r:"Mateus 26:75"},
{n:1,p:"Qual mar se abriu para Israel na saída do Egito?",o:["Mar Morto","Mar da Galileia","Mar Vermelho","Mar Mediterrâneo"],c:2,r:"Êxodo 14:21"},
{n:1,p:"Quantos mandamentos Deus deu a Moisés no Sinai?",o:["7","10","12","40"],c:1,r:"Êxodo 20:1-17"},
{n:1,p:"Quem matou o gigante Golias?",o:["Saul","Jônatas","Davi","Sansão"],c:2,r:"1 Samuel 17:50"},
{n:1,p:"Qual era a profissão de Pedro antes de seguir Jesus?",o:["Carpinteiro","Pescador","Publicano","Tecelão"],c:1,r:"Mateus 4:18"},
{n:1,p:"Quem foi engolido por um grande peixe?",o:["Jonas","Oseias","Amós","Naum"],c:0,r:"Jonas 1:17"},
{n:1,p:"Qual era o nome da mãe de Jesus?",o:["Marta","Isabel","Maria","Ana"],c:2,r:"Lucas 1:27"},
{n:1,p:"Em quantos dias Deus fez a obra da criação, antes de descansar?",o:["3","6","7","12"],c:1,r:"Gênesis 1:31 e 2:2"},
{n:1,p:"Quem foi o primeiro homem?",o:["Caim","Enoque","Adão","Sete"],c:2,r:"Gênesis 2:7"},
{n:1,p:"Qual foi o primeiro milagre de Jesus, em Caná?",o:["Curou um cego","Transformou água em vinho","Andou sobre o mar","Multiplicou os pães"],c:1,r:"João 2:11"},
{n:1,p:"Quantos livros tem a Bíblia?",o:["39","27","66","72"],c:2,r:"39 no Antigo e 27 no Novo Testamento"},
{n:1,p:"Por quantas moedas de prata Judas traiu Jesus?",o:["10","20","30","50"],c:2,r:"Mateus 26:15"},
{n:1,p:"Qual era o nome do jardim onde Adão e Eva viveram?",o:["Getsêmani","Éden","Sarom","Carmelo"],c:1,r:"Gênesis 2:8"},
{n:1,p:"Quem sucedeu Moisés na liderança de Israel?",o:["Arão","Calebe","Josué","Gideão"],c:2,r:"Josué 1:1-2"},
{n:1,p:"De qual cidade as muralhas caíram depois que Israel a rodeou?",o:["Ai","Jericó","Hebrom","Siquém"],c:1,r:"Josué 6:20"},
{n:1,p:"Quem era o irmão de Moisés?",o:["Arão","Jetro","Corá","Nadabe"],c:0,r:"Êxodo 4:14"},
{n:1,p:"Qual foi o sinal da aliança de Deus com Noé?",o:["Uma estrela","O arco-íris","Uma pomba","Uma coluna de fogo"],c:1,r:"Gênesis 9:13"},
{n:1,p:"Qual foi o filho prometido a Abraão e Sara?",o:["Ismael","Jacó","Isaque","Esaú"],c:2,r:"Gênesis 21:3"},
{n:1,p:"Qual discípulo duvidou da ressurreição até ver as marcas?",o:["Tomé","Bartolomeu","Tadeu","André"],c:0,r:"João 20:25"},
{n:1,p:"Qual rei de Israel ficou conhecido por sua sabedoria?",o:["Davi","Salomão","Ezequias","Josias"],c:1,r:"1 Reis 3:12"},
{n:1,p:"Onde Jesus foi crucificado?",o:["Getsêmani","Betânia","Gólgota","Monte das Oliveiras"],c:2,r:"João 19:17"},
{n:1,p:"Quem era o pai de Salomão?",o:["Saul","Davi","Jessé","Absalão"],c:1,r:"2 Samuel 12:24"},

/* ---------- NÍVEL 2 — MÉDIO ---------- */
{n:2,p:"Quem era o sogro de Moisés?",o:["Labão","Jetro","Naasom","Hur"],c:1,r:"Êxodo 3:1"},
{n:2,p:"Quantos anos Israel peregrinou no deserto?",o:["7","12","40","70"],c:2,r:"Números 14:33"},
{n:2,p:"Qual profeta foi levado ao céu num carro de fogo?",o:["Eliseu","Elias","Enoque","Isaías"],c:1,r:"2 Reis 2:11"},
{n:2,p:"Quem acompanhou Paulo na primeira viagem missionária?",o:["Silas","Timóteo","Barnabé","Tito"],c:2,r:"Atos 13:2-3"},
{n:2,p:"Qual nome os babilônios deram a Daniel?",o:["Beltessazar","Sadraque","Abede-Nego","Mesaque"],c:0,r:"Daniel 1:7"},
{n:2,p:"Qual rainha arriscou a vida para salvar seu povo na Pérsia?",o:["Vasti","Ester","Mical","Betsabá"],c:1,r:"Ester 4:16"},
{n:2,p:"Quem escreveu o livro de Atos dos Apóstolos?",o:["Pedro","Paulo","Lucas","Marcos"],c:2,r:"Atos 1:1; Lucas 1:3"},
{n:2,p:"Quantos anos Jacó serviu no total para casar com Raquel?",o:["7","10","14","20"],c:2,r:"Gênesis 29:20-30"},
{n:2,p:"Qual era a profissão de Lucas?",o:["Médico","Advogado","Fabricante de tendas","Escriba"],c:0,r:"Colossenses 4:14"},
{n:2,p:"Quem foi o primeiro mártir cristão?",o:["Tiago","Estêvão","Barnabé","Filipe"],c:1,r:"Atos 7:59-60"},
{n:2,p:"Qual rei construiu o templo de Jerusalém?",o:["Davi","Salomão","Josias","Zorobabel"],c:1,r:"1 Reis 6:1"},
{n:2,p:"Quem era o pai de João Batista?",o:["Zacarias","Simeão","Eli","Ananias"],c:0,r:"Lucas 1:13"},
{n:2,p:"Em que monte Elias desafiou os profetas de Baal?",o:["Sinai","Nebo","Carmelo","Hermom"],c:2,r:"1 Reis 18:19-20"},
{n:2,p:"Em qual jardim Jesus orou antes de ser preso?",o:["Éden","Getsêmani","Betânia","Siloé"],c:1,r:"Mateus 26:36"},
{n:2,p:"Quem foi escolhido para substituir Judas entre os doze?",o:["Matias","Barsabás","Estêvão","Paulo"],c:0,r:"Atos 1:26"},
{n:2,p:"Qual profeta teve a visão do vale de ossos secos?",o:["Jeremias","Ezequiel","Daniel","Zacarias"],c:1,r:"Ezequiel 37:1-10"},
{n:2,p:"Qual governador romano julgou Jesus?",o:["Herodes","Félix","Pôncio Pilatos","Festo"],c:2,r:"Mateus 27:2"},
{n:2,p:"Qual era o nome do pai de Davi?",o:["Obede","Jessé","Boaz","Ner"],c:1,r:"1 Samuel 16:1"},
{n:2,p:"Qual mulher foi juíza em Israel?",o:["Ana","Débora","Rute","Hulda"],c:1,r:"Juízes 4:4"},
{n:2,p:"Quantos anos viveu Matusalém?",o:["777","895","930","969"],c:3,r:"Gênesis 5:27"},
{n:2,p:"Quem foi o primeiro rei de Israel?",o:["Davi","Saul","Samuel","Roboão"],c:1,r:"1 Samuel 10:1"},
{n:2,p:"Como Paulo se chamava antes de sua conversão?",o:["Silas","Saulo","Simeão","Sóstenes"],c:1,r:"Atos 13:9"},
{n:2,p:"Em que ilha João recebeu a revelação do Apocalipse?",o:["Creta","Chipre","Patmos","Malta"],c:2,r:"Apocalipse 1:9"},
{n:2,p:"Quem foi obrigado a carregar a cruz de Jesus?",o:["José de Arimateia","Simão Cireneu","Nicodemos","Barrabás"],c:1,r:"Marcos 15:21"},
{n:2,p:"Qual era o nome da irmã de Moisés?",o:["Miriã","Zípora","Débora","Jocabede"],c:0,r:"Êxodo 15:20"},
{n:2,p:"Quantas pragas caíram sobre o Egito?",o:["7","10","12","40"],c:1,r:"Êxodo 7—12"},
{n:2,p:"Quem subiu numa árvore para conseguir ver Jesus?",o:["Nicodemos","Zaqueu","Bartimeu","Levi"],c:1,r:"Lucas 19:4"},
{n:2,p:"Qual profeta recebeu ordem de se casar com Gômer?",o:["Amós","Oseias","Miqueias","Joel"],c:1,r:"Oseias 1:3"},
{n:2,p:"Qual discípulo é chamado 'aquele a quem Jesus amava'?",o:["Pedro","João","Tiago","André"],c:1,r:"João 13:23"},
{n:2,p:"Qual era o nome do irmão mais velho de Jacó?",o:["Esaú","Labão","Levi","Judá"],c:0,r:"Gênesis 25:25"},

/* ---------- NÍVEL 3 — DIFÍCIL ---------- */
{n:3,p:"A quantas igrejas João escreve em Apocalipse 2 e 3?",o:["Quatro","Cinco","Sete","Doze"],c:2,r:"Apocalipse 1:11"},
{n:3,p:"Em qual rio Naamã mergulhou sete vezes e foi curado?",o:["Eufrates","Jordão","Nilo","Quebar"],c:1,r:"2 Reis 5:14"},
{n:3,p:"Qual escriba leu a Lei ao povo depois do exílio?",o:["Neemias","Esdras","Zorobabel","Ageu"],c:1,r:"Neemias 8:2-3"},
{n:3,p:"Qual rei de Judá recebeu mais quinze anos de vida?",o:["Josias","Ezequias","Manassés","Uzias"],c:1,r:"2 Reis 20:6"},
{n:3,p:"Quem era o pai do profeta Samuel?",o:["Eli","Elcana","Jeroboão","Abiatar"],c:1,r:"1 Samuel 1:1-20"},
{n:3,p:"Quais os nomes babilônicos dos três amigos de Daniel?",o:["Sadraque, Mesaque e Abede-Nego","Ananias, Misael e Azarias","Gogue, Magogue e Beltessazar","Hananias, Josadaque e Jeoiaquim"],c:0,r:"Daniel 1:7"},
{n:3,p:"Qual apóstolo era cobrador de impostos antes do chamado?",o:["Mateus","Tomé","Simão","Judas"],c:0,r:"Mateus 9:9"},
{n:3,p:"Quantos anos duraria o cativeiro babilônico, segundo Jeremias?",o:["40","50","70","400"],c:2,r:"Jeremias 25:11"},
{n:3,p:"Qual profeta menor tem um único capítulo?",o:["Ageu","Obadias","Naum","Sofonias"],c:1,r:"Obadias 1"},
{n:3,p:"Qual era a cidade natal de Abraão?",o:["Harã","Ur dos Caldeus","Damasco","Siquém"],c:1,r:"Gênesis 11:31"},
{n:3,p:"A quem o título do Salmo 90 atribui a autoria?",o:["Davi","Moisés","Asafe","Salomão"],c:1,r:"Salmo 90, título"},
{n:3,p:"Qual vendedora de púrpura se converteu em Filipos?",o:["Priscila","Lídia","Dorcas","Febe"],c:1,r:"Atos 16:14"},
{n:3,p:"Qual foi a décima e última praga do Egito?",o:["Trevas","Granizo","Morte dos primogênitos","Gafanhotos"],c:2,r:"Êxodo 12:29"},
{n:3,p:"Quem era o sumo sacerdote no julgamento de Jesus?",o:["Anás","Caifás","Gamaliel","Ananias"],c:1,r:"Mateus 26:57"},
{n:3,p:"Qual profeta alegou ser jovem demais para falar?",o:["Isaías","Jeremias","Ezequiel","Amós"],c:1,r:"Jeremias 1:6"},
{n:3,p:"Quais eram os nomes das irmãs de Lázaro?",o:["Marta e Maria","Ana e Joana","Salomé e Maria","Rute e Noemi"],c:0,r:"João 11:1-2"},
{n:3,p:"Qual rei viu a escrita misteriosa na parede do palácio?",o:["Nabucodonosor","Belsazar","Dario","Ciro"],c:1,r:"Daniel 5:5"},
{n:3,p:"Qual juiz fez um voto precipitado envolvendo sua filha?",o:["Gideão","Jefté","Sansão","Abimeleque"],c:1,r:"Juízes 11:30-31"},
{n:3,p:"Qual era o nome da serva egípcia, mãe de Ismael?",o:["Quetura","Agar","Zilpa","Bila"],c:1,r:"Gênesis 16:15"},
{n:3,p:"Qual rei mandou matar os meninos de Belém?",o:["Herodes","Arquelau","Agripa","Pilatos"],c:0,r:"Mateus 2:16"},
{n:3,p:"Qual é a mais curta das cartas de Paulo?",o:["Tito","Filemom","2 Tessalonicenses","Judas"],c:1,r:"Filemom, um só capítulo"},
{n:3,p:"Quem Pedro ressuscitou na cidade de Jope?",o:["Eutico","Dorcas (Tabita)","Enéias","Rode"],c:1,r:"Atos 9:36-40"},
{n:3,p:"Quantos anos Davi reinou sobre Israel?",o:["7","20","33","40"],c:3,r:"2 Samuel 5:4"},
{n:3,p:"Qual centurião de Cesareia foi batizado por Pedro?",o:["Cornélio","Júlio","Cláudio Lísias","Longino"],c:0,r:"Atos 10:1, 48"},
{n:3,p:"Como ficou conhecido o campo comprado com as trinta moedas?",o:["Campo de Boaz","Campo de Sangue","Campo do Semeador","Campo de Efrata"],c:1,r:"Mateus 27:8"},
{n:3,p:"Em que cidade Elias hospedou-se com uma viúva?",o:["Sarepta","Suném","Betel","Gilgal"],c:0,r:"1 Reis 17:9"},
{n:3,p:"Quantos filhos homens teve Jacó?",o:["7","10","12","14"],c:2,r:"Gênesis 35:22"},
{n:3,p:"Qual era o nome da mãe de João Batista?",o:["Ana","Isabel","Joana","Maria"],c:1,r:"Lucas 1:13"},
{n:3,p:"Em que monte Moisés recebeu as tábuas da Lei?",o:["Nebo","Sinai","Moriá","Sião"],c:1,r:"Êxodo 19:20"},
{n:3,p:"Quem foi o primeiro filho de Adão e Eva?",o:["Abel","Sete","Caim","Enos"],c:2,r:"Gênesis 4:1"}
];
const NOME_NIVEL = {1:"Nível fácil", 2:"Nível médio", 3:"Nível difícil"};
const ACERTO_MAQUINA = {1:0.50, 2:0.72, 3:0.88};

/* Sorteia sem repetir. Quando o nível esgota, ele recomeça sozinho. */
const Banco = {
  usadas: [],
  sortear(nivel){
    let pool = PERGUNTAS.map((q,i) => ({q,i})).filter(x => x.q.n === nivel && !this.usadas.includes(x.i));
    if(pool.length === 0){
      this.usadas = this.usadas.filter(i => PERGUNTAS[i].n !== nivel);
      pool = PERGUNTAS.map((q,i) => ({q,i})).filter(x => x.q.n === nivel);
    }
    const escolhida = pool[Math.floor(Math.random() * pool.length)];
    this.usadas.push(escolhida.i);
    return escolhida.q;
  },
  zerar(){ this.usadas = []; },
  quantas(nivel){ return PERGUNTAS.filter(q => q.n === nivel).length; }
};
