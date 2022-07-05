import { configureStore } from '@reduxjs/toolkit';
import calendarReducer from '../calendarSlice';

export const store = configureStore({
  reducer: { calendar: calendarReducer },
  preloadedState: {
    calendar: {
      current: { year: 2022, month: 7 },
      dateRange: ['2022/06/26', '2022/08/07'],
      events: {
        '2022/07/04': [
          {
            date: '2022/07/04',
            name: 'Independence Day',
            start: '00:00:00',
            end: '23:59:59',
            description: 'American Independence day',
          },
        ],
      },
    },
  },
});
