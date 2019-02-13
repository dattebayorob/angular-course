import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.service';
import { Offer } from '../shared/offer.model';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.css'],
  providers: [OffersService]
})
export class FunComponent implements OnInit {

  private offersService: OffersService;
  public offers: Array<Offer>;

  constructor(offersService: OffersService) { 
    this.offersService = offersService;
  }

  ngOnInit() {
    this.offersService.getOffersByCategory('fun')
      .then((offers: Array<Offer>)=>{
        this.offers = offers;
      }).catch(
        (error: any) => {console.log(error)}
      );
  }

}
