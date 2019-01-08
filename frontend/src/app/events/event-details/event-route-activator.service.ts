import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { EventService } from "../shared/event.service";
import { map, catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";

@Injectable()
export class EventRouteActivator implements CanActivate {

  constructor(
    private eventService: EventService,
    private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.eventService.getEvent(+route.params['id']).pipe(
      map(e => !!e),
      catchError(this.handleError<boolean>('canActivate'))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.router.navigate(['/404'])
      return of(result as T)
    }
  }
}
