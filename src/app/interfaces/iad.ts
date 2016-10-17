import {IUser} from "./iuser";
export interface IAd {
  id: number;
  name: string;
  type: string;
  url: string;
  price: number;
  guests: number;
  reviews: number;
  rating: number;
  is_instant_book: boolean;
  author: IUser;
  images: string[];
  current_image: number;
}
