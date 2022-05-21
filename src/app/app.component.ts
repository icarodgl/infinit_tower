import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BattleService } from './services/battle.service';
import { CharacterService } from './services/character.service';
import { MenuService } from './services/menu.service';
import { MonstersService } from './services/monsters.service';
import { RankingService } from './services/ranking.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InfiniteTower';

  constructor(
    public menuS:MenuService,
    public storageS: StorageService,
    public rankingS:RankingService,
    public personS:CharacterService,
    public monsterS:MonstersService,
    public battleS:BattleService
    ){
    let game = this.storageS.loadGame()
    if(game !== undefined){
      this.rankingS.floor$.next(game.ranking.floor)
      this.rankingS.round$.next(game.ranking.round)
      this.personS.person$.next(game.person)
      this.monsterS.newMonster(game.ranking.floor)
    }
  } 

  continue(){
    this.battleS.gameReset()
  }
  toggleOpening(){
    this.menuS.toggleOpening()
  }
}
