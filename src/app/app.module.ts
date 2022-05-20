import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogPageComponent } from './pages/logpage/log.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PointsComponent } from './pages/points/points.component';
import { ScreenComponent } from './pages/screen/screen.component';
import { SlimeComponent } from './pages/monsters/slime/slime.component';
import { SwordComponent } from './pages/itens/sword/sword.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { MenuTattleComponent } from './pages/menu-tattle/menu-tattle.component';
import { MenuRestComponent } from './pages/menu-rest/menu-rest.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CampfireComponent } from './pages/campfire/campfire.component';
import { OpeningComponent } from './pages/opening/opening.component';
import { PotionComponent } from './pages/itens/potion/potion.component';
import { CharacterComponent } from './pages/character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    LogPageComponent,
    PointsComponent,
    ScreenComponent,
    MenuComponent,
    
    SlimeComponent,
         SwordComponent,
         InventoryComponent,
         MenuTattleComponent,
         MenuRestComponent,
         ShopComponent,
         CampfireComponent,
         OpeningComponent,
         PotionComponent,
         CharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
