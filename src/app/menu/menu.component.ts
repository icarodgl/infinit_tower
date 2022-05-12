import { Component, OnInit } from '@angular/core';
import { max } from 'moment';
import { BattleService } from '../services/battle.service';
import { CharacterService } from '../services/character.service';
import { MenuService } from '../services/menu.service';

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
  life = 100
  menu = 'battle'
  constructor(public cS:CharacterService ,public battleService:BattleService,public menuService:MenuService) {
    cS.person$.subscribe(({hp,maxHp})=>{ this.life = (hp/maxHp)*100})
   }
  ngOnInit(): void {
  }

  changeMenu(menu:string){
    this.menuService.changeMenu(menu)
  }
}
