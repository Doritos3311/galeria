import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // <-- Importa Router
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-report-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css'],
})
export class ReportListComponent implements OnInit {
  reports: any[] = []; // Almacena los reportes

  constructor(
    private reportService: ReportService,
    private router: Router // <-- Inyecta Router
  ) {}

  ngOnInit() {
    this.reports = this.reportService.getReports(); // Obtiene los reportes
  }

  // Método para eliminar un reporte
  deleteReport(report: any) {
    this.reportService.deleteReport(report); // Elimina el reporte
    this.reports = this.reportService.getReports(); // Actualiza la lista
  }

  // Método para ver detalles
  viewDetails(report: any) {
    this.router.navigate(['/detalles', report.equipmentId]); // Navega a detalles
  }
}