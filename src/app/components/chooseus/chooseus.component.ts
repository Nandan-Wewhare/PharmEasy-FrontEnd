import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chooseus',
  templateUrl: './chooseus.component.html',
  styleUrls: ['./chooseus.component.css'],
})
export class ChooseusComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  data = [
    {
      imgUrl:
        'https://assets.pharmeasy.in/apothecary/images/family.svg?dim=96x0',
      title: '32 Million+',
      subText1: 'Registered users as of ',
      subText2: 'Mar 31, 2022',
    },
    {
      imgUrl:
        'https://assets.pharmeasy.in/apothecary/images/deliveryBoy.svg?dim=96x0',
      title: '36 Million+',
      subText1: 'Orders on Pharmeasy ',
      subText2: 'till date',
    },
    {
      imgUrl:
        'https://assets.pharmeasy.in/apothecary/images/pincodeServed.svg?dim=96x0',
      title: '99000+',
      subText1: 'Unique items sold last  ',
      subText2: '3 months',
    },
    {
      imgUrl:
        'https://assets.pharmeasy.in/apothecary/images/locationMarker.svg?dim=96x0',
      title: '19500+',
      subText1: 'Pin codes serviced last ',
      subText2: '3 months',
    },
  ];
}
