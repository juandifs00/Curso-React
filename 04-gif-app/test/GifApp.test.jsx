import { fireEvent, render, screen } from "@testing-library/react";
import { GifApp } from "../src/GifApp";

describe("Pruebas en <GifApp />", () => {
  //   test("Debe agregar una nueva categoría si no está en la lista", () => {
  //     render(<GifApp />);
  //     screen.debug();
  //   });

  test("No debe agregar una categoría si ya existe en la lista", () => {
    render(<GifApp />);

    const existingCategory = "Fast & Furious";
    const input = screen.getByPlaceholderText("Buscat Gifs");

    fireEvent.change(input, { target: { value: existingCategory } });
    fireEvent.submit(screen.getByRole("form"));

    // Contamos cuántas veces aparece la categoría en el DOM
    const categories = screen.getAllByText(new RegExp(existingCategory, "i"));

    expect(categories.length).toBe(1);
  });
});
