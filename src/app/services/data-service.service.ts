import { debug } from "util";
import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import { CartItem } from "../explore-container/Models/CartItem";

@Injectable({
  providedIn: "root"
})
export class DataServiceService {
  constructor(public db: AngularFireDatabase) {}

  getItems() {
    return this.db.list("/cart/");
  }

  addItems(cartItem: CartItem) {
    this.db.database.ref;

    return this.db.list("/cart/").push(cartItem);
  }

  removeItem(item) {
    let a = this.db.list("/cart/").snapshotChanges();
    console.log(a);
    return this.db.list("/cart/").remove(item.id);
  }
}
