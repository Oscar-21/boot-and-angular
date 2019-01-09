import { Component, OnInit, OnDestroy } from '@angular/core'
import { IEvent, ISession } from '../shared/event.model'
import { EventService } from '../shared'
import { Store, select } from '@ngrx/store';
import { State } from '../state/event.state';
import { getCurrentEvent } from '../state/event.selectors';
import { Observable, Subscription } from 'rxjs';

@Component({
  'selector': 'event-details',
  templateUrl: './event-details.component.html',
  styles: [`
    .container {
      padding-left: 20px;
      padding-right: 20px;
    }
    .event-image { height: 100px; }
    a { cursor: pointer }
  `]
})
export class EventDetailsComponent implements OnInit, OnDestroy {

  selectedEvent$: Observable<IEvent>
  conferenceEvent: IEvent | null
  sub: Subscription
  addMode: boolean
  filterBy = 'all'
  sortBy = 'votes'

  constructor(
    private eventService: EventService,
    private store$: Store<State>) {
  }

  ngOnInit(): void {
    this.selectedEvent$ = this.store$.pipe(select(getCurrentEvent))
    this.sub = this.selectedEvent$.subscribe(
      event => {
        console.log(`ce ${event}`)
        this.conferenceEvent = event
      },
      err => console.log(`error EventDetailsComponent: ${err}`)
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  addSession(): void {
    this.addMode = true
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.conferenceEvent.sessions.map(s => s.id)) + 1
    session.id = nextId
    this.conferenceEvent.sessions.push(session)
    this.eventService.updateEvent(this.conferenceEvent)
    this.addMode = false
  }

}
