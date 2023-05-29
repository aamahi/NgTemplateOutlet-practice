import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mode = 'card';
  items = [
    {
      header: 'Creating Reuseable Components with NgTemplateOutlet in Angular',
      content: 'The single responsibility principle...'
    } // ... more items
  ];
}
