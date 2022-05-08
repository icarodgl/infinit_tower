import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MonsterModel } from '../models/moster.mode';

@Injectable({
  providedIn: 'root'
})
export class MonstersService {
  monster:MonsterModel = new MonsterModel(
    "slime",
    5,
    5,
    5,
    1,
  )
  monsterHp$:Subject<number> = new Subject<number>()
  monsterMaxHp$:Subject<number> = new Subject<number>()
  constructor() {
    this.monsterMaxHp$.next(this.monster.hpMax)
    this.monsterHp$.next(this.monster.hp)
  }
  getMonster():MonsterModel{
    return this.monster
  }
  newMonster(nivel:number):void{
    this.monster = new MonsterModel(
      "Slime",
      5*nivel,
      5*nivel,
      5*(nivel/2),
      1,
    ) 
  }
  reciveDamage(damage:number):void{
      this.monster.hp = this.monster.hp -( damage - this.monster.defense)
      this.monsterHp$.next(this.monster.hp)

  }
  reciveHeal(heal:number):void{
      this.monster.hp = this.monster.hp + heal
      this.monsterHp$.next(this.monster.hp)
  }
  dealDamage():number{
      return this.monster.attack
  }
}
