import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BattleService } from '../../services/battle.service';
import { RankingService } from '../../services/ranking.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss']
})
export class PointsComponent implements OnInit {

  constructor(public rService:RankingService) { }

  ngOnInit(): void {
    
  }

}
