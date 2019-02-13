import { Component, OnInit } from '@angular/core';
import { Offer } from '../shared/offer.model';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  providers: [OffersService]
})
export class RestaurantComponent implements OnInit {
  
  private offersService: OffersService;
  public offers: Array<Offer>;

  constructor(offersService: OffersService) {
    this.offersService = offersService;
  }
  ngOnInit() {
    this.offersService.getOffersByCategory('restaurant')
      .then((offers: Array<Offer>)=>{
        this.offers = offers;
      }).catch(
        (error: any) => {console.log(error)}
      );
  }

}
