import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BattleService } from './battle.service';
import { menus } from './menus';

@Injectable({
  providedIn: 'root'
})

export class MenuService {
  menu:string = menus.battle
  menu$ : Subject<string> = new Subject<string>()
  constructor() {
    this.menu$.subscribe(m=>this.menu=m)
   }

  changeMenu(menu:string){
    this.menu$.next(menu)
  }
}
