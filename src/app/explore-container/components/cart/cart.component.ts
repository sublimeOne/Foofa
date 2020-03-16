import { ModalController } from "@ionic/angular";
import { ConfirmOrderPage } from "../../pages/confirm-order/confirm-order.page";
import { CartItem } from "./../../Models/CartItem";
import { DataServiceService } from "./../../../services/data-service.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
  items: any = [];
  qty: number;
  cartItems;

  constructor(
    private db: DataServiceService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.db
      .getItems()
      .valueChanges()
      .subscribe(
        data => {
          this.items = data;
        },
        error => console.error("error at getting items!" + error),
        () => console.log(" get items completed!")
      );
  }

  getCartItems() {
    let cartItems: any = this.db.getItems();
    return cartItems;
  }

  removeItem(cartItem: CartItem) {
    console.warn(cartItem);
    return this.db.removeItem(cartItem);
  }

  onClick = (item: any) => {
    console.info(item);
  };

  add = (a: number) => {
    a = this.qty++;
    return a;
  };

  subtract = (b: number) => {
    b = this.qty - 1;
    return b;
  };

  createOrder(cartItems) {
    this.presentModal(cartItems);
  }

  async presentModal(cartItems) {
    const modal = await this.modalController.create({
      component: ConfirmOrderPage,
      componentProps: {
        cartItems
      }
    });
    return await modal.present();
  }
}
