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
  damaged = 0;
  constructor(public bs: BattleService, public ms: MonstersService) { }

  ngOnInit(): void {
    this.ms.monster$.subscribe(({hp} )=> this.takeDamaged(hp))
  }


  takeDamaged(hp: number) {
    this.damaged = (hp /this.ms.monster.hpMax)*100
  }

}
