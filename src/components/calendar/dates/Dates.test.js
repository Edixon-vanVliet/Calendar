const { render, screen } = require("@testing-library/react");
const { Provider } = require("react-redux");
const { default: Dates } = require("./Dates");

// eslint-disable-next-line jest/no-mocks-import
const { store } = require("../../../redux/__mocks__/store");

describe("Dates tests", () => {
  test("should display dates", () => {
    render(
      <Provider store={store}>
        <Dates />
      </Provider>
    );

    expect(screen.getAllByText("1").length).toBe(2);
    expect(screen.getAllByText("2").length).toBe(2);
    expect(screen.getAllByText("3").length).toBe(2);
    expect(screen.getAllByText("4").length).toBe(2);
    expect(screen.getAllByText("5").length).toBe(2);
    expect(screen.getAllByText("6").length).toBe(2);
    expect(screen.getByText("7")).toBeInTheDocument();
    expect(screen.getByText("8")).toBeInTheDocument();
    expect(screen.getByText("9")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("11")).toBeInTheDocument();
    expect(screen.getByText("12")).toBeInTheDocument();
    expect(screen.getByText("13")).toBeInTheDocument();
    expect(screen.getByText("14")).toBeInTheDocument();
    expect(screen.getByText("15")).toBeInTheDocument();
    expect(screen.getByText("16")).toBeInTheDocument();
    expect(screen.getByText("17")).toBeInTheDocument();
    expect(screen.getByText("18")).toBeInTheDocument();
    expect(screen.getByText("19")).toBeInTheDocument();
    expect(screen.getByText("20")).toBeInTheDocument();
    expect(screen.getByText("21")).toBeInTheDocument();
    expect(screen.getByText("22")).toBeInTheDocument();
    expect(screen.getByText("23")).toBeInTheDocument();
    expect(screen.getByText("24")).toBeInTheDocument();
    expect(screen.getByText("25")).toBeInTheDocument();
    expect(screen.getAllByText("26").length).toBe(2);
    expect(screen.getAllByText("27").length).toBe(2);
    expect(screen.getAllByText("28").length).toBe(2);
    expect(screen.getAllByText("29").length).toBe(2);
    expect(screen.getAllByText("30").length).toBe(2);
  });

  test("should display event", () => {
    render(
      <Provider store={store}>
        <Dates />
      </Provider>
    );

    const event = screen.getByText("Independence Day");
    expect(event).toBeInTheDocument();
  });
});
