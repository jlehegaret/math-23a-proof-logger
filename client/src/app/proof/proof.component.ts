import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-proof',
  templateUrl: './proof.component.html',
  styleUrls: ['./proof.component.css']
})
export class ProofComponent implements OnInit {

  @Input() proof;  // from app-proof tag in app.component.html

  constructor() { }

  ngOnInit() {
  }

}
