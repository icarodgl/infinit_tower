import { Component, OnInit } from '@angular/core';
import { EncounterOptions } from '../models/encounter.model';
import { BattleService } from '../services/battle.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  menus = {
    inventory:"inventory",
    rest:"rest",
    battle:"battle",
    shop:"shop"
  }
  enconterOptions:EncounterOptions;
  menu = 'battle'
  constructor(public battleService:BattleService) {
    this.enconterOptions = new EncounterOptions()
   }
  ngOnInit(): void {
  }
  changeMenu(menu:string){
    this.menu = menu
    if(menu == this.menus.rest){
      this.battleService.changeEncounter(this.enconterOptions.campfire)
    }
    if(menu == this.menus.battle){
      this.battleService.changeEncounter(this.enconterOptions.enemy)
    }
  }
}
