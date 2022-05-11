import { Component, OnInit } from '@angular/core';
import { BattleService } from '../services/battle.service';
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
  menu = 'battle'
  constructor(public battleService:BattleService,public menuService:MenuService) {
   }
  ngOnInit(): void {
  }

  changeMenu(menu:string){
    this.menuService.changeMenu(menu)
  }
}
