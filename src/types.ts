export interface ClubEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  city: 'Quatis' | 'Porto Real' | 'Região';
  description: string;
  isFeatured?: boolean;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  year: string;
  owner?: string;
  description?: string;
}

export type RuleType = 'forbidden' | 'warning' | 'allowed';

export interface RuleItem {
  id: string;
  title: string;
  description: string;
  type: RuleType;
}

export interface MemberQuote {
  id: string;
  name: string;
  car: string;
  quote: string;
}
