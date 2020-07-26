import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fullstack-challenge';

  constructor(public router: Router) { }

  logout() {
    localStorage.clear()
    this.router.navigate(['crud/login'])
  }
}
