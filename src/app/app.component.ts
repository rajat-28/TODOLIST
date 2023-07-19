import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'title';
  constructor(){
    setTimeout(() => {
      this.title='ello';
    }, 2000);
  }
}
