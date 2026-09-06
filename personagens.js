/* =========================================================
   ARENA DA PALAVRA — fichas de personagens
   Usado pelo jogo "Quem Sou Eu".

   Formato:  n = nome           g = grupo (define a lista de suspeitos)
             d = dificuldade (1 fácil, 2 médio, 3 difícil)
             p = as cinco pistas, da mais difícil para a mais fácil
             r = referência bíblica

   Para acrescentar um personagem, copie um bloco e troque o conteúdo.
   A primeira pista deve ser a mais obscura; a quinta, quase entregar.
   personagens.js v1.0.0
   ========================================================= */
"use strict";

const GRUPOS = {
  patriarcas: "Gênesis",
  exodo:      "Êxodo e deserto",
  juizes:     "Juízes e início da monarquia",
  reis:       "Reis",
  profetas:   "Profetas",
  mulheres:   "Mulheres da Bíblia",
  evangelhos: "Evangelhos",
  atos:       "Atos e as cartas"
};

/* Nomes que entram na lista de suspeitos de cada grupo.
   Nem todos têm ficha: servem para dar o que descartar. */
const ELENCO = {
  patriarcas: ["Adão","Caim","Abel","Sete","Enoque","Matusalém","Noé","Sem","Terá","Abraão","Ló","Ismael","Isaque","Esaú","Jacó","Labão","Judá","José","Benjamim","Rúben","Levi"],
  exodo:      ["Moisés","Arão","Jetro","Coré","Josué","Calebe","Balaão","Faraó","Nadabe","Hur","Bezalel","Eleazar","Fineias","Anrão","Datã"],
  juizes:     ["Otniel","Eúde","Sangar","Baraque","Gideão","Abimeleque","Jefté","Sansão","Eli","Samuel","Boaz","Manoá","Jônatas","Abner","Isbosete"],
  reis:       ["Saul","Davi","Salomão","Roboão","Jeroboão","Acabe","Jeú","Onri","Josafá","Uzias","Ezequias","Manassés","Josias","Zedequias","Joás","Nabucodonosor","Belsazar","Dario","Ciro","Assuero"],
  profetas:   ["Natã","Elias","Eliseu","Isaías","Jeremias","Ezequiel","Daniel","Oseias","Joel","Amós","Obadias","Jonas","Miqueias","Naum","Habacuque","Sofonias","Ageu","Zacarias","Malaquias"],
  mulheres:   ["Eva","Sara","Agar","Rebeca","Raquel","Lia","Miriã","Raabe","Débora","Jael","Dalila","Noemi","Rute","Ana","Abigail","Betsabé","Jezabel","Ester","Maria","Marta","Isabel","Lídia","Priscila","Dorcas"],
  evangelhos: ["Pedro","André","Tiago","João","Filipe","Bartolomeu","Tomé","Mateus","Simão","Judas Iscariote","João Batista","Nicodemos","Zaqueu","Lázaro","Bartimeu","Pilatos","Herodes","Caifás","Barrabás","Simão Cireneu","José de Arimateia"],
  atos:       ["Paulo","Barnabé","Silas","Timóteo","Tito","Estêvão","Filipe","Cornélio","Ananias","Apolo","Lucas","Marcos","Onésimo","Filemom","Gamaliel","Áquila","Matias","Eutico","Lídia","Dorcas","Sérgio Paulo"]
};

const PERSONAGENS = [

/* ---------- GÊNESIS ---------- */
{n:"Noé", g:"patriarcas", d:1, r:"Gênesis 6—9", p:[
  "Deus me achou justo entre os homens da minha geração.",
  "Tive três filhos, e deles se espalharam todos os povos da terra.",
  "Passei anos construindo uma coisa enorme longe do mar, e virei motivo de zombaria.",
  "Levei comigo animais de toda espécie, dois a dois.",
  "Depois do dilúvio, Deus pôs um arco nas nuvens como sinal da aliança comigo."
]},
{n:"Abraão", g:"patriarcas", d:1, r:"Gênesis 12—22", p:[
  "Saí da minha terra sem saber para onde ia, só porque Deus mandou.",
  "Meu sobrinho escolheu as terras melhores e eu fiquei com o que sobrou.",
  "Deus me prometeu descendência tão numerosa quanto as estrelas do céu.",
  "Deus me pediu meu filho em sacrifício, e um carneiro apareceu preso pelos chifres.",
  "Fui chamado pai da fé e pai de muitas nações."
]},
{n:"Isaque", g:"patriarcas", d:2, r:"Gênesis 21—27", p:[
  "Nasci quando meu pai já passava dos cem anos.",
  "Subi um monte carregando a lenha do meu próprio sacrifício.",
  "O servo do meu pai trouxe minha esposa de uma terra distante.",
  "Fui pai de gêmeos que já brigavam dentro do ventre.",
  "Já cego, abençoei o filho errado por causa de um prato de comida e umas peles de cabrito."
]},
{n:"Jacó", g:"patriarcas", d:2, r:"Gênesis 25—35", p:[
  "Nasci segurando o calcanhar do meu irmão.",
  "Sonhei com uma escada que ligava a terra ao céu.",
  "Servi catorze anos para casar com a mulher que eu amava.",
  "Lutei a noite inteira com um homem e saí manco daquela luta.",
  "Deus mudou meu nome, e dos meus doze filhos nasceram as tribos de Israel."
]},
{n:"José", g:"patriarcas", d:1, r:"Gênesis 37—50", p:[
  "Meu pai me deu uma roupa que meus irmãos passaram a odiar.",
  "Fui vendido por vinte moedas de prata pelos meus próprios irmãos.",
  "Fui preso injustamente por causa da mulher do meu senhor.",
  "Interpretei o sonho das sete vacas gordas e das sete magras.",
  "Governei o Egito e salvei da fome a família que me vendera."
]},
{n:"Ló", g:"patriarcas", d:2, r:"Gênesis 13—19", p:[
  "Escolhi morar perto de uma cidade próspera, e me arrependi.",
  "Meu tio precisou reunir homens para me resgatar quando fui levado cativo.",
  "Recebi dois viajantes em casa e a cidade inteira veio à minha porta.",
  "Fugi ao amanhecer enquanto fogo caía do céu.",
  "Minha mulher olhou para trás e virou estátua de sal."
]},
{n:"Enoque", g:"patriarcas", d:3, r:"Gênesis 5:21-24", p:[
  "Vivi trezentos e sessenta e cinco anos, pouco para a minha época.",
  "Fui pai do homem que mais viveu na Bíblia.",
  "Andei com Deus durante trezentos anos.",
  "A Bíblia não registra a minha morte.",
  "Deus me tomou, e eu não passei pela morte."
]},

/* ---------- ÊXODO E DESERTO ---------- */
{n:"Moisés", g:"exodo", d:1, r:"Êxodo", p:[
  "Fui salvo das águas quando bebê, dentro de um cesto.",
  "Matei um homem e fugi para o deserto, onde virei pastor por quarenta anos.",
  "Falei com Deus num arbusto que ardia sem se queimar.",
  "Estendi a mão sobre o mar e ele se abriu.",
  "Recebi as tábuas da Lei no monte Sinai."
]},
{n:"Arão", g:"exodo", d:2, r:"Êxodo e Levítico", p:[
  "Fui a boca do meu irmão diante do rei do Egito.",
  "Minha vara virou serpente e engoliu as varas dos magos.",
  "Cedi à pressão do povo e fiz uma imagem de ouro no deserto.",
  "Dois filhos meus morreram por oferecerem fogo estranho diante do Senhor.",
  "Fui o primeiro sumo sacerdote de Israel."
]},
{n:"Josué", g:"exodo", d:2, r:"Josué", p:[
  "Servi desde a juventude ao maior líder que Israel teve.",
  "Fui um dos dois espias que voltaram confiando na promessa.",
  "Assumi a liderança do povo depois da morte do meu mestre.",
  "Rodeei uma cidade por sete dias até as muralhas caírem.",
  "Disse ao povo: eu e a minha casa serviremos ao Senhor."
]},
{n:"Calebe", g:"exodo", d:3, r:"Números 13—14; Josué 14", p:[
  "Tinha quarenta anos quando fui enviado a espiar a terra prometida.",
  "Dez companheiros meus desanimaram o povo; eu e mais um não.",
  "Disse que subíssemos e a tomássemos, porque certamente prevaleceríamos.",
  "Aos oitenta e cinco anos ainda pedi um monte para conquistar.",
  "Recebi Hebrom por herança, porque segui ao Senhor de todo o coração."
]},
{n:"Jetro", g:"exodo", d:3, r:"Êxodo 18", p:[
  "Era sacerdote numa terra fora de Israel.",
  "Dei uma das minhas filhas em casamento a um fugitivo do Egito.",
  "Meu genro pastoreou meus rebanhos por quarenta anos.",
  "Vi meu genro julgando o povo sozinho, do amanhecer ao anoitecer.",
  "Aconselhei-o a repartir o trabalho entre chefes de mil, de cem e de dez."
]},
{n:"Balaão", g:"exodo", d:3, r:"Números 22—24", p:[
  "Um rei me ofereceu pagamento para amaldiçoar um povo inteiro.",
  "Um anjo com a espada desembainhada me esperava no caminho, e eu não o vi.",
  "Minha jumenta me repreendeu com voz de gente.",
  "Toda vez que abri a boca para amaldiçoar, saiu bênção.",
  "Meu nome ficou ligado a quem ama o prêmio da injustiça."
]},
{n:"Coré", g:"exodo", d:3, r:"Números 16", p:[
  "Eu era levita, e isso não me bastou.",
  "Ajuntei duzentos e cinquenta homens de renome contra a liderança.",
  "Disse que toda a congregação era santa, e perguntei por que se elevavam sobre nós.",
  "Fui desafiado a trazer incenso diante do Senhor no dia seguinte.",
  "A terra abriu a boca e engoliu a mim, à minha casa e a tudo que era meu."
]},

/* ---------- JUÍZES E INÍCIO DA MONARQUIA ---------- */
{n:"Gideão", g:"juizes", d:2, r:"Juízes 6—8", p:[
  "Estava debulhando trigo escondido no lagar, com medo dos inimigos.",
  "O anjo me chamou de valente, e eu me achava o menor da casa do meu pai.",
  "Pedi dois sinais usando um velo de lã na eira.",
  "Derrubei o altar de Baal do meu pai durante a noite.",
  "Venci os midianitas com trezentos homens, cântaros, tochas e trombetas."
]},
{n:"Sansão", g:"juizes", d:1, r:"Juízes 13—16", p:[
  "Fui nazireu desde o ventre da minha mãe.",
  "Matei um leão com as próprias mãos e depois achei mel na carcaça.",
  "Amarrei tochas em raposas para queimar as plantações dos filisteus.",
  "Matei mil homens com uma queixada de jumento.",
  "Perdi a força quando cortaram meus sete cabelos, e morri derrubando o templo."
]},
{n:"Jefté", g:"juizes", d:3, r:"Juízes 11", p:[
  "Era filho de uma mulher desprezada, e meus irmãos me expulsaram de casa.",
  "Vivi cercado de homens sem eira nem beira, até me chamarem de volta.",
  "Discuti com o rei amonita citando trezentos anos de história do meu povo.",
  "Fiz um voto precipitado antes de sair para a batalha.",
  "Quem saiu primeiro da minha casa para me receber foi minha única filha."
]},
{n:"Eúde", g:"juizes", d:3, r:"Juízes 3", p:[
  "Fui o segundo juiz que Deus levantou em Israel.",
  "Era canhoto, e isso foi decisivo no meu plano.",
  "Escondi uma espada de dois gumes na coxa direita, onde ninguém procura.",
  "Levei o tributo a um rei muito gordo e pedi para lhe falar a sós.",
  "Matei Eglom, rei de Moabe, e a terra teve oitenta anos de paz."
]},
{n:"Samuel", g:"juizes", d:1, r:"1 Samuel", p:[
  "Minha mãe me pediu a Deus em oração e depois me entregou ao santuário.",
  "Servi desde menino sob um sacerdote já velho.",
  "Ouvi uma voz de noite e três vezes pensei que fosse do meu mestre.",
  "Ungi dois reis, e o segundo era um pastor de ovelhas.",
  "Disse que obedecer é melhor do que sacrificar."
]},
{n:"Eli", g:"juizes", d:3, r:"1 Samuel 1—4", p:[
  "Fui sacerdote em Siló por quarenta anos.",
  "Confundi a oração silenciosa de uma mulher aflita com embriaguez.",
  "Criei no santuário o menino que ela me entregou.",
  "Meus filhos eram corruptos e eu não os corrigi como devia.",
  "Caí da cadeira e quebrei o pescoço ao saber que a arca fora tomada."
]},
{n:"Boaz", g:"juizes", d:2, r:"Rute", p:[
  "Era homem rico e de bem, dono de campos em Belém.",
  "Mandei meus ceifeiros deixarem cair espigas de propósito para uma estrangeira.",
  "Ela veio de noite e se deitou aos meus pés na eira.",
  "Havia um parente mais próximo do que eu, e ele abriu mão do direito.",
  "Casei com Rute, e fomos bisavós do rei Davi."
]},

/* ---------- REIS ---------- */
{n:"Saul", g:"reis", d:2, r:"1 Samuel", p:[
  "Era mais alto que todo o povo, dos ombros para cima.",
  "Saí à procura das jumentas do meu pai e acabei achando um reino.",
  "Escondi-me entre a bagagem no dia em que fui apresentado ao povo.",
  "Ofereci o sacrifício sem esperar o profeta, e perdi o reino por isso.",
  "Consultei uma médium em En-Dor na véspera da minha última batalha."
]},
{n:"Davi", g:"reis", d:1, r:"1 e 2 Samuel", p:[
  "Era o caçula, e nem me chamaram quando o profeta veio ungir um dos meus irmãos.",
  "Tocava harpa para acalmar um rei atormentado.",
  "Enfrentei um gigante com cinco pedras lisas do ribeiro.",
  "Poupei duas vezes a vida de quem me perseguia para me matar.",
  "Escrevi salmos, e caí gravemente no caso de Betsabé."
]},
{n:"Salomão", g:"reis", d:1, r:"1 Reis; Provérbios; Eclesiastes", p:[
  "Meu pai me deixou o trono e o projeto de um templo.",
  "Deus me ofereceu o que eu quisesse, e eu pedi um coração que soubesse discernir.",
  "Mandei partir uma criança ao meio para descobrir quem era a verdadeira mãe.",
  "Uma rainha veio de muito longe me provar com perguntas difíceis.",
  "Escrevi provérbios, e no fim da vida disse que tudo era vaidade."
]},
{n:"Acabe", g:"reis", d:2, r:"1 Reis 16—22", p:[
  "Fiz mais para irritar o Senhor do que todos os reis que houve antes de mim.",
  "Casei com uma princesa estrangeira que trouxe os deuses dela para Israel.",
  "Fiquei de cama emburrado porque um homem não quis me vender a vinha dele.",
  "Minha mulher armou a morte do dono da vinha e eu fui tomar posse dela.",
  "Morri em batalha disfarçado, atingido por uma flecha atirada a esmo."
]},
{n:"Ezequias", g:"reis", d:2, r:"2 Reis 18—20", p:[
  "Quebrei a serpente de bronze que Moisés fizera, porque tinham feito dela um ídolo.",
  "Um exército enorme cercou Jerusalém e mandou cartas de zombaria.",
  "Estendi aquelas cartas diante do Senhor no templo.",
  "Fiquei doente de morte e chorei virado para a parede.",
  "Recebi mais quinze anos de vida, e a sombra voltou dez degraus."
]},
{n:"Josias", g:"reis", d:2, r:"2 Reis 22—23", p:[
  "Comecei a reinar com oito anos de idade.",
  "Mandei reformar o templo, que estava em abandono.",
  "Durante a obra acharam um livro esquecido.",
  "Rasguei minhas vestes quando ouvi a leitura daquele livro.",
  "Destruí os altares dos ídolos e celebrei a maior Páscoa desde os dias dos juízes."
]},
{n:"Nabucodonosor", g:"reis", d:2, r:"Daniel 1—4", p:[
  "Levei os melhores jovens de Judá para serem criados no meu palácio.",
  "Tive um sonho e exigi que me dissessem qual era antes de interpretá-lo.",
  "Mandei lançar três homens numa fornalha, e vi um quarto andando com eles.",
  "Perdi a razão e vivi entre os animais, comendo erva como os bois.",
  "Depois de sete tempos, levantei os olhos ao céu e reconheci o Altíssimo."
]},

/* ---------- PROFETAS ---------- */
{n:"Elias", g:"profetas", d:1, r:"1 Reis 17 — 2 Reis 2", p:[
  "Anunciei ao rei que não haveria orvalho nem chuva senão pela minha palavra.",
  "Corvos me traziam pão e carne à beira de um ribeiro.",
  "A farinha e o azeite de uma viúva não acabaram enquanto durou a fome.",
  "Desafiei quatrocentos e cinquenta profetas de Baal no monte Carmelo.",
  "Subi ao céu num redemoinho e deixei minha capa para o meu sucessor."
]},
{n:"Eliseu", g:"profetas", d:2, r:"1 e 2 Reis", p:[
  "Estava arando com doze juntas de bois quando um manto caiu sobre mim.",
  "Pedi ao meu mestre uma porção dobrada do espírito que havia nele.",
  "Multipliquei o azeite de uma viúva endividada até encher todas as vasilhas.",
  "Mandei um general estrangeiro mergulhar sete vezes no Jordão.",
  "Fiz o ferro de um machado emprestado flutuar na água."
]},
{n:"Isaías", g:"profetas", d:2, r:"Isaías", p:[
  "Vi o Senhor assentado num trono alto, e a barra do seu manto enchia o templo.",
  "Disse que estava perdido, porque era homem de lábios impuros.",
  "Um serafim tocou a minha boca com uma brasa viva tirada do altar.",
  "Ouvi a pergunta 'a quem enviarei?' e respondi 'eis-me aqui, envia-me a mim'.",
  "Anunciei que a virgem conceberia e daria à luz um filho."
]},
{n:"Jeremias", g:"profetas", d:2, r:"Jeremias; Lamentações", p:[
  "Deus me conheceu antes de eu nascer e me separou desde o ventre.",
  "Aleguei que não sabia falar, porque era apenas uma criança.",
  "Comprei um campo em Anatote quando a cidade já estava cercada pelo inimigo.",
  "Fui lançado numa cisterna de lama e tiraram-me de lá com cordas e trapos.",
  "Chorei tanto pela minha cidade que o meu livro de lamentos ficou na Bíblia."
]},
{n:"Ezequiel", g:"profetas", d:3, r:"Ezequiel", p:[
  "Fui levado cativo antes mesmo da queda de Jerusalém.",
  "Vi rodas dentro de rodas, e as suas cambotas eram cheias de olhos.",
  "Comi um rolo de livro, e na minha boca ele foi doce como mel.",
  "Deitei-me sobre o lado esquerdo por trezentos e noventa dias.",
  "Profetizei a um vale cheio de ossos secos, e eles se juntaram osso com osso."
]},
{n:"Daniel", g:"profetas", d:1, r:"Daniel", p:[
  "Resolvi no meu coração não me contaminar com as iguarias do rei.",
  "Recebi outro nome na terra do meu cativeiro.",
  "Interpretei a escrita que uma mão fez na parede do palácio durante um banquete.",
  "Continuei orando três vezes ao dia com as janelas abertas, apesar do decreto.",
  "Passei a noite na cova dos leões e saí de lá sem um arranhão."
]},
{n:"Jonas", g:"profetas", d:1, r:"Jonas", p:[
  "Recebi ordem de pregar a uma cidade que eu detestava.",
  "Comprei passagem para o lado exatamente oposto ao que Deus mandou.",
  "Pedi aos marinheiros que me lançassem ao mar para acalmar a tempestade.",
  "Passei três dias e três noites no ventre de um grande peixe.",
  "Fiquei bravo quando a cidade se arrependeu e Deus a poupou."
]},

/* ---------- MULHERES ---------- */
{n:"Eva", g:"mulheres", d:1, r:"Gênesis 2—4", p:[
  "Fui formada enquanto o homem dormia.",
  "Fui chamada mãe de todos os viventes.",
  "Conversei com a serpente a respeito de uma árvore.",
  "Vi que o fruto era bom para se comer e agradável aos olhos.",
  "Meu primeiro filho matou o segundo."
]},
{n:"Sara", g:"mulheres", d:2, r:"Gênesis 12—21", p:[
  "Fui apresentada duas vezes como irmã do meu marido, por medo dos reis.",
  "Entreguei minha serva ao meu marido para que ele tivesse filhos por ela.",
  "Ri atrás da porta da tenda quando ouvi a promessa.",
  "Dei à luz aos noventa anos de idade.",
  "Chamei meu filho de riso, porque Deus me fez rir."
]},
{n:"Rute", g:"mulheres", d:1, r:"Rute", p:[
  "Era estrangeira, de um povo que Israel costumava evitar.",
  "Fiquei viúva ainda jovem, e escolhi não voltar para a casa da minha mãe.",
  "Disse à minha sogra: o teu povo é o meu povo, e o teu Deus é o meu Deus.",
  "Fui apanhar espigas atrás dos ceifeiros para nos sustentar.",
  "Casei com o dono do campo e entrei na linhagem do rei Davi."
]},
{n:"Ester", g:"mulheres", d:1, r:"Ester", p:[
  "Fui criada por um primo depois de perder meu pai e minha mãe.",
  "Escondi o meu povo e a minha parentela por ordem dele.",
  "Fui escolhida rainha de um império que ia da Índia à Etiópia.",
  "Entrei sem ser chamada diante do rei, sabendo que podia morrer por isso.",
  "Denunciei Hamã durante um banquete e salvei os judeus da matança."
]},
{n:"Raabe", g:"mulheres", d:2, r:"Josué 2 e 6; Mateus 1", p:[
  "Morava numa casa construída sobre o muro da cidade.",
  "Minha profissão não era honrada, e mesmo assim Deus me usou.",
  "Escondi dois homens debaixo de talos de linho no terraço.",
  "Pendurei um cordão de escarlata na janela como sinal.",
  "Fui poupada quando Jericó caiu, e entrei na genealogia de Jesus."
]},
{n:"Ana", g:"mulheres", d:2, r:"1 Samuel 1—2", p:[
  "Era uma das duas mulheres do meu marido, e a outra me provocava sem parar.",
  "Chorava tanto que não conseguia nem comer.",
  "Orei movendo os lábios sem voz, e o sacerdote me julgou bêbada.",
  "Prometi que, se Deus me desse um filho, eu o devolveria a Ele todos os dias da vida.",
  "Entreguei meu menino ao santuário, e ele se tornou profeta e juiz de Israel."
]},
{n:"Maria", g:"mulheres", d:1, r:"Lucas 1—2; João 19", p:[
  "Era noiva de um carpinteiro quando um anjo me visitou.",
  "Perguntei como aquilo seria possível, e ouvi falar do Espírito Santo.",
  "Visitei uma parenta minha, e a criança dela saltou no ventre ao me ouvir.",
  "Guardava todas essas coisas, meditando-as no meu coração.",
  "Estive de pé junto à cruz do meu filho."
]},

/* ---------- EVANGELHOS ---------- */
{n:"Pedro", g:"evangelhos", d:1, r:"os quatro Evangelhos", p:[
  "Foi meu irmão quem me levou até Ele.",
  "Pesquei a noite inteira sem nada, e lancei a rede outra vez só porque Ele pediu.",
  "Andei sobre a água e comecei a afundar quando olhei para o vento.",
  "Cortei a orelha de um servo no jardim, tentando defendê-lo.",
  "Neguei três vezes o meu Senhor antes de o galo cantar."
]},
{n:"João Batista", g:"evangelhos", d:1, r:"Lucas 1; Mateus 3 e 14", p:[
  "Meu pai ficou mudo até o dia em que me deram nome.",
  "Saltei de alegria dentro do ventre da minha mãe.",
  "Comia gafanhotos e mel silvestre, vestido de pelos de camelo.",
  "Disse que não era digno de desatar as correias das sandálias Dele.",
  "Perdi a cabeça por causa da dança de uma jovem numa festa de aniversário."
]},
{n:"Judas Iscariote", g:"evangelhos", d:1, r:"os quatro Evangelhos", p:[
  "Eu cuidava da bolsa do grupo, e tirava dela para mim.",
  "Reclamei do perfume derramado, dizendo que aquilo era desperdício.",
  "Combinei o preço com os principais sacerdotes.",
  "Dei um beijo para mostrar a eles quem deviam prender.",
  "Devolvi as trinta moedas no templo e depois me enforquei."
]},
{n:"Tomé", g:"evangelhos", d:2, r:"João 11, 14 e 20", p:[
  "Disse aos outros: vamos nós também, para morrermos com Ele.",
  "Perguntei como poderíamos saber o caminho, se não sabíamos para onde Ele ia.",
  "Não estava presente quando Ele apareceu aos outros no primeiro dia.",
  "Disse que só creria se pusesse o dedo na marca dos pregos.",
  "Oito dias depois exclamei: Senhor meu e Deus meu."
]},
{n:"Mateus", g:"evangelhos", d:2, r:"Mateus 9", p:[
  "Meu ofício me fazia odiado pelo meu próprio povo.",
  "Estava sentado na coletoria quando ouvi apenas duas palavras: segue-me.",
  "Levantei, deixei tudo e ofereci um grande banquete na minha casa.",
  "Os fariseus reclamaram de Ele comer com gente como eu.",
  "Escrevi o evangelho que abre o Novo Testamento."
]},
{n:"Zaqueu", g:"evangelhos", d:1, r:"Lucas 19", p:[
  "Era chefe entre os cobradores de impostos, e era rico.",
  "Não conseguia enxergar por causa da multidão, porque eu era baixo.",
  "Subi numa figueira brava à beira do caminho por onde Ele ia passar.",
  "Ele olhou para cima, me chamou pelo nome e disse que ficaria na minha casa.",
  "Prometi devolver quatro vezes mais a quem eu tivesse defraudado."
]},
{n:"Pilatos", g:"evangelhos", d:2, r:"Mateus 27; João 18—19", p:[
  "Governava em nome de Roma numa província difícil de administrar.",
  "Perguntei a Ele o que era a verdade, e não esperei a resposta.",
  "Minha mulher me mandou recado por causa de um sonho que teve.",
  "Ofereci ao povo a escolha entre Ele e um preso famoso.",
  "Lavei as mãos diante da multidão, dizendo-me inocente daquele sangue."
]},

/* ---------- ATOS E AS CARTAS ---------- */
{n:"Paulo", g:"atos", d:1, r:"Atos; as epístolas", p:[
  "Guardei as roupas dos que apedrejavam um homem justo.",
  "Estudei aos pés de Gamaliel e era fariseu filho de fariseus.",
  "Uma luz do céu me cegou no caminho de Damasco.",
  "Fabricava tendas com as próprias mãos para não pesar a ninguém.",
  "Escrevi cartas às igrejas e disse ter combatido o bom combate."
]},
{n:"Estêvão", g:"atos", d:2, r:"Atos 6—7", p:[
  "Fui um dos sete escolhidos para servir às mesas.",
  "Meu rosto pareceu o rosto de um anjo diante do conselho.",
  "Fiz um discurso recontando toda a história de Israel, de Abraão em diante.",
  "Vi os céus abertos e o Filho do homem em pé à direita de Deus.",
  "Fui apedrejado, e pedi que aquele pecado não lhes fosse imputado."
]},
{n:"Barnabé", g:"atos", d:2, r:"Atos 4, 9, 13 e 15", p:[
  "Vendi um campo que era meu e pus o dinheiro aos pés dos apóstolos.",
  "O apelido que me deram significa filho da consolação.",
  "Fui eu que apresentei o antigo perseguidor aos discípulos, que tinham medo dele.",
  "Fui enviado com ele na primeira viagem missionária.",
  "Nos separamos por causa de João Marcos, e eu levei o rapaz comigo."
]},
{n:"Cornélio", g:"atos", d:2, r:"Atos 10", p:[
  "Era oficial do exército de Roma, com cem homens sob o meu comando.",
  "Dava muitas esmolas ao povo e orava continuamente.",
  "Um anjo me apareceu por volta das três da tarde e mandou buscar um homem em Jope.",
  "Enquanto ele ainda falava, o Espírito Santo caiu sobre todos os presentes.",
  "Fui o primeiro gentio batizado, e quem me batizou foi Pedro."
]},
{n:"Lídia", g:"atos", d:2, r:"Atos 16", p:[
  "Era da cidade de Tiatira e vendia tecido de púrpura.",
  "Estava à beira de um rio, num lugar de oração, num sábado.",
  "O Senhor me abriu o coração para atender ao que estava sendo dito.",
  "Fui batizada com toda a minha casa.",
  "Insisti tanto que os pregadores acabaram se hospedando comigo em Filipos."
]},
{n:"Timóteo", g:"atos", d:2, r:"Atos 16; 1 e 2 Timóteo", p:[
  "Minha mãe era judia e meu pai, grego.",
  "Aprendi as Escrituras desde a infância com minha mãe e minha avó.",
  "Fui chamado de filho amado por quem me discipulou.",
  "Ouvi dele que ninguém devia desprezar a minha mocidade.",
  "Duas cartas do Novo Testamento levam o meu nome."
]},
{n:"Apolo", g:"atos", d:3, r:"Atos 18; 1 Coríntios", p:[
  "Nasci em Alexandria e era homem eloquente.",
  "Conhecia bem as Escrituras, mas só conhecia o batismo de João.",
  "Um casal me ouviu na sinagoga e me explicou o caminho com mais exatidão.",
  "Reguei aquilo que outro havia plantado.",
  "Em Corinto havia gente que se dizia do meu partido, e Paulo repreendeu essa divisão."
]}

];

/* ---------------------------------------------------------
   Sorteio sem repetir, igual ao do banco de perguntas
   --------------------------------------------------------- */
const Fichas = {
  usadas: [],
  sortear(dificuldade){
    let pool = PERSONAGENS.map((f,i) => ({f,i}))
                          .filter(x => x.f.d === dificuldade && !this.usadas.includes(x.i));
    if(pool.length === 0){
      this.usadas = this.usadas.filter(i => PERSONAGENS[i].d !== dificuldade);
      pool = PERSONAGENS.map((f,i) => ({f,i})).filter(x => x.f.d === dificuldade);
    }
    if(pool.length === 0) pool = PERSONAGENS.map((f,i) => ({f,i}));
    const escolhida = pool[Math.floor(Math.random() * pool.length)];
    this.usadas.push(escolhida.i);
    return escolhida.f;
  },
  zerar(){ this.usadas = []; },
  quantas(d){ return PERSONAGENS.filter(f => f.d === d).length; }
};
