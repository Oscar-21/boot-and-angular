import { Component, OnInit } from '@angular/core'
import { IEvent, ISession } from '../shared/event.model';
import { ActivatedRoute, Data } from '@angular/router';
import { EventService } from '../shared';

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
export class EventDetailsComponent implements OnInit {

  conferenceEvent: IEvent
  addMode: boolean
  filterBy = 'all'
  sortBy = 'votes'

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.forEach((data: Data) => {
      this.conferenceEvent = data['conferenceEvent']
      this.addMode = false
    })
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
