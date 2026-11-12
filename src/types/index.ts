export type PageId =
  | 'inicio'
  | 'conocenos'
  | 'comunidad'
  | 'en-vivo'
  | 'eventos'
  | 'apoyo-social'
  | 'contacto';

export interface MeetingSchedule {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  day: string;
  time: string;
  modality: 'Presencial y En Vivo' | 'Presencial y Virtual' | 'Virtual vía Google Meet' | 'Presencial';
  locationOrPlatform: string;
  meetLink?: string;
  description: string;
  badgeColor: string;
}

export interface Pillar {
  number: string;
  title: string;
  tagline: string;
  description: string;
  biblicalFoundation: string;
  practicalApplication: string[];
}

export interface Ministry {
  id: string;
  name: string;
  audience: string;
  iconName: string;
  summary: string;
  schedule: string;
  leader: string;
  activities: string[];
}

export interface CellGroup {
  id: string;
  name: string;
  zone: 'Fontibón / Salitre' | 'Calle 24 / Boyacá' | 'Occidente' | 'Norte' | 'Virtual';
  neighborhood: string;
  dayAndTime: string;
  host: string;
  modality: 'Presencial' | 'Virtual';
}

export interface Sermon {
  id: string;
  title: string;
  series: string;
  preacher: string;
  date: string;
  passage: string;
  duration: string;
  youtubeId?: string;
  videoUrl?: string;
  summary: string;
  keyPoints: string[];
  outlineDownloadUrl?: string;
}

export interface Devotional {
  id: string;
  dayOfWeek: string;
  title: string;
  passage: string;
  verseText: string;
  reflection: string;
  practicalChallenge: string;
  prayer: string;
}

export interface EventItem {
  id: string;
  title: string;
  dateStr: string;
  timeStr: string;
  category: 'Servicio' | 'Ayuno' | 'Oración' | 'Jóvenes' | 'Social' | 'Especial';
  location: string;
  description: string;
  isUpcoming: boolean;
  requiresRegistration?: boolean;
}

export interface SocialImpactStory {
  id: string;
  title: string;
  location: string;
  summary: string;
  beneficiaries: string;
  quote: string;
  author: string;
}

export interface DonationTier {
  id: string;
  amountCOP: number;
  label: string;
  impactDescription: string;
  isPopular?: boolean;
}

export interface Testimony {
  id: string;
  author: string;
  area: string;
  excerpt: string;
  fullStory: string;
  timeAgo: string;
}

export interface PastoralCareRequest {
  fullName: string;
  phone: string;
  email?: string;
  reason: 'Oración' | 'Consejería familiar' | 'Duelo / Pérdida' | 'Orientación espiritual' | 'Primera visita';
  message: string;
  preferredContact: 'WhatsApp' | 'Llamada' | 'Reunión Presencial';
  isConfidential: boolean;
}
