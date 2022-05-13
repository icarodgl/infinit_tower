import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MonsterModel } from '../models/moster.mode';
import { monsterVariant } from './monster.variant';

@Injectable({
  providedIn: 'root'
})
export class MonstersService {
  monster: MonsterModel = {
    nivel: 1,
    name: "slime",
    hp: 5,
    hpMax: 5,
    attack: 3,
    defense: 1,
    cor: 'rgba(20, 145, 13, 0.478)'
  };
  monster$: Subject<MonsterModel> = new Subject()
  constructor() {
    this.monster$.subscribe(m => this.monster = m)
  }

  newMonster(nivel: number): void {
    let dice: number = Math.floor(Math.random() * (monsterVariant.length - 1))

    this.monster$.next({
      cor: monsterVariant[dice].cor,
      nivel: nivel,
      name: `Slime ${monsterVariant[dice].sufixo}`,
      hp: 5 + nivel,
      hpMax: 5 + nivel,
      attack: 3 + nivel,
      defense: 1 + nivel,
    }
    )

  }
  reciveDamage(damage: number): number {
    let dmg = (damage - this.monster.defense)
    if (dmg > 0) {
      this.monster.hp = this.monster.hp - dmg
      this.monster$.next(this.monster)
      return dmg
    } else { return 0 }
  }
  reciveHeal(heal: number): void {
    this.monster.hp = this.monster.hp + heal
    this.monster$.next(this.monster)
  }
  dealDamage(): number {
    return this.monster.attack
  }
}
