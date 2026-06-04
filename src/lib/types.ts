export interface NavLink {
  href: string;
  label: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  partNumbers: string[];
}

export interface Advantage {
  icon: string;
  title: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  content?: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
}
