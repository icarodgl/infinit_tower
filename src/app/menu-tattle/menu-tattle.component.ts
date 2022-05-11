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
  @Output() changeMenuRest = new EventEmitter();

  personHP:Array<boolean> = [];
  monsterHP:Array<boolean> = [];

  constructor(public logService:LogsService, public battleService:BattleService,public monsterService:MonstersService, public characterS:CharacterService) {
    this.monsterService.monster$.subscribe(({hpMax})=> {this.listarHPMaxMonstro(hpMax)})
    this.characterS.person$.subscribe(({maxHp})=> this.listarHPMaxPerson(maxHp))
    this.characterS.person$.subscribe(({hp}) =>this.changeHpPerson(hp))
    this.monsterService.monster$.subscribe(({hp})=>this.changeHpMonster(hp))
  }

  ngOnInit(): void {
    this.characterS.person$.next(this.characterS._person)
    this.monsterService.monster$.next(this.monsterService.monster)
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
    for (let i = 0; i < this.characterS._person.maxHp; i++) {
      if(i < hp){
        this.personHP[i] = false;
      }else{
        this.personHP[i] = true;
      }
      
    }
  }
}
