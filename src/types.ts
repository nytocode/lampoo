interface Product {
  is_new_with_tag: boolean;
  designer: string;
  name: string;
  size?: string;
  sizes?: {
    id: number;
    name: string;
    qty: number;
  }[];
  image: string;
  price: number;
  retail?: number;
}
