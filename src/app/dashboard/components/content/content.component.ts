import { Component } from '@angular/core';
import { FlipkartService } from '../../service/flipkart.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  images = [
    'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/214764a3578ba262.jpg?q=20',
    'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/f7348d882c44ef33.jpg?q=20',
    'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/db093223aa54cd81.jpg?q=20',
    'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/74f0ad81e44e6e6f.jpg?q=20',
    'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/8480745bbb218a6c.jpeg?q=20'
  ];

  intervalId: any;
  currentIndex = 0;
  products: any[] = [];


  cartItems = 0;
  constructor(private productService: FlipkartService) {}
  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 3000);
  

  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  

}
