
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  bgIcon?: string;
  features: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  metric: string;
  description: string;
  icon: string;
  link: string;
}

export interface Stat {
  label: string;
  value: string;
}
