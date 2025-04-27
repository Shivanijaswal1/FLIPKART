import { Component } from '@angular/core';
import { FlipkartService } from '../../service/flipkart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products: any[] = [];

  constructor(private productService: FlipkartService,private _route:Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      
    });
  }
  addToCart(product:any){
    this.productService.addToCart(product).subscribe(()=>{
     alert(`${product.name} add to cart!`)
    })
 }
 addToBuyNow(product: any) {
  if (this.isLoggedIn()) {
    this.productService.addToBuyNow(product);
    this._route.navigate(['/dashboard/buy-now']);
  } else {
    alert('Please login to your account to buy the items');
  }
}

isLoggedIn(): boolean {
  return localStorage.getItem('user') !== null;
}
}

