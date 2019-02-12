import { Offer } from './shared/offer.model'
import { Http } from '@angular/http'
import { Injectable } from '@angular/core';

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
}