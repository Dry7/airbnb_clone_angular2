import {IUser} from "./iuser";
export interface IReview {
    id: number;
    review: string;
    created_at: string;
    answer: string;
    answer_created_at: string;
    author: IUser;
}
