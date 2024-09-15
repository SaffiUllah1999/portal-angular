import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ToastModule } from 'primeng/toast';
import { MegaMenuModule } from 'primeng/megamenu';
import { AvatarModule } from 'primeng/avatar';
import { LottieComponent } from 'ngx-lottie';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ChartModule } from 'angular-highcharts';
import { ButtonModule } from 'primeng/button'; // buttons and charts in Dashboard
import { SliderModule } from 'primeng/slider';
import { DashboardsRoutingModule } from './dashboard-routing.module';
import { WebsiteComponent } from './Website/Website.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    LottieComponent,
    AvatarModule,
    MegaMenuModule,
    ToastModule,
    SplitButtonModule,
    ChartModule,
    ButtonModule,
  ],
  declarations: [DashboardComponent, WebsiteComponent],
  providers: []
})
export class DashboardModule { }
