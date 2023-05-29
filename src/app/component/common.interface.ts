export interface UserProfile {
  name: string;
  bio: string;
  image: string;
  posts: number;
  followers: number;
  following: number;
}

export interface Product {
  productName: string;
  image: string;
  size: string[];
  price: number;
  discountPrice?: number;
  category: string;
  brand: string;
}
