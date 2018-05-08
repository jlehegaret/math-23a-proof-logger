// This is an extremely simple component which
// merely ensures that the class name appears at the top
// of every page served by this single-page app.


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
    constructor() {}

    coursename = "Math 23A";

    ngOnInit() {}
}
