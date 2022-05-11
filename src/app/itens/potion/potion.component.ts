import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { LogsService } from 'src/app/services/logs.service';

@Component({
  selector: 'app-potion',
  templateUrl: './potion.component.html',
  styleUrls: ['./potion.component.scss']
})
export class PotionComponent implements OnInit {
  potions:number=0
  @Input() potionLevel = 1
  constructor(public cS:CharacterService, public lS:LogsService) { }

  ngOnInit(): void {
    this.cS.person$.subscribe((p)=>this.potions = p.PotionInventory.length)
  }

  use(){
    this.cS.recieveFullHeal()
    this.cS.consumePotion()
    this.lS.personHeal()
  }

}
