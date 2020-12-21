import { EventsActionTypes } from "./eventsActionTypes";

// importing events list
import EventsList from "./../../mock-data/opendata-event-list";

// const INITIAL_STATE = {
//   eventsList: EventsList.eventsList.slice(0, 10),
//   isFetching: false,
//   errorMessage: undefined,
// }

// FIXME: convert events array to array of objects

const INITIAL_STATE = {
  eventsList: {
    "520e6bf1-0a52-4b73-babf-ec15ddca3eaa": {
      ORGANIZER: "mailto:sjsmith@unm.edu",
      DTSTART: "20201124T170000Z",
      DTEND: "20201124T230000Z",
      DTSTAMP: "20200728T114509Z",
      LOCATION: "Tamarind Institute",
      SUMMARY:
        "Exhibition: Land of Mañana: 60 years of Innovation at Tamarind Institute",
      DESCRIPTION:
        "An exhibition celebrating Tamarind’s 60th anniversary. The exhibition will include lithographs by various artists who have collaborated at Tamarind Institute during the past sixty years. Tamarind is a division of the College of Fine Arts at UNM.\nView the full event details here: https://unmevents.unm.edu/event/exhibition-land-of-maana-60-years-of-innovation-at-tamarind-institute-30/",
      CATEGORIES:
        "College of Fine Arts  Visual Arts  Exhibit  Arts &amp; Culture",
      CONTACT: "Shelly Smith sjsmith@unm.edu 5052773901",
      CLASS: "PUBLIC",
      UID: "520e6bf1-0a52-4b73-babf-ec15ddca3eaa",
    },
  },
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