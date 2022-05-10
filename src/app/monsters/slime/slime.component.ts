import { Component, Input, OnInit } from '@angular/core';
import { BattleService } from 'src/app/services/battle.service';
import { MonstersService } from 'src/app/services/monsters.service';

@Component({
  selector: 'app-slime',
  templateUrl: './slime.component.html',
  styleUrls: ['./slime.component.scss']
})
export class SlimeComponent implements OnInit {

  constructor(public bs:BattleService) { }
  monsterColor = 'rgba(20, 145, 13, 0.478)'
  ngOnInit(): void {
  }


}
