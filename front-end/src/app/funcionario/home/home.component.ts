import { FuncionarioDetailsComponent } from './../details/details.component';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Component, Input, OnInit, ViewChild, } from '@angular/core';

import { IFuncionario } from './../../crud/funcionario';
import { CrudService } from './../../crud/crud.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from './delete/delete.component';

@Component({
  selector: 'app-funcionario-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class FuncionarioHomeComponent implements OnInit {

  selectedItem: IFuncionario
  funcionarios: IFuncionario[]

  dataSource: MatTableDataSource<IFuncionario>;
  displayedColumns: string[]

  @Input()
  disabled = true

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator
  @ViewChild(MatSort, { static: false }) sort: MatSort
  @ViewChild(MatTable) table: MatTable<IFuncionario>;

  constructor(
    public funcionarioService: CrudService<IFuncionario>,
    public dialog: MatDialog,
  ) {
    this.selectedItem = { _id: '', nome: '', sobrenome: '', participacao: 0 };
    this.funcionarios = [];
    this.dataSource = new MatTableDataSource<IFuncionario>();
    this.funcionarioService.uri = 'funcionario';
    this.displayedColumns = ['nome', 'sobrenome', 'participacao']
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.funcionarioService.getAll().subscribe((r) => {
      this.funcionarios = r.data;
      this.dataSource.data = this.funcionarios;
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    })
  }

  createAndEditDialog(_id: string): void {
    const dialogRef = this.dialog.open(FuncionarioDetailsComponent, { data: { id: _id } })

    dialogRef.afterClosed().subscribe(r => {
      this.getAll()
      this.table.renderRows()
    })
  }

  deleteDialog(_id: string) {
    const dialogRef = this.dialog.open(DeleteComponent, { data: { id: _id } })

    dialogRef.afterClosed().subscribe(r => {
      this.getAll()
      this.table.renderRows()
    })
  }

  tableClick(row) {
    this.selectedItem = row;
    return this.disabled = false;
  }
}
