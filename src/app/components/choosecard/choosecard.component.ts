import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-choosecard',
  templateUrl: './choosecard.component.html',
  styleUrls: ['./choosecard.component.css'],
})
export class ChoosecardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() imgUrl!: string;
  @Input() title!: string;
  @Input() subText1!: string;
  @Input() subText2!: string;
}
