import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-rest',
  templateUrl: './menu-rest.component.html',
  styleUrls: ['./menu-rest.component.scss']
})
export class MenuRestComponent implements OnInit {
  @Output() changeMenuBattle = new EventEmitter();
  @Output() changeMenuInventory = new EventEmitter();
  @Output() changeMenuShop = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
