import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficalComponent } from './grafical/grafical.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    NotfoundComponent,
    DashboardComponent,
    ProgressComponent,
    GraficalComponent,
    PagesComponent,
  ],
  imports: [CommonModule, AppRoutingModule, SharedModule],
})
export class PagesModule {}
