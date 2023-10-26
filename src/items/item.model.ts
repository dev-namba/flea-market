import { ItemStatus } from "../entities/item-status.enum";


export interface Item {
  id: string;
  name: string;
  price: number;
  description: string;
  status: ItemStatus;
}