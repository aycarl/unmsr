import { EventsActionTypes } from "./eventsActionTypes";

export const fetchEventsStart = () => ({
  type: EventsActionTypes.FETCH_EVENTS_START,
});

export const fetchEventsSuccess = eventsList => ({
  type: EventsActionTypes.FETCH_EVENTS_SUCCESS,
  payload: eventsList
});

export const fetchEventsFailure = errorMessage => ({
  type: EventsActionTypes.FETCH_EVENTS_FAILURE,
  payload: errorMessage
});

export const fetchEventsStartAsync = () => {
  return dispatch => {
    // TODO: retrieve list of events with async call
    // 

  };
}