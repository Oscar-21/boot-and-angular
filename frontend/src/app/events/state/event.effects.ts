import { Injectable  } from '@angular/core'
import { Actions, Effect, ofType  } from '@ngrx/effects'
import { EventService } from '../shared';
import * as eventActions from './event.actions';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class EventEffects {

  @Effect()
  loadEvents$ = this.actions$.pipe(
    ofType(eventActions.EventActionTypes.LOAD),
    mergeMap((action: eventActions.Load) =>
      this.eventService.getEvents().pipe(
        map(events => new eventActions.LoadSuccess(events))
      )
    )
  )

  constructor(
    private actions$: Actions,
    private eventService: EventService) {
  }



}
