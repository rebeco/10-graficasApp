import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  public doughnutChartLabels: Label[] = [
    /* 'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales', */
  ];
  public doughnutChartData: MultiDataSet = [
    /* [350, 450, 100] */
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colores: Color[] = [
    {
      backgroundColor: ['#F5D854', '#FF8A4A', '#A0D84A', '#33D854', '#D83345'],
    },
  ];
  constructor(private graficasService: GraficasService) {}

  ngOnInit(): void {
    /* this.graficasService.getUsuariosRRSS().subscribe((data) => {
      const labels = Object.keys(data);
      this.doughnutChartLabels = labels;

      const values = Object.values(data);
      this.doughnutChartData = [values];
      console.log(data);
    }); */

    this.graficasService
      .getUsuariosRRSSDonaData()
      .subscribe(({ labels, values }) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData = [values];
      });
  }
}
