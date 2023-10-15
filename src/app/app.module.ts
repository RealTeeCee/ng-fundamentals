import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsAppComponent } from './events-app.component';

import {
  EventListResolver,
  EventRouteActivator,
  EventsListComponent,
  EventsThumbnailComponent,
  EventsDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent,
  SessionListComponent,
  EventsService,
} from './events/index';

import { ToastrService } from './common/toastr.service';
import { AuthService } from './user/auth.service';

import { Error404Component } from './error/404.component';
import { NavbarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    EventsDetailsComponent,
    NavbarComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    Error404Component,
  ],
  providers: [
    EventsService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function checkDirtyState(compnent: CreateEventComponent) {
  if (compnent.isDirty) {
    return window.confirm(
      'You have not save this event, do you really want to cancel?'
    );
  }
  return true;
}
