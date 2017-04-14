import { Component } from '@angular/core';

@Component({
  selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  keyword = '';

  changeKeyword(keyword:string){
    this.keyword = keyword;
  }

  clearKeyword($event: KeyboardEvent)
  {
    this.keyword = '';
  }
}
