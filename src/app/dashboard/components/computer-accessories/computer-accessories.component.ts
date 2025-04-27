import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlipkartService } from '../../service/flipkart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-computer-accessories',
  templateUrl: './computer-accessories.component.html',
  styleUrls: ['./computer-accessories.component.scss'],
})
export class ComputerAccessoriesComponent {
  products: any[] = [];
  constructor(
    private computeraccessories: FlipkartService,
    private _route: Router
  ) {}
  ngOnInit() {
    this.computeraccessories.getComputerAccessories().subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(product: any) {
    this.computeraccessories.addToCart(product).subscribe(() => {
      alert(`${product.name} add to cart!`);
    });
  }

  addToBuyNow(product: any) {
    if (this.isLoggedIn()) {
      this.computeraccessories.addToBuyNow(product);
      this._route.navigate(['/dashboard/buy-now']);
    } else {
      alert('Please login to your account to buy the items');
    }
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('user') !== null;
  }

}
