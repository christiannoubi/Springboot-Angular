import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { CarService} from "./shared/car/car.service";
import { CarListComponent } from './car-list/car-list.component';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule} from "@angular/material";
import { GiphyComponent } from './shared/giphy/giphy.component';
import { GiphyService} from "./shared/giphy/giphy.service";
import { CarEditComponent } from './car-edit/car-edit.component';
import { RouterModule, Routes} from "@angular/router";
import { FormsModule} from "@angular/forms";
import { OktaCallbackComponent, OktaAuthModule} from '@okta/okta-angular';
import { HTTP_INTERCEPTORS} from "@angular/common/http";
//import { AuthInterceptor } from './shared/okta/auth.interceptor';
import { HomeComponent } from './home/home.component';

/*const config = {
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '{clientId}'
};*/
const appRoutes: Routes = [
  { path: '', redirectTo: '/car-list', pathMatch: 'full'},
  {
    path: 'car-list',
    component: CarListComponent
  },
  {
    path: 'car-add',
    component: CarEditComponent
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent
  }
  /*{
    path: 'implicit/callback',
    component: OktaCallbackComponent
  }*/
];

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    GiphyComponent,
    CarEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    /*OktaAuthModule.initAuth(config),*/
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CarService,GiphyService,
   /* {provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true }*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
