import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = "保哥的網頁";

  constructor() { }

  ngOnInit() {
  }

  is_h3_highlight = false;
  counter:number = 0;

  changeTitle(evt: MouseEvent) {
    this.title = 'The Will Will Web';
    console.log(evt);
    console.log(evt.clientX);
  }

  getStyle() {
    return { 'background-color': 'yellow' };
  }

  updateh3Class() {
    if (this.is_h3_highlight == false)
      this.is_h3_highlight = true;
    else
    { this.is_h3_highlight = false; }
    this.counter++;
  }
}
