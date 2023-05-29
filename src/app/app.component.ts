import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tab: string = 'person'
  public active(value: string): void {
    if(value === 'person') {
      this.tab = value;
    }else if('product') {
      this.tab = value;
    }
  }
}
