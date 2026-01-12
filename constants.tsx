
import { Ingredient, Testimonial, Product } from './types';

export const INGREDIENTS: Ingredient[] = [
  {
    name: "Natural Caffeine",
    description: "Sourced from green coffee beans for sustained release.",
    benefit: "Zero Crash Energy",
    icon: "fa-bolt"
  },
  {
    name: "L-Theanine",
    description: "Rare amino acid found in green tea leaves.",
    benefit: "Crystal Clear Focus",
    icon: "fa-brain"
  },
  {
    name: "Red Beet Root",
    description: "Natural nitrates to enhance blood flow.",
    benefit: "Endurance Boost",
    icon: "fa-heartbeat"
  },
  {
    name: "Electrolytes",
    description: "Balanced minerals for rapid hydration.",
    benefit: "Rapid Recovery",
    icon: "fa-tint"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alex Rivera",
    role: "Professional Gamer",
    text: "Almandine keeps me focused during 12-hour streams without the jittery mess of other brands. It's my secret weapon.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Marathon Runner",
    text: "I've tried every energy drink out there. Almandine is the only one that feels clean and tastes like premium berries.",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    role: "Tech Entrepreneur",
    text: "When I'm pulling an all-nighter for a launch, Almandine is the only thing on my desk. Maximum output, minimal crash.",
    rating: 5
  }
];

export const PRODUCTS_DB: Product[] = [
  {
    id: 'origin-single',
    name: 'Almandine Origin Single',
    price: 4.99,
    picture: 'https://images.unsplash.com/photo-1622543953495-a17ff2158536?auto=format&fit=crop&q=80&w=400',
    claim: 'The Spark that Starts it All',
    description: 'A single 500ml can of our flagship Garnet-filtered formula.',
    tag: 'Trial'
  },
  {
    id: 'origin-12pack',
    name: 'The Almandine 12-Pack',
    price: 39.99,
    picture: 'https://images.unsplash.com/photo-1543253687-c931c8e01820?auto=format&fit=crop&q=80&w=400',
    claim: 'Fuel Your Performance Week',
    description: 'A full case of Origin. Perfect for consistent high-output creators.',
    tag: 'Popular'
  },
  {
    id: 'origin-24pack',
    name: 'Mastermind Collective Case',
    price: 69.99,
    picture: 'https://images.unsplash.com/photo-1546272989-40c92939c6c2?auto=format&fit=crop&q=80&w=400',
    claim: 'Maximum Focus, Minimum Interruption',
    description: '24 cans for those who refuse to run out of momentum.',
    tag: 'Best Value'
  },
  {
    id: 'subscription-monthly',
    name: 'The Flux Subscription',
    price: 34.99,
    picture: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&q=80&w=400',
    claim: 'Never Lose Your Frequency',
    description: '12 cans delivered monthly. Cancel anytime, stay sharp forever.',
    tag: 'Elite Member'
  }
];
