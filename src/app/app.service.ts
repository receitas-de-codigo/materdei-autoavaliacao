import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DadosGerais } from './dados.gerais';
import { environment } from '../environments/environment';
import { Pergunta } from './pergunta';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) {}

  getDadosGerais(): Observable<DadosGerais[]> {
    return this.http.get<DadosGerais[]>(
        `${environment.api}/resposta/media-geral`
      );
  }

  findAllPerguntas(): Observable<Pergunta[]> {
    return this.http.get<Pergunta[]>(
      `${environment.api}/pergunta`
    );
  }

}
