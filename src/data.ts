import { ClubEvent, GalleryItem, RuleItem, MemberQuote, InstagramPost } from './types';

export const CLUB_LOGO = '/src/assets/images/quati_real_club_badge_1784322932739.jpg';
export const HERO_IMAGE = '/src/assets/images/classic_car_hero_1784322945056.jpg';

export const EVENTS: ClubEvent[] = [
  {
    id: '1',
    title: 'Encontro Mensal QuatiReal',
    date: '16 de Agosto, 2026',
    time: '09:00 às 13:00',
    location: 'Praça de Esportes, Centro',
    city: 'Porto Real',
    description: 'Nosso tradicional encontro de domingo para expor os antigos, trocar dicas de manutenção e tomar um café com os amigos. Traga seu carro clássico e sua família!',
    isFeatured: true
  },
  {
    id: '2',
    title: 'Passeio Histórico ao Belvedere',
    date: '06 de Setembro, 2026',
    time: '08:30',
    location: 'Concentração na Entrada da Cidade',
    city: 'Quatis',
    description: 'Passeio em comboio pelas belas estradas rurais de Quatis rumo ao mirante. Ótima oportunidade para esticar as pernas dos nossos antigos e fazer belas fotos.',
    isFeatured: false
  },
  {
    id: '3',
    title: 'Exposição Beneficente Primavera',
    date: '18 de Outubro, 2026',
    time: '10:00 às 17:00',
    location: 'Horto Municipal',
    city: 'Quatis',
    description: 'Grande exposição regional de antigos com praça de alimentação, música ao vivo e arrecadação de alimentos não perecíveis para entidades locais.',
    isFeatured: false
  }
];

export const RULES: RuleItem[] = [
  {
    id: 'r1',
    title: 'Proibido Futebol',
    description: 'Evitamos discussões clubistas ou rivalidades que possam tirar o foco do antigomobilismo.',
    type: 'forbidden'
  },
  {
    id: 'r2',
    title: 'Proibido Política',
    description: 'Assuntos partidários e propagandas políticas não são permitidos para manter a harmonia do grupo.',
    type: 'forbidden'
  },
  {
    id: 'r3',
    title: 'Proibido Conteúdo Adulto',
    description: 'É estritamente proibida a postagem de pornografia ou qualquer conteúdo de teor ofensivo/impróprio.',
    type: 'forbidden'
  },
  {
    id: 'r4',
    title: 'Seja Respeitoso(a)',
    description: 'Respeito mútuo é a base da nossa comunidade. Críticas destrutivas a carros de outros membros não são aceitas.',
    type: 'warning'
  },
  {
    id: 'r5',
    title: 'Manutenção e Passeios',
    description: 'O grupo é dedicado a dicas valiosas de oficinas, autopeças, restauração e planejamento de roteiros.',
    type: 'allowed'
  },
  {
    id: 'r6',
    title: 'Divulgação de Eventos',
    description: 'Fique à vontade para divulgar encontros de carros antigos regionais e estaduais para nossa turma participar.',
    type: 'allowed'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    imageUrl: '/src/assets/images/vintage_beetle_fusca_1784322956939.jpg',
    title: 'Volkswagen Fusca 1968',
    year: '1968',
    owner: 'José Alencar',
    description: 'Fusca impecável em tom creme, com todos os detalhes originais de época e rodas de ferro com calotas cromadas.'
  },
  {
    id: 'g2',
    imageUrl: '/src/assets/images/classic_muscle_car_1784322967628.jpg',
    title: 'Chevrolet Opala SS',
    year: '1974',
    owner: 'Carlos Eduardo',
    description: 'Um autêntico clássico nacional em tom vermelho cereja metálico, com listras esportivas pretas e ronco inconfundível.'
  },
  {
    id: 'g3',
    imageUrl: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800&auto=format&fit=crop',
    title: 'Ford Corcel I',
    year: '1972',
    owner: 'Marcos Roberto',
    description: 'Raridade restaurada nos padrões de fábrica, preservando a elegância dos anos 70.'
  },
  {
    id: 'g4',
    imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop',
    title: 'Painel Clássico Restaurado',
    year: '1965',
    owner: 'Detalhe Técnico',
    description: 'Painel de instrumentos original com botões em baquelite e velocímetro redondo cromado.'
  },
  {
    id: 'g5',
    imageUrl: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=800&auto=format&fit=crop',
    title: 'Ford Maverick V8',
    year: '1976',
    owner: 'Renato Silva',
    description: 'O ronco lendário do motor V8 nacional. Maverick impecável com pintura brilhante e rodas clássicas.'
  },
  {
    id: 'g6',
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop',
    title: 'Volante Cálice & Cromados',
    year: '1962',
    owner: 'Encontro Porto Real',
    description: 'Registro em zoom do volante cálice e do painel charmoso durante nosso primeiro encontro em Porto Real.'
  }
];

export const MEMBER_QUOTES: MemberQuote[] = [
  {
    id: 'q1',
    name: 'José Alencar',
    car: 'Dono de um Fusca 1968',
    quote: 'O QuatiReal se tornou uma grande família. Mais do que carros, nós compartilhamos risadas, dicas e aquela ajuda de companheiro quando o dínamo resolve falhar na estrada.'
  },
  {
    id: 'q2',
    name: 'Carlos Eduardo',
    car: 'Dono de um Opala SS 1974',
    quote: 'Cruzar Quatis e Porto Real ao volante do meu antigo, com a galera acompanhando em comboio, é reviver o melhor da nossa juventude. Uma terapia sem igual!'
  },
  {
    id: 'q3',
    name: 'Marcia Silva',
    car: 'Dona de uma Kombi Luxo 1975',
    quote: 'As regras de respeito e a proibição de assuntos chatos no grupo do WhatsApp garantem que o papo seja leve, produtivo e 100% focado no que a gente ama: carros antigos e amizade!'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'i1',
    imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=600&auto=format&fit=crop',
    caption: 'A beleza de um clássico que atravessa gerações. Nosso encontro mensal em Porto Real reúne joias como esse belo Fusca. Quem aí também ama uma raridade impecável? 🚙✨ #QuatiReal #Fusca #CarrosAntigos #PortoReal #Antigomobilismo #Clássicos',
    likes: 184,
    comments: 24,
    date: '10 de Julho, 2026',
    link: 'https://www.instagram.com/quatireal_carrosantigos/'
  },
  {
    id: 'i2',
    imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=600&auto=format&fit=crop',
    caption: 'Ronco forte e alma esportiva. O Opala tem um lugar muito especial no coração dos antigomobilistas brasileiros! Qual o seu modelo favorito do Opala? Deixe nos comentários! 👇🔥 #Opala #OpalaSS #QuatiReal #CarrosAntigos #Chevrolet #V8 #6Cilindros',
    likes: 215,
    comments: 38,
    date: '08 de Julho, 2026',
    link: 'https://www.instagram.com/quatireal_carrosantigos/'
  },
  {
    id: 'i3',
    imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=600&auto=format&fit=crop',
    caption: 'Detalhes cromados que contam histórias. Cada painel, cada botão é uma verdadeira obra de arte mecânica dos anos dourados. 📸🛠️ #VintageStyle #Raridades #Instrumentos #QuatiReal #PortoReal #Quatis',
    likes: 142,
    comments: 11,
    date: '05 de Julho, 2026',
    link: 'https://www.instagram.com/quatireal_carrosantigos/'
  },
  {
    id: 'i4',
    imageUrl: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=600&auto=format&fit=crop',
    caption: 'Comboio de clássicos pegando a estrada sentido Quatis. Sentir o vento no rosto e ouvir o motor de época na estrada é a nossa terapia de fim de semana! 🛣️🚙💨 #Comboio #Passeio #QuatiReal #Quatis #PortoReal #PéNaEstrada',
    likes: 198,
    comments: 29,
    date: '02 de Julho, 2026',
    link: 'https://www.instagram.com/quatireal_carrosantigos/'
  },
  {
    id: 'i5',
    imageUrl: 'https://images.unsplash.com/photo-1527244583103-68f44ff535c5?q=80&w=600&auto=format&fit=crop',
    caption: 'Aquela Kombi Corujinha de respeito para colorir o nosso dia. Espaço de sobra para levar toda a família e muitas histórias para contar! 🚌❤️ #Kombi #KombiCorujinha #Volks #QuatiReal #GrupoDeCarrosAntigos',
    likes: 256,
    comments: 41,
    date: '28 de Junho, 2026',
    link: 'https://www.instagram.com/quatireal_carrosantigos/'
  },
  {
    id: 'i6',
    imageUrl: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=600&auto=format&fit=crop',
    caption: 'O charme das curvas clássicas sob o pôr do sol do interior. O antigomobilismo preserva não apenas máquinas, mas a própria memória cultural! 🌅✨ #Antigomobilismo #Cultura #QuatiReal #InteriorRJ #MaquinasDoTempo',
    likes: 172,
    comments: 15,
    date: '25 de Junho, 2026',
    link: 'https://www.instagram.com/quatireal_carrosantigos/'
  },
  {
    id: 'i7',
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=600&auto=format&fit=crop',
    caption: 'Volante cálice e a sensação indescritível de pilotar uma lenda nacional. Quem tem um antigo sabe: cada quilômetro é uma viagem no tempo! 🕰️🚗 #ViagemNoTempo #VolanteCalice #Restauracao #PortoReal #QuatiReal',
    likes: 164,
    comments: 19,
    date: '20 de Junho, 2026',
    link: 'https://www.instagram.com/quatireal_carrosantigos/'
  },
  {
    id: 'i8',
    imageUrl: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=600&auto=format&fit=crop',
    caption: 'Dica de manutenção da semana: a importância de manter a carburação regulada para aquela marcha lenta redondinha. Quem mais passa o sábado regulando o brinquedo na garagem? 🔧🛠️ #MecanicaClassica #Garagem #Carburador #Dicas #QuatiReal',
    likes: 135,
    comments: 9,
    date: '17 de Junho, 2026',
    link: 'https://www.instagram.com/quatireal_carrosantigos/'
  },
  {
    id: 'i9',
    imageUrl: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=600&auto=format&fit=crop',
    caption: 'Praça cheia, cafezinho quente e muitas histórias pra contar. Nosso último encontro mensal em Quatis foi inesquecível! Agradecemos a presença de cada membro e visitante! 🙏☕ #EncontroDeCarros #QuatiReal #Quatis #Amigos',
    likes: 204,
    comments: 27,
    date: '14 de Junho, 2026',
    link: 'https://www.instagram.com/quatireal_carrosantigos/'
  },
  {
    id: 'i10',
    imageUrl: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=600&auto=format&fit=crop',
    caption: 'Chave na ignição e partida para mais uma semana vitoriosa. Que o ronco dos motores clássicos nos guie em grandes caminhos! Um abraço de toda a diretoria QuatiReal! 🔑🚙🍀 #SegundaFeira #Partida #QuatiReal #GrupoCarrosAntigos',
    likes: 148,
    comments: 12,
    date: '10 de Junho, 2026',
    link: 'https://www.instagram.com/quatireal_carrosantigos/'
  }
];
