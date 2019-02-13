import { Offer } from './shared/offer.model'
import { Http } from '@angular/http'
import { Injectable } from '@angular/core';
import { httpFactory } from '@angular/http/src/http_module';

@Injectable()
export class OffersService{
    private http: Http;

    constructor(http: Http){
        this.http = http;
    }

    public getOffers(): Promise<Array<Offer>> {
        return this.http.get('http://localhost:3000/offers')
            .toPromise().then((response: any)=> response.json());
    }
    public getOffersByCategory(category: string): Promise<Array<Offer>> {
        return this.http.get('http://localhost:3000/offers?category='+category)
            .toPromise().then((response:any) => response.json());
    }
}