import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogComponent } from './log/log.component';
import { MenuComponent } from './menu/menu.component';
import { PointsComponent } from './points/points.component';
import { ScreenComponent } from './screen/screen.component';
import { SlimeComponent } from './monsters/slime/slime.component';
import { SwordComponent } from './itens/sword/sword.component';
import { InventoryComponent } from './inventory/inventory.component';
import { MenuTattleComponent } from './menu-tattle/menu-tattle.component';
import { MenuRestComponent } from './menu-rest/menu-rest.component';
import { ShopComponent } from './shop/shop.component';
import { CampfireComponent } from './campfire/campfire.component';

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    PointsComponent,
    ScreenComponent,
    MenuComponent,
    
    SlimeComponent,
         SwordComponent,
         InventoryComponent,
         MenuTattleComponent,
         MenuRestComponent,
         ShopComponent,
         CampfireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
