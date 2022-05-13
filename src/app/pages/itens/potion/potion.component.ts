import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { LogsService } from 'src/app/services/logs.service';

@Component({
  selector: 'app-potion',
  templateUrl: './potion.component.html',
  styleUrls: ['./potion.component.scss']
})
export class PotionComponent implements OnInit {
  potions: number = 0
  @Input() potionLevel = 1
  constructor(public charService: CharacterService, public logS: LogsService) { }

  ngOnInit(): void {
    this.charService.person$.subscribe((p) => {
      this.potions = p.PotionInventory
    })
  }

  async use() {
    let potIsUsed: boolean = this.charService.recieveHeal(10)
    if (potIsUsed) {
      this.charService.consumePotion()
      this.logS.personHeal()
    }
  }

}
