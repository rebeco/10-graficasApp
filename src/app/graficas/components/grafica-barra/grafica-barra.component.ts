import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [],
})
export class GraficaBarraComponent implements OnInit {
  @Input() horizontal: boolean = false;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  @Input() public barChartLabels: Label[] = [
    /* '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012', */
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input() public barChartData: ChartDataSets[] = [
    /* {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Series A',
      backgroundColor: '#F5D854',
      hoverBackgroundColor: '#87762E',
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90],
      label: 'Series B',
      backgroundColor: '#FF8A4A',
      hoverBackgroundColor: '#8A4A28',
    }, */
  ];

  constructor() {}

  ngOnInit(): void {
    this.barChartType = this.horizontal ? 'horizontalBar' : 'bar';
  }
}
