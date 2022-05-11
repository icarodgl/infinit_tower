import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BattleService } from '../services/battle.service';
import { RankingService } from '../services/ranking.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss']
})
export class PointsComponent implements OnInit {
  floor = 0
  round = 0
  constructor(public rService:RankingService) { }

  ngOnInit(): void {
    this.rService.floor$.subscribe(f=>this.floor=f)
    this.rService.round$.subscribe(r=>this.round=r)
  }

}
