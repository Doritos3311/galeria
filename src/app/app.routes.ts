import { Routes } from '@angular/router';
import { CameraComponent } from './camera/camera.component';
import { ReportListComponent } from './components/report-list/report-list.component';
import {ReportDetailsComponent} from './components/report-details/report-details.component';

// Exporta la constante `routes`
export const routes: Routes = [
  { path: '', component: CameraComponent }, // Ruta principal
  { path: 'reports', component: ReportListComponent }, // Ruta para ver reportes
  { path: 'detalles/:id', component: ReportDetailsComponent }, // Ruta con parámetro :id
];