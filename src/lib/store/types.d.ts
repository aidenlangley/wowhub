export interface Route {
  name: string;
  path: string;
  translation: string;
}

export interface Member {
  name: string;
  tags: string[];
  about: string[];
  frontline?: boolean;
  imgSrc?: string;
}

export interface Seo {
  title: string;
  description: string;
  robots: string;
}
