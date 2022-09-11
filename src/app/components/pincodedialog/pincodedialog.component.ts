import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pincodedialog',
  templateUrl: './pincodedialog.component.html',
  styleUrls: ['./pincodedialog.component.css'],
})
export class PincodedialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<PincodedialogComponent>) {}

  ngOnInit(): void {}
}
