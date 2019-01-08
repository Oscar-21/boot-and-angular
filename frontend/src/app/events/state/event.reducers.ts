import { defaultEventState, EventState } from "./event.state";
import { EventActions, EventActionTypes } from "./event.actions";

export function reducer(
  state = defaultEventState,
  action: EventActions
): EventState {

  switch (action.type) {

    case (EventActionTypes.LOAD_SUCCESS):
      return {
        ...state,
        events: action.payload
      }

    default:
      return state;
  }
}
