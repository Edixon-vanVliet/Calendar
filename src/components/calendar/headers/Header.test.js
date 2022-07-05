const { render, screen } = require('@testing-library/react');
const { Provider } = require('react-redux');
const { default: configureStore } = require('redux-mock-store');
const { calendarState } = require('__mocks-data__/calendarState.mock');
const { default: Header } = require('./Header');

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
