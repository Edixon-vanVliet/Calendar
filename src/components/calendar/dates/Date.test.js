import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { calendarState } from '__mocks-data__/calendarState.mock';
import Date from './Date';

const mockStore = configureStore([]);

describe('Date test', () => {
  test('should display date', () => {
    const state = {
      ...calendarState,
      calendar: { ...calendarState.calendar, events: {} },
    };

    render(
      <Provider store={mockStore(state)}>
        <Date date="2022/07/04" />
      </Provider>
    );

    expect(screen.getByText('04')).toBeInTheDocument();
  });

  test('should display event', () => {
    render(
      <Provider store={mockStore(calendarState)}>
        <Date date="2022/07/04" />
      </Provider>
    );

    expect(screen.getByText('Independence Day')).toBeInTheDocument();
  });

  test('should not display form', () => {
    render(
      <Provider store={mockStore(calendarState)}>
        <Date date="2022/07/04" />
      </Provider>
    );

    expect(screen.queryByText('Event')).not.toBeInTheDocument();
  });

  test('should open modal with click', () => {
    render(
      <Provider store={mockStore(calendarState)}>
        <Date date="2022/07/04" />
      </Provider>
    );

    userEvent.click(screen.getByRole('button'));

    expect(screen.getByText('Event')).toBeInTheDocument();
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Start Time')).toBeInTheDocument();
    expect(screen.getByText('End Time')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  test('should open modal with enter', () => {
    render(
      <Provider store={mockStore(calendarState)}>
        <Date date="2022/07/04" />
      </Provider>
    );

    const date = screen.getByRole('button');
    date.focus();
    userEvent.keyboard('{enter}');

    expect(screen.getByText('Event')).toBeInTheDocument();
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Start Time')).toBeInTheDocument();
    expect(screen.getByText('End Time')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });
});
