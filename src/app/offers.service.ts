import { Offer } from './shared/offer.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { httpFactory } from '@angular/http/src/http_module';
import { URL_API } from './app.api';

@Injectable()
export class OffersService{
    private http: Http;


    constructor(http: Http){
        this.http = http;
    }

    public getOffers(): Promise<Array<Offer>> {
        return this.http.get(URL_API)
            .toPromise().then((response: any)=> response.json());
    }
    public getOffersByCategory(category: string): Promise<Array<Offer>> {
        return this.http.get(URL_API+'?category='+category)
            .toPromise().then((response:any) => response.json());
    }
    public getOfferById(id: number): Promise<Offer>{
        return this.http.get(URL_API+'/'+id)
            .toPromise().then((response: any)=> response.json());
    }
}