import { Component } from '@angular/core';
import { FlipkartService } from '../../service/flipkart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss']
})
export class SpeakerComponent {
products: any[] = [];
  constructor(
    private speakerservice: FlipkartService,
    private _route: Router
  ) {}
  ngOnInit() {
    this.speakerservice.getSpeaker().subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(product: any) {
    this.speakerservice.addToCart(product).subscribe(() => {
      alert(`${product.name} add to cart!`);
    });
  }

  addToBuyNow(product: any) {
    if (this.isLoggedIn()) {
      this.speakerservice.addToBuyNow(product);
      this._route.navigate(['/dashboard/buy-now']);
    } else {
      alert('Please login to your account to buy the items');
    }
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('user') !== null;
  }

}
