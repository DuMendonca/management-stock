import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product/product.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavigationComponent } from '../../navigation/navigation.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NavigationComponent],
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

  editProduct(productId: number) {
    this.router.navigate([`product/${productId}/edit`]);
  }

  removeProduct(productId: number) {
    this.productService.deleteProductById(productId).subscribe(() => {
      alert("Product deleted successfullys!")
      this.softReload();
    });
  }

  removeAllProducts(){
    this.productService.deleteAllProducts().subscribe(() => {
      alert("All Products deleted successfullys!")
      this.softReload();
    });
  }

  softReload() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  createNewProduct(){
    this.router.navigate(['/product/new']);
  }
}
