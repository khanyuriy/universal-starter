import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app',
  template: `
  <p>Hello Angular Universal App</p>
  <p>{{text}}</p>
  <router-outlet></router-outlet>
  `
})
export class App {
  text: string;

  constructor(private http: Http) {
    http.get('/assets/data.txt').subscribe(response => {
      this.text = response.text();
    })
  }
}

@Component({
  selector: 'home',
  template: 'Home component'
})
export class Home {

}
