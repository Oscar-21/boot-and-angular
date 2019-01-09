import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { EventService } from '../shared'
import * as eventActions from './event.actions'
import { mergeMap, map } from 'rxjs/operators'

@Injectable()
export class EventEffects {

  constructor(
    private actions$: Actions,
    private eventService: EventService) {
  }

  @Effect()
  loadEvents$ = this.actions$.pipe(
    ofType(eventActions.EventActionTypes.LOAD),
    mergeMap((action: eventActions.Load) =>
      this.eventService.getEvents().pipe(
        map(events => {
          events.forEach(event => event.date = new Date(event.date))
          return new eventActions.LoadSuccess(events)
        }),
      )
    )
  )

}
