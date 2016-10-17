import {IAd} from "./iad";
export interface IAdSearch {
  total: number;
  from: number;
  to: number;
  pages: number;
  current_page: number;
  items: IAd[];
}
