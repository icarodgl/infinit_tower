import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MonsterModel } from '../models/moster.mode';
import { PotionsItem } from '../models/potions.mode';
import { CharacterService } from './character.service';
import { LogsService } from './logs.service';
import { MonstersService } from './monsters.service';
import { RankingService } from './ranking.service';
import { MenuService } from './menu.service';
import { menus } from './menus';
import { DropService } from './drops.service';

@Injectable({
  providedIn: 'root'
})
export class BattleService {
  monsters = 0
  isGameOver:boolean = false
  encounter$:Subject<string> = new Subject<string>();
  monster$:Subject<MonsterModel> = new Subject<MonsterModel>();
  weaponAnim = false
  monsterAnim =''
  encontersFloor=3
  constructor(
      public mService:MonstersService,
      public cService:CharacterService,
      public lService:LogsService,
      public rService:RankingService,
      public menuService:MenuService,
      public dropService:DropService
      ) {
    this.monster$.next(this.mService.monster)
    this.menuService.menu$.subscribe(m=>this.menuChange(m))
  }
  gameReset(){
    this.isGameOver = false
    this.cService.newPerson()
    this.mService.newMonster(0)
    this.rService.reset()
    this.monster$.next(this.mService.monster)

  }
  async atackMonster(){
    this.menuService.toggleInAttack()
    let playerAttack = this.cService.dealDamage()
    let recived = this.mService.reciveDamage(playerAttack)
    console.log("DAMAGE RECIVED", recived);
    
    this.lService.personAtack(this.mService.monster.name,playerAttack,recived) 
    this.weaponAnimate()
    await this.delay(1000)
    if(this.mService.monster.hp <= 0){
      await this.monsterAnimateDie()
      this.nextMonster()
    }else{
      this.monsterHitBack()
    }
    this.menuService.toggleInAttack()
  }
  async monsterAnimateDie(){
    this.monsterAnim = 'encolher'
   await this.delay(1000)
    this.monsterAnim = ''
  }
  async monsterAnimateAttak(){
    this.monsterAnim = 'atacar'
   await this.delay(1000)
    this.monsterAnim = ''
  }
  async weaponAnimate(){
    this.weaponAnim = true
   await this.delay(1000)
    this.weaponAnim = false
  }
  delay(delayInms:number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }
  monsterHitBack(){
    let monsterAttack = Math.floor(this.mService.dealDamage())
    let recived = Math.floor(this.cService.recieveDamage(monsterAttack))
    this.lService.monsterAtack(this.mService.monster.name,monsterAttack,recived)
    this.monsterAnimateAttak()
    if(this.cService._person.hp <= 0){
      this.isGameOver = true
      this.lService.gameOver()
    }
  }
  async nextMonster(){
    this.monsters++
    this.dropService.drop(this.rService.getFloor())
    this.rService.nextRound()
    if(this.monsters == this.encontersFloor){
      this.monsters = 0
      this.rService.nextFloor()
    }  
    //await this.delay(1000)
    this.mService.newMonster(this.rService.getFloor())  
  }
  changeEncounter(enconter:string):void{
    this.encounter$.next(enconter)
  }

  rollDice(){
    return Math.floor(Math.random()*100)
  }
  async menuChange(menu:string){
    await this.delay(200)
    if(menu == menus.rest){
      this.changeEncounter('campfire')
    }
    if(menu == menus.battle){
      this.changeEncounter('enemy')
    }
  }
}
