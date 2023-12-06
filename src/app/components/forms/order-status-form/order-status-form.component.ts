import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderStatusService } from '../../../services/order-status/order-status.service';

@Component({
  selector: 'app-order-status-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [OrderStatusService],
  templateUrl: './order-status-form.component.html',
  styleUrl: './order-status-form.component.css'
})
export class OrderStatusFormComponent {

  status: any = {};

  constructor(private orderStatusService: OrderStatusService) { }

  saveStatus() {
    this.orderStatusService.saveOrderStatus(this.status).subscribe(
      () => {
        alert('Status created successfully');
        this.resetForm();
      }, error => {
        console.log('Erro creating a status', error);
      }
    );
  }

  resetForm() {
    this.status = {};
  }
}
