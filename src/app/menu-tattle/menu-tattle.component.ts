import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BattleService } from '../services/battle.service';
import { CharacterService } from '../services/character.service';
import { LogsService } from '../services/logs.service';
import { MonstersService } from '../services/monsters.service';

@Component({
  selector: 'app-menu-tattle',
  templateUrl: './menu-tattle.component.html',
  styleUrls: ['./menu-tattle.component.scss']
})
export class MenuTattleComponent implements OnInit {
  @Output() changeMenu = new EventEmitter();
  @Output() changeMenuInventory = new EventEmitter();

  personHP:Array<boolean> = [];
  monsterHP:Array<boolean> = [];

  constructor(public logService:LogsService, public battleService:BattleService,public monsterService:MonstersService, public characterS:CharacterService) {
    this.monsterService.monsterMaxHp$.subscribe(hp=> {this.listarHPMaxMonstro(hp)})
    this.characterS.personMaxHp$.subscribe(hp=> this.listarHPMaxPerson(hp))
    this.characterS.personHp$.subscribe(hp =>this.changeHpPerson(hp))
    this.monsterService.monsterHp$.subscribe(hp=>this.changeHpMonster(hp))
  }

  ngOnInit(): void {
    this.monsterService.monsterMaxHp$.next(this.monsterService.monster.hpMax)
    this.characterS.personMaxHp$.next(this.characterS.person.maxHp)
    this.characterS.personHp$.next(this.characterS.person.hp)
    this.monsterService.monsterHp$.next(this.monsterService.monster.hp)
  }

  atacar(){
    this.battleService.atackMonster()
  }
  listarHPMaxMonstro(hp:number){
    this.monsterHP= new Array(hp)
  }
  listarHPMaxPerson(hp:number){
    this.personHP= new Array(hp)
  }
  changeHpMonster(hp:number){
    for (let i = 0; i < this.monsterService.monster.hpMax; i++) {
      if(i < hp){
        this.monsterHP[i] = false;
      }else{
        this.monsterHP[i] = true;
      }
    }
  }
  changeHpPerson(hp:number){
    for (let i = 0; i < this.characterS.person.maxHp; i++) {
      if(i < hp){
        this.personHP[i] = false;
      }else{
        this.personHP[i] = true;
      }
      
    }
  }
}
