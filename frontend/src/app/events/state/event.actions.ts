import { Action } from "@ngrx/store";
import { IEvent } from "../shared/event.model";

export enum EventActionTypes {
  LOAD = '[Event] Set Events',
  LOAD_SUCCESS = '[Event] Load Success'
}

export class Load implements Action {
  readonly type = EventActionTypes.LOAD
}

export class LoadSuccess implements Action {
  readonly type = EventActionTypes.LOAD_SUCCESS
  constructor(public payload: IEvent[]) {}
}

export type EventActions = Load |
LoadSuccess
