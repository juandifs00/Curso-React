const { render, screen, fireEvent } = require("@testing-library/react");

const {
  default: MultipleCustomHooks,
} = require("../../src/03-examples/MultipleCustomHooks");

const { default: useCounter } = require("../../src/hooks/useCounter");
const { default: useFetch } = require("../../src/hooks/useFetch");

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Pruebas en MultipleCustomHooks", () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Debe de mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: false,
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    const backButton = screen.getByRole("button", { name: "Anterior" });

    expect(screen.getByText("Cargando..."));
    expect(screen.getByText("Información de Pokemons"));
    expect(nextButton.disable).toBeFalsy();
    expect(backButton.disable).toBeFalsy();
  });

  test("Debe de mostrar el primer pokemon", () => {
    useFetch.mockReturnValue({
      data: {
        name: "Bulbasaur",
        id: 1,
        sprites: {
          back_default: "back_default",
          back_shiny: "back_shiny",
          front_default: "front_default",
          front_shiny: "front_shiny",
        },
      },
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);

    expect(screen.getByText("#1 - Bulbasaur")).toBeTruthy();
  });

  test("Debe de llamar a la función de incrementar", () => {
    useFetch.mockReturnValue({
      data: {
        name: "Charmander",
        id: 2,
        sprites: {
          back_default: "back_default",
          back_shiny: "back_shiny",
          front_default: "front_default",
          front_shiny: "front_shiny",
        },
      },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalledTimes(1);
  });
});
