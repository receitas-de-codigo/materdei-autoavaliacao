import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloModule } from '../titulo/titulo.module';
import { RouterModule } from '@angular/router';
import { PerguntasComponent } from './perguntas.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    PerguntasComponent
  ],
  exports: [
    PerguntasComponent
  ],
  imports: [
    CommonModule,
    TituloModule,
    RouterModule,
    TableModule
  ]
})
export class PerguntasModule {}
