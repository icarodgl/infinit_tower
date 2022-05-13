import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  @Output() changeMenu = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
