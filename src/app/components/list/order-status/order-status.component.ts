import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderStatusService } from '../../../services/order-status/order-status.service';
import { Router } from '@angular/router';
import { NavigationComponent } from '../../navigation/navigation.component';

@Component({
  selector: 'app-order-status',
  standalone: true,
  imports: [CommonModule, NavigationComponent],
  providers: [OrderStatusService],
  templateUrl: './order-status.component.html',
  styleUrl: './order-status.component.css'
})
export class OrderStatusComponent {
  statusList: any[] = [];

  constructor(private orderStatusService: OrderStatusService, private router: Router) { }

  ngOnInit(): void {
    this.loadStatus();
  }

  loadStatus() {
    this.orderStatusService.retrieveAllOrderStatus().subscribe(res => {
      console.log(res);

      this.statusList = res;
    });
  }

  editStatus(statusId: number) {
    this.router.navigate([`orderStatus/${statusId}/edit`]);
  }

  removeAllStatus() {
    this.orderStatusService.deleteAllOrderStatus().subscribe(() => {
      alert("All Status deleted successfullys!")
      this.softReload();
    });
  }

  removeStatus(statusId: number) {
    this.orderStatusService.deleteOrderStatusById(statusId).subscribe(() => {
      alert("Status deleted successfullys!")
      this.softReload();
    })
  }

  softReload() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  createNewStatus() {
    this.router.navigate(['orderStatus/new']);
  }
}
