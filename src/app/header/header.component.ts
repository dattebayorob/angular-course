import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.service';
import { Offer } from '../shared/offer.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ OffersService ]
})
export class HeaderComponent implements OnInit {

  public offers: Observable<Array<Offer>>;

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    
  }

  public search(search: string):void{
    this.offers = this.offersService.getOffersBySearch(search);
    this.offers.subscribe(
      (offers: Array<Offer>) => console.log(offers),
      (error: any) => console.log(error),
      () => console.log('Complete')
    );
  }

}
