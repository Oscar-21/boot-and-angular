import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { EventService } from "../shared/event.service";
import { map, catchError, first } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { Store } from "@ngrx/store";
import { State } from "../state/event.state";

@Injectable()
export class EventRouteActivator implements CanActivate {

  constructor(
    private store$: Store<State>,
    private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, foo: RouterStateSnapshot): Observable<boolean> {
    const id = +route.params['id']
    console.log(id)
    return this.store$.pipe(
      first(state => {
        if (!!!state.events.events.length) {
          console.log(state.events.events)
          this.router.navigate(['/404']);
          return false;
        }
        return !!state.events.events.length
      }),
      map(({ events: eventState }) => eventState.events.find(event => event.id === id)),
      map((event) => {
        console.log('wrf' + event)
        if (!!event) return true;
        this.router.navigate(['/404']);
        return false;
      })
    )
  }

}
