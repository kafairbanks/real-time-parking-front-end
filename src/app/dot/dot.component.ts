import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrls: ['./dot.component.css']
})
export class DotComponent implements OnInit {

  @Input() space;

  constructor() { }

  ngOnInit() {
  }

}
