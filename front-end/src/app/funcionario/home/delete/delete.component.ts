import { CrudService } from './../../../crud/crud.service';
import { Component, Inject, OnInit } from '@angular/core';
import { IFuncionario } from 'src/app/crud/funcionario';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FuncionarioHomeComponent } from '../home.component';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  delete: boolean

  constructor(
    public delService: CrudService<IFuncionario>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<FuncionarioHomeComponent>

  ) { 
    this.delete = false
  }

  ngOnInit(): void {

  }

  delFunction() {
    this.delService.delete(this.data.id).subscribe()
    this.dialogRef.close({ event: 'close' })
  }

}
