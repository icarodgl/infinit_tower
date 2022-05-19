import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ItemModel } from 'src/app/models/item.mode';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  @Output() changeMenuRest = new EventEmitter();
  inventory: ItemModel[] = []
  constructor(public personS: CharacterService) {

  }

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      if (this.personS._person.inventory.length > i) {
        console.log("put item", this.personS._person.inventory[i]);
        this.inventory.push(this.personS._person.inventory[i])
      } else {
        let item:ItemModel = {
          name:'',damage:1,defese:1,hands:1
        }
        this.inventory.push(item)
      }

    }
  }

}
