import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Importa `routes` desde `app.routes.ts`

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)], // Usa `routes` aquí
};