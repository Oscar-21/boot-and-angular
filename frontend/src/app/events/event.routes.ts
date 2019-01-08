import { CreateEventComponent } from "./create-event.component";
import { EventDetailsComponent, CreateSessionComponent, EventRouteActivator } from "./event-details";
import { EventDetailResolver } from "./event-detail-resolver.service";
import { Route } from "@angular/router";
import { EventListResolver } from "./event-list-resolver.service";
import { EventsListComponent } from "./events-list.component";

export const eventRoutes: Route[] = [{
  path: '',
  pathMatch: 'full',
  component: EventsListComponent,
  resolve: {
    events: EventListResolver
  }
}, {
  path: 'new',
  component: CreateEventComponent,
  canDeactivate: ['canDeactivateCreateEvent']
}, {
  path: ':id',
  component: EventDetailsComponent,
  resolve: {
    conferenceEvent: EventDetailResolver
  },
  canActivate: [EventRouteActivator]
}, {
  path: 'session/new',
  component: CreateSessionComponent,
}]
