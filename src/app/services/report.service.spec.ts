import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private reports: any[] = [];

  constructor() {}

  addReport(report: any) {
    this.reports.push(report);
  }

  getReports() {
    return this.reports;
  }
}