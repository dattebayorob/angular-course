import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [OffersService]
})
export class BodyComponent implements OnInit {

  private offersService: OffersService;

  constructor(offersService: OffersService) {
    this.offersService = offersService;
  }

  ngOnInit() {
    console.log(this.offersService.getOffers());
  }

}
