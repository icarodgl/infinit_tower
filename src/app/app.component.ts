import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BattleService } from './services/battle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InfiniteTower';
  opening = true
  constructor(public battleS:BattleService,private route: ActivatedRoute){
    this.route.queryParamMap.subscribe((params) => {
      this.opening = (params.get('opening') != 'false' || params.get('opening') == null)
  }
);

  }
  continue(){
    this.battleS.gameReset()
  }
  toggleOpening(){
    this.opening = !this.opening
  }
}
