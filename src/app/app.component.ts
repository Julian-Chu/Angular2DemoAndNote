import { Component } from '@angular/core';

@Component({
  selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  keyword = '';

  changeKeyword($event: KeyboardEvent){
    this.keyword = ($event.target as HTMLInputElement).value;
  }

  clearKeyword($event: KeyboardEvent)
  {
    this.keyword = '';
  }
}
