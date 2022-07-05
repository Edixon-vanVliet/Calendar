import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { calendarState } from '__mocks-data__/calendarState.mock';
import Header from './Header';

const mockStore = configureStore([]);

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
});
