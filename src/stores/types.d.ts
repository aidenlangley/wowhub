export interface TeamMember {
  name: string;
  tags: string[];
  about: string[];
  pepeha?: string[];
  frontline?: boolean;
  img?: string;
  tallImg?: boolean;
}

export interface Form {
  title: string;
  description: string;
  url: string;
}
