import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  logoUrl: string =
    'https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0';
}
