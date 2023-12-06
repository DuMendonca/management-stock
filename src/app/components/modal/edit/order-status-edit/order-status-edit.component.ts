import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderStatusService } from '../../../../services/order-status/order-status.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-status-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [OrderStatusService],
  templateUrl: './order-status-edit.component.html',
  styleUrl: './order-status-edit.component.css'
})
export class OrderStatusEditComponent {

  status: any;

  constructor(private route: ActivatedRoute, private orderStatusService: OrderStatusService, private router: Router) {}

  ngOnInit() {
    const statusId: any = this.route.snapshot.paramMap.get('id');
    this.orderStatusService.retrieveOrderStatusById(statusId).subscribe(data => {
      this.status = data;
    });
  }

  saveStatus() {
    this.orderStatusService.updateOrderStatus(this.status).subscribe(response => {
      alert('Status updated successfully');
      console.log('Status updated successfully', response);
      this.router.navigate(['orderStatus']);
    });
  }
}
