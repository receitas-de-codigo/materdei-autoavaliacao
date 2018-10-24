import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DadosGerais } from './dados.gerais';
import { environment } from '../environments/environment';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) {}

  getDadosGerais(): Observable<DadosGerais[]> {
    return this.http.get<DadosGerais[]>(
        `${environment.api}/resposta/media-geral`
      );
  }

}
