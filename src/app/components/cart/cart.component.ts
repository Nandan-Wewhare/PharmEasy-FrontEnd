import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { SetAddressComponent } from '../set-address/set-address.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    public cartService: CartService,
    public authService: AuthService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openSetAddressDialog() {
    this.dialog.open(SetAddressComponent, {
      backdropClass: 'dialog-backdrop',
    });
  }
}
