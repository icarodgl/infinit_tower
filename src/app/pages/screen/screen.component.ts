import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { menus } from 'src/app/services/menus';
@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})

export class ScreenComponent implements OnInit {
  menus=menus
  constructor(public menuService:MenuService) { 
  }

  ngOnInit(): void {
  }
}
