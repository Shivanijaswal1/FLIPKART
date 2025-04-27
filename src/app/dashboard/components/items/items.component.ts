import { Component } from '@angular/core';
import { FlipkartService } from '../../service/flipkart.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  products: any[] = [];
  beautyproduct: any[] = [];
  constructor(private productservice: FlipkartService) {}
  ngOnInit(){
    this.productservice.getElectronics().subscribe((data) => {
      this.products = data;
    });

    this.productservice.getbeautyProduct().subscribe((data) => {
      this.beautyproduct = data;
    });
  }
  
  addToCart(product:any){
    this.productservice.addToCart(product).subscribe(()=>{
     alert(`${product.name} add to cart!`)
    })
 }
}
