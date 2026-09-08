/* =========================================================
   ARENA DA PALAVRA — fichas de personagens
   Usado pelo jogo "Quem Sou Eu".

   Formato:  n = nome           g = grupo (define a lista de suspeitos)
             d = dificuldade (1 fácil, 2 médio, 3 difícil)
             p = as cinco pistas, da mais difícil para a mais fácil
             r = referência bíblica

   Para acrescentar um personagem, copie um bloco e troque o conteúdo.
   A primeira pista deve ser a mais obscura; a quinta, quase entregar.
   personagens.js v2.0.0
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
  patriarcas: ["Adão","Caim","Abel","Sete","Enoque","Matusalém","Noé","Sem","Terá","Abraão","Ló","Ismael","Isaque","Esaú","Jacó","Labão","Judá","José","Benjamim","Rúben","Levi","Melquisedeque","Tamar","Simeão","Efraim","Diná"],
  exodo:      ["Moisés","Arão","Jetro","Coré","Josué","Calebe","Balaão","Faraó","Nadabe","Hur","Bezalel","Eleazar","Fineias","Anrão","Datã","Miriã","Abiú","Zípora","Abirão","Ítamar"],
  juizes:     ["Otniel","Eúde","Sangar","Baraque","Gideão","Abimeleque","Jefté","Sansão","Eli","Samuel","Boaz","Manoá","Jônatas","Abner","Isbosete","Débora","Golias","Sísera","Mefibosete","Jael","Jessé","Doegue","Aquis"],
  reis:       ["Saul","Davi","Salomão","Roboão","Jeroboão","Acabe","Jeú","Onri","Josafá","Uzias","Ezequias","Manassés","Josias","Zedequias","Joás","Nabucodonosor","Belsazar","Dario","Ciro","Assuero","Absalão","Joabe","Adonias","Atalia","Joiada"],
  profetas:   ["Natã","Elias","Eliseu","Isaías","Jeremias","Ezequiel","Daniel","Oseias","Joel","Amós","Obadias","Jonas","Miqueias","Naum","Habacuque","Sofonias","Ageu","Zacarias","Malaquias","Miquéias","Geazi","Gade"],
  mulheres:   ["Eva","Sara","Agar","Rebeca","Raquel","Lia","Miriã","Raabe","Débora","Jael","Dalila","Noemi","Rute","Ana","Abigail","Betsabé","Jezabel","Ester","Maria","Marta","Isabel","Lídia","Priscila","Dorcas","Maria Madalena","Mical","Herodias","Safira","Betsabá","Salomé"],
  evangelhos: ["Pedro","André","Tiago","João","Filipe","Bartolomeu","Tomé","Mateus","Simão","Judas Iscariote","João Batista","Nicodemos","Zaqueu","Lázaro","Bartimeu","Pilatos","Herodes","Caifás","Barrabás","Simão Cireneu","José de Arimateia","Natanael","Simão de Cirene","Anás","Jairo","Malco","Cleopas"],
  atos:       ["Paulo","Barnabé","Silas","Timóteo","Tito","Estêvão","Filipe","Cornélio","Ananias","Apolo","Lucas","Marcos","Onésimo","Filemom","Gamaliel","Áquila","Matias","Eutico","Lídia","Dorcas","Sérgio Paulo","Simão","Êutico","Agripa","Festo","Safira","Demas","Tíquico"]
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
,
/* ======================= ACRÉSCIMO ======================= */

/* ---------- GÊNESIS ---------- */
{n:"Adão", g:"patriarcas", d:1, r:"Gênesis 2—4", p:[
  "Fui formado do pó da terra, e Deus soprou em mim o fôlego de vida.",
  "Dei nome a todos os animais, mas entre eles não achei quem me correspondesse.",
  "Deus me pôs num jardim para cuidar dele, com uma única proibição.",
  "Quando Deus me chamou, eu me escondi e pus a culpa na mulher que ele me deu.",
  "Fui o primeiro homem, e por mim a morte entrou no mundo."
]},
{n:"Caim", g:"patriarcas", d:1, r:"Gênesis 4", p:[
  "Trabalhei a terra, e da terra tirei o que ofereci a Deus.",
  "Deus me avisou que o pecado estava à porta, mas eu não dominei sobre ele.",
  "Perguntei a Deus se eu era o guardador do meu irmão.",
  "Recebi um sinal para que ninguém me matasse, e fui viver errante na terra de Node.",
  "Matei meu irmão Abel porque a oferta dele foi aceita e a minha não."
]},
{n:"Esaú", g:"patriarcas", d:1, r:"Gênesis 25—33", p:[
  "Nasci primeiro, mas meu irmão veio agarrado ao meu calcanhar.",
  "Era homem do campo, caçador, e meu pai gostava da caça que eu trazia.",
  "Voltei faminto e troquei o que era meu por direito de nascença.",
  "Chorei alto quando descobri que a bênção do meu pai tinha ido para outro.",
  "Reencontrei meu irmão Jacó depois de anos e o abracei em vez de me vingar."
]},
{n:"Judá", g:"patriarcas", d:2, r:"Gênesis 37—44", p:[
  "Sou o quarto filho, e meu nome quer dizer louvor.",
  "Propus aos meus irmãos que vendêssemos, em vez de matar.",
  "Fui enganado por Tamar, minha nora, e reconheci que ela fora mais justa do que eu.",
  "Ofereci-me como escravo no lugar do meu irmão mais novo para poupar meu pai.",
  "Meu pai me chamou de leãozinho, e disse que o cetro não se apartaria de mim."
]},
{n:"Labão", g:"patriarcas", d:2, r:"Gênesis 29—31", p:[
  "Corri ao encontro do servo que apareceu no poço com camelos e presentes.",
  "Recebi em casa um sobrinho que fugia do irmão.",
  "Troquei o salário do meu genro dez vezes.",
  "Persegui minha filha por causa dos ídolos que sumiram da minha casa.",
  "Dei a Jacó a filha errada na noite do casamento, e ele teve de servir mais sete anos por Raquel."
]},
{n:"Melquisedeque", g:"patriarcas", d:3, r:"Gênesis 14; Hebreus 7", p:[
  "Apareço de repente na história, sem pai, sem mãe, sem genealogia registrada.",
  "Era rei de uma cidade cujo nome significa paz.",
  "Saí ao encontro de um homem que voltava de vencer quatro reis.",
  "Trouxe pão e vinho e abençoei aquele homem, e ele me deu o dízimo de tudo.",
  "A carta aos Hebreus diz que Cristo é sacerdote para sempre segundo a minha ordem."
]},
{n:"Rúben", g:"patriarcas", d:3, r:"Gênesis 35; 37; 42", p:[
  "Sou o primogênito, mas perdi a preeminência por causa do leito do meu pai.",
  "Achei mandrágoras no campo e as levei para a minha mãe.",
  "Propus jogá-lo no poço sem derramar sangue, planejando tirá-lo de lá depois.",
  "Voltei ao poço e o encontrei vazio; rasguei minhas roupas de desespero.",
  "Ofereci meus dois filhos como garantia para que Benjamim descesse ao Egito."
]},
{n:"Benjamim", g:"patriarcas", d:3, r:"Gênesis 35; 42—45", p:[
  "Minha mãe morreu ao me dar à luz e me chamou de filho da minha dor.",
  "Meu pai trocou esse nome pelo que significa filho da mão direita.",
  "Fui o único que ficou em casa quando meus irmãos desceram para comprar mantimento.",
  "Na mesa do Egito, minha porção era cinco vezes maior que a dos meus irmãos.",
  "A taça de prata do governador foi achada no meu saco de trigo."
]},

/* ---------- ÊXODO E DESERTO ---------- */
{n:"Faraó", g:"exodo", d:1, r:"Êxodo 5—14", p:[
  "Mandei aumentar o trabalho e mandei que buscassem a própria palha.",
  "Perguntei quem era o Senhor para que eu lhe obedecesse.",
  "Meus magos imitaram os primeiros sinais, mas depois reconheceram o dedo de Deus.",
  "Endureci o coração dez vezes, até a noite em que meu primogênito morreu.",
  "Persegui os hebreus com meus carros e o mar se fechou sobre o meu exército."
]},
{n:"Miriã", g:"exodo", d:1, r:"Êxodo 2; 15; Números 12", p:[
  "Fiquei de longe, vigiando, para ver o que aconteceria com um cesto de junco.",
  "Tive a coragem de oferecer à filha do rei uma ama de leite que era a própria mãe do menino.",
  "Peguei um tamboril e conduzi as mulheres em dança e cântico depois da travessia.",
  "Falei contra meu irmão por causa da mulher que ele tomou, e fiquei leprosa sete dias.",
  "Sou irmã de Moisés e de Arão, e a Bíblia me chama de profetisa."
]},
{n:"Eleazar", g:"exodo", d:3, r:"Números 20; 27; Josué 14", p:[
  "Sou filho do primeiro sumo sacerdote, e tive dois irmãos que morreram diante do Senhor.",
  "Recebi as vestes do meu pai no alto de um monte, no dia em que ele morreu.",
  "Mandei bater os incensários dos rebeldes em lâminas para cobrir o altar.",
  "Estive ao lado de Josué na repartição da terra entre as tribos.",
  "Sucedi Arão como sumo sacerdote de Israel."
]},
{n:"Bezalel", g:"exodo", d:3, r:"Êxodo 31; 35—38", p:[
  "Sou da tribo de Judá, e Deus me chamou pelo nome para uma obra.",
  "Fui cheio do Espírito de Deus em sabedoria, entendimento e conhecimento.",
  "Trabalhei ouro, prata, bronze, pedras e madeira.",
  "Tive um ajudante chamado Aoliabe, da tribo de Dã.",
  "Construí a arca da aliança e tudo o que havia no tabernáculo."
]},
{n:"Hur", g:"exodo", d:3, r:"Êxodo 17; 24; 31", p:[
  "Subi ao alto do outeiro com dois homens enquanto a batalha corria embaixo.",
  "Enquanto as mãos se erguiam, Israel vencia; quando baixavam, Amaleque prevalecia.",
  "Segurei um dos braços de Moisés até o pôr do sol.",
  "Fiquei encarregado do povo com Arão quando Moisés subiu ao monte.",
  "Meu neto Bezalel construiu o tabernáculo."
]},
{n:"Nadabe", g:"exodo", d:3, r:"Levítico 10", p:[
  "Sou filho do sumo sacerdote e subi ao monte entre os setenta anciãos.",
  "Fui consagrado com meu pai e meus irmãos para o serviço do santuário.",
  "Peguei meu incensário e ofereci diante do Senhor o que ele não havia ordenado.",
  "Saiu fogo de diante do Senhor e me consumiu junto com meu irmão Abiú.",
  "Meu pai Arão calou-se, e não me foi permitido pranto dentro do acampamento."
]},

/* ---------- JUÍZES E INÍCIO DA MONARQUIA ---------- */
{n:"Débora", g:"juizes", d:1, r:"Juízes 4—5", p:[
  "Eu me assentava debaixo de uma palmeira, entre Ramá e Betel.",
  "O povo subia até mim para que eu julgasse as suas causas.",
  "Chamei um homem e lhe disse que Deus já havia dado a ordem de subir ao monte Tabor.",
  "Ele só foi se eu fosse junto, e por isso a honra da vitória coube a uma mulher.",
  "Sou a profetisa que julgou Israel e cantou depois da derrota de Sísera."
]},
{n:"Golias", g:"juizes", d:1, r:"1 Samuel 17", p:[
  "Sou de Gate, e minha altura passava de seis côvados e um palmo.",
  "Minha lança tinha a haste como eixo de tecelão.",
  "Desafiei o exército inimigo por quarenta dias, de manhã e de tarde.",
  "Zombei do menino que veio contra mim com um cajado, como se eu fosse cachorro.",
  "Caí de bruços com uma pedra fincada na testa, e minha própria espada me decepou a cabeça."
]},
{n:"Jônatas", g:"juizes", d:1, r:"1 Samuel 14; 18—20", p:[
  "Subi um desfiladeiro de gatinhas com meu escudeiro, dizendo que ao Senhor não custa salvar com muitos ou com poucos.",
  "Comi mel do favo sem saber do juramento do meu pai, e quase morri por isso.",
  "Tirei minha túnica, minha espada e meu arco e dei a um homem mais novo do que eu.",
  "Atirei flechas no campo como sinal combinado, para avisar meu amigo de que fugisse.",
  "Meu pai era Saul, e minha amizade com Davi ficou famosa em toda a Escritura."
]},
{n:"Baraque", g:"juizes", d:2, r:"Juízes 4—5", p:[
  "Fui chamado de Quedes-Naftali para uma missão que já vinha de Deus.",
  "Reuni dez mil homens no monte Tabor.",
  "Só aceitei ir se uma mulher fosse comigo, e ela me disse que a honra não seria minha.",
  "Desci contra novecentos carros de ferro e o Senhor os desbaratou.",
  "Cantei com Débora o cântico da vitória sobre Sísera."
]},
{n:"Abimeleque", g:"juizes", d:2, r:"Juízes 9", p:[
  "Convenci os homens da cidade da minha mãe com o argumento de que era osso deles.",
  "Matei setenta irmãos sobre uma só pedra, e só um escapou.",
  "Meu irmão mais novo subiu ao monte Gerizim e contou a parábola das árvores que queriam um rei.",
  "Pus fogo na torre de Siquém com mil pessoas dentro.",
  "Uma mulher jogou uma pedra de moinho da torre e me quebrou o crânio; pedi que meu escudeiro me matasse para não dizerem que morri por mão de mulher."
]},
{n:"Otniel", g:"juizes", d:3, r:"Josué 15; Juízes 3", p:[
  "Tomei uma cidade chamada Quiriate-Sefer e ganhei com isso uma esposa.",
  "Minha mulher pediu ao pai dela fontes de água além do campo do sul.",
  "Sou sobrinho e genro de Calebe.",
  "O Espírito do Senhor veio sobre mim e venci o rei da Mesopotâmia.",
  "Sou o primeiro juiz de Israel, e a terra teve descanso quarenta anos."
]},
{n:"Sangar", g:"juizes", d:3, r:"Juízes 3; 5", p:[
  "Sou filho de Anate, e apareço em dois versículos apenas.",
  "Vim logo depois de Eúde, o canhoto.",
  "Não tinha espada nem lança: usei uma aguilhada de tocar bois.",
  "Matei seiscentos filisteus com essa ferramenta de lavoura.",
  "O cântico de Débora diz que nos meus dias os caminhos estavam desertos."
]},
{n:"Sísera", g:"juizes", d:3, r:"Juízes 4—5", p:[
  "Fui capitão do exército de Jabim, rei de Canaã.",
  "Tinha novecentos carros de ferro e oprimi Israel por vinte anos.",
  "Desci do carro e fugi a pé quando o Senhor desbaratou o meu exército.",
  "Pedi água e me deram leite, e adormeci coberto na tenda.",
  "Jael pegou uma estaca e um martelo e me pregou a cabeça no chão."
]},
{n:"Mefibosete", g:"juizes", d:3, r:"2 Samuel 4; 9; 19", p:[
  "Tinha cinco anos quando chegou a notícia da morte do meu pai e do meu avô.",
  "Minha ama fugiu comigo, eu caí, e fiquei aleijado dos dois pés.",
  "Vivi escondido numa casa em Lo-Debar.",
  "Fui chamado à mesa do rei e comi ali todos os dias, como um dos filhos dele.",
  "Sou filho de Jônatas, e Davi me tratou bem por causa da aliança com meu pai."
]},

/* ---------- REIS ---------- */
{n:"Absalão", g:"reis", d:1, r:"2 Samuel 13—18", p:[
  "Esperei dois anos calado antes de vingar a desonra da minha irmã.",
  "Ficava à porta da cidade dizendo às pessoas que, se eu fosse juiz, faria justiça a elas.",
  "Roubei o coração dos homens de Israel e me proclamei rei em Hebrom.",
  "Meu cabelo era pesado, e eu o cortava uma vez por ano.",
  "Fiquei pendurado num carvalho pela cabeça, e Joabe me atravessou com três dardos."
]},
{n:"Roboão", g:"reis", d:2, r:"1 Reis 12; 2 Crônicas 10", p:[
  "Herdei o trono do rei mais sábio que já houve.",
  "O povo veio me pedir que aliviasse o jugo pesado do meu pai.",
  "Ouvi os anciãos e depois ouvi os moços com quem eu havia crescido.",
  "Respondi que meu dedo mínimo era mais grosso que os lombos do meu pai.",
  "Por causa da minha resposta, dez tribos se rebelaram e o reino se dividiu."
]},
{n:"Jeroboão", g:"reis", d:2, r:"1 Reis 11—14", p:[
  "Era servo de Salomão, encarregado dos que trabalhavam da casa de José.",
  "Um profeta rasgou uma capa nova em doze pedaços e me deu dez.",
  "Fugi para o Egito e voltei quando o velho rei morreu.",
  "Fiz dois bezerros de ouro e disse ao povo que aquilo era demais subir a Jerusalém.",
  "Ficou meu nome ligado ao pecado que fez Israel pecar."
]},
{n:"Joabe", g:"reis", d:3, r:"2 Samuel 3; 11; 18; 1 Reis 2", p:[
  "Sou sobrinho do rei, filho de Zeruia, e comandei o exército dele.",
  "Matei Abner na porta da cidade, fingindo falar em segredo.",
  "Recebi a carta que mandava pôr um homem na frente da batalha e recuar dele.",
  "Desobedeci à ordem de poupar o filho do rei e o matei pendurado no carvalho.",
  "Fui morto agarrado às pontas do altar, por ordem de Salomão."
]},
{n:"Uzias", g:"reis", d:3, r:"2 Reis 15; 2 Crônicas 26", p:[
  "Comecei a reinar aos dezesseis anos e reinei cinquenta e dois.",
  "Inventei em Jerusalém máquinas de guerra para os muros e as torres.",
  "Enquanto busquei ao Senhor, ele me fez prosperar; mas o coração se elevou.",
  "Entrei no templo para queimar incenso, e oitenta sacerdotes me resistiram.",
  "A lepra me subiu à testa ali mesmo, e morri leproso, isolado até o fim."
]},
{n:"Jeú", g:"reis", d:3, r:"2 Reis 9—10", p:[
  "Um jovem profeta entrou onde eu estava, derramou azeite na minha cabeça e saiu correndo.",
  "Meus companheiros puseram as capas debaixo dos meus pés e tocaram a trombeta.",
  "A sentinela me reconheceu de longe pelo modo furioso de guiar o carro.",
  "Mandei que jogassem uma rainha da janela, e os cavalos a pisaram.",
  "Reuni os profetas de Baal com engano e acabei com eles em Israel."
]},
{n:"Joás", g:"reis", d:3, r:"2 Reis 11—12; 2 Crônicas 24", p:[
  "Fui escondido com minha ama num quarto do templo por seis anos.",
  "Minha tia me salvou da avó que matava toda a descendência real.",
  "Fui coroado aos sete anos, com a coroa e o testemunho, entre trombetas.",
  "Mandei fazer um cofre com um buraco na tampa para consertar a casa do Senhor.",
  "Enquanto o sacerdote Joiada viveu, fiz o que era reto; depois dele, mandei apedrejar o filho dele."
]},
{n:"Manassés", g:"reis", d:3, r:"2 Reis 21; 2 Crônicas 33", p:[
  "Subi ao trono com doze anos e reinei mais tempo que qualquer outro rei de Judá.",
  "Reconstruí o que meu pai havia derrubado e pus um ídolo dentro da casa do Senhor.",
  "Fiz passar meus filhos pelo fogo e me dei à adivinhação.",
  "Fui levado com ganchos e algemas para a Babilônia.",
  "Na prisão me humilhei diante do Deus dos meus pais, e ele me ouviu e me trouxe de volta."
]},

/* ---------- PROFETAS ---------- */
{n:"Natã", g:"profetas", d:2, r:"2 Samuel 7; 12; 1 Reis 1", p:[
  "Primeiro eu disse ao rei que fizesse tudo o que estava no coração dele, e naquela noite Deus me corrigiu.",
  "Levei a promessa de uma casa que duraria para sempre.",
  "Contei a história de um rico com muitos rebanhos e um pobre com uma só cordeirinha.",
  "Apontei o dedo e disse: tu és o homem.",
  "Ungi Salomão em Giom junto com o sacerdote Zadoque."
]},
{n:"Amós", g:"profetas", d:2, r:"Amós 1; 7", p:[
  "Não sou profeta nem filho de profeta.",
  "Era boiadeiro e cultivava sicômoros em Tecoa.",
  "Vi um cesto de frutas de verão e um prumo na mão do Senhor.",
  "O sacerdote de Betel mandou que eu fosse profetizar em outro lugar e comesse o pão de lá.",
  "Escrevi que o juízo deve correr como as águas, e a justiça como ribeiro perene."
]},
{n:"Oseias", g:"profetas", d:3, r:"Oseias 1—3", p:[
  "Deus me mandou fazer da minha própria casa um sinal para a nação.",
  "Dei aos meus filhos nomes que anunciavam juízo: não amada, não meu povo.",
  "Comprei de volta minha mulher por quinze peças de prata e um ômer e meio de cevada.",
  "Escrevi que Deus quer misericórdia, e não sacrifício.",
  "Casei com uma prostituta por ordem de Deus, para retratar Israel infiel."
]},
{n:"Miquéias", g:"profetas", d:3, r:"Miqueias 4—6", p:[
  "Sou de Moresete e profetizei nos dias de Jotão, Acaz e Ezequias.",
  "Um século depois, os anciãos citaram minhas palavras para defender Jeremias da morte.",
  "Disse que Sião seria lavrada como um campo.",
  "Escrevi que Deus pede de ti que pratiques a justiça, ames a misericórdia e andes humildemente.",
  "Anunciei que de Belém Efrata sairia aquele que havia de reinar em Israel."
]},
{n:"Habacuque", g:"profetas", d:3, r:"Habacuque 1—3", p:[
  "Meu livro não começa com pregação: começa com uma queixa a Deus.",
  "Perguntei por que ele fica calado enquanto o ímpio devora o mais justo.",
  "Subi à minha guarda e me pus sobre a torre para ver o que ele me responderia.",
  "Ouvi que o justo viverá pela sua fé, palavra que Paulo repetiria depois.",
  "Terminei dizendo que, mesmo sem figos, sem uvas e sem rebanho, eu me alegraria no Senhor."
]},
{n:"Ageu", g:"profetas", d:3, r:"Ageu 1—2", p:[
  "Profetizei no segundo ano de Dario, rei da Pérsia.",
  "Perguntei se era tempo de morarem em casas forradas enquanto uma casa estava deserta.",
  "Disse que semeavam muito e colhiam pouco, e que o salário caía em saco furado.",
  "Animei um governador chamado Zorobabel e um sumo sacerdote chamado Josué.",
  "Meu tema foi um só: reconstruir o templo em Jerusalém."
]},
{n:"Zacarias", g:"profetas", d:3, r:"Zacarias 3—9", p:[
  "Profetizei ao lado de Ageu, na volta do exílio.",
  "Vi cavalos entre as murtas, um candelabro de ouro entre duas oliveiras e um rolo voante.",
  "Vi o sumo sacerdote com vestes sujas e Satanás à sua direita para o acusar.",
  "Ouvi que não é por força nem por violência, mas pelo Espírito do Senhor.",
  "Anunciei o rei que viria justo e humilde, montado num jumentinho."
]},
{n:"Malaquias", g:"profetas", d:3, r:"Malaquias 1—4", p:[
  "Meu nome quer dizer meu mensageiro.",
  "Escrevi na forma de perguntas e respostas: eles diziam, e eu respondia.",
  "Repreendi os sacerdotes por trazerem ao altar o animal cego e o coxo.",
  "Falei em trazer os dízimos à casa do tesouro e em janelas abertas no céu.",
  "Sou o último livro do Antigo Testamento, e anunciei a vinda de Elias antes do grande dia."
]},
{n:"Geazi", g:"profetas", d:3, r:"2 Reis 4—5; 8", p:[
  "Fui moço de um profeta e corri à frente com o bordão dele sobre o rosto de um menino.",
  "Quis afastar uma mulher aflita que se lançara aos pés do meu senhor.",
  "Corri atrás de um general sírio depois que ele foi curado.",
  "Menti duas vezes: para ele, pedindo prata e vestidos, e para o meu senhor, dizendo que não fora a lugar nenhum.",
  "A lepra de Naamã se pegou a mim e à minha descendência para sempre."
]},

/* ---------- MULHERES DA BÍBLIA ---------- */
{n:"Dalila", g:"mulheres", d:1, r:"Juízes 16", p:[
  "Morava no vale de Soreque.",
  "Cinco príncipes me ofereceram mil e cem peças de prata cada um.",
  "Fui enganada três vezes: cordas verdes, cordas novas e teias do tear.",
  "Insisti todos os dias, até que a alma dele se angustiou até a morte.",
  "Adormeci Sansão nos meus joelhos e mandei rapar as sete tranças da cabeça dele."
]},
{n:"Marta", g:"mulheres", d:1, r:"Lucas 10; João 11", p:[
  "Recebi Jesus na minha casa e me distraí com muito serviço.",
  "Reclamei que minha irmã tinha me deixado sozinha e pedi que ele a mandasse ajudar.",
  "Ouvi que só uma coisa é necessária, e que ela havia escolhido a boa parte.",
  "Quando meu irmão morreu, disse a Jesus que, se ele estivesse ali, aquilo não teria acontecido.",
  "Fui eu quem avisou que já cheirava mal, pois era o quarto dia de Lázaro no sepulcro."
]},
{n:"Maria Madalena", g:"mulheres", d:1, r:"Lucas 8; João 20", p:[
  "Sou de uma cidade da Galileia, à beira do lago.",
  "Jesus expulsou de mim sete demônios, e eu passei a servi-lo com meus bens.",
  "Fiquei junto à cruz quando quase todos tinham fugido.",
  "Cheguei ao sepulcro ainda escuro e achei a pedra removida.",
  "Pensei que fosse o jardineiro, até que ele me chamou pelo nome."
]},
{n:"Jezabel", g:"mulheres", d:1, r:"1 Reis 18—21; 2 Reis 9", p:[
  "Era filha de Etbaal, rei dos sidônios.",
  "Sustentava à minha mesa quatrocentos e cinquenta profetas de Baal.",
  "Mandei recado a Elias jurando que no dia seguinte ele estaria morto.",
  "Escrevi cartas em nome do rei para que dois homens falsos acusassem Nabote e ele fosse apedrejado.",
  "Pintei os olhos e me pus à janela; fui jogada dali abaixo e os cães me comeram."
]},
{n:"Rebeca", g:"mulheres", d:1, r:"Gênesis 24—27", p:[
  "Desci à fonte com o cântaro ao ombro e dei de beber também aos camelos.",
  "Perguntaram-me se eu iria com aquele homem, e eu respondi que sim.",
  "Os meninos lutavam dentro de mim, e o Senhor me disse que o mais velho serviria ao mais novo.",
  "Cobri os braços do meu filho com peles de cabrito e o vesti com as roupas do irmão.",
  "Sou mulher de Isaque e mãe de Esaú e Jacó."
]},
{n:"Isabel", g:"mulheres", d:1, r:"Lucas 1", p:[
  "Sou das filhas de Arão, e meu marido era sacerdote do turno de Abias.",
  "Éramos justos diante de Deus, mas já idosos e sem filhos.",
  "Fiquei escondida cinco meses depois que concebi.",
  "Quando minha parenta me saudou, a criança saltou de alegria no meu ventre.",
  "Insisti na hora de dar o nome ao meu filho: ele se chamará João."
]},
{n:"Agar", g:"mulheres", d:2, r:"Gênesis 16; 21", p:[
  "Sou egípcia, e servi na casa de uma mulher estéril.",
  "Quando concebi, minha senhora ficou desprezível aos meus olhos, e fugi para o deserto.",
  "O anjo me achou junto a uma fonte no caminho de Sur e me mandou voltar.",
  "Chamei a Deus pelo nome de Aquele que me vê.",
  "Fui despedida com um odre de água e chorei ao ver meu filho Ismael morrendo de sede."
]},
{n:"Lia", g:"mulheres", d:2, r:"Gênesis 29—30; 49", p:[
  "Meus olhos eram baços, e minha irmã era formosa de porte e de semblante.",
  "Meu pai me pôs no lugar dela na noite do casamento.",
  "Deus viu que eu era desprezada e abriu a minha madre.",
  "Dei nomes aos meus filhos contando a minha dor: agora meu marido me amará.",
  "Fui mãe de Judá e de Levi, e estou sepultada na caverna de Macpela com Jacó."
]},
{n:"Abigail", g:"mulheres", d:2, r:"1 Samuel 25", p:[
  "Era mulher de bom entendimento, casada com um homem duro e mau.",
  "Um moço veio me avisar às pressas do que meu marido tinha respondido.",
  "Carreguei duzentos pães, dois odres de vinho, cinco ovelhas e bolos de passas sem dizer nada a ele.",
  "Impedi um derramamento de sangue falando ao homem que descia armado com quatrocentos.",
  "Meu marido Nabal morreu dez dias depois, e eu me tornei mulher de Davi."
]},
{n:"Mical", g:"mulheres", d:3, r:"1 Samuel 18—19; 2 Samuel 6", p:[
  "Meu pai me deu em casamento esperando que eu fosse um laço para o meu marido.",
  "O dote pedido foram cem prepúcios de filisteus, e ele trouxe duzentos.",
  "Desci meu marido por uma janela e pus um ídolo na cama com pelos de cabra à cabeceira.",
  "Fui dada a outro homem, que me seguiu chorando até Baurim.",
  "Olhei pela janela e o desprezei no coração por dançar diante da arca; e não tive filhos até morrer."
]},
{n:"Dorcas", g:"mulheres", d:3, r:"Atos 9", p:[
  "Meu nome em aramaico é Tabita, e em grego quer dizer gazela.",
  "Morava em Jope e era cheia de boas obras e esmolas.",
  "Adoeci e morri, e me lavaram e puseram no cenáculo.",
  "As viúvas choravam mostrando as túnicas e vestes que eu havia feito.",
  "Pedro mandou todos saírem, orou de joelhos e me disse: levanta-te."
]},
{n:"Priscila", g:"mulheres", d:3, r:"Atos 18; Romanos 16", p:[
  "Saí de Roma porque Cláudio mandou que todos os judeus deixassem a cidade.",
  "Trabalhava com meu marido no mesmo ofício de Paulo: fazer tendas.",
  "Fomos com ele até Éfeso e ficamos ali.",
  "Ouvimos um homem eloquente pregar com fervor e o tomamos à parte para lhe expor o caminho com mais exatidão.",
  "Paulo diz que eu e Áquila expusemos nossa cabeça pela vida dele, e que a igreja se reunia na nossa casa."
]},

/* ---------- EVANGELHOS ---------- */
{n:"Lázaro", g:"evangelhos", d:1, r:"João 11—12", p:[
  "Morava em Betânia com duas irmãs.",
  "Adoeci, e as minhas irmãs mandaram dizer: aquele a quem amas está enfermo.",
  "Ele demorou dois dias de propósito, e eu já estava sepultado havia quatro.",
  "Saí do sepulcro com as mãos e os pés atados e o rosto envolto num lenço.",
  "Depois quiseram me matar também, porque muitos criam por minha causa."
]},
{n:"Nicodemos", g:"evangelhos", d:1, r:"João 3; 7; 19", p:[
  "Era fariseu e um dos principais dos judeus.",
  "Fui procurá-lo de noite e comecei dizendo que sabíamos que ele viera da parte de Deus.",
  "Perguntei como alguém pode nascer sendo velho, se não pode voltar ao ventre da mãe.",
  "Depois defendi na assembleia que a lei não julga um homem sem primeiro o ouvir.",
  "Levei quase cem arráteis de mirra e aloés para o sepultamento dele."
]},
{n:"Barrabás", g:"evangelhos", d:1, r:"Mateus 27; Lucas 23", p:[
  "Estava preso com outros que tinham feito uma sedição na cidade.",
  "Era conhecido do povo como um preso notável.",
  "Havia sido preso por homicídio numa revolta.",
  "O governador ofereceu ao povo a escolha entre mim e outro, e a multidão gritou o meu nome.",
  "Fui solto na Páscoa, e Jesus foi crucificado no meu lugar."
]},
{n:"André", g:"evangelhos", d:1, r:"João 1; 6; 12", p:[
  "Fui primeiro discípulo de outro mestre, que apontou e disse: eis o Cordeiro de Deus.",
  "Fiquei com ele naquele dia, porque era quase a hora décima.",
  "A primeira coisa que fiz foi achar meu próprio irmão e levá-lo a Jesus.",
  "Fui eu que reparei no menino com cinco pães e dois peixinhos.",
  "Sou irmão de Simão Pedro e pescador da Galileia."
]},
{n:"Caifás", g:"evangelhos", d:2, r:"Mateus 26; João 11; 18", p:[
  "Era sumo sacerdote naquele ano, e genro de Anás.",
  "Disse ao conselho que eles nada sabiam.",
  "Profetizei sem saber que estava profetizando.",
  "Falei que convinha que um homem morresse pelo povo, para que a nação não perecesse.",
  "Rasguei as minhas vestes e disse que ele havia blasfemado."
]},
{n:"José de Arimateia", g:"evangelhos", d:2, r:"Mateus 27; Marcos 15; João 19", p:[
  "Era homem rico e membro do conselho, mas não havia consentido no plano deles.",
  "Esperava o reino de Deus, e era discípulo às escondidas por medo dos judeus.",
  "Cheguei ousadamente diante do governador e pedi o corpo.",
  "Envolvi o corpo num lençol limpo de linho.",
  "Pus o corpo no sepulcro novo que eu havia mandado abrir na rocha para mim mesmo."
]},
{n:"Bartimeu", g:"evangelhos", d:3, r:"Marcos 10", p:[
  "Sou filho de Timeu, e o evangelho registra o meu nome, o que é raro para alguém como eu.",
  "Ficava assentado à beira do caminho, na saída de Jericó.",
  "Muitos me repreendiam para que eu me calasse, e eu gritava ainda mais alto.",
  "Ele mandou me chamar; larguei a capa, dei um salto e fui ter com ele.",
  "Perguntou o que eu queria, e eu respondi: Mestre, que eu recupere a vista."
]},
{n:"Natanael", g:"evangelhos", d:3, r:"João 1; 21", p:[
  "Sou de Caná da Galileia.",
  "Meu amigo veio me dizer que tinha achado aquele de quem Moisés escreveu.",
  "Respondi com uma pergunta que virou provérbio: de Nazaré pode sair coisa boa?",
  "Ele disse que me viu debaixo da figueira antes que Filipe me chamasse.",
  "Confessei ali mesmo: tu és o Filho de Deus, tu és o Rei de Israel."
]},
{n:"Simão de Cirene", g:"evangelhos", d:3, r:"Marcos 15; Lucas 23", p:[
  "Vinha do campo e apenas passava por ali.",
  "Sou de uma cidade do norte da África.",
  "Os soldados me constrangeram a fazer uma coisa que eu não havia escolhido.",
  "Marcos registra que sou pai de Alexandre e de Rufo.",
  "Carreguei a cruz atrás de Jesus no caminho para o Calvário."
]},

/* ---------- ATOS E AS CARTAS ---------- */
{n:"Silas", g:"atos", d:2, r:"Atos 15—16", p:[
  "Fui escolhido pelos apóstolos para levar a carta do concílio às igrejas.",
  "Paulo me tomou como companheiro depois de se separar de Barnabé.",
  "Fui açoitado e preso comigo os pés no tronco.",
  "Por volta da meia-noite eu orava e cantava louvores, e os presos me ouviam.",
  "O terremoto abriu as portas, e o carcereiro perguntou o que era preciso fazer para se salvar."
]},
{n:"Filipe", g:"atos", d:3, r:"Atos 6; 8", p:[
  "Fui um dos sete escolhidos para servir às mesas.",
  "Preguei em Samaria, e houve grande alegria naquela cidade.",
  "Um anjo me mandou para um caminho deserto, ao sul.",
  "Corri ao lado de um carro e perguntei se o homem entendia o que estava lendo.",
  "Batizei o eunuco etíope e fui arrebatado dali para Azoto."
]},
{n:"Gamaliel", g:"atos", d:3, r:"Atos 5; 22", p:[
  "Era fariseu e doutor da lei, respeitado por todo o povo.",
  "Mandei que os apóstolos fossem postos fora por um pouco.",
  "Lembrei o conselho de dois homens que se levantaram antes e cujos seguidores se dispersaram.",
  "Disse que, se aquela obra fosse de homens, se desfaria; mas se fosse de Deus, não a poderiam desfazer.",
  "Paulo declarou que foi criado aos meus pés, instruído na lei dos pais."
]},
{n:"Simão", g:"atos", d:3, r:"Atos 8", p:[
  "Antes de o evangelho chegar, eu já enfeitiçava a cidade de Samaria.",
  "Diziam de mim que eu era o grande poder de Deus.",
  "Cri e fui batizado, e andava sempre com Filipe, admirado com os sinais.",
  "Ofereci dinheiro aos apóstolos para receber aquele poder.",
  "Pedro me respondeu que o meu dinheiro fosse comigo à perdição."
]},
{n:"Êutico", g:"atos", d:3, r:"Atos 20", p:[
  "Era moço e estava assentado numa janela.",
  "Havia muitas lâmpadas no cenáculo do terceiro andar.",
  "O sermão se estendeu até a meia-noite, e o sono me venceu.",
  "Caí do terceiro andar e me levantaram morto.",
  "Paulo desceu, se inclinou sobre mim e disse que a minha alma estava em mim."
]},
{n:"Matias", g:"atos", d:3, r:"Atos 1", p:[
  "Estive com eles todo o tempo em que o Senhor andou entre nós.",
  "Acompanhei desde o batismo de João até o dia em que ele foi elevado.",
  "Éramos dois nomes propostos: eu e José, chamado Barsabás.",
  "Oraram para que Deus mostrasse qual dos dois havia escolhido.",
  "Deitaram sortes, a sorte caiu sobre mim, e fui contado com os onze apóstolos."
]},
{n:"Onésimo", g:"atos", d:3, r:"Filemom", p:[
  "Servia na casa de um homem em Colossos e fugi de lá.",
  "Meu nome quer dizer útil, e Paulo brincou dizendo que eu tinha sido inútil.",
  "Fui achado em Roma e me tornei filho de Paulo nas suas prisões.",
  "Paulo escreveu que, se eu devia alguma coisa, que fosse posto na conta dele.",
  "Voltei ao meu senhor levando uma carta que pedia que eu fosse recebido não mais como servo, mas como irmão amado."
]},
{n:"Agripa", g:"atos", d:3, r:"Atos 25—26", p:[
  "Cheguei a Cesareia com Berenice, com muito aparato, para saudar o governador.",
  "Disse que também eu gostaria de ouvir aquele homem.",
  "Ouvi o preso contar a história da luz no caminho de Damasco.",
  "Perguntaram-me se eu cria nos profetas, e eu respondi que por pouco me persuadia a ser cristão.",
  "Comentei com Festo que aquele homem podia ter sido solto se não tivesse apelado para César."
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
