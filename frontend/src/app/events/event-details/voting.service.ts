import { Injectable } from '@angular/core'
import { ISession } from '../shared/event.model'

@Injectable()
export class VotingService {

  deleteVoter(session: ISession, voterEmail: string): void {
    session.voters = session.voters.filter(voter => voter !== voterEmail)
  }

  addVoter(session: ISession, voterEmail: string): void {
    session.voters.push(voterEmail)
  }

  userHasVoted(session: ISession, voterEmail: string): boolean {
    return session.voters.some(voter => voter === voterEmail)
  }

}
