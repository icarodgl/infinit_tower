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

@Injectable({
  providedIn: 'root'
})
export class BattleService {
  monsters = 0
  isGameOver:boolean = false
  encounter$:Subject<string> = new Subject<string>();
  monster$:Subject<MonsterModel> = new Subject<MonsterModel>();
  weaponAnim = false
  monsterAnim = false
  constructor(
      public mService:MonstersService,
      public cService:CharacterService,
      public lService:LogsService,
      public rService:RankingService,
      public menuService:MenuService
      ) {
    this.monster$.next(this.mService.monster)
    this.menuService.menu$.subscribe(m=>this.menuChange(m))
  }
  gameReset(){
    this.isGameOver = false
    this.cService.newPerson()
    this.mService.newMonster(1)
    this.monster$.next(this.mService.monster)

  }
  atackMonster(){
    let playerAttack = Math.floor(this.cService.dealDamage() + (this.rollDice()*.05)) 
    let recived = Math.floor(this.mService.reciveDamage(playerAttack))
    this.lService.personAtack(this.mService.monster.name,playerAttack,recived) 
    this.weaponAnimate()
    this.delay(1000)
    if(this.mService.monster.hp <= 0){
      this.monsterAnimate()
      this.nextMonster()
    }else{
      this.monsterHitBack()
    }
  }
  async monsterAnimate(){
    this.monsterAnim = true
   await this.delay(1000)
    this.monsterAnim = false
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
    let monsterAttack = Math.floor(this.mService.dealDamage() + (this.rollDice()*.05))
    let recived = Math.floor(this.cService.recieveDamage(monsterAttack))
    this.lService.monsterAtack(this.mService.monster.name,monsterAttack,recived)
    if(this.cService._person.hp <= 0){
      this.isGameOver = true
      this.lService.gameOver()
    }
  }
  nextMonster(){
    this.monsters++
    this.lService.morte(this.mService.monster.name)
    this.dropItens(this.mService.monster.name)
    this.rService.nextRound()
    if(this.monsters == 5){
      this.monsters = 0
      this.rService.nextFloor()
      this.lService.nextFloor(this.rService.getFloor())
    }  
    this.mService.newMonster(this.rService.getFloor())  
  }
  changeEncounter(enconter:string):void{
    this.encounter$.next(enconter)
  }
  dropItens(monstro:string){
    let dice = this.rollDice()
    console.log("DROP DICE: ",dice);
    
   if( dice <= 50){
         let pot = new PotionsItem()
    this.cService.addItemInventory(pot)
    this.lService.dropPotion(monstro)
   }
  }
  rollDice(){
    return Math.floor(Math.random()*100)
  }
  async menuChange(menu:string){
    await this.delay(800)
    if(menu == menus.rest){
      this.changeEncounter('campfire')
    }
    if(menu == menus.battle){
      this.changeEncounter('enemy')
    }
  }
}
