import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MonsterModel } from '../models/moster.mode';

@Injectable({
  providedIn: 'root'
})
export class MonstersService {
  monster:MonsterModel = {
    name:"slime",
    hp:5,
    hpMax:5,
    attack:5,
    defense:1,
    };
  monster$:Subject<MonsterModel> = new Subject()
  constructor() {
    this.monster$.subscribe(m=>this.monster=m)
  }

  newMonster(nivel:number):void{
    this.monster$.next({
    name:"slime",
    hp:5+nivel,
    hpMax:5+nivel,
    attack:2+(nivel/4),
    defense:1+(nivel/4),
    }
    )

  }
  reciveDamage(damage:number):number{
    let dmg =  this.monster.hp = this.monster.hp -( damage - this.monster.defense)
      this.monster$.next(this.monster)
    return dmg
  }
  reciveHeal(heal:number):void{
      this.monster.hp = this.monster.hp + heal
      this.monster$.next(this.monster)
  }
  dealDamage():number{
      return this.monster.attack
  }
}
