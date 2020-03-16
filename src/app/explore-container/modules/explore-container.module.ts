import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";
import { CartComponent } from "../components/cart/cart.component";
import { OrdersComponent } from "../components/orders/orders.component";
import { ExploreContainerComponent } from "../components/explore/explore-container.component";
import { MenuComponent } from "../components/menu/menu.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [
    ExploreContainerComponent,
    MenuComponent,
    CartComponent,
    OrdersComponent
  ],
  exports: [
    ExploreContainerComponent,
    MenuComponent,
    CartComponent,
    OrdersComponent
  ]
})
export class ExploreContainerComponentModule {}
