import { Component } from '@angular/core';
import { FlipkartService } from '../../service/flipkart.service';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.scss']
})
export class BuyNowComponent {
  cartItems: any[] = [];
  pinCode: string = '';
  constructor(private buyNowService:FlipkartService){}

  ngOnInit(): void {
    this.buyNowService.getBuyNowItems().subscribe((items: any[]) => {
      this.cartItems = items;
      console.log(this.cartItems)
    });
  }

  // removeItem(index: number): void {
  //   this.cartItems.splice(index, 1);
  // }
  removeItem(index: number) {
    const itemId = this.cartItems[index].id;
    this.buyNowService. removeItemFrombuy(itemId).subscribe(() => {
      this.cartItems.splice(index, 1);
    });
  }
 
  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }



  proceedToCheckout(): void {
    alert('Proceeding to checkout...');
  }

}