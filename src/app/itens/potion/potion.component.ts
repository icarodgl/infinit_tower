import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { LogsService } from 'src/app/services/logs.service';

@Component({
  selector: 'app-potion',
  templateUrl: './potion.component.html',
  styleUrls: ['./potion.component.scss']
})
export class PotionComponent implements OnInit {

  @Input() potionLevel = 1
  constructor(public cS:CharacterService, public lS:LogsService) { }

  ngOnInit(): void {
  }

  use(){
    this.cS.recieveFullHeal()
    this.cS.consumePotion()
    this.lS.personHeal()
  }

}
