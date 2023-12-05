import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [ProductService],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  product: any = {};

  constructor(private productService: ProductService) { }

  saveProduct() {
    this.productService.saveProduct(this.product).subscribe(
      () => {
        alert('Product created successfully');
        this.resetForm();
      }, error => {
        console.log('Erro creating a prodcut', error);
      }
    );
  }

  resetForm() {
    this.product = {};
  }
}
