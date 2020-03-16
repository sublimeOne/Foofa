import { CartItem } from "./../../Models/CartItem";
import { DataServiceService } from "./../../../services/data-service.service";
import { MenuItem } from "./../../Models/MenuItem";
import { Component, OnInit } from "@angular/core";
import { MENU } from "../mock-data/menu";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = MENU;
  cartItem: CartItem;

  constructor(
    private service: DataServiceService,
    private toast: ToastController
  ) {}

  ngOnInit() {}

  async presentToast(name: string) {
    const toast = await this.toast.create({
      color: "dark",
      duration: 2000,
      message: `Added ${name} to cart successfully`
    });
    toast.present();
  }

  addToCart(item: MenuItem) {
    this.cartItem = {
      id: this.id().toString(),
      menuItem: item
    };

    this.service.addItems(this.cartItem);
    this.presentToast(item.name);
  }

  id() {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  }
}
