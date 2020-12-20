import { createSelector } from "reselect";

const selectEvents = state => state.events;

// export list of all events
export const selectEventsList = createSelector(
  [selectEvents],
  events => events.eventsList
);