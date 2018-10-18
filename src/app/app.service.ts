import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DadosGerais } from './dados.gerais';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) {}

  getDadosGerais(): Observable<DadosGerais> {
    return this.http.get<DadosGerais>(
        'http://localhost:8080/total'
      );
  }

}
