import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  current: { year: 0, month: 0 },
  dateRange: [],
  events: {},
};

const lastWeekDay = 6;
const dateFormat = "MM/DD/YYYY";
const localStorageName = "events";

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    initializeCalendar: () => {
      const currentDate = moment();

      const events = JSON.parse(localStorage.getItem(localStorageName)) ?? {};

      return {
        // moment has a zeroth month system
        current: { year: currentDate.year(), month: currentDate.month() + 1 },
        dateRange: calculateDateRange(currentDate),
        events,
      };
    },
    nextMonth: (state) => {
      const { current } = state;
      const date = moment(`${current.year}-${current.month}`);

      date.add(1, "months");

      return {
        ...state,
        current: { year: date.year(), month: date.month() + 1 },
        dateRange: calculateDateRange(date),
      };
    },
    previousMonth: (state) => {
      const { current } = state;
      const date = moment(`${current.year}-${current.month}`);

      date.subtract(1, "months");

      return {
        ...state,
        current: { year: date.year(), month: date.month() + 1 },
        dateRange: calculateDateRange(date),
      };
    },
    addEvent: (state, action) => {
      const events = { ...state.events };
      const event = action.payload;

      events[event.date] = [...(events[event.date] ?? []), event];

      localStorage.setItem(localStorageName, JSON.stringify(events));

      return {
        ...state,
        events,
      };
    },
  },
});

const calculateDateRange = (date) => {
  const startingDate = date.clone().startOf("month");
  const endingDate = date.clone().endOf("month");

  getFirstDayOfWeek(startingDate);
  getLastDayOfWeek(endingDate);

  return [startingDate.format(dateFormat), endingDate.format(dateFormat)];
};

const getFirstDayOfWeek = (date) => {
  const day = date.day();
  date.subtract(day, "days");
};

const getLastDayOfWeek = (date) => {
  const day = lastWeekDay - date.day();
  date.add(day, "days");
};

export const { initializeCalendar, nextMonth, previousMonth, addEvent } =
  calendarSlice.actions;

export default calendarSlice.reducer;