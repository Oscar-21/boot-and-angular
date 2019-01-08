import { Component, Input, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'upvote',
  template: `
    <div (click)="onClick()"
         class="votingWidgetContainer pointable">
      <div class="well votingWidget">
        <div class="votingButton">
          <i class="glyphicon glyphicon-heart"
             [style.color]="iconColor"></i>
        </div>
        <div class="badge badge-inverse votingCount">
          <div>{{count}}</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {

  @Output() vote = new EventEmitter()
  @Input() count: number
  @Input() set voted(userVoted: boolean) {
    this.iconColor = userVoted ? 'red' : 'white'
  }
  iconColor: string

  onClick(): void {
    this.vote.emit()
  }
}
