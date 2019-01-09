import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { IEvent, ISession } from './event.model'
import { catchError } from 'rxjs/operators'

@Injectable()
export class EventService {

  EVENTS: IEvent[] = []

  constructor(private http: HttpClient) {
  }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>('api/v1/events').pipe(
      catchError(this.handleError<IEvent[]>('getEvents', []))
    )
  }


  getEvent(id: number): Observable<IEvent> {
    return this.http.get<IEvent>(`api/v1/events/${id}`)
  }

  createEvent(event: IEvent): Observable<IEvent> {
    event.id = 999
    event.sessions = [{
      id: 1,
      name: "How Elm Powers Angular 4",
      presenter: "Murphy Randle",
      duration: 2,
      level: "Intermediate",
      abstract: `We all know that Angular is written in Elm, but did you
          know how the source code is really written? In this exciting look
          into the internals of Angular 4, we'll see exactly how Elm powers
          the framework, and what you can do to take advantage of this knowledge.`,
      voters: ['bradgreen', 'martinfowler', 'igorminar']
    }, {
      id: 2,
      name: "Angular and React together",
      presenter: "Jamison Dance",
      duration: 2,
      level: "Intermediate",
      abstract: `React v449.6 has just been released. Let's see how to use
          this new version with Angular to create even more impressive applications.`,
      voters: ['bradgreen', 'martinfowler']
    }, {
      id: 3,
      name: "Redux Woes",
      presenter: "Rob Wormald",
      duration: 1,
      level: "Intermediate",
      abstract: `Everyone is using Redux for everything from Angular to React to
          Excel macros, but you're still having trouble grasping it? We'll take a look
          at how farmers use Redux when harvesting grain as a great introduction to
          this game changing technology.`,
      voters: ['bradgreen', 'martinfowler', 'johnpapa']
    }, {
      id: 4,
      name: "ng-wat again!!",
      presenter: "Shai Reznik",
      duration: 1,
      level: "Beginner",
      abstract: `Let's take a look at some of the stranger pieces of Angular 4,
          including neural net nets, Android in Androids, and using pipes with actual pipes.`,
      voters: ['bradgreen', 'martinfowler', 'igorminar', 'johnpapa']
    }, {
      id: 5,
      name: "Dressed for Success",
      presenter: "Ward Bell",
      duration: 2,
      level: "Beginner",
      abstract: `Being a developer in 2037 is about more than just writing bug-free code.
          You also have to look the part. In this amazing expose, Ward will talk you through
          how to pick out the right clothes to make your coworkers and boss not only
          respect you, but also want to be your buddy.`,
      voters: ['bradgreen', 'martinfowler']
    }, {
      id: 6,
      name: "These aren't the directives you're looking for",
      presenter: "John Papa",
      duration: 2,
      level: "Intermediate",
      abstract: `Coinciding with the release of Star Wars Episode 18, this talk will show how
          to use directives in your Angular 4 development while drawing lessons from the new movie,
          featuring all your favorite characters like Han Solo's ghost and Darth Jar Jar.`,
      voters: ['bradgreen', 'martinfowler']
    }]
    event.date = new Date(event.date)
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<IEvent>(`api/v1/events`, event, options)
  }

  updateEvent(event: IEvent) {
    const index = this.EVENTS.findIndex(x => x.id === event.id)
    this.EVENTS[index] = event
  }

  searchSessions(searchTerm: string): Observable<ISession[]> {
    searchTerm = searchTerm.toLocaleLowerCase()
    let results: ISession[] = []
    this.EVENTS.forEach(event => {
      let matchingSessions = event.sessions.filter((session: any) => {
        session.eventId = event.id
        return session.name.toLocaleLowerCase().indexOf(searchTerm) > -1
      })
      results = results.concat(matchingSessions)
    })
    return of(results)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      return of(result as T)
    }
  }

}
