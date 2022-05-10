import { Component, Input, OnInit } from '@angular/core';
import { BattleService } from 'src/app/services/battle.service';

@Component({
  selector: 'app-sword',
  templateUrl: './sword.component.html',
  styleUrls: ['./sword.component.scss']
})
export class SwordComponent implements OnInit {
  constructor( public bs:BattleService) { }

  ngOnInit(): void {
  
  }

}
