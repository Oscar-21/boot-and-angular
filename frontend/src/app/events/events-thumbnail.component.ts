import { Component, Input } from '@angular/core'
import { IEvent } from './shared/event.model'
import { Router } from '@angular/router';

@Component({
  selector: 'events-thumbnail',
  template: `
    <div *ngIf="!!conferenceEvent"
         class="well hoverwell thumbnail"
         [routerLink]="['/events', conferenceEvent.id ]">
      <h2>{{conferenceEvent.name | uppercase }}</h2>
      <div>Date: {{conferenceEvent.date.toDateString()}}</div>
      <div>Time: {{conferenceEvent.time}}</div>
      <div [ngSwitch]="conferenceEvent?.time"
           [ngStyle]="getStartTimeStyle()">
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: {{conferenceEvent.price | currency:'USD'}}</div>
      <div *ngIf="!!conferenceEvent?.location">
        <span>Location: {{conferenceEvent?.location.address}}</span>
        <span class="pad-left">{{conferenceEvent?.location.city}}, {{conferenceEvent.location.country}}</span>
      </div>
      <div *ngIf="conferenceEvent?.onlineUrl">
        Online URL: {{ conferenceEvent?.onlineUrl }}
      </div>
    </div>
  `,
  styles: [`
    .thumbnail { min-height: 210px; }
    .pad-left: { margin-left: 10px; }
    .well div: { color: #bbb; }
  `]
})
export class EventsThumbnailComponent {

  @Input() conferenceEvent: IEvent

  constructor(private router: Router) {
  }

  getStartTimeStyle() {
    const isEarlyStart = !!this.conferenceEvent && this.conferenceEvent.time === '8:00 am';
    if (isEarlyStart) {
      return {
        color: '#003300',
        'font-weight': 'bold'
      }
    }
    return {}
  }

  navigateToDetails(id: number): void {
    this.router.navigate([`/events/${id}`])
  }
}
