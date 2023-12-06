import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../../services/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [ProductService],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  product: any;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {}

  ngOnInit() {
    const productId: any = this.route.snapshot.paramMap.get('id');
    this.productService.retrieveProductById(productId).subscribe(data => {
      this.product = data;
    });
  }

  saveProduct() {
    this.productService.updateProduct(this.product).subscribe(response => {
      alert('Product updated successfully');
      console.log('Product updated successfully', response);
      this.router.navigate(['product']);
    });
  }
}
