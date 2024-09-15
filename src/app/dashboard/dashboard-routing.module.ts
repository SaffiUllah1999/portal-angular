import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { WebsiteComponent } from './Website/Website.component';
import { AboutUsComponent } from './aboutUs/aboutUs.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [{
      path:'website',
      component: WebsiteComponent
    },
    {
      path:'aboutUs',
      component: AboutUsComponent
    } ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
