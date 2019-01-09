import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { IEvent } from './shared/event.model'
import { EventService } from './shared'

@Component({
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  isDirty = true
  newEvent: IEvent

  constructor(
    private eventService: EventService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.newEvent = {
      id: 888,
      name: 'ename',
      date: new Date('11/22/2017'),
      time: '10:00am',
      price: 22.22,
      imageUrl: '/assets/images/angularconnect-shield.png',
      location: {
        address: '1057 DT',
        city: 'London',
        country: 'England'
      },
      sessions: []
    }
  }
  saveEvent(event: IEvent): void {
    this.eventService.createEvent(event).subscribe(() => {
      this.isDirty = false
      this.router.navigate(['/events'])
    })
  }

  cancel(): void {
    this.router.navigate(['/events'])
  }
}
