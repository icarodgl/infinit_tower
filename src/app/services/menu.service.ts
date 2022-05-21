import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { menus, menusList } from './menus';
import { RankingService } from './ranking.service';

@Injectable({
  providedIn: 'root'
})

export class MenuService {
  menu:string = menus.battle
  inAttack:boolean = false
  menu$ : Subject<string> = new Subject<string>()
  opening:boolean = true
  constructor(public route: ActivatedRoute, public rankingS:RankingService) {
    this.menu$.subscribe(m=>this.menu=m)
    this.route.queryParamMap.subscribe((params) => {
      this.opening = (params.get('opening') != 'false' || params.get('opening') == null)
      let menu = menusList.find(v => v === (params.get('menu') ))  || menus.battle;
      this.menu$.next(menu)
  })
   }

  changeMenu(menu:string){
    this.menu$.next(menu)
  }
  toggleInAttack(){
    this.inAttack = !this.inAttack
  }
  toggleOpening(){
    this.opening = !this.opening
  }
}
