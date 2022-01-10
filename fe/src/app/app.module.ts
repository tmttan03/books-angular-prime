import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UIRouterModule } from '@uirouter/angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SimpleModalModule } from 'ngx-simple-modal';

import { AppComponent } from './app.component';
import { APP_STATES } from './commons/utils/app.states';
import { PartialsModule } from './components/partials/partials.module';
import { DatePipe, DecimalPipe } from '@angular/common';
import { PublicModule } from './components/public/public.module';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UIRouterModule.forRoot(APP_STATES),
    SimpleModalModule,
    NgbModule,

    PublicModule,
    PartialsModule,
  ],
  exports : [],
  providers: [
    DatePipe,
    DecimalPipe,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
