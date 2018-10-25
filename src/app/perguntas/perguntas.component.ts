import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Pergunta } from '../pergunta';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent {

  listaPerguntas: Pergunta[];

  constructor( private appService: AppService ) {
    appService.findAllPerguntas().subscribe(res => {
      this.listaPerguntas = res;
    });
  }

}
