import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { Flipkart, Product } from '../flipkart';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FlipkartService {
  private apiUrl = 'http://localhost:3000/products';
  private cartUrl = 'http://localhost:3000/cart';
  private beautyProduct = 'http://localhost:3000/beautyProduct?type=beauty';
  private buyNow = 'http://localhost:3000/buyNow';
  private cart: Product[] = [];
  private cartCount = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient, private _route: Router) {}

  getProductall(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getProducts(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?type=mobile`);
  }
  getElectronics(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?type=electronics`);
  }
  getSpeaker(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?type=Bluetooth`);
  }
  
  getMobileAccessories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?type=mobile-accessories`);
  }

  getComputerAccessories(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?type=computer-accessories`);
  }
  getbeautyProduct(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?type=beauty`);
  }
  addToCart(product: any): Observable<any> {
    return this.http
      .post(this.cartUrl, product)
      .pipe(switchMap(() => this.getCartItem()));
  }
  //---------------------
  addToBuyNow(product: any) {
    debugger;
    this.http.post(this.buyNow, product).subscribe();
  }

  getBuyNowItems(): Observable<any[]> {
    return this.http.get<any[]>(this.buyNow);
  }


  getCartItem(): Observable<any> {
    return this.http.get<any[]>(this.cartUrl).pipe(
      tap((cartItems) => {
        this.cart = cartItems;
        this.cartCount.next(cartItems.length);
      })
    );
  }

  getCartCount(): Observable<number> {
    return this.cartCount.asObservable();
  }

  removeItemFromCart(itemId: number): Observable<any> {
    return this.http.delete<any>(`${this.cartUrl}/${itemId}`);
  }

  removeItemFrombuy(itemId: number): Observable<any> {
    return this.http.delete<any>(`${this.buyNow}/${itemId}`);
  }

  // getAllProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.apiUrl);
  // }
  login(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  logout(): void {
    localStorage.removeItem('user');
    this._route.navigateByUrl('/dashboard');
  }
}
