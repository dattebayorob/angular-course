import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FunComponent } from './fun/fun.component';
import { OffersGridComponent } from './offers-grid/offers-grid.component';
import { OfferComponent } from './offer/offer.component';
import { HowComponent } from './offer/how/how.component';
import { WhereComponent } from './offer/where/where.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BodyComponent,
    HeaderComponent,
    RestaurantComponent,
    FunComponent,
    OffersGridComponent,
    OfferComponent,
    HowComponent,
    WhereComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
