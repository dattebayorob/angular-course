import { Component, OnInit, Injectable } from '@angular/core';
import { Offer } from '../shared/offer.model';
import { OffersService } from '../offers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
  providers: [OffersService]
})
export class OfferComponent implements OnInit {
  

  public id:number;
  public offer: Offer;

  constructor(private offersService: OffersService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.offersService.getOfferById(this.id).then((offer:Offer)=> {
      this.offer = offer;
    });
  }

}
