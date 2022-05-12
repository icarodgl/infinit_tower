import { Component, Input, OnInit } from '@angular/core';
import { BattleService } from 'src/app/services/battle.service';
import { MonstersService } from 'src/app/services/monsters.service';

@Component({
  selector: 'app-slime',
  templateUrl: './slime.component.html',
  styleUrls: ['./slime.component.scss']
})
export class SlimeComponent implements OnInit {
  monsterColor = 'rgba(20, 145, 13, 0.478)';
  damaged = 100;
  monsterName=''
  nivel = 0
  constructor(public bs: BattleService, public ms: MonstersService) { }

  ngOnInit(): void {
    this.ms.monster$.subscribe(({hp,hpMax,name,nivel} )=> {
      this.damaged = (hp/hpMax)*100
      this.monsterName = name
      this.nivel = nivel
    })
  }
}
