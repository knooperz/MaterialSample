import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppLayoutComponent } from './_layouts/app-layout/app-layout.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent, children:
      [
        { path: '', component: DashboardComponent },
        { path: 'contact', component: ContactComponent },
        { path: 'details/:id', component: DetailsComponent }

      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
