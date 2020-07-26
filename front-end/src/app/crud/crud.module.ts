import { AuthGuard } from './auth.guard';
import { FuncionarioChartComponent } from './../funcionario/chart/chart.component';
import { LoginHomeComponent } from '../login/home/login.component';
import { CrudService } from './crud.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioHomeComponent } from '../funcionario/home/home.component';
import { FuncionarioDetailsComponent } from '../funcionario/details/details.component';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginHomeComponent,
    FuncionarioHomeComponent,
    FuncionarioDetailsComponent,
    FuncionarioChartComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
  ],
  providers: [CrudService,
    { provide: HTTP_INTERCEPTORS, useClass: CrudService, multi: true },
  AuthGuard]
})
export class CrudModule { }
