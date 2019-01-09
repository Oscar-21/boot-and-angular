import { Component, Input, Output } from '@angular/core'
import { IEvent } from './shared/event.model'

@Component({
  selector: 'events-list',
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
export class EventsListComponent {

  @Input() events: IEvent[]
  buttonText = 'Click'

}
