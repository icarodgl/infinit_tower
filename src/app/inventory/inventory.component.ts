import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  @Output() changeMenuRest = new EventEmitter();
  inventory = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]
  constructor() { }

  ngOnInit(): void {
  }

}
