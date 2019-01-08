import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { IEvent } from './shared/event.model'
import { EventService } from "./shared/event.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class EventDetailResolver implements Resolve<IEvent> {

  constructor(private eventService: EventService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEvent> {
    const id = +route.paramMap.get('id')
    return this.eventService.getEvent(id)
  }
}
