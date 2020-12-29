import { EventsActionTypes } from "./eventsActionTypes";

// importing events list
import EventsList from "./../../mock-data/opendata-event-list";

// FIXME: convert events array to array of objects

const INITIAL_STATE = {
  eventsList: EventsList.eventsList.slice(0, 20),
  isFetching: false,
  errorMessage: undefined,
}

const eventsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EventsActionTypes.FETCH_EVENTS_START:
      return {
        ...state,
        isFetching: true
      };

    case EventsActionTypes.FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        eventsList: action.payload
      };

    case EventsActionTypes.FETCH_EVENTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
  
    default:
      return state;
  }
}

export default eventsReducer;