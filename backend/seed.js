const admin = require("firebase-admin");
const serviceAccount = require("./firebase-key.json"); // certifique-se que está correto

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const perguntas = [
  {
    pergunta:
      "A Semana de Arte Moderna de 1922, realizada em São Paulo, foi um marco para a renovação estética no Brasil. Nela, artistas como Mário de Andrade e Anita Malfatti propuseram uma arte com características próprias, rompendo com os padrões acadêmicos.Esse movimento tinha como principal objetivo",
    opcoes: [
      "Valorizar a arte europeia clássica como modelo para os artistas brasileiros",
      "Propor uma arte alinhada com os padrões barrocos brasileiros",
      "Rejeitar completamente toda forma de arte tradicional",
      "Promover a liberdade estética e valorizar a identidade cultural brasileira",
      "Promover a liberdade estética e valorizar a identidade cultural brasileira",
    ],
    correta:
      "Promover a liberdade estética e valorizar a identidade cultural brasileira",
    categoria: "Artes",
    explicacao: "",
  },
  {
    pergunta:
      "As manifestações culturais populares como o maracatu, o cordel e o bumba-meu-boi fazem parte do patrimônio imaterial brasileiro. Essas expressões são importantes porque",
    opcoes: [
      "Representam exclusivamente a cultura europeia no Brasil",
      "São praticadas apenas em festas religiosas",
      "Têm origem exclusivamente indígena",
      "São formas de expressão da diversidade cultural brasileira",
      "Foram criadas por artistas plásticos renomados",
    ],
    correta: "São formas de expressão da diversidade cultural brasileira",
    categoria: "Artes",
    explicacao: "",
  },
  {
    pergunta:
      "Uma das características da arte contemporânea é a valorização do conceito e a interação com o público, como nas instalações artísticas e nas performances. Esse tipo de arte busca principalmente",
    opcoes: [
      "Imitar com perfeição a natureza",
      "Representar temas religiosos com rigor técnico",
      "Transmitir mensagens e provocar reflexões por meio da experiência",
      "Resgatar valores acadêmicos da Renascença",
      "Rejeitar totalmente qualquer tipo de tecnologia",
    ],
    correta:
      "Transmitir mensagens e provocar reflexões por meio da experiência",
    categoria: "Artes",
    explicacao: "",
  },
  {
    pergunta:
      "No Renascimento, artistas como Leonardo da Vinci e Michelangelo revolucionaram a arte europeia com novas técnicas e temas. Uma inovação marcante desse período foi",
    opcoes: [
      "A escultura feita com materiais recicláveis",
      "A pintura abstrata sem perspectiva",
      "O uso da perspectiva para criar profundidade",
      "A ausência de representações religiosas",
      "A valorização do gótico e do medievalismo",
    ],
    correta: "O uso da perspectiva para criar profundidade",
    categoria: "Artes",
    explicacao: "",
  },
  {
    pergunta:
      "Atualmente, muitos artistas utilizam softwares, redes sociais e realidade aumentada em suas criações. Essa integração entre arte e tecnologia",
    opcoes: [
      "Impede a criação de obras com valor estético",
      "Substitui o papel do artista por máquinas",
      "Amplia as possibilidades de expressão e alcance das obras",
      "É limitada a exposições físicas em museus",
      "É restrita à publicidade e ao design gráfico",
    ],
    correta: "Amplia as possibilidades de expressão e alcance das obras",
    categoria: "Artes",
    explicacao: "",
  },
  {
    pergunta:
      "O movimento tropicalista, surgido no Brasil nos anos 1960, misturou elementos da cultura popular e erudita com a música internacional. Esse movimento buscava:",
    opcoes: [
      "Impor um único padrão musical nacional",
      "Rejeitar a música brasileira tradicional",
      "Valorizar a fusão de estilos e a liberdade criativa",
      "Eliminar influências estrangeiras da música",
      "Retornar ao modelo de composição barroca",
    ],
    correta: "Valorizar a fusão de estilos e a liberdade criativa",
    categoria: "Artes",
    explicacao: "",
  },
  {
    pergunta:
      "A presença de líquens em determinada região tem sido usada como indicadora de qualidade do ar. Esses organismos são sensíveis a poluentes atmosféricos, especiamente dióxido de enxofre (SO₂), sendo ausentes em locais poluídos. Considerando essa informação, a presença de líquens em uma área urbana indica:",
    opcoes: [
      "Alta biodiversidade vegetal",
      "Intensa atividade industrial",
      "Boa qualidade do ar",
      "Elevado teor de dióxido de carbono",
      "Aumento da temperatura local",
    ],
    correta: "Boa qualidade do ar",
    categoria: "Biologia",
    explicacao: "",
  },
  {
    pergunta:
      "Um casal heterozigoto para a fibrose cística (doença genética recessiva) deseja saber a probabilidade de seus filhos herdarem a doença. A fibrose é causada por um alelo recessivo. Qual a chance de esse casal ter um filho com a doença?",
    opcoes: ["0%", "25%", "50%", "75%", "100%"],
    correta: "25%",
    categoria: "Biologia",
    explicacao: "",
  },
  {
    pergunta:
      "Durante uma expedição, cientistas observaram duas espécies de aves muito semelhantes vivendo em ambientes distintos. Apesar de suas semelhanças, cada uma apresenta adaptações específicas ao seu ambiente. Esse fenômeno pode ser explicado pela:",
    opcoes: [
      "Deriva genética",
      "Mutação letal",
      "Especiação alopátrica",
      "Irradiação adaptativa",
      "Seleção artificial",
    ],
    correta: "Especiação alopátrica",
    categoria: "Biologia",
    explicacao: "",
  },
  {
    pergunta:
      "Durante uma maratona, o corpo do atleta aumenta a frequência respiratória e o ritmo cardíaco. Essas alterações fisiológicas têm como principal objetivo:",
    opcoes: [
      "Reduzir o consumo de oxigênio pelas células.",
      "Elevar a pressão arterial para evitar desmaios",
      "Aumentar o fornecimento de oxigênio e nutrientes aos tecidos",
      "Diminuir a produção de ácido lático nos músculos",
      "Controlar a liberação de hormônios da tireoide",
    ],
    correta: "Aumentar o fornecimento de oxigênio e nutrientes aos tecidos",
    categoria: "Biologia",
    explicacao: "",
  },
  {
    pergunta:
      "A esquistossomose, também conhecida como barriga d’água, é causada por um verme do gênero Schistosoma. Uma medida eficaz para a prevenção da esquistossomose é:",
    opcoes: [
      "Vacinação da população",
      "Controle de mosquito vetor",
      "Tratamento da água com flúor",
      "Eliminação de caramujos em áreas de risco",
      "Uso de inseticidas em residências",
    ],
    correta: "Eliminação de caramujos em áreas de risco",
    categoria: "Biologia",
    explicacao: "",
  },
  {
    pergunta:
      "A técnica do DNA recombinante permite a inserção de genes humanos em bactérias, que passam a produzir substâncias úteis, como a insulina. Essa técnica é possível graças à:",
    opcoes: [
      "Substituição de ácidos nucleicos por proteínas",
      "Fusão de membranas celulares humanas e bacterianas",
      "Capacidade das bactérias realizarem mitose",
      "Similaridade genética entre humanos e bactérias",
      "Capacidade de expressão de genes heterólogos por organismos geneticamente modificados",
    ],
    correta:
      "Capacidade de expressão de genes heterólogos por organismos geneticamente modificados",
    categoria: "Biologia",
    explicacao: "",
  },
  {
    pergunta:
      "Durante uma partida oficial de vôlei, um atleta realiza um movimento de ataque, saltando da linha de trás da quadra e atingindo a bola no ar. Esse movimento é chamado de:",
    opcoes: [
      "Saque flutuante",
      "Toque",
      "Cortada de fundo",
      "Bloqueio triplo",
      "Manchete aérea",
    ],
    correta: "Cortada de fundo",
    categoria: "Educação Física",
    explicacao: "",
  },
  {
    pergunta:
      "Durante os Jogos Olímpicos, diversos esportes coletivos são disputados. Assinale a alternativa que não corresponde a um esporte coletivo presente nos Jogos Olímpicos:",
    opcoes: ["Basquetebol", "Polo aquático", "Handebol", "Capoeira", "Rugby"],
    correta: "Capoeira",
    categoria: "Educação Física",
    explicacao: "",
  },
  {
    pergunta:
      "Uma vida saudável está relacionada a diversos fatores. Assinale a alternativa que apresenta hábitos benéficos para a saúde:",
    opcoes: [
      "Prática de exercícios físicos, alimentação equilibrada e sono adequado",
      "Jejum prolongado, consumo de suplementos sem orientação e sedentarismo",
      "Dormir menos de 5 horas por dia e treinar em excesso",
      "Alimentação baseada em dietas restritivas e pílulas para emagrecer",
      "Evitar o lazer e priorizar a rotina de estudos/trabalho",
    ],
    correta:
      "Prática de exercícios físicos, alimentação equilibrada e sono adequado",
    categoria: "Educação Física",
    explicacao: "",
  },
  {
    pergunta:
      "A atividade física regular traz diversos benefícios ao organismo, como a melhora do sistema cardiovascular. Esse efeito ocorre principalmente devido à:",
    opcoes: [
      "Aumento da força muscular",
      "Diminuição da produção de lactato",
      "Aumento da capacidade de transporte de oxigênio pelo sangue",
      "Redução do volume sanguíneo total",
      "Aumento da flexibilidade articular",
    ],
    correta: "Aumento da capacidade de transporte de oxigênio pelo sangue",
    categoria: "Educação Física",
    explicacao: "",
  },
  {
    pergunta:
      "A prática regular de atividade física pode ajudar na prevenção de diversas doenças. Uma dessas doenças é o diabetes tipo 2, que é caracterizado pela resistência à insulina. A atividade física ajuda a prevenir o diabetes tipo 2, principalmente porque:",
    opcoes: [
      "A prática regular de atividade física pode ajudar na prevenção de diversas doenças. Uma dessas doenças é o diabetes tipo 2, que é caracterizado pela resistência à insulina. A atividade física ajuda a prevenir o diabetes tipo 2, principalmente porque:",
      "Estimula a produção de insulina pelo pâncreas",
      "Reduz a quantidade de glicose no sangue por meio de mecanismos musculares e hormonais",
      "Aumenta o armazenamento de glicose nos músculos e fígado, dificultando a sua liberação para o sangue",
      "Diminui a produção de hormônios que afetam a insulina",
    ],
    correta:
      "Reduz a quantidade de glicose no sangue por meio de mecanismos musculares e hormonais",
    categoria: "Educação Física",
    explicacao: "",
  },
  {
    pergunta:
      "Durante atividades físicas intensas, o corpo utiliza predominantemente diferentes fontes de energia. No início de um exercício de alta intensidade, como uma corrida, a principal fonte de energia utilizada pelo corpo é:",
    opcoes: [
      "Proteínas, que são quebradas em aminoácidos",
      "Gorduras, que são metabolizadas para produção de ATP",
      "Carboidratos, que são convertidos em glicose e geram ATP",
      "Ácidos graxos, que são utilizados para manter a glicemia estável",
      "Vitaminas e minerais, que agem como cofatores enzimáticos",
    ],
    correta: "",
    categoria: "Educação Física",
    explicacao: "",
  },
  {
    pergunta:
      "Frase incompleta: Cuando era niño, siempre ______ (jugar) con mis primos en el jardín.",
    opcoes: ["jugué", "juegué", "jugaba", "jugó", "jugando"],
    correta: "jugaba",
    categoria: "Espanhol",
    explicacao: "",
  },
  {
    pergunta:
      "Cada vez son más los jóvenes que optan por viajar al extranjero para estudiar. Esta experiencia les permite no solo mejorar sus conocimientos académicos, sino también ampliar su visión del mundo y adquirir una valiosa independencia. Según el texto, ¿cuál es una ventaja de estudiar en el extranjero",
    opcoes: [
      "Disminuir el nivel académico",
      "Conocer solamente nuevas materias",
      "Aumentar la dependencia familiar",
      "Desarrollar una mayor independencia",
      "Limitar la visión del mundo",
    ],
    correta: "Desarrollar una mayor independencia",
    categoria: "Espanhol",
    explicacao: "",
  },
  {
    pergunta:
      "Texto: “No hay camino para la paz, la paz es el camino.”— Mahatma Gandhi. A frase apresentada revela uma visão de mundo que valoriza:",
    opcoes: [
      "A guerra como meio de alcançar a paz",
      "A paz como um objetivo inalcançável",
      "A paz como prática constante, não apenas um fim",
      "A violência como caminho necessário à mudança",
      "A submissão como solução pacífica dos conflitos",
    ],
    correta: "A paz como prática constante, não apenas um fim",
    categoria: "Espanhol",
    explicacao: "",
  },
  {
    pergunta:
      "¿Cuál de las siguientes frases está gramaticalmente correcta en español?",
    opcoes: [
      "Yo lo dije a ella el secreto",
      "Él me lo regaló un libro",
      "Les dijimos la verdad a ellos",
      "Te lo conté a tú",
      "Nosotros lo decimos a él",
    ],
    correta: "Les dijimos la verdad a ellos",
    categoria: "Espanhol",
    explicacao: "",
  },
  {
    pergunta:
      "Leia o trecho de uma conversa informal entre amigos em um grupo de WhatsApp: ¿Vas a venir a la fiesta mañana? ¡Obvio que sí! ¡No me la pierdo por nada! Nesse contexto, a expressão “¡Obvio que sí!” indica:",
    opcoes: [
      "Dúvida em relação ao convite",
      "Rejeição disfarçada da proposta",
      "Certeza e entusiasmo com o evento",
      "Indiferença sobre a festa",
      "Desinteresse velado",
    ],
    correta: "Certeza e entusiasmo com o evento",
    categoria: "Espanhol",
    explicacao: "",
  },
  {
    pergunta:
      "As festas de “La Tomatina”, realizadas na cidade de Buñol, Espanha, consistem em uma grande batalha de tomates, onde milhares de pessoas participam. Essa festividade é exemplo de:",
    opcoes: [
      "Uma prática agrícola tradicional",
      "Uma forma de protesto político",
      "Um evento cultural e turístico popular",
      "Um ritual religioso da Semana Santa",
      "Um desfile folclórico indígena",
    ],
    correta: "Um evento cultural e turístico popular",
    categoria: "Espanhol",
    explicacao: "",
  },
  {
    pergunta:
      "“O homem nasce livre, e por toda parte encontra-se acorrentado.” (ROUSSEAU, Do Contrato Social)",
    opcoes: [
      "A liberdade individual e a necessidade do absolutismo",
      "A desigualdade e as instituições que corrompem a liberdade humana",
      "O estado natural como causa dos males sociais",
      "A democracia como regime que oprime o cidadão",
      " O contrato social como forma de dominação burguesa",
    ],
    correta:
      "A desigualdade e as instituições que corrompem a liberdade humana",
    categoria: "Filosofia",
    explicacao: "",
  },
  {
    pergunta:
      "“O operário torna-se tanto mais pobre quanto mais riqueza produz. [...] O trabalhador se torna um apêndice da máquina.” (MARX, Manuscritos Econômico-Filosóficos) Para Marx, a alienação do trabalhador ocorre quando:",
    opcoes: [
      "Ele tem controle total sobre seu processo de trabalho",
      "Ele participa democraticamente das decisões da empresa",
      " Ele possui os meios de produção e é dono do seu tempo",
      " Seu trabalho deixa de ser criativo e se torna repetitivo e automático.",
      "A produção ocorre de forma artesanal e individual",
    ],
    correta:
      " Seu trabalho deixa de ser criativo e se torna repetitivo e automático",
    categoria: "Filosofia",
    explicacao: "",
  },
  {
    pergunta:
      "“A virtude moral é adquirida pelo hábito: é praticando a justiça que nos tornamos justos, é praticando a temperança que nos tornamos temperantes, é praticando a coragem que nos tornamos corajosos.” (ARISTÓTELES, Ética a Nicômaco) Com base na concepção ética de Aristóteles, é correto afirmar que a formação do caráter virtuoso depende:",
    opcoes: [
      "Da contemplação pura das ideias",
      "De uma fé cega nas tradições religiosas",
      "De punições severas para corrigir vícios",
      "Da repetição de ações orientadas pela razão",
      "Do desprezo pelas paixões e desejos humanos",
    ],
    correta: "Da repetição de ações orientadas pela razão",
    categoria: "Filosofia",
    explicacao: "",
  },
  {
    pergunta:
      "“Uma conversação de tal natureza transforma o ouvinte; o contato de Sócrates paralisa e embaraça; leva a refletir sobre si mesmo, a imprimir à atenção uma direção incomum: os temperamentais, como Alcibíades, sabem que encontrarão junto dele todo o bem de que são capazes, mas fogem porque receiam essa influência poderosa, que os leva a se censurarem.”  Com base no texto, a atitude de Sócrates caracteriza-se por:",
    opcoes: [
      "Impor suas ideias aos interlocutores, desconsiderando suas opiniões",
      "Utilizar a retórica para persuadir os ouvintes a aceitarem suas crenças",
      "Estimular a reflexão crítica nos interlocutores, levando-os ao autoconhecimento",
      "Evitar confrontos dialéticos para manter a harmonia nas conversações",
      "Transmitir conhecimentos prontos, sem questionar as crenças dos ouvintes",
    ],
    correta:
      "Estimular a reflexão crítica nos interlocutores, levando-os ao autoconhecimento",
    categoria: "Filosofia",
    explicacao: "",
  },
  {
    pergunta:
      "“Porque dos homens que se pode dizer, duma maneira geral, que são ingratos, volúveis, simuladores, covardes e ávidos de lucro, e enquanto lhes fazes bem são inteiramente teus, oferecem-te o sangue, os bens, a vida e os filhos, quando, como acima disse, o perigo está longe; mas quando ele chega, revoltam-se.” O texto aponta uma inovação na teoria política na época moderna expressa na distinção entre: ",
    opcoes: [
      "Idealidade e efetividade da moral",
      "Nulidade e preservabilidade da liberdade",
      "Ilegalidade e legitimidade do governante",
      "Verificabilidade e possibilidade da verdade",
      "Universalidade e particularidade da justiça",
    ],
    correta: "Idealidade e efetividade da moral",
    categoria: "Filosofia",
    explicacao: "",
  },
  {
    pergunta:
      "“Gerineldo dorme porque já está conformado com o seu mundo. Porque já sabe tudo o que lhe pode acontecer após haver submetido todos os objetos que o rodeiam a um minucioso inventário de possibilidades. Seu apartamento, mais que um apartamento, é uma teoria de sorte e de azar. Melhor que ninguém, Gerineldo conhece o coeficiente da dilatação de suas janelas e mantém marcado no termômetro, com uma linha vermelha, o ponto em que se quebrarão os vidros, despedaçados em estilhaços de morte. Sabe que os arquitetos e os engenheiros já previram tudo, menos o que nunca já aconteceu.” A postura determinista adotada pelo personagem Gerineldo contrasta com a ideia existencialista contida no pensamento filosófico de Sartre porque:",
    opcoes: [
      "O determinismo nega a liberdade humana, enquanto Sartre afirma que o homem está condenado a ser livre",
      "A previsibilidade dos eventos reforça a autonomia individual, segundo Sartre",
      "A conformidade com o mundo é uma expressão da liberdade autêntica para Sartre",
      "O existencialismo de Sartre defende que o ser humano deve se submeter às estruturas pré-estabelecidas",
      "A antecipação dos acontecimentos é uma forma de exercer a liberdade plena, segundo Sartre",
    ],
    correta:
      "A antecipação dos acontecimentos é uma forma de exercer a liberdade plena, segundo Sartre.",
    categoria: "Filosofia",
    explicacao: "",
  },
  {
    pergunta:
      "Um bloco de 2 kg é solto do alto de uma rampa de 5 m de altura. Desprezando o atrito, qual é sua velocidade ao atingir a base?",
    opcoes: ["5 m/s", "7 m/s", "10 m/s", "15 m/s", "20 m/s"],
    correta: "10 m/s",
    categoria: "Física",
    explicacao: "",
  },
  {
    pergunta:
      "Um carro move-se com velocidade constante de 90 km/h em uma estrada reta. Quanto tempo ele leva para percorrer 45 km?",
    opcoes: [
      "15 minutos",
      "20 minutos",
      "30 minutos",
      "45 minutos",
      "60 minutos",
    ],
    correta: "30 minutos",
    categoria: "Física",
    explicacao: "",
  },
  {
    pergunta:
      "Um corpo de 10 kg está sobre uma superfície horizontal sem atrito. Uma força de 50 N é aplicada sobre ele. Qual será a aceleração do corpo?",
    opcoes: ["2 m/s²", "5 m/s²", "10 m/s²", "20 m/s²", "50 m/s²"],
    correta: "5 m/s²",
    categoria: "Física",
    explicacao: "",
  },
  {
    pergunta:
      "Uma amostra de gás ideal sofre compressão isotérmica. Isso significa que, ao final do processo:",
    opcoes: [
      "A temperatura aumenta",
      "O volume aumenta",
      "A energia interna aumenta",
      "A temperatura permanece constante",
      "A pressão permanece constante",
    ],
    correta: "A temperatura permanece constante",
    categoria: "Física",
    explicacao: "",
  },
  {
    pergunta:
      "Três resistores de 6 Ω estão ligados em paralelo. Qual é a resistência equivalente do circuito?",
    opcoes: ["2 Ω", "3 Ω", "6 Ω", "12 Ω", "18 Ω"],
    correta: "2 Ω",
    categoria: "Física",
    explicacao: "",
  },
  {
    pergunta:
      "Um objeto é colocado a 30 cm de uma lente convergente de distância focal 20 cm. A imagem formada é:",
    opcoes: [
      "Virtual, direita e maior",
      "Real, invertida e maior",
      "Real, invertida e menor",
      "Virtual, invertida e menor",
      "Real, direita e maior",
    ],
    correta: "Real, invertida e maior",
    categoria: "Física",
    explicacao: "",
  },
  {
    pergunta:
      "A globalização é um processo de intensificação das relações econômicas, sociais, culturais e políticas em escala mundial. Sobre esse tema, assinale a alternativa correta:",
    opcoes: [
      "A globalização eliminou as desigualdades entre países desenvolvidos e subdesenvolvidos",
      "Com a globalização, as fronteiras nacionais deixaram de existir, tornando-se irrelevantes",
      "A globalização se caracteriza pela ampliação das redes de transporte, comunicação e fluxos financeiros",
      "O processo de globalização teve início com a Revolução Industrial no século XXI",
      "A globalização enfraqueceu as multinacionais e fortaleceu apenas empresas locais",
    ],
    correta:
      "A globalização se caracteriza pela ampliação das redes de transporte, comunicação e fluxos financeiros",
    categoria: "Geografia",
    explicacao: "",
  },
  {
    pergunta:
      "As ações humanas vêm causando diversos impactos negativos ao meio ambiente, afetando ecossistemas e a qualidade de vida. Sobre os impactos ambientais causados pelas atividades humanas, assinale a alternativa correta:",
    opcoes: [
      "A queimada de florestas tropicais reduz a emissão de gases de efeito estufa e melhora o equilíbrio climático",
      "O desmatamento contribui para o aumento da biodiversidade local e para a conservação do solo",
      "O uso excessivo de fertilizantes e agrotóxicos pode contaminar o solo e os corpos d’água, afetando a saúde humana",
      "A urbanização desordenada promove maior permeabilidade do solo e facilita o escoamento da água da chuva",
      "As atividades industriais e o transporte não influenciam na poluição atmosférica das grandes cidades",
    ],
    correta:
      "O uso excessivo de fertilizantes e agrotóxicos pode contaminar o solo e os corpos d’água, afetando a saúde humana",
    categoria: "Geografia",
    explicacao: "",
  },
  {
    pergunta:
      "A geopolítica estuda as relações de poder entre os Estados e suas estratégias para controlar territórios, recursos e populações. Um exemplo atual é a disputa por áreas estratégicas e recursos naturais. Assinale a alternativa correta sobre a geopolítica mundial:",
    opcoes: [
      "A geopolítica perdeu importância com a globalização, já que hoje todos os países têm relações igualitárias",
      "A disputa por recursos como petróleo e água não influencia conflitos armados no século XXI",
      "A Guerra Fria foi um exemplo de confronto direto entre EUA e URSS, com batalhas em seus próprios territórios",
      "O controle de rotas comerciais e recursos naturais continua sendo motivo de tensão entre países",
      "A Organização das Nações Unidas (ONU) tem autoridade militar sobre todos os países e pode intervir sem restrições",
    ],
    correta:
      "O controle de rotas comerciais e recursos naturais continua sendo motivo de tensão entre países",
    categoria: "Geografia",
    explicacao: "",
  },
  {
    pergunta:
      "Observe a descrição: 'Clima com verões quentes e úmidos e invernos frios e secos. A vegetação original predominante é de campos e florestas decíduas.' Esse tipo climático é mais comum:",
    opcoes: [
      "No sertão nordestino brasileiro",
      "Na região Sudeste do Brasil",
      "Na porção central da América do Norte",
      "No litoral do norte africano",
      "Na região equatorial da África",
    ],
    correta: "Na porção central da América do Norte",
    categoria: "Geografia",
    explicacao: "",
  },
  {
    pergunta:
      "A formação dos blocos econômicos é uma característica da globalização. Um exemplo de bloco que busca a integração econômica e política entre países sul-americanos é:",
    opcoes: ["OTAN", "MERCOSUL", "OPEP", "União Europeia", "Nafta"],
    correta: "MERCOSUL",
    categoria: "Geografia",
    explicacao: "",
  },
  {
    pergunta:
      "Leia o texto a seguir:'A expansão da globalização intensificou o consumo de bens em escala global, padronizando gostos e comportamentos em diferentes partes do mundo. Redes de lojas, marcas e produtos tornaram-se símbolos de status e modernidade, ainda que, muitas vezes, desconsiderem as realidades culturais e econômicas locais.'Com base no texto, é correto afirmar que:",
    opcoes: [
      "A globalização reduziu o consumo ao mínimo necessário, promovendo modos de vida sustentáveis",
      "O consumismo global é uma tendência homogênea que respeita a diversidade cultural",
      "A padronização de produtos e marcas reflete a dominação de modelos culturais hegemônicos",
      "O consumo globalizado promove a autonomia econômica das comunidades locais",
      "A globalização impediu a formação de mercados internacionais de bens simbólicos",
    ],
    correta:
      "A padronização de produtos e marcas reflete a dominação de modelos culturais hegemônicos",
    categoria: "Geografia",
    explicacao: "",
  },
  {
    pergunta:
      "Texto: “O Brasil, no Segundo Reinado, viu o café tornar-se o principal produto de exportação. Esse crescimento esteve associado ao uso intensivo da mão de obra escravizada.” (Adaptado de Boris Fausto) Uma consequência da economia cafeeira no Segundo Reinado foi:",
    opcoes: [
      "A abolição imediata da escravidão",
      "A substituição do latifúndio pelo minifúndio",
      "O fortalecimento da elite agrária escravista",
      "A industrialização da região Norte",
      "A criação de leis para limitar o trabalho escravo",
    ],
    correta: "O fortalecimento da elite agrária escravista",
    categoria: "História",
    explicacao: "",
  },
  {
    pergunta:
      "Texto: “Durante o regime militar no Brasil, a censura foi uma ferramenta comum. Notícias, músicas e filmes eram vetados por contrariar os interesses do governo.” (Fonte: Comissão da Verdade) A função da censura no regime militar era:",
    opcoes: [
      "Fortalecer o pluralismo cultural",
      "Proteger os direitos civis dos artistas",
      "Controlar a informação e eliminar críticas ao regime",
      "Incentivar a produção artística independente",
      "Estimular o pensamento crítico nas escolas",
    ],
    correta: "",
    categoria: "História",
    explicacao: "",
  },
  {
    pergunta:
      "Texto: “Durante o Estado Novo, Vargas consolidou seu poder por meio da centralização administrativa, da propaganda oficial e do controle sobre sindicatos e imprensa.” (Fonte: Arquivo Nacional) O paradoxo do governo Vargas no Estado Novo reside em: ",
    opcoes: [
      "Defender o liberalismo econômico enquanto adotava políticas socialistas",
      "Promover ampliação dos direitos trabalhistas sob um regime autoritário",
      "Incentivar o federalismo e a autonomia dos estados",
      "Adotar o comunismo como forma de governo",
      "Romper totalmente com o apoio das massas urbanas",
    ],
    correta:
      "Promover ampliação dos direitos trabalhistas sob um regime autoritário",
    categoria: "História",
    explicacao: "",
  },
  {
    pergunta:
      "A Revolução Francesa (1789) marcou uma ruptura com o Antigo Regime e influenciou transformações políticas e sociais no mundo ocidental. Sobre esse processo histórico, assinale a alternativa correta:",
    opcoes: [
      "A Revolução teve apoio exclusivo da nobreza, que buscava ampliar seus privilégios frente ao poder absolutista",
      "A queda da Bastilha simbolizou a vitória do rei sobre os ideais iluministas",
      "O lema 'Liberdade, Igualdade, Fraternidade' expressava os ideais iluministas incorporados pelos revolucionários",
      "O processo revolucionário francês não teve impacto sobre as colônias europeias nas Américas",
      "A Revolução Francesa consolidou o poder absolutista na França sob o comando de Napoleão Bonaparte",
    ],
    correta:
      "A Revolução Francesa consolidou o poder absolutista na França sob o comando de Napoleão Bonaparte",
    categoria: "História",
    explicacao: "",
  },
  {
    pergunta:
      "No Segundo Reinado (1840–1889), o Brasil viveu um período de estabilidade política relativa e desenvolvimento do café como principal produto da economia. No entanto, esse período também foi marcado por tensões sociais. Assinale a alternativa que apresenta um desses conflitos sociais:",
    opcoes: [
      "Revolta da Vacina, causada pela imposição da vacinação obrigatória no Rio de Janeiro",
      "Revolução Praieira, com forte influência do anarquismo e da luta contra a escravidão",
      "Guerra dos Farrapos, motivada por tensões comerciais e pela resistência à centralização imperial",
      "Confederação do Equador, promovida pela oposição ao processo de independência",
      " Revolta dos Malês, que representou a insatisfação dos escravizados muçulmanos na Bahia",
    ],
    correta:
      " Revolta dos Malês, que representou a insatisfação dos escravizados muçulmanos na Bahia",
    categoria: "História",
    explicacao: "",
  },
  {
    pergunta:
      "O governo de Getúlio Vargas (1930–1945) implementou importantes mudanças no Brasil, especialmente no campo das relações de trabalho. Entre as medidas adotadas por Vargas, assinale a alternativa que melhor caracteriza sua política trabalhista: ",
    opcoes: [
      "Criação de sindicatos livres e independentes, sem interferência do Estado",
      "Legalização da jornada de trabalho de 12 horas diárias sem descanso semanal",
      " Implementação da Consolidação das Leis do Trabalho (CLT), com direitos como férias e salário mínimo",
      "Extinção do Ministério do Trabalho e redução do papel do Estado nas relações trabalhistas",
      "Fim da carteira de trabalho e substituição por contratos verbais entre patrões e empregados",
    ],
    correta:
      "Implementação da Consolidação das Leis do Trabalho (CLT), com direitos como férias e salário mínimo",
    categoria: "História",
    explicacao: "",
  },
  {
    pergunta:
      "Texto: Aviso em um hotel: Dear guests, please remember to leave your room key at the front desk before going out for the day. This helps us keep track of who is in the building and improves security for all. Pergunta: O aviso tem como principal objetivo:",
    opcoes: [
      "Informar que o hóspede deve pagar antes de sair",
      "Sugerir que o hóspede mantenha a chave consigo",
      "Solicitar que o hóspede deixe a chave na recepção ao sair",
      "Proibir que o hóspede saia durante o dia",
      "Anunciar um novo sistema de segurança",
    ],
    correta: "Solicitar que o hóspede deixe a chave na recepção ao sair",
    categoria: "Inglês",
    explicacao: "",
  },
  {
    pergunta:
      "Texto: Citação em blog de viagens: 'You don’t have to be rich to travel well.' '— Eugene Fodor, travel writer' Contexto: A frase aparece no início de um artigo que ensina como fazer viagens econômicas e memoráveis, destacando que o mais importante é o planejamento e a experiência cultural, e não o luxo. Pergunta: De acordo com o autor, o que não é necessário para viajar bem? ",
    opcoes: [
      "Ter passaporte válido",
      "Estar com boa saúde",
      "Ter tempo livre",
      "Ser rico",
      "Planejar o roteiro",
    ],
    correta: "Ser rico",
    categoria: "Inglês",
    explicacao: "",
  },
  {
    pergunta:
      "Texto: Campanha ambiental em uma rede social: 'Reduce, Reuse, Recycle. The planet will thank you later. Let’s make sustainability more than just a word — let’s make it a habit.' Pergunta: O objetivo principal dessa postagem é:",
    opcoes: [
      "Promover um novo produto sustentável",
      "Incentivar comportamentos ecológicos no cotidiano",
      "Informar sobre uma nova lei ambiental",
      "Criticar a indústria de embalagens",
      "Divulgar um evento de reciclagem",
    ],
    correta: "Incentivar comportamentos ecológicos no cotidiano",
    categoria: "Inglês",
    explicacao: "",
  },
  {
    pergunta:
      "Texto: Frase em uma revista de tecnologia: 'Technology is a useful servant but a dangerous master.' '— Christian Lous Lange' A frase aparece em uma matéria que debate o uso excessivo de dispositivos eletrônicos e algoritmos que moldam comportamentos online. Pergunta: A partir do contexto, a frase expressa que:",
    opcoes: [
      "A tecnologia deve ser evitada sempre que possível",
      "O ser humano deve obedecer aos avanços tecnológicos",
      "O controle sobre a tecnologia é essencial para seu bom uso",
      "O futuro será dominado por máquinas inteligentes",
      "A tecnologia é inofensiva e sempre benéfica",
    ],
    correta: "O controle sobre a tecnologia é essencial para seu bom uso",
    categoria: "Inglês",
    explicacao: "",
  },
  {
    pergunta:
      "Imagem (descrita): Um cartum mostra uma pessoa tentando relaxar em casa, mas o celular exibe várias notificações como: 'New message', 'Hurry, limited offer!', 'You're missing out!', 'Update your app!' A expressão facial da pessoa demonstra ansiedade. Pergunta: Qual crítica social está presente na imagem?",
    opcoes: [
      "A dependência das empresas em notificações pagas",
      "O uso de celular para fins educativos",
      "A exaustão mental provocada pelo bombardeio de alertas digitais",
      "O desenvolvimento de novos aplicativos de saúde",
      "A eficiência da comunicação moderna",
    ],
    correta: "A exaustão mental provocada pelo bombardeio de alertas digitais",
    categoria: "Inglês",
    explicacao: "",
  },
  {
    pergunta:
      "Texto (editorial adaptado) 'Social media has revolutionized human interaction. While it allows people to connect across continents, it also creates echo chambers that reinforce personal biases and contribute to the polarization of public opinion.' Pergunta: Como o autor se posiciona em relação às redes sociais?",
    opcoes: [
      "Demonstra entusiasmo total quanto aos seus benefícios",
      "Apresenta uma visão neutra, sem opinião.",
      "Expõe tanto os aspectos positivos quanto os negativos",
      "Rejeita completamente o uso das redes sociais",
      "Ironiza quem usa redes sociais frequentemente",
    ],
    correta: "Expõe tanto os aspectos positivos quanto os negativos",
    categoria: "Inglês",
    explicacao: "",
  },
  {
    pergunta:
      "Cárcere das Almas Ah! Toda a alma num cárcere anda presa, Soluçando nas trevas, entre as grades, Do calabouço, olhando imensidades, Mares, estrelas, tardes, natureza. Tudo se veste de uma igual grandeza,  Quando a alma entre grilhões as liberdades, Sonha e, sonhando, as imortalidades, Rasga no etéreo o Espaço da Pureza. Ó almas presas, mudas e fechadas, Nas prisões colossais e abandonadas, Da Dor no calabouço, atroz, funéreo! Nesses silêncios solitários, graves, Que chaveiro do Céu possui as chaves, Para abrir-vos as portas do Mistério?! — Cruz e Sousa Os elementos formais e temáticos relacionados com o contexto cultural do Simbolismo encontrados no poema Cárcere das Almas, de Cruz e Sousa, são:",
    opcoes: [
      "a opção pela abordagem, em linguagem simples e direta, de temas filosóficos",
      "a prevalência do lirismo amoroso e intimista em relação à temática nacionalista",
      "o refinamento estético da forma poética e o tratamento metafísico de temas universais",
      "a crítica social expressa por meio de uma linguagem coloquial e irônica",
      "a descrição objetiva da realidade, com ênfase na observação científica",
    ],
    correta:
      "o refinamento estético da forma poética e o tratamento metafísico de temas universais",
    categoria: "Língua Portuguesa",
    explicacao: "",
  },
  {
    pergunta:
      "Leia o trecho da música Tempo Perdido, da Legião Urbana:“Nosso suor sagrado É bem mais belo que esse sangue amargo”Nesse trecho, a musicalidade dos versos contribui para a expressividade da mensagem. Observa-se a repetição intencional de sons consonantais semelhantes, criando um efeito sonoro que reforça o contraste entre elementos positivos e negativos. A figura de linguagem predominante nesse trecho, relacionada à repetição de sons consonantais, é:",
    opcoes: ["Antítese", "Hipérbole", "Metonímia", "Eufemismo", "Aliteração"],
    correta: "Aliteração",
    categoria: "Língua Portuguesa",
    explicacao: "",
  },
  {
    pergunta:
      "Quando Ismália enlouqueceu, Pôs-se na torre a sonhar...Viu uma lua no céu, Viu outra lua no mar. No sonho em que se perdeu,Banhou-se toda em luar... Queria subir ao céu, Queria descer ao mar... E, no desvario seu, Na torre pôs-se a cantar... Estava perto do céu, Estava longe do mar... E como um anjo pendeu, As asas para voar... Queria a lua do céu, Queria a lua do mar... As asas que Deus lhe deu, Ruflaram de par em par... Sua alma subiu ao céu, Seu corpo desceu ao mar... O poema “Ismália” trata de uma personagem em estado de delírio poético, entre o desejo de transcendência e a angústia da realidade. A linguagem simbolista marca presença ao longo do texto. Com base na leitura do poema, é possível inferir que:",
    opcoes: [
      "Ismália morre afogada após confundir a realidade com um sonho de amor",
      "O poema descreve uma crítica à repressão feminina no contexto social da época",
      "A figura de Ismália representa um ideal de equilíbrio entre razão e emoção",
      "A busca de Ismália por alcançar as luas simboliza o desejo de fuga da realidade",
      "O eu lírico revela-se como um observador racional diante da loucura de Ismália",
    ],
    correta:
      "O poema descreve uma crítica à repressão feminina no contexto social da época",
    categoria: "Língua Portuguesa",
    explicacao: "",
  },
  {
    pergunta:
      "– Me disseram... – Disseram-me. – Hein? – O correto é 'disseram-me'. Não 'me disseram'. – Eu falo como quero. E te digo mais... Ou é 'digo-te'? – O quê? – Digo-te que você... – O 'te' e o 'você' não combinam. – Lhe digo? – Também não. – O que você ia me dizer? – Que você está sendo grosseiro, pedante e chato. Pergunta:Esse diálogo ilustra uma situação em que o uso da norma-padrão torna-se inadequado em razão do:",
    opcoes: [
      "falta de compreensão causada pelo choque entre gerações",
      "contexto de comunicação em que a conversa se dá",
      "contexto de comunicação em que a conversa se dá",
      "diferença de escolaridade entre os falantes",
      "nível social dos participantes da situação",
    ],
    correta: "contexto de comunicação em que a conversa se dá",
    categoria: "Língua Portuguesa",
    explicacao: "",
  },
  {
    pergunta:
      "“Passado muito tempo, resolvi tentar falar, porque estava sozinha me embrenhando na mesma vereda que Donana costumava entrar. Ainda recordo da palavra que escolhi: arado. Me deleitava vendo meu pai conduzindo o arado velho da fazenda carregado pelo boi, rasgando a terra para depois lançar grãos de arroz em torrões marrons e vermelhos revolvidos. Gostava do som redondo, fácil e ruidoso que tinha ao ser enunciado. 'Vou trabalhar no arado.' 'Vou arar a terra.' 'Seria bom ter um arado novo, esse arado tá troncho e velho.' O som que deixou minha boca era uma aberração, uma desordem, como se no lugar do pedaço perdido da língua tivesse um ovo quente. Era um arado torto, deformado, que penetrava a terra de tal forma a deixá-la infértil, destruída, dilacerada.” Pergunta: Com a perda de parte da língua na infância, a narradora tenta voltar a falar. Essa tentativa revela uma experiência que:",
    opcoes: [
      "reflete o olhar do pai sobre as etapas do plantio",
      "metaforiza a linguagem como ferramenta de lavoura",
      "explicita, na busca pela palavra, o medo da solidão",
      "confirma a frustração da narradora com relação à terra",
      "sugere, na ausência da linguagem, a estagnação do tempo",
    ],
    correta: "metaforiza a linguagem como ferramenta de lavoura",
    categoria: "Língua Portuguesa",
    explicacao: "",
  },
  {
    pergunta:
      "“O brasileiro é, antes de tudo, um forte. Não por vocação ou destino, mas por resistência. Entre tragédias, tropeços, zombarias e abusos históricos, ainda sabe rir. Ainda sonha. Ainda dança. Mesmo com o peso dos erros que não cometeu, segue tentando acertar.” Pergunta: O texto constrói uma imagem do povo brasileiro com base em uma perspectiva:",
    opcoes: [
      "Nacionalista exagerada, ao retratar o Brasil como exemplo mundial",
      "Irônica, ao criticar o otimismo do povo diante de tragédias",
      "Cética, ao desconfiar da capacidade de superação do povo",
      "Realista e crítica, ao reconhecer a força do povo apesar dos problemas",
      "Melancólica, ao enfatizar somente o sofrimento histórico do país",
    ],
    correta:
      "Realista e crítica, ao reconhecer a força do povo apesar dos problemas",
    categoria: "Língua Portuguesa",
    explicacao: "",
  },
  {
    pergunta:
      "Um professor registrou as notas de 9 alunos em uma prova de Matemática, conforme os dados abaixo: Notas: 4, 6, 7, 7, 8, 8, 8, 9, 10. Com base nesses dados, assinale a alternativa correta:",
    opcoes: [
      "A média, a mediana e a moda possuem valores iguais",
      "A moda é 8, pois é a nota que mais se repete",
      "A mediana é 7, pois está no meio da distribuição",
      "A média é 7,5 e a moda é 6",
      "A média é 8, a mediana é 7 e a moda é 10",
    ],
    correta: "A moda é 8, pois é a nota que mais se repete",
    categoria: "Matemática",
    explicacao: "",
  },
  {
    pergunta:
      "Uma empresa cobra R$ 50,00 fixo por um serviço mais R$ 30,00 por hora de trabalho. Qual a função que representa o valor total pago f(x) em que x é o número de horas?",
    opcoes: ["f(x)=30x", "f(x)=50x+30", "f(x)=30x+50", "f(x)=80x", "f(x)=50"],
    correta: "f(x)=30x+50",
    categoria: "Matemática",
    explicacao: "",
  },
  {
    pergunta:
      "A razão entre a idade de Ana e a de Bruno é 3:5. Se Bruno tem 40 anos, qual a idade de Ana?",
    opcoes: ["20", "24", "28", "30", "32"],
    correta: "24",
    categoria: "Matemática",
    explicacao: "",
  },
  {
    pergunta: "Considere a PA: 5, 8, 11, 14, ... Qual é o 15º termo dessa PA?",
    opcoes: ["45", "46", "47", "48", "49"],
    correta: "47",
    categoria: "Matemática",
    explicacao: "",
  },
  {
    pergunta: "Dada a matriz: A = 3 7 2 / 1 4 5 . Qual é a ordem da matriz A?",
    opcoes: ["2x2", "3x2", "2x3", "3x3", "1x3"],
    correta: "2x3",
    categoria: "Matemática",
    explicacao: "",
  },
  {
    pergunta:
      "Um táxi cobra uma tarifa inicial fixa de R$ 5,00 para começar a corrida. Depois, cobra R$ 2,50 por quilômetro rodado. Se uma pessoa pegar uma corrida de táxi que custou exatamente R$ 32,50, qual foi a distância percorrida em quilômetros?",
    opcoes: ["10km", "11km", "12km", "13km", "14km"],
    correta: "11km",
    categoria: "Matemática",
    explicacao: "",
  },
  {
    pergunta: "'Mg + 2 HCl → MgCl₂ + H₂↑' Essa reação é classificada como:",
    opcoes: [
      "De síntese",
      "De decomposição",
      "De simples troca",
      "De dupla troca",
      "De neutralização",
    ],
    correta: "De simples troca",
    categoria: "Química",
    explicacao: "",
  },
  {
    pergunta:
      "'CH₄(g) + H₂O(g) ⇌ CO(g) + 3 H₂(g) (ΔH > 0)' Um aumento na temperatura causa:",
    opcoes: [
      "Deslocamento para a esquerda",
      "Redução do número de moléculas gasosas",
      "Deslocamento para a direita",
      "Nenhuma mudança",
      "Formação de água líquida",
    ],
    correta: "Deslocamento para a direita",
    categoria: "Química",
    explicacao: "",
  },
  {
    pergunta:
      "'C₄H₁₀ + 6,5 O₂ → 4 CO₂ + 5 H₂O'vQuantas moléculas de CO₂ são produzidas para cada molécula de butano?",
    opcoes: ["1", "2", "3", "4", "5"],
    correta: "4",
    categoria: "Química",
    explicacao: "",
  },
  {
    pergunta:
      "O uso de catalisadores em carros visa diminuir a emissão de monóxido de carbono (CO). Esse gás é perigoso porque:",
    opcoes: [
      "Irrita os olhos",
      "Provoca chuva ácida",
      "Provoca chuva ácida",
      "Causa destruição da camada de ozônio",
      "É responsável pelo mau cheiro nos combustíveis",
    ],
    correta: "Provoca chuva ácida",
    categoria: "Química",
    explicacao: "",
  },
  {
    pergunta: "Uma substância tem pH = 2. Isso indica que ela:",
    opcoes: [
      "É uma base forte",
      "É uma base fraca",
      "É neutra",
      "É um ácido fraco",
      "É um ácido forte",
    ],
    correta: "É um ácido forte",
    categoria: "Química",
    explicacao: "",
  },
  {
    pergunta:
      "Ao se colocar álcool sobre a pele, sente-se um frio imediato. Isso ocorre porque:",
    opcoes: [
      "O álcool aquece a pele ao entrar em contato com ela",
      "O álcool absorve calor ao evaporar",
      "O álcool reage com o suor",
      "O álcool impede a transpiração",
      "",
    ],
    correta: "O álcool absorve calor ao evaporar",
    categoria: "Química",
    explicacao: "",
  },
  {
    pergunta:
      "A cultura pode ser compreendida como o conjunto de conhecimentos, crenças, arte, moral, leis, costumes e todos os outros hábitos e capacidades adquiridos pelo ser humano como membro da sociedade. Essa definição está relacionada à ideia de que:",
    opcoes: [
      "A cultura é natural e transmitida biologicamente",
      "A cultura é estática e imutável",
      "A cultura é exclusiva das sociedades industrializadas",
      "A cultura é aprendida e transmitida socialmente",
      "A cultura é sinônimo de evolução tecnológica",
    ],
    correta: "A cultura é aprendida e transmitida socialmente",
    categoria: "Sociologia",
    explicacao: "",
  },
  {
    pergunta:
      "A estratificação social refere-se à divisão da sociedade em camadas hierarquizadas. Um exemplo comum desse fenômeno ocorre quando: ",
    opcoes: [
      "Todos têm o mesmo acesso à educação e saúde",
      "A renda e os bens materiais são distribuídos de maneira igualitária",
      "Grupos sociais possuem diferentes níveis de prestígio, poder e riqueza",
      "As classes sociais deixam de existir por causa da globalização",
      "O sistema de castas é substituído pela democracia direta",
    ],
    correta:
      "Grupos sociais possuem diferentes níveis de prestígio, poder e riqueza",
    categoria: "Sociologia",
    explicacao: "",
  },
  {
    pergunta:
      "No contexto do capitalismo moderno, o sociólogo Karl Marx destacou a alienação do trabalhador. Isso significa que:",
    opcoes: [
      "O trabalhador se sente plenamente realizado no ambiente industrial",
      "O trabalhador detém os meios de produção e o controle sobre seu trabalho",
      "O trabalhador reconhece o valor moral do seu patrão.",
      "O trabalhador perde o controle sobre o processo e o produto do seu trabalho",
      "O trabalhador não precisa mais vender sua força de trabalho",
    ],
    correta:
      "O trabalhador perde o controle sobre o processo e o produto do seu trabalho",
    categoria: "Sociologia",
    explicacao: "",
  },
  {
    pergunta:
      "Os movimentos sociais podem ser compreendidos como formas de ação coletiva que buscam mudanças ou resistem a elas. Um exemplo de movimento social reformista seria:",
    opcoes: [
      "Um grupo que luta por uma revolução armada para derrubar o Estado",
      "Um coletivo que reivindica melhorias nas condições de trabalho por meio de greves.",
      "Uma organização que visa restaurar uma monarquia absolutista",
      "Um grupo que promove o isolamento social e a autossuficiência econômica",
      "Uma milícia que impõe normas religiosas por meio da violência",
    ],
    correta:
      "Um coletivo que reivindica melhorias nas condições de trabalho por meio de greves.",
    categoria: "Sociologia",
    explicacao: "",
  },
  {
    pergunta:
      "Max Weber definiu o Estado como a entidade que detém o monopólio legítimo da força dentro de um território. Para Weber, a legitimidade do poder pode se basear em três tipos de dominação: tradicional, carismática e legal. A dominação legal-racional se caracteriza por: ",
    opcoes: [
      "Lealdade a líderes que possuem carisma e habilidades extraordinárias",
      "Aceitação de leis codificadas e da autoridade impessoal do cargo",
      "Tradições milenares que mantêm o respeito à autoridade ancestral",
      "Religiões organizadas que fundamentam a moral estatal",
      "Rebeliões populares que desafiam a ordem institucional",
    ],
    correta: "Aceitação de leis codificadas e da autoridade impessoal do cargo",
    categoria: "Sociologia",
    explicacao: "",
  },
  {
    pergunta:
      "Na contemporaneidade, o sociólogo Stuart Hall aponta que a identidade deixou de ser algo fixo e passou a ser compreendida como múltipla e fragmentada. Essa visão dialoga com o processo de globalização, pois: ",
    opcoes: [
      "A globalização elimina todas as culturas locais e impõe uma identidade única",
      "A globalização mantém as fronteiras culturais intactas e imutáveis",
      "A globalização acelera as migrações e o contato com múltiplas referências culturais",
      "A globalização fortalece o enraizamento identitário exclusivo do Estado-nação",
      "A globalização leva à total perda de sentido da identidade pessoal",
    ],
    correta:
      "A globalização acelera as migrações e o contato com múltiplas referências culturais",
    categoria: "Sociologia",
    explicacao: "",
  },
];

// Função para inserir
async function inserirPerguntas() {
  const batch = db.batch();

  perguntas.forEach((pergunta) => {
    const docRef = db.collection("perguntas").doc(); // ID automático
    batch.set(docRef, pergunta);
  });

  await batch.commit();
  console.log("✅ Perguntas inseridas com sucesso!");
}

inserirPerguntas().catch(console.error);
