import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo',
  template: `
  <div class="container">
    <h1>{{ label }}</h1>
    <h2>Faculdade Mater Dei</h2>
  </div>
  `,
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent {

  @Input() label: string;

}
