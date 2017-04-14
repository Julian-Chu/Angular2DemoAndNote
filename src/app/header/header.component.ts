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

  changeTitle(evt:MouseEvent){
      this.title = 'The Will Will Web';
      console.log(evt);
      console.log(evt.clientX);
  }
}
