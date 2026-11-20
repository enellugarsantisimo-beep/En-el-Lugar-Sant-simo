import {
  MeetingSchedule,
  Pillar,
  Ministry,
  CellGroup,
  Sermon,
  Devotional,
  EventItem,
  DonationTier,
  Testimony,
} from '../types';

export const CHURCH_INFO = {
  name: 'En el Lugar Santísimo',
  tagline: 'Un lugar para encontrarte con Dios y transformar tu vida',
  motto: 'Un lugar para encontrarte con Dios, crecer en tu fe y compartir Su amor.',
  address: 'Av. Calle 24 #72b–30',
  city: 'Bogotá, Colombia',
  neighborhood: 'Modelia / Salitre Occidental',
  googleMapsUrl:
    'https://maps.google.com/?q=Iglesia+Cristiana+En+El+Lugar+Santisimo+Av.+Calle+24+%2372b-30%2C+Bogota%2C+Colombia',
  phone: '+57 3054351398',
  phoneClean: '573054351398',
  email: 'enellugarsantisimo@gmail.com',
  googleMeetMorningPrayer: 'https://meet.google.com/skt-pttc-gmz',
  donateSponsorUrl: 'https://enellugarsantisimo.com/app/donate-sponsor/donate-sponsor.html#',
  salvavidasBookUrl:
    'https://www.amazon.com/SALVAVIDAS-Fruto-Del-Esp%C3%ADritu-Spanish-ebook/dp/B0FM4LR35X/ref=sr_1_1?crid=20YT9034MT4GO&dib=eyJ2IjoiMSJ9.PZ4k8bWaOAJvsalC434lhbg33Zyx7L9Yc0cJwoMo6GrXGr8M_6XRn0iA0YK0a16_J-STlLEloD8dlC5PqtgWSuUFZu8wOeP-rPee49xhts2CFPSF0Wfuo_3WjQ-iAf3PL3WnP3TXEjJMHpOw-0SO2A.60wcMdCP98bK7qbdk9DTG1LCaBZPal1cpmZf-eNZXGE&dib_tag=se&keywords=salvavidas+el+fruto+del+espiritu&qid=1775768821&sprefix=salvavidas+el+fruto+del+espiritu%2Caps%2C198&sr=8-1',
  logoWatermark: '/assets/aistudio/LOGOS_MARCAS_EELS__1__b8140c5b.png',
  liveYoutubeUrl: 'https://youtu.be/IszLWjY_-Qg?si=LGtmRr5EcCkEGSy4',
  liveYoutubeEmbedUrl: 'https://www.youtube.com/embed/IszLWjY_-Qg?rel=0',
  social: {
    youtube: 'https://www.youtube.com/channel/UC_XJF6lPrbvdsSwzcfds5Ng',
    tiktok: 'https://www.tiktok.com/@enellugarsantisimo',
    facebook: 'https://www.facebook.com/people/En-El-Lugar-Sant%C3%ADsimo-Icccle/100063699364553/',
    instagram: 'https://www.instagram.com/enellugarsantisimo/?next=%2F',
    x: 'https://x.com/EELS_Church',
    whatsapp: 'https://wa.me/573054351398',
  },
  coordinates: {
    lat: 4.6657,
    lng: -74.1203,
  },
  images: {
    worship: '/src/assets/images/church_worship_gathering_1794440713697.jpg',
    bocachica: '/src/assets/images/bocachica_social_children_1794440713765.jpg',
    community: '/src/assets/images/church_community_fellowship_1794440714625.jpg',
    devotional: '/src/assets/images/prayer_morning_devotional_1794440714722.jpg',
  },
};

export const CORE_MEETINGS: MeetingSchedule[] = [
  {
    id: 'reunion-general',
    title: 'Reunión General Familiar',
    subtitle: 'Nos encontramos cada domingo',
    tag: 'Presencial y En VIVO',
    day: 'Domingos',
    time: '10:30 a. m.',
    modality: 'Presencial y En Vivo',
    locationOrPlatform: 'Av. Calle 24 #72b–30, Bogotá & Streaming',
    description:
      'Un espacio para reunirnos como iglesia, adorar juntos al Padre, compartir en fraternidad y recibir enseñanzas edificantes y prácticas de Su Palabra.',
    badgeColor: 'border-rose-200 bg-rose-50 text-rose-700',
  },
  {
    id: 'ayuno-congregacional',
    title: 'Ayuno Congregacional',
    subtitle: 'Un tiempo para acercarnos a Dios',
    tag: 'Presencial y virtual',
    day: 'Sábados',
    time: '10:00 a. m. – 12:00 p. m.',
    modality: 'Presencial y Virtual',
    locationOrPlatform: 'Templo Central y Transmisión Privada',
    description:
      'Un espacio de clamor e intercesión profunda, consagrando nuestras vidas, renovando fuerzas en comunidad y buscando la dirección divina para nuestras familias.',
    badgeColor: 'border-amber-200 bg-amber-50 text-amber-800',
  },
  {
    id: 'oracion-manana',
    title: 'Oración de la Mañana',
    subtitle: 'Comienza el día en Su presencia',
    tag: 'Vía Google Meet',
    day: 'Martes a Viernes',
    time: '7:00 a. m.',
    modality: 'Virtual vía Google Meet',
    locationOrPlatform: 'Google Meet',
    meetLink: 'https://meet.google.com/skt-pttc-gmz',
    description:
      'Un espacio virtual para iniciar la jornada diaria en comunión, entregando nuestras familias, trabajos y proyectos en las manos del Padre.',
    badgeColor: 'border-sky-200 bg-sky-50 text-sky-800',
  },
];

export const CHURCH_PILLARS: Pillar[] = [
  {
    number: '01',
    title: 'ENCUENTRO CON DIOS',
    tagline: 'Intimidad, adoración genuina y Palabra',
    description:
      'Buscamos cultivar una relación íntima y viva con el Padre a través de la oración constante, la adoración en espíritu y en verdad, y el estudio reverente de Su Palabra.',
    biblicalFoundation: '«Cercano está Jehová a todos los que le invocan, a todos los que le invocan de veras.» — Salmo 145:18',
    practicalApplication: [
      'Alabanza y adoración cristocéntrica en cada reunión',
      'Cultura diaria de oración e intercesión matutina',
      'Predicación expositiva con aplicación bíblica para el día a día',
      'Momentos de quietud para escuchar la voz del Espíritu Santo',
    ],
  },
  {
    number: '02',
    title: 'CRECIMIENTO ESPIRITUAL',
    tagline: 'Discipulado integral y madurez en Cristo',
    description:
      'Creemos en la formación y el discipulado como parte fundamental de una vida cristiana madura que refleja el carácter compasivo y santo de Jesús.',
    biblicalFoundation: '«Hasta que todos lleguemos a la unidad de la fe y del conocimiento del Hijo de Dios, a un varón perfecto...» — Efesios 4:13',
    practicalApplication: [
      'Escuela bíblica y módulos de crecimiento temáticos',
      'Mentoría pastoral individual y acompañamiento en crisis',
      'Devocionales guiados y planes de lectura sistemática',
      'Talleres prácticos de mayordomía, finanzas y familia',
    ],
  },
  {
    number: '03',
    title: 'COMUNIDAD Y SERVICIO',
    tagline: 'Caminar juntos y bendecir a nuestro prójimo',
    description:
      'Caminamos juntos, construimos relaciones sanas y duraderas, y ponemos con generosidad nuestros talentos y dones al servicio de Dios y de los más necesitados.',
    biblicalFoundation: '«Sobrellevad los unos las cargas de los otros, y cumplid así la ley de Cristo.» — Gálatas 6:2',
    practicalApplication: [
      'Grupos de Conexión en hogares por barrios de Bogotá',
      'Proyecto humanitario Lives Saved en Bocachica y sectores vulnerables',
      'Ministerio de visitación, apoyo a enfermos y familias en duelo',
      'Equipos activos de bienvenida, producción y servicio voluntario',
    ],
  },
];

export const MINISTRIES_LIST: Ministry[] = [
  {
    id: 'generacion-kids',
    name: 'Santísimo Kids',
    audience: 'Niños de 3 a 12 años',
    iconName: 'Smile',
    summary: 'Espacio dinámico y seguro donde los más pequeños aprenden las verdades bíblicas a través de dinámicas, teatro y canciones.',
    schedule: 'Cada domingo durante la Reunión General (10:30 am)',
    leader: 'Equipo Pedagógico Infantil',
    activities: ['Clases bíblicas por edades', 'Manualidades temáticas', 'Merienda y compañerismo', 'Canto y memorización'],
  },
  {
    id: 'jovenes-apasionados',
    name: 'Jóvenes Santísimo',
    audience: 'Adolescentes y Universitarios (13 a 27 años)',
    iconName: 'Flame',
    summary: 'Comunidad juvenil que desafía a vivir una fe auténtica en la escuela, universidad y ámbito laboral, sin ataduras.',
    schedule: 'Sábados quincenales 4:30 pm',
    leader: 'Liderazgo Juvenil',
    activities: ['Noches de fogata y adoración', 'Debates bíblicos contemporáneos', 'Salidas de servicio y misiones', 'Torneos deportivos'],
  },
  {
    id: 'matrimonios-familias',
    name: 'Familias Fuertes',
    audience: 'Parejas, matrimonios y padres de familia',
    iconName: 'HeartHandshake',
    summary: 'Orientación pastoral basada en principios bíblicos para restaurar la comunicación, el amor conyugal y la crianza sana.',
    schedule: 'Primer viernes de cada mes 7:30 pm',
    leader: 'Pastores Coordinadores',
    activities: ['Cenas temáticas para parejas', 'Talleres de finanzas matrimoniales', 'Consejería personalizada', 'Retiro anual'],
  },
  {
    id: 'alabanza-adoracion',
    name: 'Alabanza & Producción',
    audience: 'Músicos, cantantes y equipo audiovisual',
    iconName: 'Music',
    summary: 'Corazón apasionado por guiar a la congregación a las profundidades de la presencia divina con excelencia y sencillez.',
    schedule: 'Ensayos Jueves 7:00 pm y Domingos 8:30 am',
    leader: 'Dirección Musical',
    activities: ['Entrenamiento vocal e instrumental', 'Cuidado devocional de los músicos', 'Operación de cámaras y audio', 'Composición propia'],
  },
  {
    id: 'ujieres-bienvenida',
    name: 'Hospitalidad & Bienvenida',
    audience: 'Servidores de primer contacto',
    iconName: 'Coffee',
    summary: 'Asegurar que cada persona que cruza la puerta sienta el calor de un hogar, reciba orientación y disfrute de un ambiente ordenado.',
    schedule: 'Domingos 9:45 am',
    leader: 'Coordinación de Hospitalidad',
    activities: ['Recepción y entrega de folletos', 'Ubicación en el auditorio', 'Mesa de café de bienvenida', 'Atención a visitantes primerizos'],
  },
  {
    id: 'misiones-bocachica',
    name: 'Misiones & Acción Social',
    audience: 'Voluntarios de ayuda humanitaria',
    iconName: 'HandHeart',
    summary: 'Brazo social que lleva alimentos, útiles escolares, ropa y el mensaje del evangelio a Bocachica y zonas marginadas.',
    schedule: 'Reuniones mensuales de logística y brigadas trimestrales',
    leader: 'Coordinación Lives Saved Project',
    activities: ['Recolección y clasificación de kits', 'Brigadas médicas y odontológicas', 'Viajes misioneros anuales', 'Capacitaciones'],
  },
];

export const CELL_GROUPS: CellGroup[] = [
  {
    id: 'g-salitre',
    name: 'Grupo Modelia & Salitre',
    zone: 'Fontibón / Salitre',
    neighborhood: 'Modelia Occidental',
    dayAndTime: 'Miércoles 7:30 pm',
    host: 'Familia Ramírez',
    modality: 'Presencial',
  },
  {
    id: 'g-calle24',
    name: 'Grupo Calle 24 & Boyacá',
    zone: 'Calle 24 / Boyacá',
    neighborhood: 'Ciudad Salitre',
    dayAndTime: 'Jueves 7:00 pm',
    host: 'Hnos. Vargas & Liliana',
    modality: 'Presencial',
  },
  {
    id: 'g-kennedy',
    name: 'Grupo Kennedy & Tintal',
    zone: 'Occidente',
    neighborhood: 'Castilla / Tintal',
    dayAndTime: 'Miércoles 8:00 pm',
    host: 'Carlos & Andrea',
    modality: 'Presencial',
  },
  {
    id: 'g-norte',
    name: 'Grupo Suba & Calle 100',
    zone: 'Norte',
    neighborhood: 'Pontevedra / Alhambra',
    dayAndTime: 'Martes 7:30 pm',
    host: 'Mauricio & Diana',
    modality: 'Presencial',
  },
  {
    id: 'g-virtual-colombia',
    name: 'Grupo Conexión Virtual Nacional',
    zone: 'Virtual',
    neighborhood: 'Zoom / Google Meet (Toda Colombia & Exterior)',
    dayAndTime: 'Jueves 8:00 pm (Hora Colombia)',
    host: 'Equipo Pastoral',
    modality: 'Virtual',
  },
];

export const SERMONS_ARCHIVE: Sermon[] = [
  {
    id: 's-1',
    title: 'La Promesa en el Desierto: Cómo Dios Transforma la Sequía',
    series: 'Caminando en lo Santísimo',
    preacher: 'Pastor Principal',
    date: '8 de Noviembre de 2026',
    passage: 'Isaías 43:18-19',
    duration: '48 min',
    summary: 'A menudo las temporadas difíciles nos hacen olvidar que Dios está abriendo un camino en medio de la soledad. Aprende a discernir las cosas nuevas que Él está haciendo brotar.',
    keyPoints: [
      'No os acordéis de las cosas pasadas: liberarse de la culpa y la nostalgia.',
      'He aquí yo hago cosa nueva: la iniciativa siempre es del Padre.',
      'Abriendo camino en el desierto y ríos en la soledad.',
    ],
  },
  {
    id: 's-2',
    title: 'Donde Dos o Tres se Congregan: El Poder del Acuerdo',
    series: 'Fundamentos de Fe',
    preacher: 'Equipo Pastoral',
    date: '1 de Noviembre de 2026',
    passage: 'Mateo 18:18-20',
    duration: '52 min',
    summary: 'Jesús no condicionó Su presencia a miles, sino al corazón unido de dos o tres reunidos en Su Nombre. Descubre la autoridad espiritual de congregarte.',
    keyPoints: [
      'La iglesia no es un edificio, es un pueblo en comunión de espíritu.',
      'El principio del acuerdo desbloquea la paz celestial.',
      'Allí estoy yo en medio de ellos: la garantía de Su cercanía.',
    ],
  },
  {
    id: 's-3',
    title: 'El Altar de la Adoración: Trascendiendo la Superficialidad',
    series: 'Caminando en lo Santísimo',
    preacher: 'Pastor Invitado',
    date: '25 de Octubre de 2026',
    passage: 'Juan 4:23-24',
    duration: '45 min',
    summary: 'Adorar no es una rutina de canciones, es un estilo de vida que consagra nuestras decisiones cotidianas y alinea nuestro espíritu con el cielo.',
    keyPoints: [
      'Los verdaderos adoradores adoran en espíritu y en verdad.',
      'El Padre tales adoradores busca que le adoren.',
      'Nuestras ofrendas de vida cotidiana como aroma grato.',
    ],
  },
  {
    id: 's-4',
    title: 'Generosidad que Sana: Manos Abiertas en Tiempos de Escasez',
    series: 'Corazón para los Demás',
    preacher: 'Coordinación Social',
    date: '18 de Octubre de 2026',
    passage: '2 Corintios 9:6-11',
    duration: '42 min',
    summary: 'Cómo la generosidad desinteresada rompe el ciclo del egoísmo y refleja el amor de Cristo a comunidades como Bocachica y nuestro entorno urbano.',
    keyPoints: [
      'El que siembra generosamente, generosamente también segará.',
      'Dios ama al dador alegre.',
      'Suplir no sólo la necesidad física, sino alimentar la dignidad del prójimo.',
    ],
  },
];

export const DAILY_DEVOTIONALS: Devotional[] = [
  {
    id: 'dev-1',
    dayOfWeek: 'Lunes',
    title: 'Renovando las fuerzas al amanecer',
    passage: 'Lamentaciones 3:22-23',
    verseText: '«Por la misericordia de Jehová no hemos sido consumidos, porque nunca decayeron sus misericordias. Nuevas son cada mañana; grande es tu fidelidad.»',
    reflection: 'Hoy no tienes que cargar con los tropiezos de la semana pasada. La gracia de Dios no es un crédito viejo; es un manantial fresco que se renueva cada vez que abres los ojos.',
    practicalChallenge: 'Toma 5 minutos antes de mirar el teléfono para agradecer 3 misericordias concretas que recibiste ayer.',
    prayer: 'Padre amado, recibo hoy Tus misericordias frescas. Llena mi mente de paz y capacítame para ser un instrumento de gracia en mi hogar y trabajo. Amén.',
  },
  {
    id: 'dev-2',
    dayOfWeek: 'Martes',
    title: 'La valentía en la quietud',
    passage: 'Éxodo 14:14',
    verseText: '«Jehová peleará por vosotros, y vosotros estaréis tranquilos.»',
    reflection: 'Nuestra inclinación humana es responder con ansiedad y querer forzar resultados inmediatos. La fe bíblica muchas veces nos pide callar el ruido y permitir que el Señor ordene lo que no controlamos.',
    practicalChallenge: 'Identifica esa situación que te produce insomnio y entrégala conscientemente en oración antes del mediodía.',
    prayer: 'Señor, pongo en Tus manos este conflicto que sobrepasa mis fuerzas. Elijo confiar en que Tú peleas a mi favor mientras yo descanso en Tu soberanía.',
  },
  {
    id: 'dev-3',
    dayOfWeek: 'Miércoles',
    title: 'Comunión que fortalece el alma',
    passage: 'Hebreos 10:24-25',
    verseText: '«Y considerémonos unos a otros para estimularnos al amor y a las buenas obras; no dejando de congregarnos... sino exhortándonos.»',
    reflection: 'El cristianismo no fue diseñado para vivirse en solitario. Un carbón fuera del fuego pronto se enfría; juntos mantenemos la llama de la fe encendida.',
    practicalChallenge: 'Escribe un mensaje de ánimo a un hermano o amigo de la iglesia hoy mismo.',
    prayer: 'Jesús, gracias por la familia de la fe. Úsame hoy para animar a alguien que se encuentre desanimado o cansado en el camino.',
  },
  {
    id: 'dev-4',
    dayOfWeek: 'Jueves',
    title: 'Luz en medio de las tinieblas',
    passage: 'Mateo 5:14-16',
    verseText: '«Vosotros sois la luz del mundo; una ciudad asentada sobre un monte no se puede esconder... Así alumbre vuestra luz delante de los hombres.»',
    reflection: 'La luz no tiene que hacer ruido para vencer a la oscuridad; sólo necesita permanecer encendida. Una palabra amable, un acto de integridad o un oído paciente alumbran más que mil discursos.',
    practicalChallenge: 'Realiza un favor silencioso por alguien sin esperar reconocimiento.',
    prayer: 'Espíritu Santo, haz que mis acciones de hoy muestren la ternura y justicia de Jesús a quienes no le conocen todavía.',
  },
  {
    id: 'dev-5',
    dayOfWeek: 'Viernes',
    title: 'Paz que sobrepasa todo entendimiento',
    passage: 'Filipenses 4:6-7',
    verseText: '«Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias.»',
    reflection: 'El antídoto bíblico para la ansiedad no es la evasión, sino el canje en el altar: le entregas a Dios tus preocupaciones y Él te devuelve una paz que nadie en el mundo puede explicar.',
    practicalChallenge: 'Escribe en un papel tus tres mayores angustias y conviértelas en motivos de oración agradecida.',
    prayer: 'Padre Dios, canjeo mi preocupación por Tu paz. Protege mi corazón y mis pensamientos en Cristo Jesús en este cierre de semana.',
  },
];

export const CALENDAR_EVENTS: EventItem[] = [
  {
    id: 'ev-1',
    title: 'Reunión General de Domingo',
    dateStr: 'Todos los Domingos',
    timeStr: '10:30 a. m.',
    category: 'Servicio',
    location: 'Auditorio Central - Av. Calle 24 #72b-30, Bogotá',
    description: 'Servicio congregacional con alabanza en vivo, predicación bíblica edificante y ministerio infantil Santísimo Kids.',
    isUpcoming: true,
  },
  {
    id: 'ev-2',
    title: 'Ayuno y Clamor Congregacional',
    dateStr: 'Todos los Sábados',
    timeStr: '10:00 a. m. – 12:00 p. m.',
    category: 'Ayuno',
    location: 'Templo Central & Conexión Virtual',
    description: 'Jornada sabatina de búsqueda profunda, intercesión por las familias, los enfermos y la transformación de nuestra ciudad.',
    isUpcoming: true,
  },
  {
    id: 'ev-3',
    title: 'Oración Matutina Virtual',
    dateStr: 'Martes a Viernes',
    timeStr: '7:00 a. m. – 7:45 a. m.',
    category: 'Oración',
    location: 'Google Meet (meet.google.com/skt-pttc-gmz)',
    description: 'Comenzamos el día consagrando las primeras horas al Creador antes de salir a trabajar o estudiar.',
    isUpcoming: true,
  },
  {
    id: 'ev-4',
    title: 'Noche de Alabanza & Adoración Íntima',
    dateStr: 'Último Viernes del Mes',
    timeStr: '7:00 p. m. – 9:00 p. m.',
    category: 'Especial',
    location: 'Auditorio Central',
    description: 'Tiempo extendido de música, cánticos espontáneos y ministración espiritual sin prisas de agenda.',
    isUpcoming: true,
    requiresRegistration: false,
  },
  {
    id: 'ev-5',
    title: 'Jornada de Empaque y Misión Bocachica',
    dateStr: 'Tercer Sábado de cada mes',
    timeStr: '2:00 p. m. – 5:00 p. m.',
    category: 'Social',
    location: 'Salón Comunitario Santísimo',
    description: 'Clasificación de donaciones, empaque de kits escolares y alimentos para el proyecto Lives Saved en Bocachica.',
    isUpcoming: true,
    requiresRegistration: true,
  },
];

export const DONATION_TIERS: DonationTier[] = [
  {
    id: 'tier-1',
    amountCOP: 25000,
    label: 'Kit Nutricional Básico',
    impactDescription: 'Asegura suplementos alimenticios y meriendas saludables para 1 niño de Bocachica durante 1 semana escolar.',
  },
  {
    id: 'tier-2',
    amountCOP: 50000,
    label: 'Kit Escolar y Lectura',
    impactDescription: 'Cuadernos, lápices de colores, libros de cuentos y cartucheras para que un niño continúe sus estudios con dignidad.',
    isPopular: true,
  },
  {
    id: 'tier-3',
    amountCOP: 120000,
    label: 'Apadrinamiento Mensual',
    impactDescription: 'Acompañamiento educativo integral, refuerzo pedagógico, nutrición y talleres en valores durante un mes completo.',
  },
  {
    id: 'tier-4',
    amountCOP: 250000,
    label: 'Brigada de Salud y Progreso',
    impactDescription: 'Sustenta la adquisición de medicamentos pediátricos básicos y materiales para brigadas comunitarias en la isla.',
  },
];

export const TESTIMONIALS_DATA: Testimony[] = [
  {
    id: 't-1',
    author: 'Camilo & Marcela R.',
    area: 'Familias / Modelia',
    excerpt: 'Llegamos con el matrimonio roto y encontramos una familia que nos abrazó sin juzgarnos.',
    fullStory: 'Hace dos años estábamos al borde del divorcio. Buscando un lugar donde orar un domingo entramos a En el Lugar Santísimo. El mensaje de ese día nos confrontó con el perdón de Jesús. Gracias a la consejería pastoral y al grupo de conexión, hoy nuestro hogar está restaurado.',
    timeAgo: 'Hace 6 meses',
  },
  {
    id: 't-2',
    author: 'Valeria M.',
    area: 'Jóvenes / Universitaria',
    excerpt: 'En la universidad me sentía desorientada y con mucha ansiedad. Aquí descubrí mi valor.',
    fullStory: 'Pensaba que la iglesia era aburrida o juzgadora. Cuando me conecté a la Oración de la Mañana y luego a los encuentros juveniles, encontré amigos sinceros que oran por mí y un propósito claro en Dios.',
    timeAgo: 'Hace 3 meses',
  },
  {
    id: 't-3',
    author: 'Diego Fernando G.',
    area: 'Voluntariado Lives Saved',
    excerpt: 'Ir a Bocachica cambió mi perspectiva sobre el servicio. Dar transforma primero a quien da.',
    fullStory: 'Pude participar en la entrega de kits escolares y ver las sonrisas de los niños frente al mar. Comprender que Dios nos llama a ser Sus manos en la tierra es lo más hermoso que me ha enseñado esta iglesia.',
    timeAgo: 'Hace 1 mes',
  },
];

export const INFO_SECTION_DATA = {
  heroBanners: {
    slide1Background: '/assets/aistudio/SALVAVIDAS_BANNER__1__b471d47c.png',
    slide1AltEs: 'Fondo Salvavidas en el océano - Libro Salvavidas',
    slide1AltEn: 'Ocean lifebuoy background - Salvavidas Book',
    slide2Background: '/assets/aistudio/SALVAVIDAS_BANNER__1__b471d47c.png',
    slide2AltEs: 'Fondo Salvavidas para Biografía Pastoral de Yuri Arenas Cuervo',
    slide2AltEn: 'Salvavidas background for Pastor Yuri Arenas Cuervo Biography',
    slide3Background: '/assets/aistudio/SALVAVIDAS_BANNER__1__b471d47c.png',
    slide3AltEs: 'Fondo Salvavidas para reflexión sobre el Espíritu Santo',
    slide3AltEn: 'Salvavidas background for Holy Spirit reflection',
    bookCoverImage: '/assets/aistudio/Untitled_design__3__016a8011.png',
  },
  pastorBio: {
    eyebrowEs: 'Biografía Pastoral',
    eyebrowEn: 'Pastoral Biography',
    name: 'Yuri Arenas Cuervo',
    image: '/assets/aistudio/SALVAVIDAS_BANNER__1__b471d47c.png',
    imageAltEs: 'Fondo Salvavidas para Biografía Pastoral de Yuri Arenas Cuervo',
    imageAltEn: 'Salvavidas Background for Pastor Yuri Arenas Cuervo Biography',
    paragraphsEs: [
      'Yuri Arenas Cuervo es una mujer de fe, pastora, misionera y profeta, cuyo llamado a servir a Dios comenzó en su niñez en las Asambleas de Dios en Colombia. Junto a su esposo Elberto Guzmán, quien ya ha partido a la presencia de Dios, fundaron iglesias en Boca Ratón, Bogotá y en Bocachica, donde su ministerio misionero tiene un gran impacto. En Bocachica, se lleva a cabo el proyecto Lives Saved Project, al cual se destinan los recursos de este libro.',
      'Hoy, junto a su madre y los líderes de la congregación en Bogotá, Yuri está consolidando el Ministerio Internacional En El Lugar Santísimo, con el propósito de llevar el mensaje de salvación a donde Dios los envíe.',
      'Parte esencial de su labor incluye los medios de comunicación, con la serie diaria de podcast Sintonízate con Dios y el programa semanal Guiados por el Espíritu Santo, además de cubrir otras iglesias aliadas. Con más de 40 años de matrimonio, Yuri considera que esa fue su mejor escuela, aprendiendo y sirviendo a Dios junto a su esposo. Su formación teológica y su pasión por la escritura la han llevado a compartir sus enseñanzas a través de libros que próximamente publicará, con el deseo de impactar vidas y transmitir la esperanza que ella misma ha recibido.',
    ],
    paragraphsEn: [
      'Yuri Arenas Cuervo is a woman of faith, pastor, missionary, and prophet whose call to serve God began in her childhood in the Assemblies of God in Colombia. Together with her husband Elberto Guzmán, who has gone home to be with the Lord, they founded churches in Boca Raton, Bogotá, and Bocachica, where their missionary work has made a profound impact. In Bocachica, the Lives Saved Project is carried out, to which the proceeds of this book are dedicated.',
      'Today, together with her mother and the congregation’s leaders in Bogotá, Yuri is consolidating En El Lugar Santísimo International Ministry with the purpose of carrying the message of salvation wherever God sends them.',
      'An essential part of her work includes media ministry, with the daily podcast series Sintonízate con Dios and the weekly program Guiados por el Espíritu Santo, alongside covering partner churches. With over 40 years of marriage, Yuri considers it her greatest school, learning and serving God alongside her husband. Her theological training and passion for writing have led her to share her teachings through books she is publishing, desiring to impact lives and pass on the hope she herself has received.',
    ],
  },
  bookShowcase: {
    badgeEs: 'D I S P O N I B L E   A H O R A',
    badgeEn: 'A V A I L A B L E   N O W',
    title: 'SALVAVIDAS',
    subtitleEs: 'EL FRUTO DEL ESPÍRITU',
    subtitleEn: 'THE FRUIT OF THE SPIRIT',
    descriptionEs: 'Adquiérelo en nuestras instalaciones o haciendo click aquí',
    descriptionEn: 'Get it at our campus or by clicking here',
    author: 'YURI ARENAS CUERVO',
    image: '/assets/aistudio/Untitled_design__3__016a8011.png',
    imageAltEs: 'Libro Salvavidas El Fruto del Espíritu por Yuri Arenas Cuervo',
    imageAltEn: 'Book Salvavidas El Fruto del Espíritu by Yuri Arenas Cuervo',
    ctaPromptEs: 'Para adquirir nuestro Libro "Salvavidas El Fruto del Espíritu"',
    ctaPromptEn: 'To purchase our book "Salvavidas El Fruto del Espíritu"',
    ctaButtonEs: 'Haz clic aquí',
    ctaButtonEn: 'Click here',
  },
  seriesReflection: {
    eyebrowEs: 'Sobre el Libro · Salvavidas',
    eyebrowEn: 'About the Book · Salvavidas',
    paragraphsEs: [
      'La serie "Salvavidas" nos muestra cómo el Espíritu Santo es la presencia viva de Dios para dar consuelo en estos tiempos y nos recuerda que no estamos solos en medio del océano de la vida.',
      'Da poder que transforma lo imposible en posible y nos alimenta con su fruto, trayendo paz en cada momento. Para quienes lo desean, es el Salvavidas, la voz que susurra en el silencio, la luz que brilla en medio de la oscuridad, guiándonos al puerto de salvación. Nos recuerda, en nuestro interior, que nunca nos dejará hundir, no importa cuán profundas sean las aguas de la tormenta. El Espíritu Santo nos mantendrá a flote, descansando en su plenitud.',
      'En este libro "Salvavidas, El Fruto del Espíritu", quiero mostrarles cómo el Espíritu Santo ha convertido en mi mejor amigo, y me ha dado de comer cada día del fruto: amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre y templanza. Esto me ha permitido salir adelante, haciendo la voluntad de Dios en mi vida, dejando que actuara en cada paso que daba, junto con el proceso de mi esposo y todos los sucesos del camino, dejando todo en las manos de Él.',
      'Descubre cómo su amor transforma corazones, renueva la fe y nos sostiene como el verdadero salvavidas en nuestro caminar. Te invito a experimentar la compañía divina que nunca nos abandona.',
    ],
    paragraphsEn: [
      'The "Salvavidas" series shows us how the Holy Spirit is God’s living presence to bring comfort in these times and reminds us that we are never alone in the ocean of life.',
      'He gives power that turns the impossible into the possible and nourishes us with His fruit, bringing peace at every moment. For those who desire Him, He is the Lifebuoy, the voice whispering in silence, the light shining in darkness, guiding us to the harbor of salvation. No matter how deep the storm waters, the Holy Spirit will keep us afloat, resting in His fullness.',
      'In this book "Salvavidas, The Fruit of the Spirit," I want to share how the Holy Spirit became my closest friend and fed me daily with His fruit: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control—allowing me to walk forward in God’s will through every step and season.',
      'Discover how His love transforms hearts, renews faith, and sustains us as our true lifesaver. I invite you to experience the divine companionship that never leaves us.',
    ],
    quoteEs: '«Así mismo, en nuestra debilidad el Espíritu acude a ayudarnos»',
    quoteEn: '“In the same way, the Spirit helps us in our weakness.”',
    referenceEs: 'Romanos 8:26',
    referenceEn: 'Romans 8:26',
  },
  lifeGroupScheduleCards: [
    {
      id: 'parejas',
      labelEs: 'PAREJAS',
      labelEn: 'COUPLES',
      badgeColor: 'bg-purple-900 hover:bg-purple-800 text-white border-purple-700',
      flyerAccentClass: 'from-rose-950 via-red-900 to-rose-950 border-rose-800 text-white',
      sloganEs: '¡Haz algo Diferente!',
      sloganEn: 'Do Something Different!',
      taglineEs: 'GRUPO DE VIDA · Parejas',
      taglineEn: 'LIFE GROUP · Couples',
      subtitleEs: 'SIRVIENDO A DIOS COMO PAREJA',
      subtitleEn: 'SERVING GOD AS A COUPLE',
      image: '/src/assets/images/prayer_morning_devotional_1794440714722.jpg',
      locations: [
        {
          address: 'Carrera 72C # 22A - 77 · Interior 5 Torre 2 Apto 618',
          hosts: 'Miguel y Tatiana',
        },
      ],
      scheduleTitleEs: 'Horarios 7:00pm',
      scheduleTitleEn: 'Schedule 7:00 PM',
      schedule: [
        { month: 'FEBRERO', days: '13 y 28', time: '7:00pm' },
        { month: 'MARZO', days: '14 y 28', time: '7:00pm' },
        { month: 'ABRIL', days: '11', time: '7:00pm' },
        { month: 'MAYO', days: '2, 16 y 30', time: '7:00pm' },
        { month: 'JUNIO', days: '13 y 27', time: '7:00pm' },
        { month: 'JULIO', days: '11 y 25', time: '7:00pm' },
      ],
      hashtag: '#LLEVANDOLAPRESENCIAACASA',
    },
    {
      id: 'hombres',
      labelEs: 'HOMBRES',
      labelEn: 'MEN',
      badgeColor: 'bg-blue-600 hover:bg-blue-700 text-white border-blue-500',
      flyerAccentClass: 'from-slate-950 via-zinc-900 to-slate-950 border-amber-500/40 text-white',
      sloganEs: '¡Haz algo Diferente!',
      sloganEn: 'Do Something Different!',
      taglineEs: 'GRUPO DE VIDA · HOMBRES',
      taglineEn: 'LIFE GROUP · MEN',
      image: '/assets/aistudio/WhatsApp_Image_2024-12-18_at_2.13.04_PM_6d7e7268.jpeg',
      locations: [
        {
          address: 'Calle 23C # 69F-65 · Int 31 Apto 502 · Urb Carlos Lleras',
          hosts: 'Ricardo Martinez',
        },
      ],
      scheduleTitleEs: 'Horarios 7:00pm',
      scheduleTitleEn: 'Schedule 7:00 PM',
      schedule: [
        { month: 'FEBRERO', days: '7 y 21', time: '7:00pm' },
        { month: 'MARZO', days: '7 y 21', time: '7:00pm' },
        { month: 'ABRIL', days: '4 y 25', time: '7:00pm' },
        { month: 'MAYO', days: '9 y 23', time: '7:00pm' },
        { month: 'JUNIO', days: '6 y 20', time: '7:00pm' },
        { month: 'JULIO', days: '4 y 18', time: '7:00pm' },
      ],
      hashtag: '#LLEVANDOLAPRESENCIAACASA',
    },
    {
      id: 'mujeres',
      labelEs: 'MUJERES',
      labelEn: 'WOMEN',
      badgeColor: 'bg-indigo-950 hover:bg-indigo-900 text-white border-indigo-800',
      flyerAccentClass: 'from-rose-700 via-pink-700 to-fuchsia-800 border-pink-400/50 text-white',
      sloganEs: '¡Haz algo Diferente!',
      sloganEn: 'Do Something Different!',
      taglineEs: 'Grupo de Vida · MUJERES',
      taglineEn: 'Life Group · WOMEN',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-19_at_5.06.13_PM_e3d9d36e.jpeg',
      locations: [
        {
          address: 'Carrera 70 # 22 - 75, Manzana C Interior 13 Apto 204 · Urb. Carlos Lleras',
          hosts: 'Flor María Vargas Palacios',
          phone: '(+57) 301 356 5873',
        },
        {
          address: 'Cll 24 C # 69 - 59 Interior 3 - Apto 201 · Conjunto Residencial "Intisuyu"',
          hosts: 'Lucy Calderón',
          phone: '(+57) 315 8413649',
        },
        {
          address: 'Casa - Cra 72B # 23 F - 12 · Barrio Modelia',
          hosts: 'Hermelinda de Urbina',
          phone: '(+57) 320 897 0808',
        },
      ],
      scheduleTitleEs: 'Horarios 7:00pm',
      scheduleTitleEn: 'Schedule 7:00 PM',
      schedule: [
        { month: 'FEBRERO', days: '7 y 21', time: '7:00pm' },
        { month: 'MARZO', days: '7 y 21', time: '7:00pm' },
        { month: 'ABRIL', days: '4 y 25', time: '7:00pm' },
        { month: 'MAYO', days: '9 y 23', time: '7:00pm' },
        { month: 'JUNIO', days: '6 y 20', time: '7:00pm' },
        { month: 'JULIO', days: '4 y 18', time: '7:00pm' },
      ],
      hashtag: '#LLEVANDOLAPRESENCIAACASA',
    },
    {
      id: 'jovenes',
      labelEs: 'JÓVENES',
      labelEn: 'YOUTH',
      badgeColor: 'bg-sky-600 hover:bg-sky-700 text-white border-sky-500',
      flyerAccentClass: 'from-fuchsia-800 via-purple-800 to-indigo-900 border-yellow-400/60 text-white',
      sloganEs: '¡Haz algo Diferente!',
      sloganEn: 'Do Something Different!',
      taglineEs: 'GRUPO DE VIDA DE JÓVENES',
      taglineEn: 'YOUTH LIFE GROUP',
      subtitleEs: '12 - 17 AÑOS',
      subtitleEn: 'AGES 12 - 17',
      verseEs: 'Alégrate, joven, en tu juventud, y tome placer tu corazón',
      verseEn: 'Rejoice, young person, in your youth, and let your heart be glad',
      image: '/assets/aistudio/IMG_5040_d839e453.png',
      locations: [
        {
          address: 'Cra 79 # 19A-87 Torre 1 Apto 503 · Conjunto El Sendero · Barrio La Felicidad',
          hosts: 'Loren Grau',
        },
      ],
      scheduleTitleEs: 'Grupo 12 - 17 Años · 5:30pm',
      scheduleTitleEn: 'Ages 12 - 17 Group · 5:30 PM',
      schedule: [
        { month: 'FEBRERO', days: '8 y 22', time: '5:30pm' },
        { month: 'MARZO', days: '8 y 22', time: '5:30pm' },
        { month: 'ABRIL', days: '5 y 26', time: '5:30pm' },
        { month: 'MAYO', days: '10 y 24', time: '5:30pm' },
        { month: 'JUNIO', days: '7 y 21', time: '5:30pm' },
      ],
      secondaryScheduleTitleEs: 'Segundo Grupo Jóvenes · 6:00pm',
      secondaryScheduleTitleEn: 'Second Youth Group · 6:00 PM',
      secondarySchedule: [
        { month: 'FEBRERO', days: '8 y 22', time: '6:00pm' },
        { month: 'MARZO', days: '8 y 22', time: '6:00pm' },
        { month: 'ABRIL', days: '5 y 26', time: '6:00pm' },
        { month: 'MAYO', days: '10 y 24', time: '6:00pm' },
        { month: 'JUNIO', days: '7 y 21', time: '6:00pm' },
      ],
      hashtag: '#LLEVANDOLAPRESENCIAACASA',
    },
  ] as Array<{
    id: string;
    labelEs: string;
    labelEn: string;
    badgeColor: string;
    flyerAccentClass: string;
    sloganEs: string;
    sloganEn: string;
    taglineEs: string;
    taglineEn: string;
    subtitleEs?: string;
    subtitleEn?: string;
    verseEs?: string;
    verseEn?: string;
    image: string;
    locations: Array<{ address: string; hosts: string; phone?: string }>;
    scheduleTitleEs: string;
    scheduleTitleEn: string;
    schedule: Array<{ month: string; days: string; time: string }>;
    secondaryScheduleTitleEs?: string;
    secondaryScheduleTitleEn?: string;
    secondarySchedule?: Array<{ month: string; days: string; time: string }>;
    hashtag: string;
  }>,
  activities: [
    {
      id: 'act-1',
      titleEs: 'Reunión General',
      titleEn: 'General Sunday Service',
      subtitleEs: 'Presencial – Transmisión en vivo',
      subtitleEn: 'In-Person – Live Stream',
      scheduleEs: 'Domingo 10:30am',
      scheduleEn: 'Sunday 10:30 AM',
      alignLeft: true,
    },
    {
      id: 'act-2',
      titleEs: 'Un Nuevo Tiempo En El Espíritu',
      titleEn: 'A New Season in the Spirit',
      subtitleEs: 'Transmisión en vivo vía Youtube y TikTok @enellugarsantisimo',
      subtitleEn: 'Live broadcast on YouTube & TikTok @enellugarsantisimo',
      scheduleEs: 'Miércoles 5:30pm',
      scheduleEn: 'Wednesday 5:30 PM',
      alignLeft: false,
    },
    {
      id: 'act-3',
      titleEs: 'Ayuno',
      titleEn: 'Congregational Fasting',
      subtitleEs: 'Presencial – Reunión Virtual',
      subtitleEn: 'In-Person – Virtual Meeting',
      addressEs: 'Av. Calle 24 #72b–30, Bogotá, Colombia',
      addressEn: 'Av. Calle 24 #72b–30, Bogotá, Colombia',
      scheduleEs: 'Sábado 10am – 12m',
      scheduleEn: 'Saturday 10 AM – 12 PM',
      alignLeft: true,
    },
    {
      id: 'act-4',
      titleEs: 'Oración de la Mañana',
      titleEn: 'Morning Prayer',
      subtitleEs: 'Reunión Virtual',
      subtitleEn: 'Virtual Meeting',
      scheduleEs: 'Martes a Viernes 7am – 8am',
      scheduleEn: 'Tuesday to Friday 7 AM – 8 AM',
      alignLeft: false,
      meetLink: 'https://meet.google.com/skt-pttc-gmz',
    },
    {
      id: 'act-5',
      titleEs: 'Reunión de Hombres y Mujeres',
      titleEn: 'Men’s & Women’s Meeting',
      subtitleEs: 'Reunión Virtual',
      subtitleEn: 'Virtual Meeting',
      scheduleEs: 'Jueves 7:00 pm',
      scheduleEn: 'Thursday 7:00 PM',
      alignLeft: true,
    },
  ] as Array<{
    id: string;
    titleEs: string;
    titleEn: string;
    subtitleEs: string;
    subtitleEn: string;
    addressEs?: string;
    addressEn?: string;
    scheduleEs: string;
    scheduleEn: string;
    alignLeft: boolean;
    meetLink?: string;
  }>,
};

export const DONATE_SECTION_DATA = {
  eyebrowEs: 'Generosidad y Diezmos',
  eyebrowEn: 'Generosity & Tithes',
  headlineEs: 'APOYA EL REINO CON TUS DONACIONES',
  headlineEn: 'SUPPORT THE KINGDOM WITH YOUR DONATIONS',
  descriptionEs:
    'Tu siembra y generosidad hacen posible la predicación del evangelio, el sostenimiento de nuestra casa y el alcance misionero.',
  descriptionEn:
    'Your generosity and giving make the preaching of the gospel, church ministry, and missionary outreach possible.',
  backgroundImage: '/src/assets/images/church_worship_gathering_1794440713697.jpg',
  backgroundImageAltEs: 'Congregación adorando en En el Lugar Santísimo',
  backgroundImageAltEn: 'Congregation worshipping at En el Lugar Santísimo',
  qrImage:
    '/assets/aistudio/Copy_of_Copy_of_Copy_of_Copy_of_Copy_of_Copy_of_Copy_of_Copy_of_Copy_of_Copy_of_Copy_of_Copy_of_Copy_of_Copy_of_Copy_of_Copy_of_Copy_of_Copy_of_Copy_of_Copy_of_Copy_of_Copy_of_Copy_of_Copy_of_Copy_36fb8979.png',
  qrImageAltEs: 'Código QR oficial Bancolombia - EnElLugarSantisimo Ahorros *3905',
  qrImageAltEn: 'Official Bancolombia QR Code - EnElLugarSantisimo Savings *3905',
  qrCaptionEs: 'Escanea desde tu App Bancolombia o Nequi',
  qrCaptionEn: 'Scan from your Bancolombia or Nequi App',
  qrAccountTag: 'EnElLugarSantisimo · Ahorros *3905',
  channels: [
    {
      id: 'nequi-bancolombia',
      titleEs: 'NEQUI / BANCOLOMBIA',
      titleEn: 'NEQUI / BANCOLOMBIA',
      accountNumber: '171-0000-39-05',
      accountTypeEs: 'CUENTA AHORROS',
      accountTypeEn: 'SAVINGS ACCOUNT',
      holderEs: 'Iglesia Comunidad Cristiana Carismática La Esperanza',
      holderEn: 'Iglesia Comunidad Cristiana Carismática La Esperanza',
      taxId: 'NIT 830046692-6',
      cardAccentClass: 'border-purple-400/40 bg-purple-950/55',
      numberColorClass: 'text-fuchsia-200 border-purple-400/50 bg-purple-900/60',
    },
    {
      id: 'banco-bogota',
      titleEs: 'BANCO DE BOGOTÁ',
      titleEn: 'BANCO DE BOGOTÁ',
      accountNumber: '023-039589',
      accountTypeEs: 'CUENTA CORRIENTE',
      accountTypeEn: 'CHECKING ACCOUNT',
      holderEs: 'Iglesia Comunidad Cristiana Carismática La Esperanza',
      holderEn: 'Iglesia Comunidad Cristiana Carismática La Esperanza',
      taxId: 'NIT 830046692-6',
      cardAccentClass: 'border-rose-400/40 bg-slate-900/70',
      numberColorClass: 'text-rose-200 border-rose-400/50 bg-rose-950/60',
    },
    {
      id: 'zelle-usa',
      titleEs: 'DESDE ESTADOS UNIDOS',
      titleEn: 'FROM THE UNITED STATES',
      methodBadge: 'Zelle®',
      accountNumber: '(772) 475-7342',
      accountTypeEs: 'ZELLE OFICIAL',
      accountTypeEn: 'OFFICIAL ZELLE',
      holderEs: 'MINISTERIO INTERNACIONAL EN EL LUGAR SANTÍSIMO',
      holderEn: 'MINISTERIO INTERNACIONAL EN EL LUGAR SANTÍSIMO',
      cardAccentClass: 'border-sky-400/40 bg-indigo-950/65',
      numberColorClass: 'text-sky-200 border-sky-400/50 bg-sky-950/60',
    },
  ] as Array<{
    id: string;
    titleEs: string;
    titleEn: string;
    methodBadge?: string;
    accountNumber: string;
    accountTypeEs: string;
    accountTypeEn: string;
    holderEs: string;
    holderEn: string;
    taxId?: string;
    cardAccentClass: string;
    numberColorClass: string;
  }>,
  socialBannerTitleEs: '¿Quieres apoyar nuestra labor misionera en Bocachica?',
  socialBannerTitleEn: 'Want to support our mission work in Bocachica?',
  socialBannerCtaEs: 'Ir a Apoyo Social',
  socialBannerCtaEn: 'Go to Social Outreach',
};

export const SOS_SECTION_DATA = {
  topPromptEs: 'Si necesitas oración en algún tema, no dudes en escribirnos',
  topPromptEn: 'If you need prayer about any topic, do not hesitate to write to us',
  title: 'S.O.S',
  helplineBadgeEs: 'NEW',
  helplineBadgeEn: 'NEW',
  helplineNumber: '(+57) 305 4351398',
  helplineClean: '573054351398',
  prayerDispatchNumber: '(+57) 305 4351398',
  prayerDispatchClean: '573054351398',
  helplineLabelEs: 'Solicita ayuda u oración',
  helplineLabelEn: 'Request help or prayer',
  scriptureLine1Es: '¡Voy a hacer algo nuevo!',
  scriptureLine1En: 'See, I am doing a new thing!',
  scriptureLine2Es: 'Ya está sucediendo',
  scriptureLine2En: 'Now it springs up',
  scriptureRefEs: 'Isaías 43:19',
  scriptureRefEn: 'Isaiah 43:19',
  // Editable independent visual asset slots (leave empty string to use the built-in vector artwork or set a custom image URL)
  visuals: {
    backgroundImage: '',
    backgroundImageAltEs: 'Fondo de la sección S.O.S',
    backgroundImageAltEn: 'S.O.S section background',
    largeVinylImage: '',
    smallVinylImage: '',
    bibleButtonImage: '',
  },
  formTitleEs: 'Escríbenos tu petición de oración o ayuda',
  formTitleEn: 'Write Your Prayer or Help Request',
  formSubtitleEs:
    'Este espacio es confidencial. Nuestro equipo de oración y cuidado pastoral responderá a tu mensaje con amor y discreción.',
  formSubtitleEn:
    'This space is confidential. Our prayer and pastoral care team will respond to your message with love and discretion.',
};

export const HOME_SECTION_DATA = {
  heroBackgroundImage: '/assets/aistudio/IMG_9640_97a34117.jpg',
  heroBackgroundAltEs: 'Congregación de la iglesia En el Lugar Santísimo reunida en familia',
  heroBackgroundAltEn: 'Congregation of En el Lugar Santísimo gathered as a church family',
  propheticBackgroundImage: '/assets/aistudio/IMG_1423_463aaefa.JPG',
  propheticBackgroundAltEs: 'Jóvenes y familia celebrando en En el Lugar Santísimo',
  propheticBackgroundAltEn: 'Youth and church family celebrating at En el Lugar Santísimo',
  eyebrowEs: 'Nosotros · Comunidad Cristiana en Bogotá',
  eyebrowEn: 'About Us · Christian Community in Bogotá',
  titleStartEs: 'Un lugar para encontrarte con ',
  titleHighlightEs: 'Dios',
  titleEndEs: ' y transformar tu vida',
  titleStartEn: 'A place to encounter ',
  titleHighlightEn: 'God',
  titleEndEn: ' and transform your life',
  introEs:
    "En nuestra iglesia, creemos firmemente en el poder de la formación y el crecimiento espiritual. El botón 'Ruta de Crecimiento' es tu puerta de entrada a un viaje transformador. Aquí, te presentamos los diversos niveles de formación disponibles en nuestra casa, diseñados para equiparte con las herramientas esenciales que necesitas para ser un líder en el servicio a Dios y a los demás. Si anhelas crecer en tu fe, descubrir tu propósito y contribuir al ministerio de la iglesia, ¡has llegado al lugar adecuado!",
  introEn:
    "In our church, we firmly believe in the power of spiritual formation and growth. The 'Growth Track' button is your gateway to a transformative journey. Here, we present the different levels of training available in our house, designed to equip you with the essential tools you need to become a leader in serving God and others. If you long to grow in your faith, discover your purpose, and contribute to the ministry of the church, you have come to the right place!",
};

