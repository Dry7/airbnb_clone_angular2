import {IUser} from "./iuser";
import {IImage} from "./iimage";
import {IRating} from "./irating";

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
  ratings?: IRating;
  is_instant_book: boolean;
  city?: string;
  about?: string;
  accommodates?: number;
  extra_people?: string;
  cancellation?: string;
  description?: string;
  house_rules?: string;
  minimum_stay?: number;
  week_discount?: number;
  month_discount?: number;
  cleaning_fee?: number;
  service_fee?: number;
  author: IUser;
  images: IImage[];
  current_image: number;
  coordinates: any;
}
