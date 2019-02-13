import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FunComponent } from './fun/fun.component';

export const ROUTES: Routes = [
    { path: '', component: BodyComponent },
    { path: 'restaurant', component: RestaurantComponent },
    { path: 'fun', component: FunComponent }
]