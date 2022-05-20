import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ItemModel } from 'src/app/models/item.mode';
import { CharacterService } from 'src/app/services/character.service';
import { SelectedItem } from './SelectedItem';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  @Output() changeMenuRest = new EventEmitter();
  inventory: SelectedItem[] = []
  modal: boolean = false
  selected = -1
  constructor(public personS: CharacterService) {
    personS.person$.subscribe(({ inventory }) => {
      this.inventory = inventory.map((i) => {
        return { selected: false, item: i }
      }
      )
    })
  }

  ngOnInit(): void {
  }

  equipar(item: ItemModel, hand: string) {
    if (hand === 'left')
      this.personS.setLeftHand(item)
    if (hand === 'right')
      this.personS.setRightHand(item);
    this.toggleModal(-1)
  }
  vender(item: ItemModel) {
    this.personS.vender(item)
  }
  toggleModal(index: number) {
    this.selected == index? this.selected = -1: this.selected = index
  }
}
