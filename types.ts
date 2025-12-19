
export interface Technology {
  id: string;
  name: string;
  shortName: string;
  description: string;
  fullContent: string;
  features: string[];
  applications: string[];
  specs?: Record<string, string>;
  image: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  interest: string;
  message?: string;
  timestamp: string;
  type: 'contact' | 'brochure';
}

export interface Blog {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  image: string;
}
