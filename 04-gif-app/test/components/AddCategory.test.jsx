import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en el componente <AddCategory />", () => {
  test("Debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewValue={() => {}} />);

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "ASUS" } });
    expect(input.value).toBe("ASUS");
  });

  test("Debe de llamar onNewValue con el valor de la caja de texto", () => {
    const inputValue = "ASUS";
    const onNewValue = jest.fn();

    render(<AddCategory onNewValue={onNewValue} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(onNewValue).toHaveBeenCalled();
    expect(onNewValue).toHaveBeenCalledTimes(1);
    expect(onNewValue).toHaveBeenCalledWith(inputValue);
  });

  test("No debe de llamar el onNewValue si el input esta vacio", () => {
    const onNewValue = jest.fn();

    render(<AddCategory onNewValue={onNewValue} />);

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onNewValue).toHaveBeenCalledTimes(0);
    expect(onNewValue).not.toHaveBeenCalled();
  });
});
