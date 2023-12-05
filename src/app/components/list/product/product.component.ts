import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product/product.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ProductService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  productList:any[] = [];
  
  constructor(private productService: ProductService, private router: Router){}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(){
    this.productService.retrieveProducts().subscribe(res => {
      console.log(res);
  
      this.productList = res;
    });
  }

  editProduct(ProductId: number) {
    console.log("editou");
  }

  removeProduct(ProductIdId: number) {
    console.log("removeu");
  }

  createNewProduct(){
    this.router.navigate(['/product/new']);
  }
}
