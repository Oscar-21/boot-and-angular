import { createFeatureSelector, createSelector } from '@ngrx/store'
import { EventState } from './event.state'

export const getEventState = createFeatureSelector<EventState>('events')

export const getEvents = createSelector(
  getEventState,
  state => state.events
)

export const getCurrentEventId = createSelector(
  getEventState,
  state => state.currentId
)

export const getCurrentEvent = createSelector(
  getEventState,
  getCurrentEventId,
  (state, currentId) => currentId ? state.events.find(e => e.id === currentId) : null
)

