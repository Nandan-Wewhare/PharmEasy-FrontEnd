import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthdialogComponent } from '../authdialog/authdialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private authDialog: MatDialog) {}

  ngOnInit(): void {}

  logoUrl: string =
    'https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0';

  openAuthDialog(): void {
    this.authDialog.open(AuthdialogComponent, {
      backdropClass: 'dialog-backdrop',
    });
  }
}
