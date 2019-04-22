import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-other-lots',
  templateUrl: './other-lots.component.html',
  styleUrls: ['./other-lots.component.css']
})
export class OtherLotsComponent implements OnInit {

  lotForm: FormGroup;
  allLots = ['', 'CAIN', 'WCG', 'NSG', '50', '54', '100'];

  constructor(private fb: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.lotForm = this.fb.group({
      lotControl: ['']
    });
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
