import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import {FileService} from './service/data/file.service'

import { AppComponent } from './app.component';
import { WelcomeComponent } from './service/welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
// import { ListToDosComponent } from './list-to-dos/list-to-dos.component';
// import { MenuComponent } from './menu/menu.component';

import { HeaderComponent } from './components/header/header.component';
import { BackCarousalComponent } from './components/back-carousal/back-carousal.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { BackgroundImgComponent } from './components/background-img/background-img.component';
import { TestpurposeComponent } from './components/testpurpose/testpurpose.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoutComponent } from './components/logout/logout.component';
import { httpInterceptorProvider } from './http-interceptors';





@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ErrorComponent,
    // ListToDosComponent,
    // MenuComponent,
    FooterComponent,
    HeaderComponent,
    BackCarousalComponent,
    HomeComponent,
    ServicesComponent,
    PortfolioComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    BackgroundImgComponent,
    TestpurposeComponent,
    SigninComponent,
    SignupComponent,
    LogoutComponent
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    FileService,
    httpInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
