import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { Observable } from 'rxjs'
import { map, mergeMap, toArray } from 'rxjs/operators'
import { IEvent } from './shared/event.model'
import { EventService } from './shared/event.service'
import { Store } from '@ngrx/store';
import * as fromEvent from './state/event.state';

@Injectable()
export class EventListResolver implements Resolve<IEvent[]> {

  constructor(
    private eventService: EventService,
    private store: Store<fromEvent.State>) {
  }

  resolve(): Observable<IEvent[]> {
    return this.eventService.getEvents()
    .pipe(
      mergeMap(events => events),
      map(e => {
        e.date = new Date(e.date)
        return e;
      }),
      toArray()
    )
  }
}
