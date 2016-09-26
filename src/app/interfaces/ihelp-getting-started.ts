import {IHelpGettingStartedItem} from "./ihelp-getting-started-item";
export interface IHelpGettingStarted {
  name: string;
  url: string;
  step: string;
  items: IHelpGettingStartedItem[];
}
