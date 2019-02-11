import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.service';
import { Offer } from '../shared/offer.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [OffersService]
})
export class BodyComponent implements OnInit {

  private offersService: OffersService;

  public offers: Array<Offer>;

  constructor(offersService: OffersService) {
    this.offersService = offersService;
  }

  ngOnInit() {
    this.offers = this.offersService.getOffers();
  }

}
