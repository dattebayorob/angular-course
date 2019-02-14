import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FunComponent } from './fun/fun.component';
import { OfferComponent } from './offer/offer.component';
import { HowComponent } from './offer/how/how.component';
import { WhereComponent } from './offer/where/where.component';

export const ROUTES: Routes = [
    { path: '', component: BodyComponent },
    { path: 'restaurant', component: RestaurantComponent },
    { path: 'fun', component: FunComponent },
    { path: 'offer/:id', component: OfferComponent, children: [
        { path: '', component: HowComponent},
        { path: 'how', component: HowComponent},
        { path: 'where', component: WhereComponent}
    ]}
]