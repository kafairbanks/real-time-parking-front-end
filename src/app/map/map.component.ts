import {Component, Input, OnInit} from '@angular/core';
import {MapService} from '../map.service';
import {ParkingSpace} from '../parking-space';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lotNumber: number;
  lot: ParkingSpace[] = [];
  name: string;

  regular = 0;
  reserved = 0;
  DVS = 0;
  visitor = 0;
  accessible = 0;
  visitorAccessible = 0;
  timed = 0;
  service = 0;
  UB = 0;
  motorcycle = 0;
  loading = 0;
  other = 0;
  RV = 0;

  lotForm: FormGroup;
  allLots = ['', 'CAIN', 'WCG', 'NSG', '50', '54', '100'];

  constructor(public mapService: MapService, private fb: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.lotNumber = 54;
    this.mapService.getLot().subscribe(lot => {
      let json = lot.parkingSpaces;
      this.lot = json;
      this.initializeLot();
    });

    this.lotForm = this.fb.group({
      lotControl: ['54']
    });
  }

  initializeLot() {
    let l = this.lot;

    for (let space of this.lot) {
      switch (space.type) {
        case 'regular': {
          if (!space.taken) { this.regular++; }
          break;
        }
        case 'reserved': {
          if (!space.taken) { this.reserved++; }
          break;
        }
        case 'DVS': {
          if (!space.taken) { this.DVS++; }
          break;
        }
        case 'visitor': {
          if (!space.taken) { this.visitor++; }
          break;
        }
        case 'accessible': {
          if (!space.taken) { this.accessible++; }
          break;
        }
        case 'visitor accessible': {
          if (!space.taken) { this.visitorAccessible++; }
          break;
        }
        case 'timed': {
          if (!space.taken) { this.timed++; }
          break;
        }
        case 'service': {
          if (!space.taken) { this.service++; }
          break;
        }
        case 'UB': {
          if (!space.taken) { this.UB++; }
          break;
        }
        case 'motorcycle': {
          if (!space.taken) { this.motorcycle++; }
          break;
        }
        case 'loading': {
          if (!space.taken) { this.loading++; }
          break;
        }
        case 'other': {
          if (!space.taken) { this.other++; }
          break;
        }
        case 'RV': {
          if (!space.taken) { this.RV++; }
          break;
        }
        default: {
          break;
        }
      }
    }
  }

  onChange(lotValue: any): void {
    if (lotValue === '54') {
      this.router.navigateByUrl('map/54');
    } else {
      this.router.navigateByUrl('other');
    }
    return;
  }
}
