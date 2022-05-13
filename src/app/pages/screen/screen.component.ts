import { Component, OnInit } from '@angular/core';
import { EncounterOptions } from '../../models/encounter.model';
import { BattleService } from '../../services/battle.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {
  encounter:string = 'enemy';
  encounterOptions:EncounterOptions;
  constructor(public battleService:BattleService) { 
    this.encounterOptions = new EncounterOptions()
  }

  ngOnInit(): void {
    this.battleService.encounter$.subscribe(e => this.encounter = e)
  }
}
