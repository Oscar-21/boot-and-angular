import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EventState } from "./event.state";

export const getEvents = createSelector(
  createFeatureSelector<EventState>('events'),
  state => state.events
)
