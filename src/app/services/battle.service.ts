import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CharacterModel } from '../models/character.model';
import { MonsterModel } from '../models/moster.mode';
import { CharacterService } from './character.service';
import { LogsService } from './logs.service';
import { MonstersService } from './monsters.service';

@Injectable({
  providedIn: 'root'
})
export class BattleService {
  isGameOver:boolean = false
  encounter$:Subject<string> = new Subject<string>();
  monster$:Subject<MonsterModel> = new Subject<MonsterModel>();
  round = 1

  constructor(public monsterService:MonstersService, public characterService:CharacterService, public logService:LogsService) {
    this.monster$.next(this.monsterService.getMonster())
  }
  gameReset(){
    this.isGameOver = false
    this.characterService.newPerson()
    this.monsterService.newMonster(1)
    this.round = 1
  }
  atackMonster(){
    let playerAttack = this.characterService.dealDamage()
    this.monsterService.reciveDamage(playerAttack)
    this.logService.atack("Você",this.monsterService.monster.name,playerAttack)
    if(this.monsterService.monster.hp <= 0){
      this.nextMonster()
    }else{
      this.monsterHitBack()
    }

  }
  monsterHitBack(){
    let monsterAttack = this.monsterService.dealDamage()
    this.characterService.recieveDamage(monsterAttack)
    this.logService.atack(this.monsterService.monster.name,'você',monsterAttack)
    if(this.characterService.person.hp <= 0){
      this.isGameOver = true
      this.logService.gameOver()
    }
  }
  nextMonster(){
    this.round ++;
    this.logService.morte(this.monsterService.monster.name)
    this.monsterService.newMonster(this.round)
  }
  changeEncounter(enconter:string):void{
    this.encounter$.next(enconter)
  }
}
