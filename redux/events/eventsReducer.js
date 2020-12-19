import { EventsActionTypes } from "./eventsActionTypes";

const INITIAL_STATE = {
  eventsList: [],
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