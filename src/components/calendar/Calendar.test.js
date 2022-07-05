import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { calendarState } from '__mocks-data__/calendarState.mock';
import Calendar from './Calendar';

const mockStore = configureStore([]);
const dispatch = jest.fn();

describe('Calendar tests', () => {
  test('should initialize store', () => {
    const store = mockStore(calendarState);
    store.dispatch = dispatch;

    render(
      <Provider store={store}>
        <Calendar />
      </Provider>
    );

    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
