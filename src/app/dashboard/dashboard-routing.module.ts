import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './components/content/content.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { MobileAccessoriesComponent } from './components/mobile-accessories/mobile-accessories.component';
import { ComputerAccessoriesComponent } from './components/computer-accessories/computer-accessories.component';
import { BuyNowComponent } from './components/buy-now/buy-now.component';
import { SpeakerComponent } from './components/speaker/speaker.component';




const routes: Routes = [
  {path:"",component:HomeComponent,
    children:[
      {path:"",component:ContentComponent},
      {path:"navbar",component:NavbarComponent},
      {path:"login",component:LoginComponent},
      {path:"sign-up",component:SignUpComponent},
      {path:"product",component:ProductComponent},
      {path:"cart",component:CartComponent},
      {path:"mobileAccessories",component:MobileAccessoriesComponent},
      {path:"computerAccessories",component:ComputerAccessoriesComponent},
      {path:"buy-now",component:BuyNowComponent},
      {path:"speaker",component:SpeakerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
