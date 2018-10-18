import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TituloModule } from '../titulo/titulo.module';
import {ChartModule} from 'primeng/chart';


@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TituloModule,
    ChartModule
  ]
})
export class HomeModule {}
