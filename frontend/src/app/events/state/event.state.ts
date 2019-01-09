import * as fromRoot from '../../state/app.state'
import { IEvent } from '../shared/event.model'

export interface State extends fromRoot.State {
  events: EventState
}

export interface EventState {
  events: IEvent[]
  error: string
  currentId: number | null
}

export const initialState: EventState = {
  events: [],
  currentId: null,
  error: '',
}
