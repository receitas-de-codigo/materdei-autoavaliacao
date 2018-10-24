import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data: any;

  constructor(private appService: AppService) {

    appService.getDadosGerais().subscribe(res => {
      this.data = {
        labels: res.map(item => item.caracteristica),
        datasets: [
            {
                label: 'Avaliação Geral',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: res.map( item => item.valor )
            }
          ]
      };
    });
  }
}
