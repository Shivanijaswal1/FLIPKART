import { Component } from '@angular/core';
import { FlipkartService } from '../../service/flipkart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-accessories',
  templateUrl: './mobile-accessories.component.html',
  styleUrls: ['./mobile-accessories.component.scss']
})
export class MobileAccessoriesComponent {

   products: any[] = [];
  
    constructor(private mobileAccessories: FlipkartService,private _route:Router) { }
  
    ngOnInit(): void {
      this.mobileAccessories.getMobileAccessories().subscribe((data) => {
        this.products = data;
        
      });
    }
    addToCart(product:any){
      this.mobileAccessories.addToCart(product).subscribe(()=>{
       alert(`${product.name} add to cart!`)
      })
   }
   addToBuyNow(product: any) {
    if (this.isLoggedIn()) {
      this.mobileAccessories.addToBuyNow(product);
      this._route.navigate(['/dashboard/buy-now']);
    } else {
      alert('Please login to your account to buy the items');
    }
  }
  
  isLoggedIn(): boolean {
    return localStorage.getItem('user') !== null;
  }
}
