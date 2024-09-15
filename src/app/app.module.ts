import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideLottieOptions } from 'ngx-lottie';
// import { ComponentDashboardComponent } from './dashboard/dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [AppComponent, AuthComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,

  ],
  providers: [

    provideLottieOptions({
      player: () => import('lottie-web'),
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
