import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';

import { HttpClientModule } from '@angular/common/http';
import {MatBadgeModule} from '@angular/material/badge';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ContentComponent } from './components/content/content.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { MobileAccessoriesComponent } from './components/mobile-accessories/mobile-accessories.component';
import { ItemsComponent } from './components/items/items.component';
import { ComputerAccessoriesComponent } from './components/computer-accessories/computer-accessories.component';
import { BuyNowComponent } from './components/buy-now/buy-now.component';
import { SpeakerComponent } from './components/speaker/speaker.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    ContentComponent,
    ProductComponent,
    CartComponent,
    FooterComponent,
    MobileAccessoriesComponent,
    ItemsComponent,
    ComputerAccessoriesComponent,
    BuyNowComponent,
    SpeakerComponent,
  
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    MatMenuModule,
    MatCardModule,
    HttpClientModule,
    MatBadgeModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class DashboardModule { }
