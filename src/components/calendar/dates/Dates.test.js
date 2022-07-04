const { render, screen } = require('@testing-library/react');
const { Provider } = require('react-redux');
// eslint-disable-next-line jest/no-mocks-import
const { store } = require('../../../redux/__mocks__/store');
const { default: Dates } = require('./Dates');

describe('Dates tests', () => {
  test('should display dates', () => {
    render(
      <Provider store={store}>
        <Dates />
      </Provider>
    );

    expect(screen.getAllByText('01').length).toBe(2);
    expect(screen.getAllByText('02').length).toBe(2);
    expect(screen.getAllByText('03').length).toBe(2);
    expect(screen.getAllByText('04').length).toBe(2);
    expect(screen.getAllByText('05').length).toBe(2);
    expect(screen.getAllByText('06').length).toBe(2);
    expect(screen.getByText('07')).toBeInTheDocument();
    expect(screen.getByText('08')).toBeInTheDocument();
    expect(screen.getByText('09')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('11')).toBeInTheDocument();
    expect(screen.getByText('12')).toBeInTheDocument();
    expect(screen.getByText('13')).toBeInTheDocument();
    expect(screen.getByText('14')).toBeInTheDocument();
    expect(screen.getByText('15')).toBeInTheDocument();
    expect(screen.getByText('16')).toBeInTheDocument();
    expect(screen.getByText('17')).toBeInTheDocument();
    expect(screen.getByText('18')).toBeInTheDocument();
    expect(screen.getByText('19')).toBeInTheDocument();
    expect(screen.getByText('20')).toBeInTheDocument();
    expect(screen.getByText('21')).toBeInTheDocument();
    expect(screen.getByText('22')).toBeInTheDocument();
    expect(screen.getByText('23')).toBeInTheDocument();
    expect(screen.getByText('24')).toBeInTheDocument();
    expect(screen.getByText('25')).toBeInTheDocument();
    expect(screen.getAllByText('26').length).toBe(2);
    expect(screen.getAllByText('27').length).toBe(2);
    expect(screen.getAllByText('28').length).toBe(2);
    expect(screen.getAllByText('29').length).toBe(2);
    expect(screen.getAllByText('30').length).toBe(2);
  });

  test('should display event', () => {
    render(
      <Provider store={store}>
        <Dates />
      </Provider>
    );

    const event = screen.getByText('Independence Day');
    expect(event).toBeInTheDocument();
  });
});
