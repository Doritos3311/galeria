import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private reports: any[] = []; // Almacena los reportes

  constructor() { }

  // Método para agregar un reporte
  addReport(report: any) {
    this.reports.push(report);
  }

  // Método para obtener todos los reportes
  getReports() {
    return this.reports;
  }

  getReportById(equipmentId: string | null) {
    if (!equipmentId) {
      return null; // O algún valor por defecto
    }
    return this.reports.find((report) => report.equipmentId === equipmentId);
  }

  // Método para eliminar un reporte
  deleteReport(report: any) {
    this.reports = this.reports.filter((r) => r !== report); // Filtra y elimina el reporte
  }
}