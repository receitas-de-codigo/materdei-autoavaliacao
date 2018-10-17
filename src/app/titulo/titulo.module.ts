import { NgModule } from '@angular/core';
import { TituloComponent } from './titulo.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    TituloComponent
  ],
  exports: [
    TituloComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TituloModule {}
