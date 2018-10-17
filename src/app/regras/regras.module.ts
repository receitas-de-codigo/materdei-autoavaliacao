import { NgModule } from '@angular/core';
import { RegrasComponent } from './regras.component';
import { CommonModule } from '@angular/common';
import { TituloModule } from '../titulo/titulo.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    RegrasComponent
  ],
  exports: [
    RegrasComponent
  ],
  imports: [
    CommonModule,
    TituloModule,
    RouterModule
  ]
})
export class RegrasModule {}
