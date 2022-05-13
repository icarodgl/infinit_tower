import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BattleService } from '../services/battle.service';
import { CharacterService } from '../services/character.service';
import { LogsService } from '../services/logs.service';
import { MenuService } from '../services/menu.service';
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

  personHP: Array<boolean> = [];
  monsterHP: Array<boolean> = [];

  constructor(
    public menuService:MenuService,
    public logService: LogsService,
     public battleService: BattleService,
      public monService: MonstersService,
       public charService: CharacterService) {
    this.monService.monster$.subscribe(({ hpMax, hp }) => {
      this.listarHPMaxMonstro(hpMax)
      this.changeHpMonster(hp)

    })
    this.charService.person$.subscribe(({ maxHp, hp }) => {
      this.listarHPMaxPerson(maxHp)
      this.changeHpPerson(hp)
    })
  }

  ngOnInit(): void {
    this.charService.person$.next(this.charService._person)
    this.monService.monster$.next(this.monService.monster)
  }

  atacar() {
    this.battleService.atackMonster()
  }
  listarHPMaxMonstro(hp: number) {
    this.monsterHP = new Array(hp)
  }
  listarHPMaxPerson(hp: number) {
    this.personHP = new Array(hp)
  }
  changeHpMonster(hp: number) {
    for (let i = 0; i < this.monService.monster.hpMax; i++) {
      if (i < hp) {
        this.monsterHP[i] = false;
      } else {
        this.monsterHP[i] = true;
      }
    }
  }
  changeHpPerson(hp: number) {
    for (let i = 0; i < this.charService._person.maxHp; i++) {
      if (i < hp) {
        this.personHP[i] = false;
      } else {
        this.personHP[i] = true;
      }

    }
  }
}
