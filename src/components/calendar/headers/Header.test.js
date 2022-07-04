const { render, screen } = require('@testing-library/react');
const { Provider } = require('react-redux');
// eslint-disable-next-line jest/no-mocks-import
const { store } = require('../../../redux/__mocks__/store');
const { default: Header } = require('./Header');

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
