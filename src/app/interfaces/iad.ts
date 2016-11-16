import {IUser} from "./iuser";
import {IImage} from "./iimage";

export interface IAd {
  id: number;
  name: string;
  house_type?: number;
  type: string;
  url: string;
  price: number;
  guests: number;
  bedrooms?: number;
  bathrooms?: number;
  beds?: number;
  amenities?: number[];
  languages?: number[];
  reviews: number;
  rating: number;
  is_instant_book: boolean;
  city?: string;
  about?: string;
  accommodates?: number;
  extra_people?: string;
  cancellation?: string;
  description?: string;
  house_rules?: string;
  minimum_stay?: number;
  author: IUser;
  images: IImage[];
  current_image: number;
  coordinates: any;
}
