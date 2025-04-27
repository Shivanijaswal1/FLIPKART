import { Component } from '@angular/core';
import { FlipkartService } from '../../service/flipkart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: any[] = [];
  constructor(private cartService:FlipkartService){}
  
    ngOnInit(): void {
      this.cartService.getCartItem().subscribe((items: any[]) => {
        this.cartItems = items;
      });
    }
  
    getTotal(): number {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    }
  
    removeItem(index: number) {
      const itemId = this.cartItems[index].id;
      this.cartService.removeItemFromCart(itemId).subscribe(() => {
        this.cartItems.splice(index, 1);
      });
    }
  

}
