export interface IUser {
  id: number;
  name: string;
  url: string;
  image: string;
  is_superhost: boolean;
  is_suitcase: boolean;
  country?: string;
  created_at?: string;
  reviews?: number;
  response_rate?: number;
  response_time?: string;
  verified?: boolean;
}
