import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OrderService } from '../../services/order/order.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [OrderService],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  orderList:any[] = [];

  constructor(private orderService: OrderService){}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(){
    this.orderService.retrieveOrders().subscribe(res => {
      console.log(res);
  
      this.orderList = res;
    });
  }

  editOrder(orderId: number) {
    console.log("editou");
  }

  removeOrder(orderId: number) {
    console.log("removeu");
  }

  createNewOrder(){
    console.log("Cadastrou");
  }
}
