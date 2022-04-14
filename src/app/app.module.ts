import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutComponent } from './logout/logout.component';
import { OrderdreamcaptureComponent } from './orderdreamcapture/orderdreamcapture.component';
import { ListofordersComponent } from './listoforders/listoforders.component';
import { AdminComponent } from './admin/admin.component';
import { CreatedreamcaptureComponent } from './createdreamcapture/createdreamcapture.component';
import {MatIconModule} from '@angular/material/icon';
import { UserauthGuard } from './userauth.guard';
import { CreateuserComponent } from './createuser/createuser.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    NavbarComponent,
    LogoutComponent,
    OrderdreamcaptureComponent,
    ListofordersComponent,
    AdminComponent,
    CreatedreamcaptureComponent,
    CreateuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule
  ],
  providers: [UserauthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
