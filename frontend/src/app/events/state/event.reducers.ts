import { initialState, EventState } from './event.state'
import { EventActions, EventActionTypes } from './event.actions'

export function reducer(
  state = initialState,
  action: EventActions
): EventState {

  switch (action.type) {

    case EventActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        events: action.payload,
        error: ''
      }

    case EventActionTypes.SET_CURRENT_EVENT:
      return {
        ...state,
        currentId: action.payload.id,
        error: ''
      }

    default:
      return state
  }
}
