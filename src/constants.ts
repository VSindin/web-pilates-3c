export const BUSINESS = {
  name: "Pilates 3C Powerhouse",
  shortName: "3C Powerhouse",
  tagline: "Recupera tu movilidad y vive sin dolor en Tres Cantos",
  description:
    "Pilates máquinas y fisioterapia personalizada con especialistas en lesiones en Tres Cantos, Madrid.",
  address: {
    street: "Sector de los Escultores, 4",
    city: "Tres Cantos",
    postalCode: "28760",
    region: "Madrid",
    country: "ES",
    full: "Sector de los Escultores, 4, 28760 Tres Cantos, Madrid",
  },
  phone: {
    raw: "+34638892607",
    display: "638 89 26 07",
  },
  whatsapp: {
    number: "34638892607",
    message: "Hola, me gustaría reservar una primera clase de prueba.",
  },
  hours: [
    { days: "Lunes – Viernes", time: "09:30 – 21:30" },
    { days: "Sábado", time: "09:00 – 13:00" },
    { days: "Domingo", time: "Cerrado" },
  ],
  social: {
    instagram: "https://www.instagram.com/pilates3cpowerhouse",
    google: "https://g.page/pilates3cpowerhouse",
  },
  seo: {
    title: "Pilates 3C Powerhouse | Pilates y Fisioterapia en Tres Cantos",
    description:
      "Centro de Pilates Máquinas y Fisioterapia en Tres Cantos, Madrid. Grupos reducidos de máximo 4 personas. Especialistas en hernias discales, lumbalgias y rehabilitación de lesiones. Más de 15 años de experiencia.",
    keywords: [
      "Pilates Tres Cantos",
      "Fisioterapia Tres Cantos",
      "Pilates Máquinas Tres Cantos",
      "Rehabilitación lesiones Tres Cantos",
      "Pilates Madrid Norte",
      "Centro Pilates 28760",
      "Hernia discal Tres Cantos",
      "Lumbalgia tratamiento Tres Cantos",
      "Pilates reformer Tres Cantos",
      "Fisioterapia manual Madrid",
    ],
    ogImage: "/og-image.jpg",
    url: "https://pilates3cpowerhouse.es",
  },
} as const;

export const TEAM = [
  {
    name: "Javi",
    role: "Director & Fisioterapeuta",
    description:
      "Especialista en rehabilitación de lesiones deportivas y fisioterapia manual. Más de 15 años de experiencia.",
    image: "/team/javi.jpg",
  },
  {
    name: "Meri",
    role: "Instructora de Pilates",
    description:
      "Experta en Pilates Máquinas y readaptación funcional. Especializada en patologías de columna.",
    image: "/team/meri.jpg",
  },
  {
    name: "Guillermo",
    role: "Instructor de Pilates & Yoga",
    description:
      "Combina la precisión del Pilates con la fluidez del Yoga para una práctica completa y equilibrada.",
    image: "/team/guillermo.jpg",
  },
  {
    name: "María",
    role: "Fisioterapeuta & Instructora",
    description:
      "Especialista en fisioterapia pélvica y Pilates prenatal. Acompaña cada etapa de tu vida.",
    image: "/team/maria.jpg",
  },
] as const;

export const SERVICES = [
  {
    id: "pilates-maquinas",
    title: "Pilates Máquinas",
    description:
      "Reformer, Cadillac y accesorios de última generación. Clases personalizadas en grupos reducidos de máximo 4 personas.",
    icon: "Dumbbell",
    keywords: ["Pilates Reformer Tres Cantos", "Pilates máquinas Madrid Norte"],
  },
  {
    id: "fisioterapia",
    title: "Fisioterapia Manual",
    description:
      "Tratamiento individualizado de lesiones musculoesqueléticas: hernias discales, lumbalgias, cervicalgias y más.",
    icon: "HandHeart",
    keywords: ["Fisioterapia Tres Cantos", "Fisioterapia manual Madrid"],
  },
  {
    id: "yoga",
    title: "Yoga",
    description:
      "Clases de Yoga orientadas al bienestar físico y mental. Todos los niveles bienvenidos.",
    icon: "Flower2",
    keywords: ["Yoga Tres Cantos", "Yoga Madrid Norte"],
  },
  {
    id: "rehabilitacion",
    title: "Rehabilitación de Lesiones",
    description:
      "Programas de recuperación a medida para lesiones deportivas, post-quirúrgicas y crónicas.",
    icon: "Activity",
    keywords: ["Rehabilitación lesiones Tres Cantos", "Recuperación lesiones Madrid"],
  },
] as const;

export const REVIEWS = [
  {
    author: "Carmen R.",
    rating: 5,
    text: "Llevo 3 años con ellos y mi lumbalgia crónica ha mejorado un 80%. El trato es increíblemente personalizado, nunca me he sentido un número más.",
    date: "Hace 2 semanas",
  },
  {
    author: "Marcos T.",
    rating: 5,
    text: "Después de mi operación de hernia discal, Javi diseñó un programa específico para mí. Volvería a elegirlos mil veces.",
    date: "Hace 1 mes",
  },
  {
    author: "Laura G.",
    rating: 5,
    text: "Las clases de máximo 4 personas son un lujo. Recibes atención constante y ves resultados desde la primera semana.",
    date: "Hace 3 semanas",
  },
  {
    author: "Alejandro V.",
    rating: 5,
    text: "Vine escéptico al Pilates y ahora no puedo imaginar mi semana sin ello. María y Guillermo son excelentes profesionales.",
    date: "Hace 2 meses",
  },
  {
    author: "Isabel F.",
    rating: 5,
    text: "Flexibilidad total con los horarios, increíble atención y profesionalismo. El mejor centro de Tres Cantos sin duda.",
    date: "Hace 1 semana",
  },
] as const;

export const FAQS = [
  {
    question: "¿Son clases masificadas?",
    answer:
      "No. Nuestro límite es de máximo 4 alumnos por clase. Esto garantiza que el instructor pueda corregir tu postura y adaptar cada ejercicio a tus necesidades específicas.",
  },
  {
    question: "¿Puedo ir si tengo una lesión?",
    answer:
      "Sí, de hecho es uno de nuestros puntos fuertes. Personalizamos cada ejercicio según tu patología. Somos especialistas en hernias discales, lumbalgias, lesiones deportivas y rehabilitación post-quirúrgica.",
  },
  {
    question: "¿Qué pasa si pierdo una clase?",
    answer:
      "Ofrecemos total flexibilidad horaria para recuperar las clases perdidas. Nos adaptamos a tu vida, no al revés.",
  },
  {
    question: "¿Necesito experiencia previa en Pilates?",
    answer:
      "Para nada. Trabajamos con todos los niveles, desde principiantes absolutos hasta deportistas de alto rendimiento. La primera clase es una valoración individualizada.",
  },
  {
    question: "¿Cómo reservo mi primera clase?",
    answer:
      "Puedes llamarnos al 638 89 26 07, enviarnos un WhatsApp o rellenar el formulario de contacto. La primera clase de valoración es gratuita.",
  },
] as const;
