import { Component } from '@angular/core';
import { BattleService } from './services/battle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InfiniteTower';
  constructor(public battleS:BattleService){}
  continue(){
    this.battleS.gameReset()
  }
}
