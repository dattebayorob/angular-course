import { Component, OnInit, Input } from '@angular/core';
import { Offer } from '../shared/offer.model';

@Component({
  selector: 'app-offers-grid',
  templateUrl: './offers-grid.component.html',
  styleUrls: ['./offers-grid.component.css']
})
export class OffersGridComponent implements OnInit {

  @Input() offers: Array<Offer>;

  constructor() { }

  ngOnInit() {
  }

}
