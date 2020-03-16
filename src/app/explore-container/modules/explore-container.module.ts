import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";
import { CartComponent } from "../components/cart/cart.component";
import { OrdersComponent } from "../components/orders/orders.component";
import { ExploreContainerComponent } from "../components/explore/explore-container.component";
import { MenuComponent } from "../components/menu/menu.component";
import { ConfirmOrderPage } from "../pages/confirm-order/confirm-order.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [
    ExploreContainerComponent,
    MenuComponent,
    CartComponent,
    OrdersComponent,
    ConfirmOrderPage
  ],
  exports: [
    ExploreContainerComponent,
    MenuComponent,
    CartComponent,
    OrdersComponent,
    ConfirmOrderPage
  ]
})
export class ExploreContainerComponentModule {}
