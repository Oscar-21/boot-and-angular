import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { CreateEventComponent } from './create-event.component'
import { eventRoutes } from './event.routes'
import {
  EventDetailsComponent,
  CreateSessionComponent,
  SessionListComponent,
  EventRouteActivator
} from './event-details'
import { UpvoteComponent } from './event-details/upvote.component'
import { LocationValidator } from './location-validator.directive'
import { EventsListComponent } from './events-list.component'
import { EventsThumbnailComponent } from './events-thumbnail.component'
import { VotingService } from './event-details/voting.service'
import { DurationPipe } from '../shared/duration.pipe'
import { CollapsibleWellComponent } from '../shared/collapsible-well.component'
import { StoreModule } from '@ngrx/store'
import { reducer } from './state/event.reducers'
import { EventsShellComponent } from './events-shell.component'
import { EffectsModule } from '@ngrx/effects'
import { EventEffects } from './state/event.effects'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(eventRoutes),
    StoreModule.forFeature('events', reducer),
    EffectsModule.forFeature(
      [EventEffects]
    ),
  ],
  declarations: [
    CreateEventComponent,
    EventDetailsComponent,
    CreateSessionComponent,
    SessionListComponent,
    UpvoteComponent,
    LocationValidator,
    EventsListComponent,
    EventsThumbnailComponent,
    CollapsibleWellComponent,
    DurationPipe,
    EventsShellComponent
  ],
  providers: [
    EventRouteActivator,
    VotingService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
  ]
})
export class EventModule {
}

export function checkDirtyState(component: CreateEventComponent): boolean {
  if (component.isDirty) {
    return window.confirm(
      'You have not saved this event, do you really want to ' + 'cancel ? '
    )
  }
  return true
}
