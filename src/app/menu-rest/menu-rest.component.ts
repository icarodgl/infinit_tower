import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { LogsService } from '../services/logs.service';
import { RankingService } from '../services/ranking.service';

@Component({
  selector: 'app-menu-rest',
  templateUrl: './menu-rest.component.html',
  styleUrls: ['./menu-rest.component.scss']
})
export class MenuRestComponent implements OnInit {
  @Output() changeMenuBattle = new EventEmitter();
  @Output() changeMenuInventory = new EventEmitter();
  @Output() changeMenuShop = new EventEmitter();
  constructor(public cS:CharacterService, public rS:RankingService,public lS:LogsService ) { }

  ngOnInit(): void {
  }
  rest(){
  this.cS.recieveFullHeal()
  this.rS.nextRounds(2)
  this.lS.rest()
  }

}
