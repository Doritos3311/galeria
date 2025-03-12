import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importa RouterModule

@Component({
  selector: 'app-root',
  standalone: true, // Indica que es un componente standalone
  imports: [RouterModule], // Importa RouterModule para usar <router-outlet> y routerLink
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app'; // Puedes cambiar esto según tu aplicación
}