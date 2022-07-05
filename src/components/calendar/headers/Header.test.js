import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { calendarState } from '__mocks-data__/calendarState.mock';
import Header from './Header';

const mockStore = configureStore([]);
const dispatch = jest.fn();

describe('Header tests', () => {
  test('should render current month', () => {
    render(
      <Provider store={mockStore(calendarState)}>
        <Header />
      </Provider>
    );

    expect(screen.getByText('July 2022')).toBeInTheDocument();
  });

  test('should render next and previous buttons', () => {
    render(
      <Provider store={mockStore(calendarState)}>
        <Header />
      </Provider>
    );

    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  test('should dispatch on click', () => {
    const store = mockStore(calendarState);
    store.dispatch = dispatch;

    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const previous = screen.getByText('Previous');
    const next = screen.getByText('Next');

    userEvent.click(previous);
    userEvent.click(next);

    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
