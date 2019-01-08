import { Component, OnInit } from '@angular/core'
import { IEvent } from './shared/event.model'
import { ActivatedRoute, Data } from '@angular/router'

@Component({
  template: `
    <div>
      <h1>Upcoming Angpular Events</h1>
      <hr />
      <div class="row">
        <div class="col-md-5"
             *ngFor="let conferenceEvent of events"
        >
          <events-thumbnail [conferenceEvent]="conferenceEvent">
          </events-thumbnail>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .clicked { color: red; }
    .notclicked { color: hotpink; }
  `]
})
export class EventsListComponent implements OnInit {

  events: IEvent[]
  buttonText = 'Click'

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.forEach((data: Data) => this.events = data['events'])
  }

}
