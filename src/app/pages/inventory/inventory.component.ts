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
  modal:boolean = false
  constructor(public personS: CharacterService) {

  }

  ngOnInit(): void {
  }

  equipar(item:ItemModel,hand:string){
    hand=='left'?
    this.personS.setLeftHand(item):
    this.personS.setRightHand(item);
    this.toggleModal()
  }
  vender(item:ItemModel){
    this.personS.vender(item)
  }
toggleModal(){
  this.modal = !this.modal
}
}
