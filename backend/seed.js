const admin = require("firebase-admin");
const serviceAccount = require("./firebase-key.json"); // certifique-se que está correto

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const perguntas = [
  {
    pergunta:
      "A Semana de Arte Moderna de 1922, realizada em São Paulo, foi um marco para a renovação estética no Brasil. Nela, artistas como Mário de Andrade e Anita Malfatti propuseram uma arte com características próprias, rompendo com os padrões acadêmicos. Esse movimento tinha como principal objetivo:",
    opcoes: [
      "Valorizar a arte europeia clássica como modelo para os artistas brasileiros",
      "Propor uma arte alinhada com os padrões barrocos brasileiros",
      "Rejeitar completamente toda forma de arte tradicional",
      "Promover a liberdade estética e valorizar a identidade cultural brasileira",
      "Estimular a volta ao academicismo artístico do século XIX.",
    ],
    correta:
      "Promover a liberdade estética e valorizar a identidade cultural brasileira",
    categoria: "artes",
    explicacao:
      "A Semana de Arte Moderna marcou uma ruptura com os modelos tradicionais e buscou valorizar uma arte autenticamente brasileira, incentivando a liberdade estética e a valorização da identidade nacional.",
  },
  {
    pergunta:
      "As manifestações culturais populares como o maracatu, o cordel e o bumba-meu-boi fazem parte do patrimônio imaterial brasileiro. Essas expressões são importantes porque:",
    opcoes: [
      "Representam exclusivamente a cultura europeia no Brasil",
      "São praticadas apenas em festas religiosas",
      "Têm origem exclusivamente indígena",
      "São formas de expressão da diversidade cultural brasileira",
      "Foram criadas por artistas plásticos renomados",
    ],
    correta: "São formas de expressão da diversidade cultural brasileira",
    categoria: "artes",
    explicacao:
      "Expressões como o maracatu e o cordel são importantes por refletirem a diversidade cultural do Brasil, misturando influências indígenas, africanas e europeias em práticas populares e regionais.",
  },
  {
    pergunta:
      "Uma das características da arte contemporânea é a valorização do conceito e a interação com o público, como nas instalações artísticas e nas performances. Esse tipo de arte busca principalmente:",
    opcoes: [
      "Imitar com perfeição a natureza",
      "Representar temas religiosos com rigor técnico",
      "Transmitir mensagens e provocar reflexões por meio da experiência",
      "Resgatar valores acadêmicos da Renascença",
      "Rejeitar totalmente qualquer tipo de tecnologia",
    ],
    correta:
      "Transmitir mensagens e provocar reflexões por meio da experiência",
    categoria: "artes",
    explicacao:
      "Na arte contemporânea, o foco está no conceito e na experiência. O objetivo é provocar reflexões no público, muitas vezes por meio de instalações, performances e interatividade, e não apenas pela técnica ou aparência da obra.",
  },
  {
    pergunta:
      "No Renascimento, artistas como Leonardo da Vinci e Michelangelo revolucionaram a arte europeia com novas técnicas e temas. Uma inovação marcante desse período foi:",
    opcoes: [
      "A escultura feita com materiais recicláveis",
      "A pintura abstrata sem perspectiva",
      "O uso da perspectiva para criar profundidade",
      "A ausência de representações religiosas",
      "A valorização do gótico e do medievalismo",
    ],
    correta: "O uso da perspectiva para criar profundidade",
    categoria: "artes",
    explicacao:
      "O Renascimento trouxe inovações como o uso da perspectiva na pintura, permitindo representar profundidade e realismo, o que revolucionou a arte europeia da época.",
  },
  {
    pergunta:
      "Atualmente, muitos artistas utilizam softwares, redes sociais e realidade aumentada em suas criações. Essa integração entre arte e tecnologia:",
    opcoes: [
      "Impede a criação de obras com valor estético",
      "Substitui o papel do artista por máquinas",
      "Amplia as possibilidades de expressão e alcance das obras",
      "É limitada a exposições físicas em museus",
      "É restrita à publicidade e ao design gráfico",
    ],
    correta: "Amplia as possibilidades de expressão e alcance das obras",
    categoria: "artes",
    explicacao:
      "A integração entre arte e tecnologia abre novos caminhos para a criação, permitindo aos artistas explorar mídias digitais, interatividade e atingir um público mais amplo.",
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
    categoria: "artes",
    explicacao:
      "O movimento tropicalista misturava influências nacionais e internacionais, desafiando padrões estéticos rígidos e promovendo liberdade criativa, além de valorizar a mistura de estilos culturais e musicais.",
  },
  {
    pergunta:
      "A arte rupestre, encontrada em cavernas e abrigos rochosos ao redor do mundo, é uma das formas mais antigas de expressão artística. O principal material utilizado para criar essas pinturas e gravuras era:",
    opcoes: [
      "Tinta a óleo sintética",
      "Pigmentos minerais (como óxidos de ferro) e carvão",
      "Aquarela industrial",
      "Tinta acrílica moderna",
      "Giz de cera",
    ],
    correta: "Pigmentos minerais (como óxidos de ferro) e carvão",
    categoria: "artes",
    explicacao:
      "A arte rupestre era criada com pigmentos naturais, como óxidos de ferro (que geravam cores como vermelho e amarelo) e carvão, misturados a aglutinantes como água ou gordura animal.",
  },
  {
    pergunta:
      "O Grafite é uma manifestação artística que se popularizou em centros urbanos, muitas vezes associada a subculturas e movimentos sociais. Diferente da pichação, o grafite busca:",
    opcoes: [
      "Apenas demarcar territórios para gangues",
      "Ocupar espaços públicos sem nenhuma intenção estética",
      "Expressar mensagens políticas ou sociais de forma destrutiva",
      "A produção de obras visuais com intenção estética e de comunicação",
      "Ser uma forma de vandalismo sem propósito",
    ],
    correta:
      "A produção de obras visuais com intenção estética e de comunicação",
    categoria: "artes",
    explicacao:
      "Enquanto a pichação geralmente se concentra em textos e demarcação de território com caráter subversivo, o grafite se diferencia pela sua intenção artística e estética, buscando expressar ideias e embelezar espaços urbanos.",
  },
  {
    pergunta:
      "No teatro, a função do diretor é crucial para a montagem de uma peça. Entre as responsabilidades do diretor teatral, destaca-se:",
    opcoes: [
      "Apenas atuar no palco",
      "Escrever o roteiro da peça",
      "Cuidar da iluminação e sonoplastia apenas",
      "Coordenar todos os elementos da encenação, do elenco à cenografia",
      "Distribuir os ingressos para a plateia",
    ],
    correta:
      "Coordenar todos os elementos da encenação, do elenco à cenografia",
    categoria: "artes",
    explicacao:
      "O diretor teatral é o responsável por conceber a visão artística da peça, orientar os atores, integrar os elementos cênicos (cenário, figurino, luz, som) e garantir a coerência da encenação.",
  },
  {
    pergunta:
      "A música, em suas diversas formas, é um elemento fundamental da cultura de um povo. O samba, por exemplo, é um gênero musical brasileiro que tem forte influência de qual cultura?",
    opcoes: [
      "Indígena",
      "Europeia (especialmente portuguesa)",
      "Asiática",
      "Africana",
      "Norte-americana",
    ],
    correta: "Africana",
    categoria: "artes",
    explicacao:
      "O samba tem suas raízes nas tradições musicais e rítmicas dos povos africanos trazidos ao Brasil, misturando-se com influências europeias e indígenas ao longo do tempo.",
  },
  {
    pergunta:
      "A fotografia, desde sua invenção no século XIX, revolucionou a forma como registramos o mundo. Uma das principais transformações que a fotografia trouxe para a arte foi:",
    opcoes: [
      "Eliminar a necessidade da pintura e do desenho",
      "Tornar a arte acessível apenas a uma elite",
      "Desafiar a representação realista na pintura e abrir caminho para a abstração",
      "Restringir a criatividade dos artistas a temas cotidianos",
      "Priorizar a subjetividade em detrimento da documentação",
    ],
    correta:
      "Desafiar a representação realista na pintura e abrir caminho para a abstração",
    categoria: "artes",
    explicacao:
      "Com a fotografia assumindo o papel de reproduzir a realidade com fidelidade, a pintura foi liberada dessa 'obrigação', abrindo espaço para a experimentação de novas linguagens e a exploração de temas abstratos e subjetivos.",
  },
  {
    pergunta:
      "As esculturas gregas clássicas, como as obras de Fídias, são conhecidas por sua busca pela perfeição formal e pelo ideal de beleza. Qual conceito estético é central nessas obras?",
    opcoes: [
      "O feio e o grotesco",
      "A assimetria radical",
      "O realismo expressionista",
      "O equilíbrio e a proporção (Harmonia)",
      "A representação da dor e do sofrimento de forma exagerada",
    ],
    correta: "O equilíbrio e a proporção (Harmonia)",
    categoria: "artes",
    explicacao:
      "A arte grega clássica buscava o ideal de beleza através da harmonia, do equilíbrio e da proporção, refletindo ideais filosóficos de ordem e perfeição. Isso se manifestava nas proporções do corpo humano nas esculturas.",
  },
  {
    pergunta:
      "A arquitetura gótica, que floresceu na Europa durante a Idade Média, é caracterizada por elementos marcantes. Qual das seguintes características é predominante na arquitetura gótica?",
    opcoes: [
      "Paredes maciças e poucas aberturas",
      "Telhados planos e terraços ajardinados",
      "Grandes vitrais, arcos ogivais e contrafortes",
      "Colunas dóricas e frontões triangulares",
      "Linhas retas e ângulos retos predominantes",
    ],
    correta: "Grandes vitrais, arcos ogivais e contrafortes",
    categoria: "artes",
    explicacao:
      "A arquitetura gótica se destacou pela verticalidade, uso de arcos ogivais (que permitiam maior altura), grandes vitrais coloridos (para iluminação interna) e contrafortes (para dar suporte às paredes mais finas e altas).",
  },
  {
    pergunta:
      "O movimento de Arte Pop (Pop Art), surgido na década de 1950, destacou-se por utilizar elementos da cultura de massa e do consumo em suas obras. Qual artista é um dos maiores expoentes da Pop Art, conhecido por suas serigrafias de latas de sopa e celebridades?",
    opcoes: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Andy Warhol",
      "Claude Monet",
      "Salvador Dalí",
    ],
    correta: "Andy Warhol",
    categoria: "artes",
    explicacao:
      "Andy Warhol é uma figura central da Pop Art. Suas obras, como as latas de sopa Campbell e retratos de Marilyn Monroe, celebrizaram a apropriação de imagens comerciais e do cotidiano na arte.",
  },
  {
    pergunta:
      "A Ópera é uma forma de arte teatral e musical em que a história é contada principalmente por meio do canto e da música. Qual desses elementos não é essencial para uma ópera?",
    opcoes: [
      "Orquestra ou acompanhamento musical",
      "Cantores solistas e coro",
      "Libreto (o texto da ópera)",
      "Danças de balé clássico",
      "Figurino e cenário",
    ],
    correta: "Danças de balé clássico",
    categoria: "artes",
    explicacao:
      "Embora algumas óperas possam incorporar balé, ele não é um elemento essencial para a definição de ópera. Os elementos centrais são o canto, a música (orquestra), o libreto (texto) e a encenação (figurino, cenário).",
  },
  {
    pergunta:
      "A presença de líquens em determinada região tem sido usada como indicadora de qualidade do ar. Esses organismos são sensíveis a poluentes atmosféricos, especialmente dióxido de enxofre (SO₂), sendo ausentes em locais poluídos. Considerando essa informação, a presença de líquens em uma área urbana indica:",
    opcoes: [
      "Alta biodiversidade vegetal",
      "Intensa atividade industrial",
      "Boa qualidade do ar",
      "Elevado teor de dióxido de carbono",
      "Aumento da temperatura local",
    ],
    correta: "Boa qualidade do ar",
    categoria: "biologia",
    explicacao:
      "Líquens são bioindicadores ambientais. Como são sensíveis a poluentes como o dióxido de enxofre (SO₂), sua presença em ambientes urbanos indica baixa poluição e, portanto, boa qualidade do ar.",
  },
  {
    pergunta:
      "Um casal heterozigoto para a fibrose cística (doença genética recessiva) deseja saber a probabilidade de seus filhos herdarem a doença. A fibrose é causada por um alelo recessivo. Qual a chance de esse casal ter um filho com a doença?",
    opcoes: ["0%", "25%", "50%", "75%", "100%"],
    correta: "25%",
    categoria: "biologia",
    explicacao:
      "Se ambos os pais são heterozigotos (Aa), há 25% de chance de o filho herdar os dois alelos recessivos (aa) e manifestar a doença, conforme o cruzamento mendeliano (Aa × Aa → 25% aa).",
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
    categoria: "biologia",
    explicacao:
      "Quando duas populações de uma mesma espécie ficam isoladas geograficamente e evoluem separadamente, adaptando-se ao seu ambiente, ocorre especiação alopátrica, gerando novas espécies.",
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
    categoria: "biologia",
    explicacao:
      "O aumento da frequência cardíaca e respiratória visa fornecer mais oxigênio e nutrientes aos músculos em atividade, garantindo energia para o esforço físico prolongado.",
  },
  {
    pergunta:
      "A esquistossomose, também conhecida como barriga d’água, é causada por um verme do gênero *Schistosoma*. Uma medida eficaz para a prevenção da esquistossomose é:",
    opcoes: [
      "Vacinação da população",
      "Controle de mosquito vetor",
      "Tratamento da água com flúor",
      "Eliminação de caramujos em áreas de risco",
      "Uso de inseticidas em residências",
    ],
    correta: "Eliminação de caramujos em áreas de risco",
    categoria: "biologia",
    explicacao:
      "A esquistossomose é transmitida por caramujos do gênero *Biomphalaria*, hospedeiros intermediários do parasita. Eliminar esses caramujos em áreas de risco reduz a transmissão da doença.",
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
    categoria: "biologia",
    explicacao:
      "A técnica do DNA recombinante insere genes humanos em bactérias, que passam a produzir proteínas humanas, como a insulina. Isso é possível porque organismos geneticamente modificados podem expressar genes de outras espécies (genes heterólogos).",
  },
  {
    pergunta:
      "As células vegetais se distinguem das células animais por apresentarem algumas estruturas exclusivas. Qual das seguintes estruturas é encontrada apenas em células vegetais?",
    opcoes: [
      "Membrana plasmática",
      "Mitocôndria",
      "Núcleo",
      "Parede celular e cloroplastos",
      "Retículo endoplasmático",
    ],
    correta: "Parede celular e cloroplastos",
    categoria: "biologia",
    explicacao:
      "As células vegetais possuem parede celular (que confere rigidez e proteção) e cloroplastos (responsáveis pela fotossíntese), estruturas ausentes em células animais.",
  },
  {
    pergunta:
      "A fotossíntese é um processo fundamental para a vida na Terra. Qual das seguintes substâncias é liberada como produto da fotossíntese?",
    opcoes: ["Dióxido de carbono", "Água", "Glicose", "Oxigênio", "Nitrogênio"],
    correta: "Oxigênio",
    categoria: "biologia",
    explicacao:
      "Durante a fotossíntese, as plantas utilizam dióxido de carbono e água, na presença de luz solar, para produzir glicose (alimento) e liberar oxigênio para a atmosfera.",
  },
  {
    pergunta:
      "Os ecossistemas são complexos sistemas biológicos. Qual termo descreve a relação em que duas espécies diferentes competem pelos mesmos recursos em um ecossistema?",
    opcoes: [
      "Mutualismo",
      "Comensalismo",
      "Parasitismo",
      "Competição interespecífica",
      "Predatismo",
    ],
    correta: "Competição interespecífica",
    categoria: "biologia",
    explicacao:
      "A competição interespecífica ocorre quando duas ou mais espécies buscam o mesmo recurso (alimento, espaço, luz) em um ecossistema, o que pode limitar o crescimento de ambas as populações.",
  },
  {
    pergunta:
      "O sistema imunológico humano é responsável pela defesa do organismo contra patógenos. Qual tipo de célula sanguínea desempenha um papel crucial na resposta imune, identificando e destruindo células infectadas?",
    opcoes: [
      "Hemácias",
      "Plaquetas",
      "Neutrófilos",
      "Linfócitos T",
      "Monócitos",
    ],
    correta: "Linfócitos T",
    categoria: "biologia",
    explicacao:
      "Os linfócitos T são células do sistema imunológico adaptativo que reconhecem e destroem células infectadas por vírus ou bactérias, e também desempenham um papel importante na imunidade contra o câncer.",
  },
  {
    pergunta:
      "A fermentação é um processo metabólico que ocorre na ausência de oxigênio. Qual dos seguintes produtos é gerado pela fermentação lática, comum em músculos sob esforço intenso?",
    opcoes: [
      "Álcool etílico",
      "Dióxido de carbono",
      "Ácido lático",
      "Água",
      "Glicose",
    ],
    correta: "Ácido lático",
    categoria: "biologia",
    explicacao:
      "A fermentação lática ocorre em algumas bactérias e também em células musculares quando há suprimento insuficiente de oxigênio, produzindo ácido lático como subproduto.",
  },
  {
    pergunta:
      "O ciclo da água é essencial para a manutenção da vida na Terra. Qual processo do ciclo da água é responsável pela transformação da água líquida em vapor de água, retornando-a para a atmosfera?",
    opcoes: [
      "Infiltração",
      "Condensação",
      "Precipitação",
      "Evaporação",
      "Escoamento superficial",
    ],
    correta: "Evaporação",
    categoria: "biologia",
    explicacao:
      "A evaporação é o processo em que a água, seja de oceanos, rios ou lagos, é aquecida pelo sol e se transforma em vapor, subindo para a atmosfera.",
  },
  {
    pergunta: "Qual é a principal função dos rins no corpo humano?",
    opcoes: [
      "Produção de bile para a digestão",
      "Síntese de proteínas",
      "Filtragem do sangue e formação da urina",
      "Bombeamento de sangue para o corpo",
      "Armazenamento de glicogênio",
    ],
    correta: "Filtragem do sangue e formação da urina",
    categoria: "biologia",
    explicacao:
      "Os rins atuam como um sistema de filtragem do sangue, removendo resíduos metabólicos e excesso de água para formar a urina, mantendo o equilíbrio hídrico e de eletrólitos no corpo.",
  },
  {
    pergunta:
      "Os vírus são agentes infecciosos que causam diversas doenças. Qual a principal característica que os distingue de outros microrganismos?",
    opcoes: [
      "Possuem membrana plasmática",
      "São seres unicelulares e procariontes",
      "Replicam-se apenas dentro de células vivas (parasitas intracelulares obrigatórios)",
      "Realizam fotossíntese",
      "Possuem organelas complexas",
    ],
    correta:
      "Replicam-se apenas dentro de células vivas (parasitas intracelulares obrigatórios)",
    categoria: "biologia",
    explicacao:
      "Os vírus não possuem estrutura celular e são parasitas intracelulares obrigatórios, ou seja, só conseguem se replicar utilizando a maquinaria metabólica de uma célula hospedeira.",
  },
  {
    pergunta:
      "O desequilíbrio ecológico pode ter sérias consequências para os ecossistemas. A introdução de uma espécie exótica invasora em um novo ambiente geralmente causa:",
    opcoes: [
      "Aumento da biodiversidade local",
      "Fortalecimento das espécies nativas",
      "Predominância do predador nativo",
      "Redução da competição por recursos",
      "Extinção de espécies nativas e desestabilização do ecossistema",
    ],
    correta: "Extinção de espécies nativas e desestabilização do ecossistema",
    categoria: "biologia",
    explicacao:
      "Espécies exóticas invasoras competem com as espécies nativas por recursos, podem predá-las ou introduzir doenças, levando ao declínio ou extinção das espécies locais e ao desequilíbrio do ecossistema.",
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
    categoria: "educacaofisica",
    explicacao:
      "A cortada de fundo acontece quando um jogador salta de trás da linha de 3 metros para atacar a bola, sendo uma jogada ofensiva comum no vôlei de alto nível.",
  },
  {
    pergunta:
      "Durante os Jogos Olímpicos, diversos esportes coletivos são disputados. Assinale a alternativa que não corresponde a um esporte coletivo presente nos Jogos Olímpicos:",
    opcoes: ["Basquetebol", "Polo aquático", "Handebol", "Capoeira", "Rugby"],
    correta: "Capoeira",
    categoria: "educacaofisica",
    explicacao:
      "A capoeira, embora seja uma expressão cultural e luta praticada no Brasil, não faz parte dos esportes coletivos dos Jogos Olímpicos, ao contrário dos outros citados.",
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
    categoria: "educacaofisica",
    explicacao:
      "Uma vida saudável está relacionada à prática regular de exercícios físicos, alimentação balanceada e sono adequado, que juntos melhoram o bem-estar físico e mental.",
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
    categoria: "educacaofisica",
    explicacao:
      "A atividade física regular melhora a eficiência do coração e dos vasos sanguíneos, principalmente por aumentar a capacidade de transporte de oxigênio pelo sangue, beneficiando todo o organismo.",
  },
  {
    pergunta:
      "A prática regular de atividade física pode ajudar na prevenção de diversas doenças. Uma dessas doenças é o diabetes tipo 2, que é caracterizado pela resistência à insulina. A atividade física ajuda a prevenir o diabetes tipo 2, principalmente porque:",
    opcoes: [
      "Aumenta o apetite, o que contribui para o aumento de peso saudável.",
      "Reduz a quantidade de glicose no sangue por meio de mecanismos musculares e hormonais",
      "Aumenta o armazenamento de glicose nos músculos e fígado, dificultando a sua liberação para o sangue",
      "Diminui a produção de hormônios que afetam a insulina",
      "Promove o acúmulo de gordura corporal, o que melhora a sensibilidade à insulina.",
    ],
    correta:
      "Reduz a quantidade de glicose no sangue por meio de mecanismos musculares e hormonais",
    categoria: "educacaofisica",
    explicacao:
      "Exercícios físicos reduzem os níveis de glicose no sangue, pois os músculos ativos consomem glicose e melhoram a sensibilidade à insulina, ajudando a prevenir o diabetes tipo 2.",
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
    correta: "Carboidratos, que são convertidos em glicose e geram ATP",
    categoria: "educacaofisica",
    explicacao:
      "No início de atividades intensas, o corpo usa preferencialmente carboidratos, pois sua metabolização rápida fornece energia imediata para os músculos sob esforço.",
  },
  {
    pergunta:
      "O aquecimento antes da prática de exercícios físicos é fundamental para evitar lesões e preparar o corpo. Qual o principal objetivo do aquecimento?",
    opcoes: [
      "Aumentar a rigidez muscular",
      "Diminuir o fluxo sanguíneo para os músculos",
      "Reduzir a temperatura corporal",
      "Elevar a temperatura corporal e a frequência cardíaca gradualmente",
      "Promover a desidratação",
    ],
    correta:
      "Elevar a temperatura corporal e a frequência cardíaca gradualmente",
    categoria: "educacaofisica",
    explicacao:
      "O aquecimento prepara o corpo para o exercício, aumentando a temperatura muscular, o fluxo sanguíneo e a frequência cardíaca, o que melhora a elasticidade dos tecidos e reduz o risco de lesões.",
  },
  {
    pergunta:
      "Qual dos seguintes esportes é considerado um esporte de combate?",
    opcoes: ["Natação", "Basquetebol", "Judo", "Tênis", "Vôlei"],
    correta: "Judo",
    categoria: "educacaofisica",
    explicacao:
      "O judo é uma arte marcial e esporte de combate, onde os competidores buscam projetar o adversário ao chão ou imobilizá-lo, utilizando técnicas de alavanca e equilíbrio.",
  },
  {
    pergunta:
      "O alongamento é uma prática importante para a flexibilidade e prevenção de lesões. Quando é o momento mais adequado para realizar alongamento estático (segurando a posição)?",
    opcoes: [
      "Apenas antes do treino, como aquecimento",
      "Apenas durante o treino, entre as séries",
      "Preferencialmente após o treino ou em um momento separado",
      "Nunca, pois pode causar lesões",
      "Somente em dias de descanso",
    ],
    correta: "Preferencialmente após o treino ou em um momento separado",
    categoria: "educacaofisica",
    explicacao:
      "O alongamento estático (manter a posição por um tempo) é mais eficaz para aumentar a flexibilidade quando os músculos já estão aquecidos, por isso é recomendado após o treino ou como uma sessão dedicada, e não como aquecimento inicial.",
  },
  {
    pergunta:
      "A pirâmide alimentar é uma ferramenta visual que auxilia na orientação de uma alimentação saudável. Qual grupo de alimentos deve ser consumido em maior quantidade, na base da pirâmide?",
    opcoes: [
      "Carnes e ovos",
      "Gorduras e óleos",
      "Leite e derivados",
      "Frutas e vegetais",
      "Pães, cereais e massas (carboidratos)",
    ],
    correta: "Pães, cereais e massas (carboidratos)",
    categoria: "educacaofisica",
    explicacao:
      "Na base da pirâmide alimentar, encontram-se os alimentos ricos em carboidratos complexos (pães, cereais, massas, arroz), que são a principal fonte de energia para o corpo.",
  },
  {
    pergunta:
      "Qual das seguintes atividades é considerada um exercício aeróbico?",
    opcoes: [
      "Levantamento de peso",
      "Corrida de 100 metros",
      "Remada indoor de alta intensidade",
      "Corrida de longa distância (maratona)",
      "Flexão de braço",
    ],
    correta: "Corrida de longa distância (maratona)",
    categoria: "educacaofisica",
    explicacao:
      "Exercícios aeróbicos são aqueles que utilizam oxigênio para gerar energia de forma contínua, sendo de baixa a média intensidade e longa duração, como a corrida de longa distância, natação ou ciclismo. As outras opções são predominantemente anaeróbicas ou de força.",
  },
  {
    pergunta:
      "A flexibilidade é uma valência física importante para a realização de movimentos amplos e sem restrições. Qual fator **não** influencia a flexibilidade de um indivíduo?",
    opcoes: [
      "Idade",
      "Sexo",
      "Temperatura ambiente",
      "Tipo de alimentação",
      "Genética",
    ],
    correta: "Tipo de alimentação",
    categoria: "educacaofisica",
    explicacao:
      "A flexibilidade é influenciada por idade, sexo, temperatura, genética, mas o tipo de alimentação não tem um impacto direto e significativo na amplitude de movimento das articulações.",
  },
  {
    pergunta:
      "Os Jogos Paralímpicos são um evento de grande importância para a inclusão de atletas com deficiência. O principal objetivo do movimento paralímpico é:",
    opcoes: [
      "Criar competições com regras mais fáceis",
      "Promover a superação e a inclusão social através do esporte",
      "Limitar a participação de atletas a certas deficiências",
      "Ser uma versão amadora dos Jogos Olímpicos",
      "Focar apenas em reabilitação física, sem caráter competitivo",
    ],
    correta: "Promover a superação e a inclusão social através do esporte",
    categoria: "educacaofisica",
    explicacao:
      "O movimento paralímpico visa celebrar a capacidade humana, promover a inclusão e inspirar o mundo através das conquistas de atletas com deficiência em competições de alto rendimento.",
  },
  {
    pergunta:
      "No futsal, o goleiro tem regras específicas de participação no ataque. Após repor a bola em jogo, em sua quadra de defesa, o goleiro:",
    opcoes: [
      "Pode tocar na bola novamente a qualquer momento",
      "Só pode tocar na bola novamente na quadra de ataque",
      "Não pode mais participar da jogada",
      "Deve esperar que um adversário toque na bola para poder jogar de novo",
      "Pode usar as mãos fora da área para atacar",
    ],
    correta: "Só pode tocar na bola novamente na quadra de ataque",
    categoria: "educacaofisica",
    explicacao:
      "Segundo as regras do futsal, na quadra de defesa, o goleiro só pode tocar na bola uma vez. Ele só poderá recebê-la novamente se a bola ultrapassar o meio da quadra ou se for tocada por um adversário.",
  },
  {
    pergunta:
      "A aptidão física relacionada à saúde é composta por diferentes componentes. Qual das alternativas abaixo descreve a 'resistência muscular'?",
    opcoes: [
      "A capacidade de realizar um movimento na maior amplitude possível",
      "A capacidade do coração e pulmões de fornecer oxigênio durante o exercício",
      "A quantidade de força máxima que um músculo pode gerar",
      "A capacidade de um músculo ou grupo muscular de sustentar contrações repetidas por um período",
      "A proporção de gordura e massa magra no corpo",
    ],
    correta:
      "A capacidade de um músculo ou grupo muscular de sustentar contrações repetidas por um período",
    categoria: "educacaofisica",
    explicacao:
      "Resistência muscular é a capacidade de um músculo de continuar exercendo força ou se contraindo por um tempo prolongado. É diferente da força muscular (força máxima) e da resistência cardiorrespiratória (aeróbica).",
  },
  {
    pergunta:
      "Frase incompleta: Cuando era niño, siempre ______ (jugar) con mis primos en el jardín.",
    opcoes: ["jugué", "juegué", "jugaba", "jugó", "jugando"],
    correta: "jugaba",
    categoria: "espanhol",
    explicacao:
      "O pretérito imperfeito (jugaba) é usado para ações habituais no passado. A frase expressa um costume da infância.",
  },
  {
    pergunta:
      "Cada vez son más los jóvenes que optan por viajar al extranjero para estudiar. Esta experiencia les permite no solo mejorar sus conocimientos académicos, sino también ampliar su visión del mundo y adquirir una valiosa independencia. Según el texto, ¿cuál es una ventaja de estudiar en el extranjero?",
    opcoes: [
      "Disminuir el nivel académico",
      "Conocer solamente nuevas materias",
      "Aumentar la dependencia familiar",
      "Desarrollar una mayor independencia",
      "Limitar la visión del mundo",
    ],
    correta: "Desarrollar una mayor independencia",
    categoria: "espanhol",
    explicacao:
      "Segundo o texto, além dos conhecimentos acadêmicos, uma vantagem clara é a autonomia pessoal, ou seja, a independência.",
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
    categoria: "espanhol",
    explicacao:
      "A frase mostra que a paz não é um objetivo distante, mas uma forma de agir no presente.",
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
    categoria: "espanhol",
    explicacao:
      "A estrutura está correta: pronome indireto (les) + verbo + objeto direto (la verdad) + complemento (a ellos). As outras têm erros de ordem ou concordância.",
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
    categoria: "espanhol",
    explicacao:
      "“¡Obvio que sí!” é uma resposta afirmativa forte e entusiasmada, mostrando que a pessoa com certeza vai.",
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
    categoria: "espanhol",
    explicacao:
      "La Tomatina é uma festa tradicional e famosa na Espanha, atraindo turistas do mundo todo. Não tem caráter religioso nem agrícola.",
  },
  {
    pergunta:
      "Qual dos seguintes países é o único na América Latina que tem o espanhol como língua oficial, mas cuja capital não está localizada no continente americano?",
    opcoes: ["México", "Cuba", "Espanha", "Guiné Equatorial", "Argentina"],
    correta: "Guiné Equatorial",
    categoria: "espanhol",
    explicacao:
      "A Guiné Equatorial é o único país da África com o espanhol como língua oficial. Embora não esteja na América Latina, a pergunta busca uma particularidade linguística e geográfica.",
  },
  {
    pergunta:
      "O pretérito perfeito simples em espanhol é usado para descrever ações concluídas em um ponto específico do passado. Qual das frases abaixo exemplifica corretamente o uso desse tempo verbal?",
    opcoes: [
      "Cuando era joven, iba mucho al cine.",
      "Siempre estudiaba para mis exámenes.",
      "Ayer comí paella en el restaurante.",
      "Ella estaba leyendo un libro.",
      "Nosotros siempre viajábamos en verano.",
    ],
    correta: "Ayer comí paella en el restaurante.",
    categoria: "espanhol",
    explicacao:
      "A frase 'Ayer comí paella en el restaurante' indica uma ação pontual e concluída no passado ('ontem comi'), que é o uso principal do pretérito perfeito simples (pretérito indefinido).",
  },
  {
    pergunta:
      "Em espanhol, os falsos cognatos (falsos amigos) são palavras que parecem significar o mesmo em português, mas têm significados diferentes. Qual par de palavras é um falso cognato?",
    opcoes: [
      "Puerta / Porta",
      "Vaso / Vaso",
      "Embarazada / Embaraçada",
      "Agua / Água",
      "Libro / Livro",
    ],
    correta: "Embarazada / Embaraçada",
    categoria: "espanhol",
    explicacao:
      "Em espanhol, 'embarazada' significa 'grávida', enquanto em português 'embaraçada' significa 'com dificuldade' ou 'tímida'.",
  },
  {
    pergunta:
      "Qual preposição completa corretamente a frase: 'Voy ______ la playa este fin de semana.'?",
    opcoes: ["en", "con", "de", "a", "por"],
    correta: "a",
    categoria: "espanhol",
    explicacao:
      "A preposição 'a' é utilizada para indicar direção ou destino, como 'ir a algún lugar' (ir a algum lugar).",
  },
  {
    pergunta:
      "Leia o anúncio de um curso de espanhol: '¡Aprende español en solo 3 meses! Clases dinámicas y profesores nativos. ¡Matrículas abiertas ya!' Qual é o público-alvo principal deste anúncio?",
    opcoes: [
      "Pessoas que já falam espanhol fluentemente",
      "Pessoas que desejam aprender espanhol rapidamente",
      "Pessoas que preferem aulas teóricas e monótonas",
      "Pessoas que buscam um curso de longa duração",
      "Pessoas que querem aprender a falar chinês",
    ],
    correta: "Pessoas que desejam aprender espanhol rapidamente",
    categoria: "espanhol",
    explicacao:
      "A expressão 'en solo 3 meses' e '¡Matrículas abiertas ya!' indicam a busca por um público que deseja aprender o idioma de forma rápida e prática.",
  },
  {
    pergunta: "O que significa a palavra 'ordenador' em espanhol?",
    opcoes: ["Mesa", "Lápis", "Computador", "Livro", "Cadeira"],
    correta: "Computador",
    categoria: "espanhol",
    explicacao:
      "Em espanhol da Espanha, 'ordenador' é o termo comum para 'computador'. Em alguns países da América Latina, 'computadora' é mais usado.",
  },
  {
    pergunta: "No espanhol, qual é o artigo definido feminino plural?",
    opcoes: ["El", "La", "Los", "Las", "Unas"],
    correta: "Las",
    categoria: "espanhol",
    explicacao:
      "Em espanhol, 'las' é o artigo definido feminino plural, utilizado antes de substantivos femininos no plural.",
  },
  {
    pergunta:
      "Complete a frase com o verbo 'tener' conjugado corretamente no presente do indicativo: 'Nosotros ______ muchos amigos en la escuela.'",
    opcoes: ["tengo", "tienes", "tiene", "tenemos", "tienen"],
    correta: "tenemos",
    categoria: "espanhol",
    explicacao:
      "A conjugação correta do verbo 'tener' para a primeira pessoa do plural ('nosotros/nosotras') no presente do indicativo é 'tenemos'.",
  },
  {
    pergunta:
      "Qual das seguintes saudações é mais comum para se despedir formalmente em espanhol?",
    opcoes: ["Hola", "Adiós", "Qué tal", "Hasta luego", "Buenos días"],
    correta: "Adiós",
    categoria: "espanhol",
    explicacao:
      "Embora 'Hasta luego' também seja uma despedida comum, 'Adiós' é a forma mais geral e formal de se despedir em espanhol, aplicável a diversas situações.",
  },
  {
    pergunta:
      "“O homem nasce livre, e por toda parte encontra-se acorrentado.” (ROUSSEAU, Do Contrato Social). A frase de Rousseau critica:",
    opcoes: [
      "A liberdade individual e a necessidade do absolutismo",
      "A desigualdade e as instituições que corrompem a liberdade humana",
      "O estado natural como causa dos males sociais",
      "A democracia como regime que oprime o cidadão",
      "O contrato social como forma de dominação burguesa",
    ],
    correta:
      "A desigualdade e as instituições que corrompem a liberdade humana",
    categoria: "filosofia",
    explicacao:
      "Rousseau defendia que, no estado de natureza, o homem era livre e bom, mas as instituições sociais e políticas corromperam essa liberdade, criando desigualdade e dominação.",
  },
  {
    pergunta:
      "“O operário torna-se tanto mais pobre quanto mais riqueza produz. [...] O trabalhador se torna um apêndice da máquina.” (MARX, Manuscritos Econômico-Filosóficos) Para Marx, a alienação do trabalhador ocorre quando:",
    opcoes: [
      "Ele tem controle total sobre seu processo de trabalho",
      "Ele participa democraticamente das decisões da empresa",
      "Ele possui os meios de produção e é dono do seu tempo",
      "Seu trabalho deixa de ser criativo e se torna repetitivo e automático.",
      "A produção ocorre de forma artesanal e individual",
    ],
    correta:
      "Seu trabalho deixa de ser criativo e se torna repetitivo e automático.",
    categoria: "filosofia",
    explicacao:
      "Para Marx, o trabalhador alienado perde o controle sobre o processo produtivo. Ele não se reconhece no que produz, pois seu trabalho se torna mecânico, repetitivo e subordinado à lógica do capital.",
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
    categoria: "filosofia",
    explicacao:
      "A virtude, segundo Aristóteles, é adquirida pelo hábito. O caráter virtuoso se forma pela prática constante de boas ações, guiadas pela razão, até que se tornem naturais ao indivíduo.",
  },
  {
    pergunta:
      "“Uma conversação de tal natureza transforma o ouvinte; o contato de Sócrates paralisa e embaraça; leva a refletir sobre si mesmo, a imprimir à atenção uma direção incomum [...]” Com base no texto, a atitude de Sócrates caracteriza-se por:",
    opcoes: [
      "Impor suas ideias aos interlocutores, desconsiderando suas opiniões",
      "Utilizar a retórica para persuadir os ouvintes a aceitarem suas crenças",
      "Estimular a reflexão crítica nos interlocutores, levando-os ao autoconhecimento",
      "Evitar confrontos dialéticos para manter a harmonia nas conversações",
      "Transmitir conhecimentos prontos, sem questionar as crenças dos ouvintes",
    ],
    correta:
      "Estimular a reflexão crítica nos interlocutores, levando-os ao autoconhecimento",
    categoria: "filosofia",
    explicacao:
      "Sócrates não impunha ideias, mas usava o diálogo (maiêutica) para que os interlocutores chegassem ao conhecimento por si mesmos. Isso promovia o autoconhecimento e a consciência crítica.",
  },
  {
    pergunta:
      "“Porque dos homens que se pode dizer, duma maneira geral, que são ingratos, volúveis, simuladores, covardes e ávidos de lucro [...]”. O texto de Maquiavel aponta uma inovação na teoria política na época moderna expressa na distinção entre:",
    opcoes: [
      "Idealidade e efetividade da moral",
      "Nulidade e preservabilidade da liberdade",
      "Ilegalidade e legitimidade do governante",
      "Verificabilidade e possibilidade da verdade",
      "Universalidade e particularidade da justiça",
    ],
    correta: "Idealidade e efetividade da moral",
    categoria: "filosofia",
    explicacao:
      "Maquiavel rompe com a moral tradicional ao separar o que é ideal do que é eficaz. Ele propõe que, na política, o governante deve agir conforme a realidade (efetividade), mesmo que isso vá contra os princípios morais ideais.",
  },
  {
    pergunta:
      "A teoria do conhecimento de Immanuel Kant busca conciliar o empirismo e o racionalismo. Para Kant, o conhecimento humano é resultado da:",
    opcoes: [
      "Experiência sensível pura, sem intervenção da razão",
      "Apenas da razão inata, independentemente da experiência",
      "Síntese entre a experiência sensível e as categorias a priori do entendimento",
      "Revelação divina ou fé religiosa",
      "Intuição metafísica dos objetos em si",
    ],
    correta:
      "Síntese entre a experiência sensível e as categorias a priori do entendimento",
    categoria: "filosofia",
    explicacao:
      "Kant propõe que o conhecimento não vem apenas da experiência (empirismo) nem apenas da razão (racionalismo), mas da interação entre os dados dos sentidos e as estruturas inatas da mente (categorias do entendimento).",
  },
  {
    pergunta:
      "No contexto da filosofia moderna, John Locke é um dos principais teóricos do liberalismo político. Sua teoria defendia que o governo legítimo deve ser baseado em:",
    opcoes: [
      "O direito divino dos reis",
      "A força militar e a tirania",
      "O consentimento dos governados e a proteção dos direitos naturais",
      "A imposição de uma religião oficial",
      "A abolição de qualquer forma de propriedade privada",
    ],
    correta:
      "O consentimento dos governados e a proteção dos direitos naturais",
    categoria: "filosofia",
    explicacao:
      "Locke argumentava que o poder do governo deriva do consentimento dos indivíduos e que sua principal função é proteger os direitos naturais à vida, liberdade e propriedade.",
  },
  {
    pergunta:
      "Qual filósofo é conhecido pela frase 'Penso, logo existo' e é considerado o pai do racionalismo moderno?",
    opcoes: [
      "David Hume",
      "John Locke",
      "René Descartes",
      "Friedrich Nietzsche",
      "Sócrates",
    ],
    correta: "René Descartes",
    categoria: "filosofia",
    explicacao:
      "René Descartes é o autor da célebre frase 'Cogito, ergo sum' (Penso, logo existo), que fundamenta sua busca por uma verdade indubitável e o estabelece como figura central do racionalismo moderno.",
  },
  {
    pergunta:
      "O existencialismo, corrente filosófica do século XX, enfatiza a liberdade e a responsabilidade individual. Para os existencialistas, o ser humano é 'condenado a ser livre' porque:",
    opcoes: [
      "Ele não tem escolhas a fazer em sua vida",
      "Sua existência é predeterminada por forças externas",
      "Ele é o único responsável por suas escolhas e pela construção de seu próprio sentido",
      "A sociedade impõe todas as suas decisões",
      "Ele deve seguir regras e dogmas sem questionamento",
    ],
    correta:
      "Ele é o único responsável por suas escolhas e pela construção de seu próprio sentido",
    categoria: "filosofia",
    explicacao:
      "A ideia de 'condenado a ser livre' em Sartre significa que, sem um propósito predefinido (Deus, natureza), o ser humano é totalmente responsável por suas escolhas e ações, criando seu próprio sentido de vida.",
  },
  {
    pergunta:
      "A Alegoria da Caverna, presente na obra 'A República' de Platão, é uma metáfora para:",
    opcoes: [
      "A importância do conhecimento empírico para a verdade",
      "A ilusão dos sentidos e a busca pelo verdadeiro conhecimento (o mundo das ideias)",
      "A necessidade de viver em comunidade para a felicidade",
      "A superioridade da vida política sobre a vida contemplativa",
      "A impossibilidade de se alcançar qualquer tipo de verdade",
    ],
    correta:
      "A ilusão dos sentidos e a busca pelo verdadeiro conhecimento (o mundo das ideias)",
    categoria: "filosofia",
    explicacao:
      "A Alegoria da Caverna ilustra a distinção de Platão entre o mundo sensível (das sombras, aparências) e o mundo inteligível (das ideias, da verdade), defendendo a busca pelo conhecimento verdadeiro que vai além das aparências.",
  },
  {
    pergunta:
      "Qual o principal objetivo da filosofia, conforme sua origem etimológica ('amor à sabedoria')?",
    opcoes: [
      "Acumular riquezas materiais",
      "Atingir o poder político",
      "Desenvolver técnicas para controlar a natureza",
      "Buscar o conhecimento e a compreensão da existência e do mundo",
      "Praticar esportes e manter a saúde física",
    ],
    correta: "Buscar o conhecimento e a compreensão da existência e do mundo",
    categoria: "filosofia",
    explicacao:
      "A palavra 'filosofia' vem do grego 'philos' (amor) e 'sophia' (sabedoria), significando 'amor à sabedoria'. Seu objetivo central é a busca racional e crítica pelo conhecimento e pela compreensão dos problemas fundamentais da existência e do universo.",
  },
  {
    pergunta:
      "O conceito de 'Super-Homem' (Übermensch) de Friedrich Nietzsche representa:",
    opcoes: [
      "Um ser humano superior fisicamente e intelectualmente em relação aos outros",
      "A figura de um ditador que domina as massas",
      "O indivíduo que transcende os valores morais tradicionais e cria seus próprios valores",
      "Um ideal de perfeição religiosa",
      "A busca por uma sociedade igualitária e sem hierarquias",
    ],
    correta:
      "O indivíduo que transcende os valores morais tradicionais e cria seus próprios valores",
    categoria: "filosofia",
    explicacao:
      "O 'Super-Homem' de Nietzsche não é uma figura literal ou superior no sentido comum, mas um ideal filosófico do indivíduo que, após a 'morte de Deus', é capaz de superar a moralidade rebanho, criar seus próprios valores e viver plenamente, afirmando a vida.",
  },
  {
    pergunta:
      "No utilitarismo, uma corrente ética desenvolvida por filósofos como Jeremy Bentham e John Stuart Mill, a moralidade de uma ação é julgada por:",
    opcoes: [
      "Sua conformidade com leis divinas",
      "A intenção do agente, independentemente das consequências",
      "A busca pela máxima felicidade para o maior número de pessoas",
      "O cumprimento de deveres absolutos e incondicionais",
      "A manutenção da ordem social, mesmo que cause sofrimento",
    ],
    correta: "A busca pela máxima felicidade para o maior número de pessoas",
    categoria: "filosofia",
    explicacao:
      "O utilitarismo é uma ética consequencialista que defende que a ação moralmente correta é aquela que produz o maior bem ou felicidade para o maior número de pessoas envolvidas.",
  },
  {
    pergunta:
      "A Escola de Frankfurt, um grupo de pensadores alemães, desenvolveu a Teoria Crítica, que se caracteriza por:",
    opcoes: [
      "Uma defesa incondicional do sistema capitalista e da razão instrumental.",
      "Uma análise da sociedade que busca apenas descrevê-la, sem criticá-la.",
      "Uma crítica radical à sociedade industrial, à cultura de massa e às formas de dominação.",
      "A valorização da tecnologia como principal meio de libertação humana.",
      "A retomada dos valores filosóficos da Idade Média.",
    ],
    correta:
      "Uma crítica radical à sociedade industrial, à cultura de massa e às formas de dominação.",
    categoria: "filosofia",
    explicacao:
      "A Teoria Crítica da Escola de Frankfurt (com Adorno, Horkheimer, Marcuse, etc.) buscou analisar e criticar as contradições e as formas de opressão presentes na sociedade capitalista moderna, incluindo a dominação pela tecnologia e pela indústria cultural.",
  },
  {
    pergunta:
      "O conceito de 'banalidade do mal', de Hannah Arendt, sugere que:",
    opcoes: [
      "O mal é sempre praticado por pessoas monstruosas e sádicas.",
      "Grandes atrocidades podem ser cometidas por pessoas comuns que simplesmente obedecem ordens sem refletir.",
      "O mal é uma força metafísica que domina o mundo.",
      "Apenas indivíduos com problemas psicológicos são capazes de praticar o mal.",
      "O mal é inerente à natureza humana e inevitável.",
    ],
    correta:
      "Grandes atrocidades podem ser cometidas por pessoas comuns que simplesmente obedecem ordens sem refletir.",
    categoria: "filosofia",
    explicacao:
      "Ao observar o julgamento de Adolf Eichmann, Arendt concluiu que o mal pode ser 'banal', ou seja, praticado por pessoas normais, burocratas que abdicam da sua capacidade de pensar e julgar moralmente seus atos.",
  },
  {
    pergunta:
      "Um bloco de 2 kg é solto do alto de uma rampa de 5 m de altura. Desprezando o atrito, qual é sua velocidade ao atingir a base? (Considere g = 10 m/s²)",
    opcoes: ["5 m/s", "7 m/s", "10 m/s", "15 m/s", "20 m/s"],
    correta: "10 m/s",
    categoria: "fisica",
    explicacao:
      "Pela conservação da energia mecânica, a energia potencial gravitacional (Ep = mgh) se converte em energia cinética (Ec = 1/2*mv²). Assim, mgh = 1/2*mv²  =>  v = √(2gh). Substituindo g=10 m/s² e h=5m, temos v = √(2*10*5) = √100 = 10 m/s.",
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
    categoria: "fisica",
    explicacao:
      "Usando a fórmula v = Δs / Δt, temos 90 km/h = 45 km / Δt. Isolando Δt, Δt = 45 km / 90 km/h = 0,5 horas. Convertendo para minutos, 0,5 h * 60 min/h = 30 minutos.",
  },
  {
    pergunta:
      "Um corpo de 10 kg está sobre uma superfície horizontal sem atrito. Uma força de 50 N é aplicada sobre ele. Qual será a aceleração do corpo?",
    opcoes: ["2 m/s²", "5 m/s²", "10 m/s²", "20 m/s²", "50 m/s²"],
    correta: "5 m/s²",
    categoria: "fisica",
    explicacao:
      "Pela Segunda Lei de Newton (F = m*a), temos 50 N = 10 kg * a. Isolando a aceleração 'a', temos a = 50 N / 10 kg = 5 m/s².",
  },
  {
    pergunta:
      "Uma amostra de gás ideal sofre compressão isotérmica. Isso significa que, durante o processo:",
    opcoes: [
      "A temperatura aumenta",
      "O volume aumenta",
      "A energia interna aumenta",
      "A temperatura permanece constante",
      "A pressão permanece constante",
    ],
    correta: "A temperatura permanece constante",
    categoria: "fisica",
    explicacao:
      "Um processo isotérmico (iso = igual, térmico = temperatura) é aquele em que a temperatura do sistema é mantida constante. Para um gás ideal, a energia interna depende apenas da temperatura, portanto, ela também permanece constante.",
  },
  {
    pergunta:
      "Três resistores de 6 Ω estão ligados em paralelo. Qual é a resistência equivalente do circuito?",
    opcoes: ["2 Ω", "3 Ω", "6 Ω", "12 Ω", "18 Ω"],
    correta: "2 Ω",
    categoria: "fisica",
    explicacao:
      "Para resistores em paralelo, o inverso da resistência equivalente é a soma dos inversos das resistências: 1/Req = 1/R1 + 1/R2 + 1/R3. Assim, 1/Req = 1/6 + 1/6 + 1/6 = 3/6 = 1/2. Portanto, Req = 2 Ω.",
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
    categoria: "fisica",
    explicacao:
      "Usando a equação das lentes: 1/f = 1/p + 1/p'. Com f=20cm e p=30cm, temos 1/20 = 1/30 + 1/p'. Resolvendo para p', obtemos p' = 60cm (imagem real). O aumento linear (A = -p'/p) é A = -60/30 = -2, indicando que a imagem é invertida e maior.",
  },
  {
    pergunta:
      "Um circuito elétrico possui uma fonte de tensão de 12 V e uma lâmpada com resistência de 4 Ω. Qual a corrente que passa pela lâmpada?",
    opcoes: ["0,5 A", "1 A", "2 A", "3 A", "4 A"],
    correta: "3 A",
    categoria: "fisica",
    explicacao:
      "Pela Primeira Lei de Ohm (V = R * I), onde V é a tensão, R é a resistência e I é a corrente. Temos 12 V = 4 Ω * I. Isolando I, I = 12 V / 4 Ω = 3 A.",
  },
  {
    pergunta:
      "O calor específico de uma substância representa a quantidade de calor necessária para elevar a temperatura de 1 grama dessa substância em 1°C. Qual unidade é comumente utilizada para expressar o calor específico?",
    opcoes: [
      "Joule (J)",
      "Watt (W)",
      "Caloria (cal)",
      "J/kg·°C ou cal/g·°C",
      "Newton (N)",
    ],
    correta: "J/kg·°C ou cal/g·°C",
    categoria: "fisica",
    explicacao:
      "O calor específico é uma grandeza que relaciona energia, massa e variação de temperatura. As unidades mais comuns são Joule por quilograma por grau Celsius (J/kg·°C) ou caloria por grama por grau Celsius (cal/g·°C).",
  },
  {
    pergunta:
      "Em um experimento de refração da luz, um raio de luz passa do ar para a água. Qual fenômeno ocorre com a luz ao mudar de meio, resultando em uma mudança na direção de propagação?",
    opcoes: [
      "Reflexão total",
      "Difração",
      "Interferência",
      "Polarização",
      "Refração",
    ],
    correta: "Refração",
    categoria: "fisica",
    explicacao:
      "A refração é o fenômeno que ocorre quando a luz muda de meio de propagação (ex: do ar para a água), alterando sua velocidade e, consequentemente, sua direção, a menos que incida perpendicularmente à superfície.",
  },
  {
    pergunta:
      "A Terra realiza dois movimentos principais: rotação e translação. O movimento de rotação é responsável por:",
    opcoes: [
      "As estações do ano",
      "As fases da Lua",
      "O ciclo diário de dias e noites",
      "Os eclipses solares e lunares",
      "As marés oceânicas",
    ],
    correta: "O ciclo diário de dias e noites",
    categoria: "fisica",
    explicacao:
      "O movimento de rotação da Terra em torno do seu próprio eixo, que dura aproximadamente 24 horas, é o responsável pela alternância entre dia e noite.",
  },
  {
    pergunta:
      "Qual das leis de Newton descreve que 'para toda ação, há uma reação igual e oposta'?",
    opcoes: [
      "Primeira Lei (Lei da Inércia)",
      "Segunda Lei (Princípio Fundamental da Dinâmica)",
      "Terceira Lei (Lei da Ação e Reação)",
      "Lei da Gravitação Universal",
      "Lei da Conservação da Energia",
    ],
    correta: "Terceira Lei (Lei da Ação e Reação)",
    categoria: "fisica",
    explicacao:
      "A Terceira Lei de Newton, também conhecida como Lei da Ação e Reação, afirma que as forças sempre ocorrem em pares: se um corpo A exerce uma força sobre um corpo B, o corpo B exerce uma força de igual magnitude e direção oposta sobre o corpo A.",
  },
  {
    pergunta:
      "Um termômetro marca 25°C. Qual é essa temperatura na escala Kelvin?",
    opcoes: ["25 K", "273 K", "298 K", "300 K", "323 K"],
    correta: "298 K",
    categoria: "fisica",
    explicacao:
      "Para converter de Celsius para Kelvin, utiliza-se a fórmula TK = TC + 273. Assim, TK = 25 + 273 = 298 K.",
  },
  {
    pergunta:
      "Qual dos seguintes fenômenos é um exemplo de ondas eletromagnéticas?",
    opcoes: [
      "Som",
      "Ondas em uma corda",
      "Ondas sísmicas",
      "Luz visível",
      "Ondas em um lago",
    ],
    correta: "Luz visível",
    categoria: "fisica",
    explicacao:
      "A luz visível é um tipo de onda eletromagnética, assim como ondas de rádio, micro-ondas, infravermelho, ultravioleta, raios X e raios gama. Ondas eletromagnéticas não precisam de um meio para se propagar.",
  },
  {
    pergunta:
      "A energia eólica é uma fonte de energia renovável que utiliza a força do vento para gerar eletricidade. Qual a principal vantagem da energia eólica em comparação com fontes de energia baseadas em combustíveis fósseis?",
    opcoes: [
      "Alta emissão de gases poluentes",
      "Dependência de grandes áreas de terra",
      "É intermitente e depende das condições climáticas",
      "Baixo custo de instalação e manutenção",
      "Não emite gases de efeito estufa durante a operação",
    ],
    correta: "Não emite gases de efeito estufa durante a operação",
    categoria: "fisica",
    explicacao:
      "A principal vantagem da energia eólica é seu caráter limpo: uma vez instaladas, as turbinas eólicas não emitem gases de efeito estufa nem outros poluentes atmosféricos durante a geração de energia, contribuindo para a mitigação das mudanças climáticas.",
  },
  {
    pergunta:
      "Por que uma faca afiada corta melhor do que uma faca sem fio, mesmo aplicando a mesma força?",
    opcoes: [
      "Porque a força aplicada é maior na faca afiada",
      "Porque a área de contato da faca afiada é menor, aumentando a pressão",
      "Porque o material da faca afiada é mais denso",
      "Porque a velocidade do corte é maior",
      "Porque a energia cinética transferida é menor",
    ],
    correta:
      "Porque a área de contato da faca afiada é menor, aumentando a pressão",
    categoria: "fisica",
    explicacao:
      "A pressão é definida como a força aplicada sobre uma área (P = F/A). Uma faca afiada tem uma área de contato muito pequena, o que faz com que a mesma força resulte em uma pressão muito maior, suficiente para cortar o material.",
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
    categoria: "geografia",
    explicacao:
      "A globalização é um processo complexo que envolve a interconexão crescente entre diferentes partes do mundo, facilitada pelo avanço dos transportes, das comunicações e pela liberalização dos fluxos de capitais e mercadorias.",
  },
  {
    pergunta:
      "As ações humanas vêm causando diversos impactos negativos ao meio ambiente. Qual dos seguintes é um exemplo de impacto ambiental urbano?",
    opcoes: [
      "A queimada de florestas tropicais para agricultura",
      "O desmatamento para a extração de madeira",
      "A formação de ilhas de calor e a poluição do ar por veículos",
      "O assoreamento de rios devido à mineração",
      "A contaminação do solo por agrotóxicos",
    ],
    correta: "A formação de ilhas de calor e a poluição do ar por veículos",
    categoria: "geografia",
    explicacao:
      "Ilhas de calor (aumento da temperatura em áreas urbanas) e a poluição atmosférica são impactos ambientais diretamente ligados à urbanização, construção e ao tráfego intenso de veículos.",
  },
  {
    pergunta:
      "A geopolítica estuda as relações de poder entre os Estados. Um exemplo atual é a disputa por áreas estratégicas e recursos naturais. Sobre a geopolítica mundial, assinale a alternativa correta:",
    opcoes: [
      "A geopolítica perdeu importância com a globalização, já que os países são igualitários.",
      "A disputa por recursos como petróleo e água não influencia conflitos.",
      "A Guerra Fria foi um confronto direto entre EUA e URSS em seus territórios.",
      "O controle de rotas comerciais e recursos naturais continua sendo motivo de tensão entre países.",
      "A ONU tem autoridade militar sobre todos os países sem restrições.",
    ],
    correta:
      "O controle de rotas comerciais e recursos naturais continua sendo motivo de tensão entre países",
    categoria: "geografia",
    explicacao:
      "A geopolítica moderna continua sendo moldada pela busca por controle de recursos estratégicos (energia, minerais) e por posições geográficas vantajosas (rotas comerciais, acessos a mares), gerando muitas das tensões e conflitos atuais.",
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
    categoria: "geografia",
    explicacao:
      "A descrição corresponde ao clima Temperado Continental, que ocorre em grandes massas continentais, como a porção central da América do Norte, caracterizado por grande amplitude térmica anual.",
  },
  {
    pergunta:
      "A formação dos blocos econômicos é uma característica da globalização. Um exemplo de bloco que busca a integração econômica e política entre países sul-americanos é:",
    opcoes: ["OTAN", "MERCOSUL", "OPEP", "União Europeia", "NAFTA"],
    correta: "MERCOSUL",
    categoria: "geografia",
    explicacao:
      "O MERCOSUL (Mercado Comum do Sul) é um bloco econômico regional que visa a integração de seus países membros (Brasil, Argentina, Paraguai, Uruguai) na América do Sul, com livre circulação de bens, serviços e fatores de produção.",
  },
  {
    pergunta:
      "Leia o texto: 'A expansão da globalização intensificou o consumo, padronizando gostos e comportamentos. Redes de lojas e marcas tornaram-se símbolos de status, desconsiderando realidades locais.' Com base no texto, é correto afirmar que:",
    opcoes: [
      "A globalização reduziu o consumo ao mínimo necessário.",
      "O consumismo global respeita a diversidade cultural.",
      "A padronização de produtos reflete a dominação de modelos culturais hegemônicos.",
      "O consumo globalizado promove a autonomia econômica local.",
      "A globalização impediu a formação de mercados internacionais.",
    ],
    correta:
      "A padronização de produtos reflete a dominação de modelos culturais hegemônicos.",
    categoria: "geografia",
    explicacao:
      "O texto aponta para a padronização cultural e de consumo imposta pela globalização, onde marcas e produtos de países desenvolvidos se tornam símbolos universais, muitas vezes em detrimento das culturas e economias locais.",
  },
  {
    pergunta:
      "As cidades modernas enfrentam desafios como o crescimento desordenado. Um dos principais problemas ambientais urbanos é:",
    opcoes: [
      "Aumento da área de florestas urbanas",
      "Redução da poluição sonora",
      "Geração excessiva de resíduos sólidos e dificuldade de descarte",
      "Melhora na qualidade do ar devido ao transporte público",
      "Aumento da permeabilidade do solo",
    ],
    correta: "Geração excessiva de resíduos sólidos e dificuldade de descarte",
    categoria: "geografia",
    explicacao:
      "A rápida urbanização e o consumismo levam à produção de grandes volumes de lixo (resíduos sólidos), cujo descarte inadequado causa poluição do solo, da água e do ar, além de problemas de saúde pública.",
  },
  {
    pergunta:
      "O Brasil é um país de grande diversidade natural, com diferentes biomas. Qual bioma brasileiro é caracterizado por grandes extensões de savana, com árvores de troncos retorcidos e casca grossa, adaptadas ao fogo?",
    opcoes: ["Amazônia", "Mata Atlântica", "Caatinga", "Pampa", "Cerrado"],
    correta: "Cerrado",
    categoria: "geografia",
    explicacao:
      "O Cerrado, localizado na região central do Brasil, é um bioma de savana que possui árvores de pequeno porte, com troncos tortuosos e casca espessa, características que as tornam adaptadas a períodos de seca e ao fogo.",
  },
  {
    pergunta:
      "A população mundial continua a crescer, mas as taxas variam. Qual fenômeno pode levar à redução da taxa de natalidade em um país?",
    opcoes: [
      "Piora da saúde pública",
      "Aumento da taxa de mortalidade infantil",
      "Melhora na educação feminina e acesso a métodos contraceptivos",
      "Incentivo governamental para ter mais filhos",
      "Diminuição da expectativa de vida",
    ],
    correta: "Melhora na educação feminina e acesso a métodos contraceptivos",
    categoria: "geografia",
    explicacao:
      "A educação feminina e o acesso a métodos contraceptivos estão diretamente relacionados à diminuição da taxa de natalidade, pois as mulheres tendem a ter menos filhos quando têm mais oportunidades educacionais e profissionais.",
  },
  {
    pergunta:
      "O fenômeno do El Niño impacta o clima global. Qual é uma das consequências típicas do El Niño na região Nordeste do Brasil?",
    opcoes: [
      "Aumento das chuvas e inundações",
      "Períodos de seca severa",
      "Diminuição das temperaturas",
      "Aumento da produtividade agrícola",
      "Fortalecimento das correntes frias oceânicas",
    ],
    correta: "Períodos de seca severa",
    categoria: "geografia",
    explicacao:
      "O El Niño, que consiste no aquecimento anormal das águas do Oceano Pacífico Equatorial, geralmente provoca secas mais intensas e prolongadas no Nordeste do Brasil.",
  },
  {
    pergunta:
      "A matriz energética global ainda é baseada em combustíveis fósseis. Qual das seguintes fontes de energia é considerada renovável e de baixo impacto ambiental?",
    opcoes: [
      "Carvão mineral",
      "Petróleo",
      "Gás natural",
      "Energia solar",
      "Urânio (nuclear)",
    ],
    correta: "Energia solar",
    categoria: "geografia",
    explicacao:
      "A energia solar é uma fonte de energia renovável, limpa e abundante, que utiliza a radiação solar para gerar eletricidade, sem emissão de poluentes durante a operação.",
  },
  {
    pergunta:
      "O crescimento populacional e a urbanização desordenada resultam em problemas sociais graves. A gentrificação refere-se a:",
    opcoes: [
      "Aumento da criminalidade em áreas centrais",
      "Processo de revitalização de áreas urbanas que resulta na expulsão da população de baixa renda",
      "Criação de novos bairros populares para moradia",
      "Integração social entre diferentes classes econômicas",
      "Diminuição dos aluguéis em regiões valorizadas",
    ],
    correta:
      "Processo de revitalização de áreas urbanas que resulta na expulsão da população de baixa renda",
    categoria: "geografia",
    explicacao:
      "A gentrificação é um processo de valorização imobiliária que, ao atrair investimentos e classes mais altas, eleva o custo de vida e 'expulsa' os moradores de baixa renda, que não conseguem mais arcar com os novos valores.",
  },
  {
    pergunta:
      "Em qual das seguintes regionalizações o Brasil está inserido na América Latina?",
    opcoes: [
      "Divisão por continentes",
      "Divisão por blocos econômicos (ex: Mercosul)",
      "Regionalização geoeconômica dos 'Três Mundos'",
      "Regionalização cultural e linguística (América Latina, Anglo-Saxônica)",
      "Divisão em países desenvolvidos e subdesenvolvidos",
    ],
    correta:
      "Regionalização cultural e linguística (América Latina, Anglo-Saxônica)",
    categoria: "geografia",
    explicacao:
      "O Brasil faz parte da América Latina em regionalizações que consideram aspectos culturais e linguísticos, já que a maior parte dos países dessa região possui línguas românicas (espanhol e português) e herança da colonização ibérica.",
  },
  {
    pergunta: "Qual dos seguintes fenômenos é um efeito do aquecimento global?",
    opcoes: [
      "Aumento da camada de ozônio",
      "Resfriamento dos oceanos",
      "Derretimento de geleiras e aumento do nível do mar",
      "Diminuição da frequência de eventos climáticos extremos",
      "Fortalecimento das correntes oceânicas frias",
    ],
    correta: "Derretimento de geleiras e aumento do nível do mar",
    categoria: "geografia",
    explicacao:
      "O aquecimento global, causado pela emissão de gases de efeito estufa, leva ao derretimento das geleiras e calotas polares, o que contribui diretamente para a elevação do nível do mar.",
  },
  {
    pergunta:
      "Os movimentos migratórios são influenciados por fatores de repulsão (que levam as pessoas a sair) e de atração (que as atraem para um novo local). Qual dos seguintes é um exemplo de fator de repulsão?",
    opcoes: [
      "Oferta de empregos qualificados em uma metrópole",
      "Maior qualidade de vida e segurança em um país desenvolvido",
      "Conflitos armados e perseguições políticas no país de origem",
      "Acesso à educação e saúde de qualidade no destino",
      "Estabilidade econômica e política no local de chegada",
    ],
    correta: "Conflitos armados e perseguições políticas no país de origem",
    categoria: "geografia",
    explicacao:
      "Fatores de repulsão são as condições negativas que 'empurram' as pessoas para fora de sua área de origem, como guerras, desastres naturais, falta de oportunidades e perseguições.",
  },
  {
    pergunta:
      "No Segundo Reinado, o café tornou-se o principal produto de exportação do Brasil, associado ao uso intensivo da mão de obra escravizada. Uma consequência da economia cafeeira nesse período foi:",
    opcoes: [
      "A abolição imediata da escravidão",
      "A substituição do latifúndio pelo minifúndio",
      "O fortalecimento da elite agrária escravista",
      "A industrialização da região Norte",
      "A crise da produção de açúcar no Nordeste",
    ],
    correta: "O fortalecimento da elite agrária escravista",
    categoria: "historia",
    explicacao:
      "A expansão do café no Segundo Reinado consolidou o poder econômico e político da elite agrária ligada à produção cafeeira, que dependia da mão de obra escravizada para sustentar seus latifúndios.",
  },
  {
    pergunta:
      "A Queda da Bastilha, em 14 de julho de 1789, é considerada o evento simbólico que marcou o início de qual importante processo histórico?",
    opcoes: [
      "Revolução Industrial",
      "Reforma Protestante",
      "Revolução Francesa",
      "Unificação da Itália",
      "Guerra dos Cem Anos",
    ],
    correta: "Revolução Francesa",
    categoria: "historia",
    explicacao:
      "A tomada da prisão da Bastilha, símbolo do absolutismo monárquico, representou o início da Revolução Francesa, um movimento que transformou a política e a sociedade da França e influenciou o mundo todo.",
  },
  {
    pergunta:
      "A Primeira Guerra Mundial (1914-1918) foi desencadeada por uma série de tensões políticas, econômicas e nacionalistas na Europa. O estopim para o conflito foi:",
    opcoes: [
      "A invasão da Polônia pela Alemanha",
      "O ataque japonês a Pearl Harbor",
      "A Revolução Russa de 1917",
      "O assassinato do arquiduque Francisco Ferdinando, herdeiro do trono Austro-Húngaro",
      "A crise econômica de 1929",
    ],
    correta:
      "O assassinato do arquiduque Francisco Ferdinando, herdeiro do trono Austro-Húngaro",
    categoria: "historia",
    explicacao:
      "O assassinato do arquiduque em Sarajevo, por um nacionalista sérvio, foi o evento que ativou o complexo sistema de alianças militares na Europa, levando rapidamente à declaração de guerra e ao início do conflito.",
  },
  {
    pergunta:
      "Após a Segunda Guerra Mundial, o mundo ficou politicamente dividido em dois grandes blocos de poder, liderados pelos Estados Unidos e pela União Soviética. Esse período de tensão geopolítica ficou conhecido como:",
    opcoes: [
      "Globalização",
      "Guerra Fria",
      "Belle Époque",
      "Paz Armada",
      "Período Entreguerras",
    ],
    correta: "Guerra Fria",
    categoria: "historia",
    explicacao:
      "A Guerra Fria foi um período de disputa ideológica, política, econômica e militar indireta entre o bloco capitalista (liderado pelos EUA) e o bloco socialista (liderado pela URSS), que durou de 1947 até 1991.",
  },
  {
    pergunta:
      "A Era Vargas (1930-1945) foi um período de grandes transformações no Brasil. O período de 1937 a 1945, caracterizado pela centralização do poder e repressão política, é conhecido como:",
    opcoes: [
      "Governo Provisório",
      "Governo Constitucional",
      "Estado Novo",
      "República do Café com Leite",
      "Milagre Econômico",
    ],
    correta: "Estado Novo",
    categoria: "historia",
    explicacao:
      "O Estado Novo foi a fase ditatorial da Era Vargas, iniciada com um golpe de estado em 1937. Caracterizou-se pelo autoritarismo, censura, criação de leis trabalhistas (CLT) e forte propaganda nacionalista.",
  },
  {
    pergunta:
      "A Ditadura Militar no Brasil (1964-1985) foi marcada pelo autoritarismo. O Ato Institucional Nº 5 (AI-5), de 1968, é considerado o mais duro do regime porque:",
    opcoes: [
      "Instituiu o bipartidarismo",
      "Convocou eleições diretas para presidente",
      "Anistiou os presos políticos",
      "Deu ao presidente o poder de fechar o Congresso e cassar mandatos",
      "Aprovou a Constituição de 1988",
    ],
    correta:
      "Deu ao presidente o poder de fechar o Congresso e cassar mandatos",
    categoria: "historia",
    explicacao:
      "O AI-5 representou o endurecimento do regime militar, pois suspendeu garantias constitucionais, como o habeas corpus, e concedeu poderes quase absolutos ao presidente, intensificando a repressão política.",
  },
  {
    pergunta:
      "A Reforma Protestante, iniciada no século XVI, criticava práticas da Igreja Católica. Quem é considerado o principal líder desse movimento, autor das 95 Teses?",
    opcoes: [
      "João Calvino",
      "Henrique VIII",
      "Inácio de Loyola",
      "Martinho Lutero",
      "Tomás de Aquino",
    ],
    correta: "Martinho Lutero",
    categoria: "historia",
    explicacao:
      "Martinho Lutero, um monge alemão, iniciou a Reforma Protestante ao publicar suas 95 Teses em 1517, criticando a venda de indulgências e outras práticas da Igreja, defendendo a salvação pela fé.",
  },
  {
    pergunta:
      "A democracia, como sistema de governo, tem suas origens na Antiguidade Clássica. Em qual cidade-estado grega a democracia se desenvolveu de forma pioneira?",
    opcoes: ["Esparta", "Tebas", "Corinto", "Atenas", "Micenas"],
    correta: "Atenas",
    categoria: "historia",
    explicacao:
      "A democracia ateniense, embora diferente da atual (pois excluía mulheres, estrangeiros e escravizados), foi pioneira ao permitir que os cidadãos participassem diretamente das decisões políticas na pólis.",
  },
  {
    pergunta:
      "O Feudalismo, sistema que predominou na Europa durante a Idade Média, tinha como principal característica econômica a:",
    opcoes: [
      "Produção industrial em larga escala",
      "Intenso comércio com o Oriente",
      "Economia agrária e de subsistência, centrada no feudo",
      "Utilização de mão de obra assalariada",
      "Livre concorrência de mercado",
    ],
    correta: "Economia agrária e de subsistência, centrada no feudo",
    categoria: "historia",
    explicacao:
      "A economia feudal era baseada na agricultura de subsistência. O feudo era a unidade produtiva, onde se produzia quase tudo o que era necessário para o consumo local, com pouca circulação de moeda e comércio.",
  },
  {
    pergunta:
      "A Revolução Industrial, iniciada na Inglaterra no século XVIII, transformou a produção e a sociedade. Uma de suas principais consequências sociais foi:",
    opcoes: [
      "A diminuição da desigualdade social",
      "O fortalecimento do trabalho artesanal",
      "A melhoria das condições de vida nas cidades",
      "A formação de uma nova classe operária urbana e o surgimento de problemas sociais",
      "A redução da jornada de trabalho para todos os trabalhadores",
    ],
    correta:
      "A formação de uma nova classe operária urbana e o surgimento de problemas sociais",
    categoria: "historia",
    explicacao:
      "A Revolução Industrial levou a um grande êxodo rural e à concentração de trabalhadores nas cidades, formando o proletariado. Esses operários viviam em condições precárias, com longas jornadas e baixos salários.",
  },
  {
    pergunta:
      "Qual foi o principal objetivo das Grandes Navegações europeias nos séculos XV e XVI?",
    opcoes: [
      "Estabelecer colônias de povoamento na América",
      "Promover a troca cultural pacífica com os povos nativos",
      "Buscar novas rotas comerciais para as Índias em busca de especiarias",
      "Fugir das perseguições religiosas na Europa",
      "Estudar a fauna e a flora dos novos continentes",
    ],
    correta:
      "Buscar novas rotas comerciais para as Índias em busca de especiarias",
    categoria: "historia",
    explicacao:
      "O objetivo central das Grandes Navegações era encontrar um caminho marítimo alternativo para as Índias, contornando o monopólio comercial das cidades italianas e dos árabes sobre as valiosas especiarias do Oriente.",
  },
  {
    pergunta:
      "A Proclamação da República no Brasil, em 1889, foi resultado de uma crise do Império. Qual fator contribuiu para a queda da monarquia?",
    opcoes: [
      "O apoio popular maciço ao Imperador Dom Pedro II",
      "A satisfação dos militares com o governo imperial",
      "A aliança entre a monarquia e a Igreja Católica",
      "O descontentamento dos cafeicultores após a abolição da escravidão sem indenização",
      "A inexistência de ideias republicanas no país",
    ],
    correta:
      "O descontentamento dos cafeicultores após a abolição da escravidão sem indenização",
    categoria: "historia",
    explicacao:
      "A queda do Império foi resultado de múltiplos fatores, incluindo a 'Questão Militar', a 'Questão Religiosa' e, crucialmente, a perda de apoio da elite cafeicultora, que se sentiu traída pela abolição da escravatura em 1888.",
  },
  {
    pergunta:
      "A Independência do Brasil, proclamada em 1822, foi um processo complexo. Qual evento europeu influenciou diretamente esse processo?",
    opcoes: [
      "A Revolução Francesa",
      "A unificação da Alemanha",
      "A Revolução Industrial",
      "As Guerras Napoleônicas e a vinda da Família Real para o Brasil",
      "A Reforma Protestante",
    ],
    correta: "As Guerras Napoleônicas e a vinda da Família Real para o Brasil",
    categoria: "historia",
    explicacao:
      "A invasão de Portugal por Napoleão em 1807 forçou a transferência da corte portuguesa para o Rio de Janeiro. Isso elevou o status do Brasil e criou as condições políticas e econômicas que levaram à independência.",
  },
  {
    pergunta:
      "O movimento 'Diretas Já', que mobilizou milhões de brasileiros entre 1983 e 1984, tinha como principal reivindicação:",
    opcoes: [
      "O fim da censura à imprensa",
      "A anistia para os exilados políticos",
      "A aprovação de uma nova Constituição",
      "A realização de eleições diretas para Presidente da República",
      "A criação do Plano Cruzado para combater a inflação",
    ],
    correta: "A realização de eleições diretas para Presidente da República",
    categoria: "historia",
    explicacao:
      "Durante a fase final da Ditadura Militar, o movimento 'Diretas Já' lutou pela aprovação de uma emenda constitucional (Emenda Dante de Oliveira) que restabeleceria o direito do povo de eleger diretamente o presidente.",
  },
  {
    pergunta:
      "A queda do Império Romano do Ocidente em 476 d.C. é o marco tradicional para o início da Idade Média. Um dos fatores que contribuíram para essa queda foi:",
    opcoes: [
      "O fortalecimento do Senado Romano",
      "A ausência de crises econômicas",
      "A expansão contínua e bem-sucedida do Império",
      "As invasões de povos germânicos e a crise interna (política e econômica)",
      "A conversão do Império ao cristianismo",
    ],
    correta:
      "As invasões de povos germânicos e a crise interna (política e econômica)",
    categoria: "historia",
    explicacao:
      "A queda de Roma foi um processo longo, causado por uma combinação de fatores, incluindo a instabilidade política, a crise econômica e a pressão crescente das migrações e invasões de povos germânicos em suas fronteiras.",
  },
  {
    pergunta: "Choose the correct sentence in the Simple Past tense:",
    opcoes: [
      "She go to the park yesterday.",
      "They is playing soccer now.",
      "He went to the cinema last night.",
      "We has seen this movie before.",
      "I am study English every day.",
    ],
    correta: "He went to the cinema last night.",
    categoria: "ingles",
    explicacao:
      "A frase 'He went to the cinema last night' usa o verbo irregular 'go' em sua forma no passado, 'went', para descrever uma ação concluída no passado ('last night').",
  },
  {
    pergunta: "Which word is a synonym for 'happy'?",
    opcoes: ["Sad", "Angry", "Joyful", "Tired", "Bored"],
    correta: "Joyful",
    categoria: "ingles",
    explicacao:
      "'Joyful' significa alegre, cheio de alegria, sendo um sinônimo direto de 'happy' (feliz).",
  },
  {
    pergunta: "Complete the sentence: 'I have never _____ to Japan.'",
    opcoes: ["be", "was", "been", "being", "is"],
    correta: "been",
    categoria: "ingles",
    explicacao:
      "O Present Perfect tense (have + past participle) é usado para experiências de vida. 'Been' é o particípio passado do verbo 'to be'.",
  },
  {
    pergunta: "Which of the following is a modal verb used to express ability?",
    opcoes: ["Should", "May", "Must", "Can", "Will"],
    correta: "Can",
    categoria: "ingles",
    explicacao:
      "O verbo modal 'can' é usado para expressar habilidade ou capacidade. Ex: 'I can swim' (Eu sei nadar).",
  },
  {
    pergunta:
      "In the sentence 'The book is on the table,' what is the function of the word 'on'?",
    opcoes: ["Verb", "Noun", "Adjective", "Preposition", "Adverb"],
    correta: "Preposition",
    categoria: "ingles",
    explicacao:
      "'On' é uma preposição de lugar, usada para indicar a posição de algo sobre uma superfície.",
  },
  {
    pergunta:
      "Choose the correct comparative form: 'A lion is _____ than a cat.'",
    opcoes: ["more big", "bigger", "biggest", "the bigger", "big"],
    correta: "bigger",
    categoria: "ingles",
    explicacao:
      "Para adjetivos curtos como 'big', a forma comparativa é formada adicionando '-er' ao final (dobrando a consoante final, neste caso).",
  },
  {
    pergunta: "What does the phrasal verb 'give up' mean?",
    opcoes: [
      "To distribute",
      "To continue",
      "To stop trying/quit",
      "To offer",
      "To return something",
    ],
    correta: "To stop trying/quit",
    categoria: "ingles",
    explicacao:
      "'Give up' significa desistir, parar de tentar algo. Ex: 'Don't give up on your dreams.'",
  },
  {
    pergunta:
      "Complete with the correct future tense: 'I think it _____ tomorrow.'",
    opcoes: ["rains", "rained", "is raining", "will rain", "has rained"],
    correta: "will rain",
    categoria: "ingles",
    explicacao:
      "'Will' é usado para fazer previsões sobre o futuro, especialmente quando expressamos uma opinião (I think).",
  },
  {
    pergunta:
      "Read the sentence: 'If I had more money, I _____ a new car.' Which option completes the second conditional correctly?",
    opcoes: ["buy", "will buy", "bought", "would buy", "am buying"],
    correta: "would buy",
    categoria: "ingles",
    explicacao:
      "A 'Second Conditional' (If + Simple Past, ... would + base verb) é usada para situações hipotéticas ou improváveis no presente ou futuro.",
  },
  {
    pergunta: "What is the plural form of the word 'child'?",
    opcoes: ["Childs", "Childes", "Childrens", "Children", "Child"],
    correta: "Children",
    categoria: "ingles",
    explicacao:
      "'Child' é um substantivo com plural irregular. Sua forma no plural é 'children'.",
  },
  {
    pergunta: "Which question is grammatically correct?",
    opcoes: [
      "Where you go?",
      "Why she is crying?",
      "How much cost this?",
      "When did they arrive?",
      "What you are doing?",
    ],
    correta: "When did they arrive?",
    categoria: "ingles",
    explicacao:
      "A estrutura correta para perguntas no Simple Past é: Question Word + did + subject + base verb. As outras opções têm erros na ordem das palavras ou no uso do verbo auxiliar.",
  },
  {
    pergunta: "The opposite of 'expensive' is:",
    opcoes: ["Beautiful", "Cheap", "Large", "Difficult", "New"],
    correta: "Cheap",
    categoria: "ingles",
    explicacao:
      "'Expensive' significa caro. Seu antônimo (oposto) é 'cheap', que significa barato.",
  },
  {
    pergunta:
      "Complete the sentence: 'She is interested _____ learning new languages.'",
    opcoes: ["on", "at", "for", "in", "with"],
    correta: "in",
    categoria: "ingles",
    explicacao:
      "A expressão correta é 'to be interested in something/doing something', que significa 'estar interessado em algo/fazer algo'.",
  },
  {
    pergunta: "What does 'ASAP' stand for?",
    opcoes: [
      "As Soon As Possible",
      "As Simple As Possible",
      "Always Say A Prayer",
      "Another Story, Another Place",
      "A Super Awesome Person",
    ],
    correta: "As Soon As Possible",
    categoria: "ingles",
    explicacao:
      "ASAP é um acrônimo comum em inglês que significa 'As Soon As Possible', ou seja, 'o mais rápido possível'.",
  },
  {
    pergunta:
      "Identify the object pronoun in the sentence: 'He gave me a present.'",
    opcoes: ["He", "gave", "me", "a", "present"],
    correta: "me",
    categoria: "ingles",
    explicacao:
      "Pronomes objeto (object pronouns) recebem a ação do verbo. Na frase, 'me' (mim/me) é quem recebe o presente, portanto, é o pronome objeto.",
  },
  {
    pergunta: "Qual frase utiliza a crase corretamente?",
    opcoes: [
      "Fui à Paris nas férias.",
      "Ele se referiu à ela com respeito.",
      "O evento acontecerá de segunda à sexta.",
      "Entreguei o relatório à diretora.",
      "Começou à chover muito forte.",
    ],
    correta: "Entreguei o relatório à diretora.",
    categoria: "linguaportuguesa",
    explicacao:
      "Usa-se crase na junção da preposição 'a' com o artigo feminino 'a'. O verbo 'entregar' pede a preposição (entregar algo A alguém), e 'diretora' é um substantivo feminino que admite artigo.",
  },
  {
    pergunta:
      "Na frase 'O menino, um aluno curioso, abriu o presente', o termo entre vírgulas é um:",
    opcoes: [
      "Sujeito",
      "Vocativo",
      "Aposto explicativo",
      "Predicativo do sujeito",
      "Objeto direto",
    ],
    correta: "Aposto explicativo",
    categoria: "linguaportuguesa",
    explicacao:
      "O termo 'um aluno curioso' serve para explicar quem é o 'menino', funcionando como um aposto explicativo, que deve sempre ser isolado por pontuação (vírgulas, travessões).",
  },
  {
    pergunta: "Assinale a alternativa que contém uma metáfora.",
    opcoes: [
      "Ele é forte como um touro.",
      "A vida é uma nuvem que voa.",
      "Chorou rios de lágrimas.",
      "O céu está cinza.",
      "Comi dois pratos de arroz.",
    ],
    correta: "A vida é uma nuvem que voa.",
    categoria: "linguaportuguesa",
    explicacao:
      "A metáfora é uma comparação implícita. A frase afirma que 'a vida é uma nuvem', estabelecendo uma relação de semelhança direta, sem usar conectivos como 'como'.",
  },
  {
    pergunta: "Assinale a alternativa com a concordância verbal correta.",
    opcoes: [
      "Fazem dois anos que não o vejo.",
      "Houveram muitos problemas na reunião.",
      "A maioria dos alunos passou no teste.",
      "Vende-se casas novas no bairro.",
      "Precisa-se de vendedores qualificados.",
    ],
    correta: "A maioria dos alunos passou no teste.",
    categoria: "linguaportuguesa",
    explicacao:
      "Com expressões partitivas como 'a maioria de', o verbo pode concordar com o núcleo (maioria) ou com o termo especificador (alunos). 'Passou' está correto. 'Fazer' (tempo) e 'haver' (existir) são impessoais.",
  },
  {
    pergunta:
      "Qual era o principal objetivo da Semana de Arte Moderna de 1922?",
    opcoes: [
      "Retornar aos valores do Parnasianismo.",
      "Imitar os modelos literários de Portugal.",
      "Romper com a arte tradicional e buscar uma identidade brasileira.",
      "Valorizar a gramática e a linguagem formal.",
      "Criticar a industrialização do país.",
    ],
    correta:
      "Romper com a arte tradicional e buscar uma identidade brasileira.",
    categoria: "linguaportuguesa",
    explicacao:
      "O Modernismo brasileiro, inaugurado pela Semana de 22, buscou romper com o academicismo, valorizar a cultura nacional, a liberdade de expressão e a linguagem coloquial.",
  },
  {
    pergunta:
      "Na frase 'Adoro ler Machado de Assis', qual figura de linguagem ocorre?",
    opcoes: ["Metáfora", "Hipérbole", "Metonímia", "Eufemismo", "Ironia"],
    correta: "Metonímia",
    categoria: "linguaportuguesa",
    explicacao:
      "Ocorre metonímia, a substituição do autor pela obra. Ninguém lê o autor (a pessoa), mas sim a sua obra literária.",
  },
  {
    pergunta:
      "Complete a frase: '___ você não veio? Foi ___ eu estava doente.'",
    opcoes: [
      "Por que / porque",
      "Porque / por que",
      "Por quê / porquê",
      "Por que / por quê",
      "Porquê / porque",
    ],
    correta: "Por que / porque",
    categoria: "linguaportuguesa",
    explicacao:
      "'Por que' (separado) é usado no início de perguntas. 'Porque' (junto) é usado em respostas e explicações.",
  },
  {
    pergunta:
      "Qual é uma característica fundamental do Realismo na literatura?",
    opcoes: [
      "Idealização da realidade e dos heróis.",
      "Fuga da realidade e exaltação da natureza.",
      "Análise psicológica dos personagens e crítica social.",
      "Linguagem complexa e temas mitológicos.",
      "Foco no sentimentalismo e na emoção.",
    ],
    correta: "Análise psicológica dos personagens e crítica social.",
    categoria: "linguaportuguesa",
    explicacao:
      "O Realismo se opôs ao Romantismo, buscando retratar a sociedade de forma objetiva, com foco na análise do comportamento humano e na crítica às instituições sociais.",
  },
  {
    pergunta: "Assinale a frase com ERRO de regência verbal:",
    opcoes: [
      "Eu assisti ao filme ontem.",
      "O médico assistiu o paciente.",
      "Lembrei do nosso compromisso.",
      "Ela namora com o vizinho.",
      "Prefiro cinema a teatro.",
    ],
    correta: "Ela namora com o vizinho.",
    categoria: "linguaportuguesa",
    explicacao:
      "O verbo 'namorar' é transitivo direto, não exigindo a preposição 'com'. O correto, na norma culta, é 'Ela namora o vizinho'. O mesmo vale para 'Lembrei do...', que deveria ser 'Lembrei-me do...'",
  },
  {
    pergunta:
      "A diferença de sotaques e vocabulário entre o Rio de Janeiro e São Paulo é um exemplo de:",
    opcoes: [
      "Variação histórica",
      "Variação social",
      "Variação situacional (estilística)",
      "Variação regional (diatópica)",
      "Linguagem formal",
    ],
    correta: "Variação regional (diatópica)",
    categoria: "linguaportuguesa",
    explicacao:
      "A variação regional, ou diatópica, diz respeito às diferenças de fala (sotaque, léxico) entre falantes de diferentes regiões geográficas.",
  },
  {
    pergunta:
      "Em 'Comprei o livro e li-o em seguida', o pronome 'o' substitui qual palavra?",
    opcoes: ["Eu", "seguida", "Comprei", "o livro", "e"],
    correta: "o livro",
    categoria: "linguaportuguesa",
    explicacao:
      "O pronome oblíquo 'o' funciona como objeto direto, substituindo o termo 'o livro' para evitar repetição. A frase equivale a 'Comprei o livro e li o livro em seguida'.",
  },
  {
    pergunta: "Qual palavra é acentuada pela mesma regra de 'lâmpada'?",
    opcoes: ["Café", "Hífen", "Médico", "Saí", "Herói"],
    correta: "Médico",
    categoria: "linguaportuguesa",
    explicacao:
      "Tanto 'lâmpada' (lâm-pa-da) quanto 'médico' (mé-di-co) são palavras proparoxítonas (a sílaba tônica é a antepenúltima), e todas as proparoxítonas são acentuadas.",
  },
  {
    pergunta:
      "Na frase 'Aluga-se apartamento', a partícula 'se' é classificada como:",
    opcoes: [
      "Partícula apassivadora",
      "Índice de indeterminação do sujeito",
      "Pronome reflexivo",
      "Parte integrante do verbo",
      "Conjunção subordinativa",
    ],
    correta: "Partícula apassivadora",
    categoria: "linguaportuguesa",
    explicacao:
      "Quando o 'se' acompanha um verbo transitivo direto ('alugar algo'), ele funciona como partícula apassivadora. A frase equivale a 'Apartamento é alugado'.",
  },
  {
    pergunta: "Qual é a principal finalidade do gênero textual 'charge'?",
    opcoes: [
      "Narrar uma longa história.",
      "Apresentar dados científicos.",
      "Fazer uma crítica social ou política com humor.",
      "Ensinar o passo a passo de uma tarefa.",
      "Descrever uma paisagem com precisão.",
    ],
    correta: "Fazer uma crítica social ou política com humor.",
    categoria: "linguaportuguesa",
    explicacao:
      "A charge utiliza a linguagem verbal e não verbal (imagem) para tecer críticas a acontecimentos atuais, geralmente de natureza política ou social, de forma humorística e satírica.",
  },
  {
    pergunta:
      "Assinale a alternativa em que todas as palavras são paroxítonas.",
    opcoes: [
      "Sabiá, café, jiló",
      "Fácil, caráter, taxi",
      "Médico, ônibus, pêssego",
      "Urubu, tatu, saci",
      "Pé, pó, lá",
    ],
    correta: "Fácil, caráter, taxi",
    categoria: "linguaportuguesa",
    explicacao:
      "Palavras paroxítonas têm a penúltima sílaba como tônica. Na opção correta, todas as palavras (fá-cil, ca-rá-ter, tá-xi) se encaixam nessa classificação.",
  },
  {
    pergunta:
      "Uma loja oferece um desconto de 20% em um produto que custa R$ 150,00. Qual o valor do produto com o desconto?",
    opcoes: ["R$ 100,00", "R$ 110,00", "R$ 120,00", "R$ 130,00", "R$ 140,00"],
    correta: "R$ 120,00",
    categoria: "matematica",
    explicacao:
      "O valor do desconto é 20% de 150, que é 0,20 * 150 = R$ 30,00. O preço final é 150 - 30 = R$ 120,00.",
  },
  {
    pergunta:
      "Se 3 torneiras enchem um tanque em 6 horas, em quanto tempo 2 dessas mesmas torneiras encheriam o mesmo tanque?",
    opcoes: ["4 horas", "8 horas", "9 horas", "10 horas", "12 horas"],
    correta: "9 horas",
    categoria: "matematica",
    explicacao:
      "Esta é uma regra de três inversa. Menos torneiras levam mais tempo. (3 torneiras * 6 horas) = (2 torneiras * x horas) => 18 = 2x => x = 9 horas.",
  },
  {
    pergunta:
      "Qual a área de um campo de futebol retangular com 100 metros de comprimento e 70 metros de largura?",
    opcoes: ["700 m²", "1.700 m²", "3.500 m²", "7.000 m²", "10.000 m²"],
    correta: "7.000 m²",
    categoria: "matematica",
    explicacao:
      "A área de um retângulo é calculada multiplicando-se o comprimento pela largura. Área = 100 m * 70 m = 7.000 m².",
  },
  {
    pergunta:
      "Em um triângulo retângulo, os catetos medem 6 cm e 8 cm. Qual a medida da hipotenusa?",
    opcoes: ["9 cm", "10 cm", "12 cm", "14 cm", "15 cm"],
    correta: "10 cm",
    categoria: "matematica",
    explicacao:
      "Pelo Teorema de Pitágoras (a² = b² + c²), temos h² = 6² + 8² => h² = 36 + 64 => h² = 100 => h = √100 = 10 cm.",
  },
  {
    pergunta: "Qual o resultado da equação de primeiro grau: 3x - 5 = 16?",
    opcoes: ["x = 5", "x = 6", "x = 7", "x = 8", "x = 9"],
    correta: "x = 7",
    categoria: "matematica",
    explicacao:
      "Para resolver, isolamos o x: 3x = 16 + 5 => 3x = 21 => x = 21 / 3 => x = 7.",
  },
  {
    pergunta:
      "Qual a probabilidade de, ao lançar um dado comum de 6 faces, obter um número maior que 4?",
    opcoes: ["1/6", "1/4", "1/3", "1/2", "2/3"],
    correta: "1/3",
    categoria: "matematica",
    explicacao:
      "Os números maiores que 4 são 5 e 6 (2 casos favoráveis). O total de resultados possíveis é 6. A probabilidade é 2/6, que simplificando dá 1/3.",
  },
  {
    pergunta:
      "As notas de um aluno em 4 provas foram 7, 8, 9 e 6. Qual a média aritmética dessas notas?",
    opcoes: ["7.0", "7.5", "8.0", "8.5", "9.0"],
    correta: "7.5",
    categoria: "matematica",
    explicacao:
      "A média é a soma das notas dividida pelo número de provas: (7 + 8 + 9 + 6) / 4 = 30 / 4 = 7,5.",
  },
  {
    pergunta:
      "Um terreno quadrado tem 225 m² de área. Qual é a medida do lado desse terreno?",
    opcoes: ["12 m", "15 m", "18 m", "20 m", "25 m"],
    correta: "15 m",
    categoria: "matematica",
    explicacao:
      "A área de um quadrado é Lado². Portanto, o lado é a raiz quadrada da área: √225 = 15 metros.",
  },
  {
    pergunta: "As raízes da equação do segundo grau x² - 5x + 6 = 0 são:",
    opcoes: ["1 e 2", "2 e 3", "3 e 4", "1 e 5", "2 e 4"],
    correta: "2 e 3",
    categoria: "matematica",
    explicacao:
      "Usando a fórmula de Bhaskara ou por soma e produto (Soma=5, Produto=6), encontramos que as raízes são 2 e 3, pois 2+3=5 e 2*3=6.",
  },
  {
    pergunta: "Qual o volume de um cubo cuja aresta mede 3 cm?",
    opcoes: ["9 cm³", "12 cm³", "18 cm³", "27 cm³", "30 cm³"],
    correta: "27 cm³",
    categoria: "matematica",
    explicacao:
      "O volume de um cubo é calculado elevando a medida da aresta ao cubo: V = 3³ = 3 * 3 * 3 = 27 cm³.",
  },
  {
    pergunta:
      "Se um carro percorre 300 km com 25 litros de gasolina, quantos quilômetros ele percorrerá com 10 litros?",
    opcoes: ["100 km", "120 km", "150 km", "180 km", "200 km"],
    correta: "120 km",
    categoria: "matematica",
    explicacao:
      "Primeiro, calculamos o consumo: 300 km / 25 L = 12 km/L. Com 10 litros, ele percorrerá 10 L * 12 km/L = 120 km.",
  },
  {
    pergunta:
      "Uma pizza foi dividida em 8 fatias iguais. Se João comeu 3 fatias, que fração da pizza ele comeu?",
    opcoes: ["1/8", "1/4", "3/8", "1/2", "3/4"],
    correta: "3/8",
    categoria: "matematica",
    explicacao:
      "A fração é o número de partes comidas (numerador) sobre o total de partes (denominador). Portanto, a fração é 3/8.",
  },
  {
    pergunta:
      "Uma escada de 5 metros está apoiada em uma parede. A base da escada está a 3 metros da parede. A que altura a escada toca a parede?",
    opcoes: ["2 m", "3 m", "4 m", "5 m", "6 m"],
    correta: "4 m",
    categoria: "matematica",
    explicacao:
      "A escada, a parede e o chão formam um triângulo retângulo. A escada é a hipotenusa (5m) e a distância da base é um cateto (3m). Pelo Teorema de Pitágoras: 5² = 3² + h² => 25 = 9 + h² => h² = 16 => h = 4 metros.",
  },
  {
    pergunta:
      "Qual o juro simples produzido por um capital de R$ 1.200,00 aplicado a uma taxa de 2% ao mês durante 5 meses?",
    opcoes: ["R$ 100,00", "R$ 120,00", "R$ 150,00", "R$ 180,00", "R$ 200,00"],
    correta: "R$ 120,00",
    categoria: "matematica",
    explicacao:
      "A fórmula do juro simples é J = C * i * t. J = 1200 * 0,02 * 5. J = 1200 * 0,10 = R$ 120,00.",
  },
  {
    pergunta: "Se f(x) = 2x + 3, qual o valor de f(4)?",
    opcoes: ["7", "8", "9", "10", "11"],
    correta: "11",
    categoria: "matematica",
    explicacao:
      "Para encontrar f(4), substituímos o x por 4 na função: f(4) = 2 * (4) + 3 = 8 + 3 = 11.",
  },
  {
    pergunta:
      "Qual das seguintes substâncias é formada por átomos de um único elemento químico?",
    opcoes: [
      "Água (H₂O)",
      "Sal de cozinha (NaCl)",
      "Gás oxigênio (O₂)",
      "Aço (liga de Ferro e Carbono)",
      "Ar atmosférico (mistura de gases)",
    ],
    correta: "Gás oxigênio (O₂)",
    categoria: "quimica",
    explicacao:
      "Uma substância simples é formada por átomos de um mesmo elemento. O gás oxigênio (O₂) é composto apenas por átomos do elemento oxigênio. Água e sal são compostos, e aço e ar são misturas.",
  },
  {
    pergunta:
      "Em um átomo eletricamente neutro, o número de prótons é sempre igual ao número de:",
    opcoes: ["Nêutrons", "Elétrons", "Massa", "Núcleons", "Isótopos"],
    correta: "Elétrons",
    categoria: "quimica",
    explicacao:
      "Um átomo é neutro quando a carga positiva dos prótons no núcleo é balanceada pela carga negativa dos elétrons na eletrosfera. Portanto, o número de prótons é igual ao de elétrons.",
  },
  {
    pergunta:
      "A ligação química que ocorre pela transferência de elétrons entre um metal e um ametal, formando íons, é chamada de:",
    opcoes: [
      "Ligação covalente",
      "Ligação iônica",
      "Ligação metálica",
      "Ponte de hidrogênio",
      "Força de van der Waals",
    ],
    correta: "Ligação iônica",
    categoria: "quimica",
    explicacao:
      "Na ligação iônica, um átomo metálico (que tende a perder elétrons) transfere elétrons para um átomo ametálico (que tende a ganhar), formando íons de cargas opostas que se atraem.",
  },
  {
    pergunta: "Na escala de pH, uma solução com pH = 2 é considerada:",
    opcoes: [
      "Ácida",
      "Básica (alcalina)",
      "Neutra",
      "Saturada",
      "Super-saturada",
    ],
    correta: "Ácida",
    categoria: "quimica",
    explicacao:
      "A escala de pH vai de 0 a 14. Valores abaixo de 7 indicam uma solução ácida, pH = 7 indica neutralidade e valores acima de 7 indicam uma solução básica ou alcalina.",
  },
  {
    pergunta:
      "Qual processo descreve a passagem direta de uma substância do estado sólido para o gasoso?",
    opcoes: [
      "Fusão",
      "Vaporização",
      "Condensação",
      "Solidificação",
      "Sublimação",
    ],
    correta: "Sublimação",
    categoria: "quimica",
    explicacao:
      "Sublimação é a mudança de estado físico diretamente do sólido para o gasoso, sem passar pelo estado líquido. Um exemplo comum é o gelo seco (CO₂ sólido).",
  },
  {
    pergunta: "A Lei de Lavoisier (Lei da Conservação das Massas) afirma que:",
    opcoes: [
      "A energia não pode ser criada nem destruída.",
      "Numa reação química, a massa dos reagentes é igual à massa dos produtos.",
      "As proporções de massa dos elementos em um composto são constantes.",
      "O volume de gases numa reação segue proporções de números inteiros.",
      "A pressão de um gás é inversamente proporcional ao seu volume.",
    ],
    correta:
      "Numa reação química, a massa dos reagentes é igual à massa dos produtos.",
    categoria: "quimica",
    explicacao:
      "A famosa frase de Lavoisier 'Na natureza, nada se cria, nada se perde, tudo se transforma' resume a lei: a massa total se conserva durante uma reação química em um sistema fechado.",
  },
  {
    pergunta: "Qual das seguintes fórmulas representa um álcool?",
    opcoes: ["CH₄", "NaCl", "C₂H₅OH", "HCl", "CO₂"],
    correta: "C₂H₅OH",
    categoria: "quimica",
    explicacao:
      "Na química orgânica, a função álcool é caracterizada pela presença do grupo hidroxila (-OH) ligado a um carbono saturado. C₂H₅OH é a fórmula do etanol.",
  },
  {
    pergunta:
      "Os elementos localizados no Grupo 17 (ou 7A) da Tabela Periódica são conhecidos como:",
    opcoes: [
      "Gases Nobres",
      "Metais Alcalinos",
      "Metais Alcalinoterrosos",
      "Halogênios",
      "Calcogênios",
    ],
    correta: "Halogênios",
    categoria: "quimica",
    explicacao:
      "O Grupo 17 é a família dos halogênios, que inclui elementos como Flúor (F), Cloro (Cl), Bromo (Br) e Iodo (I). São elementos muito reativos.",
  },
  {
    pergunta:
      "A reação de queima de uma vela é um exemplo de processo que libera calor para o ambiente. Esse tipo de reação é classificado como:",
    opcoes: [
      "Endotérmica",
      "Exotérmica",
      "Isotérmica",
      "Adiabática",
      "Isocórica",
    ],
    correta: "Exotérmica",
    categoria: "quimica",
    explicacao:
      "Uma reação exotérmica (exo = para fora) é aquela que libera energia na forma de calor. A combustão (queima) é um exemplo clássico desse tipo de processo.",
  },
  {
    pergunta:
      "Ao balancear a equação química ___H₂ + ___O₂ → ___H₂O, quais são os menores coeficientes inteiros, respectivamente?",
    opcoes: ["1, 1, 1", "2, 1, 2", "1, 2, 1", "2, 2, 2", "1, 1, 2"],
    correta: "2, 1, 2",
    categoria: "quimica",
    explicacao:
      "Para que o número de átomos de cada elemento seja igual nos reagentes e produtos, a equação balanceada é 2H₂ + 1O₂ → 2H₂O. (4 hidrogênios e 2 oxigênios de cada lado).",
  },
  {
    pergunta: "Isótopos são átomos de um mesmo elemento químico que possuem:",
    opcoes: [
      "O mesmo número de nêutrons, mas diferentes números de prótons.",
      "O mesmo número de massa, mas diferentes números de elétrons.",
      "O mesmo número de prótons, mas diferentes números de nêutrons.",
      "O mesmo número de nêutrons e o mesmo número de massa.",
      "Diferentes números de prótons e de nêutrons.",
    ],
    correta: "O mesmo número de prótons, mas diferentes números de nêutrons.",
    categoria: "quimica",
    explicacao:
      "A identidade de um elemento é definida pelo número de prótons (número atômico). Isótopos são 'versões' do mesmo elemento com diferentes massas, devido a um número variável de nêutrons no núcleo.",
  },
  {
    pergunta: "O que é uma solução?",
    opcoes: [
      "Uma substância pura no estado líquido.",
      "Uma mistura heterogênea de dois ou mais componentes.",
      "Uma mistura homogênea de dois ou mais componentes.",
      "Qualquer substância que pode dissolver outra.",
      "Um composto químico formado por íons.",
    ],
    correta: "Uma mistura homogênea de dois ou mais componentes.",
    categoria: "quimica",
    explicacao:
      "Uma solução é uma mistura em que os componentes não podem ser distinguidos visualmente (homogênea), como sal dissolvido em água. É composta por um soluto (que é dissolvido) e um solvente (que dissolve).",
  },
  {
    pergunta: "O ar que respiramos é um exemplo de:",
    opcoes: [
      "Substância pura simples",
      "Substância pura composta",
      "Mistura homogênea",
      "Mistura heterogênea",
      "Elemento químico",
    ],
    correta: "Mistura homogênea",
    categoria: "quimica",
    explicacao:
      "O ar atmosférico é uma mistura de vários gases (principalmente nitrogênio, oxigênio, argônio, etc.) que formam uma única fase, sendo, portanto, uma mistura homogênea.",
  },
  {
    pergunta:
      "Qual das alternativas representa uma reação de síntese ou adição?",
    opcoes: [
      "CaCO₃ → CaO + CO₂",
      "Zn + 2HCl → ZnCl₂ + H₂",
      "2H₂O₂ → 2H₂O + O₂",
      "N₂ + 3H₂ → 2NH₃",
      "AgNO₃ + NaCl → AgCl + NaNO₃",
    ],
    correta: "N₂ + 3H₂ → 2NH₃",
    categoria: "quimica",
    explicacao:
      "Uma reação de síntese ou adição é aquela em que duas ou mais substâncias reagentes se combinam para formar um único produto. Na opção correta, nitrogênio e hidrogênio formam a amônia.",
  },
  {
    pergunta:
      "Qual é a massa molar aproximada da água (H₂O)? (Dados: H = 1 u; O = 16 u)",
    opcoes: ["16 g/mol", "17 g/mol", "18 g/mol", "20 g/mol", "32 g/mol"],
    correta: "18 g/mol",
    categoria: "quimica",
    explicacao:
      "A massa molar é a soma das massas atômicas dos elementos na molécula. Para a H₂O, temos: (2 * massa do H) + (1 * massa do O) = (2 * 1) + 16 = 18 g/mol.",
  },
  {
    pergunta:
      "Para Émile Durkheim, um dos fundadores da Sociologia, o objeto de estudo dessa ciência são os 'fatos sociais'. Qual das seguintes características define um fato social?",
    opcoes: [
      "É uma ação individual e puramente psicológica.",
      "É geral, externo e coercitivo sobre os indivíduos.",
      "É um evento raro e único, que não se repete.",
      "Depende da vontade e da escolha de cada pessoa.",
      "É uma manifestação biológica e hereditária.",
    ],
    correta: "É geral, externo e coercitivo sobre os indivíduos.",
    categoria: "sociologia",
    explicacao:
      "Durkheim define fatos sociais como maneiras de agir, pensar e sentir que são externas ao indivíduo, exercem um poder de coerção sobre ele e são gerais na extensão de uma sociedade.",
  },
  {
    pergunta:
      "Karl Marx analisou a sociedade capitalista a partir do conceito de 'luta de classes'. Segundo ele, essa luta ocorre principalmente entre:",
    opcoes: [
      "Patrícios e plebeus",
      "Clero e nobreza",
      "Burguesia e proletariado",
      "Homens e mulheres",
      "Nacionais e estrangeiros",
    ],
    correta: "Burguesia e proletariado",
    categoria: "sociologia",
    explicacao:
      "Para Marx, a história da sociedade capitalista é a história da luta entre a burguesia (donos dos meios de produção) e o proletariado (trabalhadores que vendem sua força de trabalho).",
  },
  {
    pergunta:
      "Max Weber, outro clássico da Sociologia, concentrou-se no estudo da 'ação social'. O que é uma ação social para Weber?",
    opcoes: [
      "Qualquer comportamento humano em público.",
      "Uma ação instintiva e não pensada.",
      "Um comportamento determinado por leis naturais.",
      "Uma ação humana cujo sentido é orientado pela ação de outros.",
      "Uma ação realizada em completo isolamento.",
    ],
    correta: "Uma ação humana cujo sentido é orientado pela ação de outros.",
    categoria: "sociologia",
    explicacao:
      "Para Weber, a ação social é aquela em que o indivíduo atribui um sentido subjetivo ao seu comportamento, e esse sentido está relacionado ao comportamento de outras pessoas.",
  },
  {
    pergunta:
      "O processo pelo qual os indivíduos aprendem e internalizam as normas, valores e práticas de sua cultura e sociedade é chamado de:",
    opcoes: [
      "Socialização",
      "Estratificação",
      "Mobilidade social",
      "Globalização",
      "Burocracia",
    ],
    correta: "Socialização",
    categoria: "sociologia",
    explicacao:
      "A socialização é o processo contínuo de aprendizado social que nos torna membros de uma sociedade, começando na família (socialização primária) e continuando em outras instituições como a escola.",
  },
  {
    pergunta:
      "A divisão da sociedade em camadas ou estratos, com acesso desigual a recursos como riqueza, poder e prestígio, é o conceito de:",
    opcoes: [
      "Cultura",
      "Anomia",
      "Estratificação social",
      "Identidade",
      "Coesão social",
    ],
    correta: "Estratificação social",
    categoria: "sociologia",
    explicacao:
      "A estratificação social é a hierarquização dos indivíduos e grupos em uma sociedade. Pode se basear em classes sociais, castas, estamentos, entre outros sistemas.",
  },
  {
    pergunta:
      "A língua que falamos, as festas que celebramos e as comidas que comemos são exemplos de qual aspecto da vida social?",
    opcoes: [
      "Estrutura econômica",
      "Sistema político",
      "Cultura",
      "Geografia física",
      "Genética",
    ],
    correta: "Cultura",
    categoria: "sociologia",
    explicacao:
      "Cultura é o conjunto de conhecimentos, crenças, arte, moral, leis, costumes e todos os outros hábitos e capacidades adquiridos pelo ser humano como membro de uma sociedade.",
  },
  {
    pergunta:
      "Movimentos como o feminismo, o movimento negro e os movimentos ambientalistas são exemplos de:",
    opcoes: [
      "Partidos políticos tradicionais",
      "Grupos de pressão econômica",
      "Movimentos sociais",
      "Instituições religiosas",
      "Organizações governamentais",
    ],
    correta: "Movimentos sociais",
    categoria: "sociologia",
    explicacao:
      "Movimentos sociais são ações coletivas organizadas por grupos da sociedade civil que visam promover ou resistir a mudanças sociais, lutando por direitos, reconhecimento ou transformações.",
  },
  {
    pergunta:
      "O conceito de 'indústria cultural', desenvolvido por Adorno e Horkheimer, refere-se:",
    opcoes: [
      "À produção artesanal de bens culturais.",
      "À transformação da cultura em mercadoria, produzida em massa para o consumo.",
      "Ao apoio do governo à cultura popular.",
      "À diversidade cultural existente no mundo.",
      "Às manifestações culturais espontâneas.",
    ],
    correta:
      "À transformação da cultura em mercadoria, produzida em massa para o consumo.",
    categoria: "sociologia",
    explicacao:
      "A indústria cultural critica a padronização e a comercialização da arte e da cultura no capitalismo, que passam a ser produzidas em série com o objetivo principal de gerar lucro.",
  },
  {
    pergunta: "O que é cidadania?",
    opcoes: [
      "A condição de quem nasceu em um determinado país.",
      "A obrigação de pagar impostos.",
      "O conjunto de direitos e deveres de um indivíduo em um Estado.",
      "O direito de viajar para outros países.",
      "A participação em atividades religiosas.",
    ],
    correta: "O conjunto de direitos e deveres de um indivíduo em um Estado.",
    categoria: "sociologia",
    explicacao:
      "Cidadania envolve a posse de direitos civis (liberdade, propriedade), políticos (votar, ser votado) e sociais (educação, saúde, trabalho), bem como o cumprimento de deveres para com a coletividade.",
  },
  {
    pergunta:
      "Quando um grupo social adota os valores e costumes de outro grupo, geralmente dominante, em detrimento de sua própria cultura, ocorre um processo de:",
    opcoes: [
      "Etnocentrismo",
      "Relativismo cultural",
      "Aculturação",
      "Contracultura",
      "Diversidade cultural",
    ],
    correta: "Aculturação",
    categoria: "sociologia",
    explicacao:
      "A aculturação é o processo de mudança cultural que resulta do contato entre duas ou mais culturas, frequentemente envolvendo a absorção de traços de uma cultura pela outra.",
  },
  {
    pergunta:
      "O aumento da desigualdade social no Brasil é um problema complexo. Um fator estrutural que contribui para essa desigualdade é:",
    opcoes: [
      "A distribuição de renda equitativa.",
      "O acesso universal e de qualidade à educação.",
      "A alta mobilidade social entre as classes.",
      "A concentração histórica de renda e terras.",
      "A baixa carga tributária sobre os mais ricos.",
    ],
    correta: "A concentração histórica de renda e terras.",
    categoria: "sociologia",
    explicacao:
      "A histórica concentração de riqueza (renda, patrimônio) e de terras nas mãos de uma pequena parcela da população é uma das principais causas estruturais da profunda desigualdade social no Brasil.",
  },
  {
    pergunta:
      "A globalização, além de seus aspectos econômicos, impacta a cultura ao:",
    opcoes: [
      "Isolar completamente as culturas locais.",
      "Promover a homogeneização cultural e, ao mesmo tempo, fortalecer identidades locais.",
      "Eliminar todas as formas de cultura popular.",
      "Restringir o fluxo de informações entre países.",
      "Fortalecer apenas as culturas de países subdesenvolvidos.",
    ],
    correta:
      "Promover a homogeneização cultural e, ao mesmo tempo, fortalecer identidades locais.",
    categoria: "sociologia",
    explicacao:
      "A globalização tem um efeito paradoxal: ao mesmo tempo que difunde padrões culturais globais (homogeneização), pode gerar reações de fortalecimento e reafirmação das culturas e identidades locais.",
  },
  {
    pergunta:
      "A ideia de que uma cultura é superior a outra, julgando os outros a partir de seus próprios valores, é a definição de:",
    opcoes: [
      "Relativismo cultural",
      "Alteridade",
      "Etnocentrismo",
      "Multiculturalismo",
      "Identidade cultural",
    ],
    correta: "Etnocentrismo",
    categoria: "sociologia",
    explicacao:
      "O etnocentrismo é a visão de mundo na qual o próprio grupo é tomado como centro de tudo e todos os outros são pensados e sentidos através de nossos valores, modelos e definições.",
  },
  {
    pergunta:
      "Qual das seguintes opções descreve melhor o conceito sociológico de 'poder'?",
    opcoes: [
      "Apenas a força física e a violência.",
      "A capacidade de impor a própria vontade sobre os outros, mesmo contra a resistência destes.",
      "A posse de grande quantidade de dinheiro.",
      "Apenas o poder exercido por governos e Estados.",
      "A habilidade de convencer alguém através do diálogo.",
    ],
    correta:
      "A capacidade de impor a própria vontade sobre os outros, mesmo contra a resistência destes.",
    categoria: "sociologia",
    explicacao:
      "Essa é a definição clássica de poder de Max Weber. O poder pode ser legítimo (autoridade) ou ilegítimo, e se manifesta em diversas relações sociais, não apenas na política.",
  },
  {
    pergunta:
      "O trabalho no mundo contemporâneo tem sido marcado por transformações como a 'uberização'. Essa mudança frequentemente resulta em:",
    opcoes: [
      "Maior estabilidade e segurança para os trabalhadores.",
      "Fortalecimento dos sindicatos e dos direitos trabalhistas.",
      "Aumento do emprego formal com carteira assinada.",
      "Precarização das relações de trabalho e aumento da informalidade.",
      "Diminuição da jornada de trabalho para todos.",
    ],
    correta:
      "Precarização das relações de trabalho e aumento da informalidade.",
    categoria: "sociologia",
    explicacao:
      "Fenômenos como a 'uberização' têm levado a um aumento do trabalho autônomo sem garantias, informalidade e perda de direitos trabalhistas, caracterizando a precarização do trabalho.",
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
