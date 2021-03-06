import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../../crud/crud.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-home',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginHomeComponent implements OnInit {

  usuarioForm: FormGroup
  errorMessage: string

  constructor(
    public loginService: CrudService<any>,
    public fb: FormBuilder,
    public router: Router
  ) {
    this.usuarioForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.errorMessage = ''
    this.loginService.uri = 'login'
  }

  ngOnInit(): void {

  }

  loginKeyDown($event) {
    if ($event.keyCode === 13) {
      this.login();
    }
  }

  login() {
    this.loginService.create(this.usuarioForm.value).subscribe(r => {
      if (r.result) {
        let token: string[] = Object.values(r.data)
        localStorage.setItem("access_token", token[0])
        this.router.navigate(["crud/home"])
      }
      else {
        this.errorMessage = r.data
        alert(r.data);
      }
    })
  }
}
