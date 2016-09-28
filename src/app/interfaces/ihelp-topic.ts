import {IHelpArticle} from "./ihelp-article";
export interface IHelpTopic {
  id: number;
  name: string;
  url: string;
  articles: IHelpArticle[];
}
