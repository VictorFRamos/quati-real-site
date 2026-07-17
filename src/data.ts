import { ClubEvent, GalleryItem, RuleItem, MemberQuote } from './types';

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
