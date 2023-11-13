import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule }from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenMasterComponent } from './Opensite/open-master/open-master.component';
import { HomeComponent } from './Opensite/home/home.component';
import { LoginComponent } from './Opensite/login/login.component';
import { RegisterComponent } from './Opensite/register/register.component';
import { AllEventsComponent } from './Opensite/all-events/all-events.component';
import { CreateEventComponent } from './Opensite/create-event/create-event.component';
import { NgToastModule } from 'ng-angular-popup';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OpenMasterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AllEventsComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgToastModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
