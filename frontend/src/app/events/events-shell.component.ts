import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { IEvent } from './shared/event.model'
import { Store, select } from '@ngrx/store'
import { State } from './state/event.state'
import * as eventActions from './state/event.actions'
import { getEvents, getCurrentEvent } from './state/event.selectors'

@Component({
  templateUrl: './events-shell.component.html'
})
export class EventsShellComponent implements OnInit {

  events$: Observable<IEvent[]>

  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new eventActions.Load())
    this.events$ = this.store.pipe(select(getEvents))
  }

  eventSelected(event: IEvent): void {
    this.store.dispatch(new eventActions.SetCurrentEvent(event))
  }

}
