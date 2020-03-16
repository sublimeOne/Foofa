// import { CartItem } from "../../Models/CartItem";
import { Component, OnInit, Input } from "@angular/core";
import { NavParams } from "@ionic/angular";

@Component({
  selector: "app-confirm-order",
  templateUrl: "./confirm-order.page.html",
  styleUrls: ["./confirm-order.page.scss"]
})
export class ConfirmOrderPage implements OnInit {
  // @Input() cartItems: CartItem[];

  constructor(private navParams: NavParams) {
    // componentProps can also be accessed at construction time using NavParams
    console.log(navParams.get("cartItems"));
  }

  ngOnInit() {}
}
