import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlipkartService } from '../../service/flipkart.service';
import { SpeakerComponent } from '../speaker/speaker.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  cartCount: number = 0;
  products:any[]=[];
  searchText: string = '';
  filteredProducts: any[] = [];
  constructor(
    private _route: Router,
    private flipkartService: FlipkartService
  ) {}
  ngOnInit() {
    this.flipkartService.getCartCount().subscribe((count) => {
      this.cartCount = count;
    });
    this.flipkartService.getProductall().subscribe(data => {
      this.products = data;
      this.filteredProducts = []; 
    });
  }
  open() {
    this._route.navigate(['/dashboard/login']);
  }
  product() {
    this._route.navigate(['/dashboard/product']);
  }
  cart() {
    this._route.navigate(['/dashboard/cart']);
  }
  mobileAccessories() {
    this._route.navigate(['/dashboard/mobileAccessories']);
  }
  computerAccessories(){
    this._route.navigate(['/dashboard/computerAccessories'])
  }

  filterProducts(): void {
    if (this.searchText.trim() && this.searchText.trim() !== "") {
      this.filteredProducts = this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchText.trim().toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;
    }
  }
  logout(): void {
    confirm("Are you sure logout your account")
    this.flipkartService.logout();
  }
  Speaker(){
    this._route.navigate(['/dashboard/speaker'])
  }

}