import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { Error404Component } from './errors/404.component';
import { EventsAppComponent } from './events-app.component';
import {
  EventService,
} from './events/index';
import { NavBarComponent } from './nav/nav-bar.component';
import { appRoutes } from './routes';
import { TOASTR_TOKEN, Toastr } from './shared/toastr.service';
import { JQUERY_TOKEN } from './shared/jQuery.service';
import { AuthService } from './user/auth.service';
import { SimpleModalComponent } from './shared/simple-modal.component';
import { ModalTriggerDirective } from './shared/modal-trigger.directive';
import { XhrInterceptor } from './user/xhr-intercepter.service';
import { FooComponent } from './foo/foo.component';
import { environment } from 'src/environments/environment.prod';
import { FormsModule } from '@angular/forms';

const toastr: Toastr = window['toastr']
const jQuery = window['$']

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'APM',
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  declarations: [
    EventsAppComponent,
    NavBarComponent,
    Error404Component,
    FooComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
  ],
  providers: [
    AuthService,
    EventService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: JQUERY_TOKEN,
      useValue: jQuery
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: XhrInterceptor, multi: true
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }


