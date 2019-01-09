import { Action } from '@ngrx/store'
import { IEvent } from '../shared/event.model'
import { State } from './event.state'

export enum EventActionTypes {
  LOAD = '[Event] Load',
  LOAD_SUCCESS = '[Event] Load Success',
  SET_CURRENT_EVENT = '[Event] Set current event',
}

export class Load implements Action {
  readonly type = EventActionTypes.LOAD
}

export class SetCurrentEvent implements Action {
  readonly type = EventActionTypes.SET_CURRENT_EVENT
  constructor(public payload: IEvent) { }
}

export class LoadSuccess implements Action {
  readonly type = EventActionTypes.LOAD_SUCCESS
  constructor(public payload: IEvent[]) { }
}

export type EventActions = Load
  | LoadSuccess
  | SetCurrentEvent
