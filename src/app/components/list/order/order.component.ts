import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OrderService } from '../../../services/order/order.service';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';
import { NavigationComponent } from '../../navigation/navigation.component';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NavigationComponent],
  providers: [OrderService],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  orderList:any[] = [];

  constructor(private orderService: OrderService, private router:Router){}

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

  removeAllOrders() {
    this.orderService.deleteAllOrders().subscribe(() => {
      alert("All Orders deleted successfullys!")
      this.softReload();
    });
  }

  removeOrder(orderId: number) {
    this.orderService.deleteOrderById(orderId).subscribe(() => {
      alert("Order deleted successfullys!")
      this.softReload();
    });
  }

  softReload() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  createNewOrder(){
    this.router.navigate(['order/new'])
  }
}
