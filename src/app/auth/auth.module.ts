import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Login/Login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartModule } from 'angular-highcharts';
import { ButtonModule } from 'primeng/button'; // buttons and charts in Dashboard
import { SliderModule } from 'primeng/slider';
import { SelectButtonModule } from 'primeng/selectbutton';
import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { MegaMenuModule } from 'primeng/megamenu';
import { AvatarModule } from 'primeng/avatar';
import { LottieComponent } from 'ngx-lottie';


@NgModule({
  declarations: [LoginComponent, RegistrationComponent, DashboardComponent],
  imports: [
    LottieComponent,
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    CommonModule,
    ChartModule,
    ButtonModule,
    SliderModule,
    MegaMenuModule,
    AvatarModule,
    SelectButtonModule,
    SplitButtonModule,
    ToastModule,
  ],
})
export class AuthModule {}
