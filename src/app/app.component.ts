import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string  = 'App Contador';
  numero: number = 0;

  acumular( valor: number ) {
    this.numero += valor;
  }
}
