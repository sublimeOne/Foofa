import { MenuItem } from "./MenuItem";

export interface Order {
  orderID: number;
  description: string;
  item: MenuItem;
}
