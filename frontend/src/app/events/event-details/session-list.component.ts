import { Component, Input, OnChanges, OnInit, OnDestroy } from "@angular/core";
import { ISession } from "../shared/event.model";
import { AuthService } from "src/app/user/auth.service";
import { VotingService } from "./voting.service";
import { IUser } from "src/app/user/user.model";
import { Subscription } from "rxjs";

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
})
export class SessionListComponent implements OnInit, OnChanges, OnDestroy {

  @Input() sessions: ISession[]
  @Input() filterBy: string
  @Input() sortBy: string
  visibleSessions: ISession[] = []
  userHasVotedList: number[] = []
  currentUser: IUser | undefined
  sub: Subscription

  constructor(
    public authService: AuthService,
    private votingService: VotingService) {
  }

  ngOnInit(): void {
    this.sub = this.authService.isAuthenticated().subscribe(
      (user:IUser) => this.currentUser = user
    )
  }

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy)
      this.sortBy === 'name'
        ? this.visibleSessions.sort(sortByNameAsc)
        : this.visibleSessions.sort(sortByVotesDesc)
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  filterSessions(filter: string): void {
    if (filter === 'all') {
      this.visibleSessions = [...this.sessions]
    } else {
      this.visibleSessions = this.sessions.filter(session =>
        session.level.toLocaleLowerCase() === filter
      )
    }
  }

  toggleVote(session: ISession): void {
    if (this.userHasVoted(session)) {
      this.votingService.deleteVoter(session, this.currentUser.name)
    } else {
      this.votingService.addVoter(session, this.currentUser.name)
    }
    if (this.sortBy === 'votes') {
      this.visibleSessions.sort(sortByVotesDesc)
    }
  }

  userHasVoted(session: ISession): boolean {
    return this.votingService.userHasVoted(session, this.currentUser.name)
  }

}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) return 1
  if (s1.name === s2.name) return 0
  else return -1
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length
}
