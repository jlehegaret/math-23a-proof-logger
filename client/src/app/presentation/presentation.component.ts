import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  // from app-presentation tag userdashboard.component.html
  @Input() presentation; 
  @Input() mode; // 

  constructor() { }

  ngOnInit() {
  }

}
