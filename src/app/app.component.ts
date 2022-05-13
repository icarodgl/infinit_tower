import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BattleService } from './services/battle.service';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InfiniteTower';

  constructor(public battleS:BattleService,public menuS: MenuService){

  }
  continue(){
    this.battleS.gameReset()
  }
  toggleOpening(){
    this.menuS.toggleOpening()
  }
}
