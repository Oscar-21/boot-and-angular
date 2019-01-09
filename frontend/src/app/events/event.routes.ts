import { CreateEventComponent } from './create-event.component'
import {
  EventDetailsComponent,
  CreateSessionComponent,
  EventRouteActivator
} from './event-details'
import { Route } from '@angular/router'
import { EventsShellComponent } from './events-shell.component'

export const eventRoutes: Route[] = [{
  path: '',
  pathMatch: 'full',
  component: EventsShellComponent
}, {
  path: 'new',
  component: CreateEventComponent,
  canDeactivate: ['canDeactivateCreateEvent']
}, {
  path: ':id',
  component: EventDetailsComponent,
  canActivate: [ EventRouteActivator ]
}, {
  path: 'session/new',
  component: CreateSessionComponent,
}]
