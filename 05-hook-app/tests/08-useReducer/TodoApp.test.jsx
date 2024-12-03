import { render, screen } from "@testing-library/react";
import TodoApp from "../../src/08-useReducer/TodoApp";
import useTodos from "../../src/08-useReducer/hooks/useTodos";

jest.mock("../../src/08-useReducer/hooks/useTodos");

describe("Pruebas en el TodoApp", () => {
  useTodos.mockReturnValue({
    state: [
      {
        id: 1,
        description: "Recolectar la piedra del alma",
        done: false,
      },
      {
        id: 2,
        description: "Recolectar la piedra del tiempo",
        done: true,
      },
      {
        id: 3,
        description: "Recolectar la piedra del espacio",
        done: false,
      },
    ],
    stateCount: 3,
    pendingStateCount: 2,
    handleDelete: jest.fn(),
    onToggleTodo: jest.fn(),
    handleNewTodo: jest.fn(),
  });

  test("Debe de mostrar el componente correctamente", () => {
    render(<TodoApp />);
    // screen.debug();

    expect(screen.getByText("Recolectar la piedra del alma")).toBeTruthy();
    expect(screen.getByText("Recolectar la piedra del tiempo")).toBeTruthy();
    expect(screen.getByText("Recolectar la piedra del espacio")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
