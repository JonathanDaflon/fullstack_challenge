import { Component, Inject, OnInit, Output, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IFuncionario } from 'src/app/crud/funcionario';
import { FuncionarioHomeComponent } from '../home/home.component';

import { CrudService } from './../../crud/crud.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class FuncionarioDetailsComponent implements OnInit {

  funcionarioForm: FormGroup

  constructor(
    public detailService: CrudService<IFuncionario>,
    public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<FuncionarioHomeComponent>
  ) {

    this.funcionarioForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      participacao: [0, Validators.required]
    });
    this.detailService.uri = 'funcionario'
  }

  ngOnInit(): void {
    this.getById()
  }

  getById() {
    this.detailService.getById(this.data.id).subscribe(r => {
      this.funcionarioForm.patchValue(r.data);
    })
  }

  saveFuncionario() {

    if (this.data.id == '')
      this.detailService.create(this.funcionarioForm.value).subscribe()

    if (this.data.id != '')
      this.detailService.update(this.data.id, this.funcionarioForm.value).subscribe()

    this.dialogRef.close({ event: 'close' })
  }
}
