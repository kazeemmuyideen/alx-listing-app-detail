export interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
}

export interface CardProps {
    title: string;
    description: string;
    image: string;
}

export interface PropertyProps {
  name: string;
  rating: number;
  address: { city: string; country: string };
  image: string;
  description: string;
  category: string[];
  price: number;
  reviews: {
    name: string;
    rating: number;
    comment: string;
    avatar: string;
  }[];
}
