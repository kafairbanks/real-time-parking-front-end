import { Component, OnInit } from '@angular/core';
import {MapService} from '../map.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

  constructor(private mapService: MapService) { }

  ngOnInit() {
  }

}
