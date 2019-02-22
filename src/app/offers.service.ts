import { Offer } from './shared/offer.model';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { httpFactory } from '@angular/http/src/http_module';
import { URL_API } from './app.api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class OffersService{
    private http: Http;


    constructor(http: Http){
        this.http = http;
    }

    public getOffers(): Promise<Array<Offer>> {
        return this.http.get(`${URL_API}/offers`)
            .toPromise().then((response: Response)=> response.json());
    }
    public getOffersByCategory(category: string): Promise<Array<Offer>> {
        return this.http.get(`${URL_API}/offers/?category=${category}`)
            .toPromise().then((response:Response) => response.json());
    }
    public getOfferById(id: number): Promise<Offer>{
        return this.http.get(`${URL_API}/offers/${id}`)
            .toPromise().then((response: Response)=> response.json());
    }

    public getOffersBySearch(description: string): Observable<Array<Offer>>{
        return this.http.get(`${URL_API}/offers?description_like=${description}`).pipe(
            map((response: Response) => response.json()))
    }
}