import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { AuthdialogComponent } from '../authdialog/authdialog.component';
import { PincodedialogComponent } from '../pincodedialog/pincodedialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private dialog: MatDialog, public authService: AuthService) {}

  ngOnInit(): void {}

  logoUrl: string =
    'https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0';

  openAuthDialog(): void {
    this.dialog.open(AuthdialogComponent, {
      backdropClass: 'dialog-backdrop',
    });
  }

  openPincodeCheckDialog() {
    this.dialog.open(PincodedialogComponent, {
      backdropClass: 'dialog-backdrop',
    });
  }
}
