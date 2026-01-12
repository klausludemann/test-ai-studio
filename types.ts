
export interface Ingredient {
  name: string;
  description: string;
  benefit: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface AIResponse {
  tagline: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  picture: string;
  claim: string;
  description: string;
  tag?: string;
}
