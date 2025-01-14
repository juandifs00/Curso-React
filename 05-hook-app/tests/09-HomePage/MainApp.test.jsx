import { render, screen } from "@testing-library/react";
import MainApp from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router";

describe("Pruebas en el componente <MainApp />", () => {
  test("Debe de mostrar el componente <HomePage />", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    // screen.debug();

    expect(screen.getByText("HomePage")).toBeTruthy();
  });

  test("Debe de mostrar el componente <LoginPage />", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );

    // screen.debug();

    expect(screen.getByText("LoginPage")).toBeTruthy();
  });

  test("Debe de mostrar el componente <AboutPage />", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <MainApp />
      </MemoryRouter>
    );

    // screen.debug();

    expect(screen.getByText("AboutPage")).toBeTruthy();
  });
});
