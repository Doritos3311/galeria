import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para el formulario
import { CameraService } from './services/camera.service';
import { ReportService } from '../services/report.service'; // Importa el servicio de reportes
import { ReportFormComponent } from '../components/report-form/report-form.component'; // Importa el formulario

@Component({
  selector: 'app-camera',
  standalone: true,
  imports: [CommonModule, FormsModule, ReportFormComponent], // Agrega FormsModule y ReportFormComponent
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css'],
})
export class CameraComponent {
  cameraService: CameraService = inject(CameraService);
  reportService: ReportService = inject(ReportService); // Inyecta el servicio de reportes
  imgUrl: string = '';
  errorMessage: string = '';
  loading: boolean = false;
  showForm: boolean = false; // Controla la visibilidad del formulario

  // Método para tomar una foto
  async takePicture() {
    this.errorMessage = ''; // Limpiar mensajes de error anteriores

    try {
      this.loading = true;
      this.imgUrl = await this.cameraService.takePicture();
      if (!this.imgUrl) {
        throw new Error('No se obtuvo una imagen válida');
      }
      this.showForm = true; // Muestra el formulario después de tomar la foto
      await new Promise((resolve) => setTimeout(resolve, 100));
      this.loading = false;
    } catch (error) {
      console.error('Error al capturar imagen:', error);
      this.errorMessage = String(error);
      this.imgUrl = '';
      this.loading = false;
    }
  }

  // Método para seleccionar una imagen desde un archivo
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imgUrl = reader.result as string;
        this.showForm = true; // Muestra el formulario después de seleccionar la imagen
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  // Método para guardar el reporte
  onReportSaved(report: any) {
    this.reportService.addReport(report); // Guarda el reporte en el servicio
    this.showForm = false; // Oculta el formulario
    this.imgUrl = ''; // Limpia la imagen
  }

  // Método para manejar la cancelación del formulario
  onCancelForm() {
    this.showForm = false; // Oculta el formulario
    this.imgUrl = ''; // Limpia la imagen
  }
}