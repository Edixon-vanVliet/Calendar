const { Provider } = require('react-redux');
const { render, screen } = require('@testing-library/react');
const { default: Header } = require('./Header');

// eslint-disable-next-line jest/no-mocks-import
const { store } = require('../../../redux/__mocks__/store');

describe('Header tests', () => {
  test('should render current month', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    expect(screen.getByText('July 2022')).toBeInTheDocument();
  });

  test('should render next and previous buttons', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });
});
