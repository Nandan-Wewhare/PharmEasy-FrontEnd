import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-authdialog',
  templateUrl: './authdialog.component.html',
  styleUrls: ['./authdialog.component.css'],
})
export class AuthdialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AuthdialogComponent>) {}

  ngOnInit(): void {}
  selectedIndex = 0;
  changeTab(tabChange: MatTabChangeEvent) {
    this.selectedIndex = tabChange.index;
  }
}
