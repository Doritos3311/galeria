import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-report-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css'],
})
export class ReportDetailsComponent implements OnInit {
  report: any = {}; // Almacena los detalles del reporte

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reportService: ReportService,
  ) {}

  ngOnInit() {
    const equipmentId = this.route.snapshot.paramMap.get('id'); // Obtiene el ID del reporte
    this.report = this.reportService.getReportById(equipmentId); // Obtiene el reporte
  }

  // Método para volver a la lista de reportes
  goBack() {
    this.router.navigate(['/reports']);
  }
}