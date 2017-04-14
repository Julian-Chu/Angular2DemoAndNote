import { Http } from '@angular/http';
import { DataService } from './data.service';
import { Component } from '@angular/core';

@Component({
  selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  keyword = '';

  constructor(public datasvc: DataService, private http:Http) {
    this.title = datasvc.title;
    this.http.get('/api/articles.json')
                          .subscribe(res => this.data = res.json());
  }
  changeKeyword(keyword: string) {
    this.keyword = keyword;
  }

  clearKeyword($event: KeyboardEvent) {
    this.keyword = '';
  }

  data: any;
}
