import { IFuncionario } from './../../crud/funcionario';
import { CrudService } from './../../crud/crud.service';
import * as CanvasJS from '../js/canvasjs.min';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class FuncionarioChartComponent implements OnInit {

  funcionarios: IFuncionario[]
  dataArray: { y: number, label: string }[]


  constructor(public chartService: CrudService<IFuncionario>) {
    this.funcionarios = []
    this.chartService.uri = 'funcionario'
    this.dataArray = [{ y: 0, label: '' }]
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {

    this.chartService.getAll().subscribe(r => {
      this.funcionarios = r.data
      this.dataArray = this.funcionarios.map((obj) => {
        return { y: obj.participacao, label: obj.nome }
      })

      const chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        data: [{
          type: "pie",
          dataPoints: this.dataArray
        }]
      })
      chart.render()
    })
  }
}
