import { createSelector } from "reselect";

const selectEvents = state => state.events;

// select list of all event objects
export const selectEventsList = createSelector(
  [selectEvents],
  events => events.eventsList
);

//select array list of all event objects
export const selectEventsListArray = createSelector(
  [selectEventsList],
  eventsList => eventsList ? Object.keys(eventsList).map(eventUID => eventsList[eventUID]) : []
);

// select an events data, given event UID
// FIXME: find more efficient way to find events => hashing!!!
export const selectEvent = eventUID => createSelector(
  [selectEventsListArray],
  eventsListArray => eventsListArray.find(event => event.UID === eventUID)
);

// TODO: create selector(s) to get events by orgnisations

// TODO: create selector to get event by current user membership