import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../../services/order/order.service';
import { FormsModule } from '@angular/forms';
import { SenderService } from '../../../services/sender/sender.service';
import { RecipientService } from '../../../services/recipient/recipient.service';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [OrderService, SenderService, RecipientService, ProductService],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css'
})
export class OrderFormComponent {

  order: any = {};
  
  senderOptions: any[] = [];
  recipientOptions: any[] = [];
  productOptions: any[] = [];

  selectedProducts: any[] = []
  quantities: number[] = [];

  constructor(
    private orderService: OrderService,
    private senderService: SenderService,
    private recipientService: RecipientService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.initSenderOptions();
    this.initRecipientOptions();
    this.initProductOptions();
  }

  initSenderOptions() {
    this.senderService.retrieveSenders().subscribe(res => {
      this.senderOptions = res;
    });
  }

  initRecipientOptions() {
    this.recipientService.retrieveRecipients().subscribe(res => {
      this.recipientOptions = res;
    });
  }

  initProductOptions() {
    this.productService.retrieveProducts().subscribe(res => {
      this.productOptions = res;
    });
  }

  saveOrder() {
    this.orderService.saveOrder(this.order).subscribe(
      () => {
        alert('Order created successfully');
        this.resetForm();
      }, error => {
        console.log('Erro creating a order', error);
      }
    );
  }

  resetForm() {
    this.order = {};
  }

  addProductInOrder() {
  }
}
