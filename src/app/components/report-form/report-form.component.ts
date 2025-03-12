import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-report-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css'],
})
export class ReportFormComponent {
  @Input() imgUrl: string = ''; // Recibe la URL de la imagen
  @Output() reportSaved = new EventEmitter<any>(); // Emite el reporte guardado
  @Output() cancel = new EventEmitter<void>(); // Emite el evento de cancelar

  report: any = {
    equipmentId: '', // ID del equipo
    user: '', // Usuario
    description: '', // Descripción del problema
    imgUrl: '', // URL de la imagen
    date: new Date().toLocaleString(), // Fecha y hora automáticas
  };

  constructor(
    private reportService: ReportService,
    private router: Router
  ) {}

  ngOnInit() {
    this.report.imgUrl = this.imgUrl; // Asigna la URL de la imagen al reporte
  }

  // Método que se ejecuta al enviar el formulario
  onSubmit() {
    this.report.equipmentId = `EQ-${new Date().getFullYear()}-${this.report.equipmentId}`; // Formatea el ID del equipo
    this.reportService.addReport(this.report); // Guarda el reporte en el servicio
    this.reportSaved.emit(this.report); // Emite el reporte
    this.router.navigate(['/reportes']); // Redirige a la lista de reportes
  }

  // Método que se ejecuta al cancelar
  onCancel() {
    this.cancel.emit(); // Emite el evento de cancelar
  }
}