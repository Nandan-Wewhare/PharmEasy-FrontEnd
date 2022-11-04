import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Convert, Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  constructor(
    private orderService: OrderService,
    private snackBar: MatSnackBar
  ) {}

  ordersLoading = false;
  orders: Order[] = [];

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.ordersLoading = true;
    this.orderService.getAllOrders().subscribe({
      next: (response: any) => {
        this.ordersLoading = false;
        if (response['status']) {
          response['orders'].forEach((order: any) => {
            this.orders.push(Convert.toOrder(order));
          });
        } else {
          this.snackBar.open(response['message'], '', { duration: 2000 });
        }
      },
      error: (error: any) => {
        this.ordersLoading = false;
        this.snackBar.open(error['error']['message'], '', { duration: 2000 });
      },
    });
  }
}
