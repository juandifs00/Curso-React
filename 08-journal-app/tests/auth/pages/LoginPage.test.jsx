import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";

import LoginPage from "../../../src/auth/pages/LoginPage";
import { authSlice } from "../../../src/store/auth/authSlice";
import { notAuthenticatedState } from "../../fixtures/authFixtures";

const mockStartGoogleSignIn = jest.fn();

jest.mock("../../../src/store/auth/thunks", () => ({
  startGoogleSignIn: () => mockStartGoogleSignIn,
}));

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  preloadedState: {
    auth: notAuthenticatedState,
  },
});

describe("Pruebas en el LoginPage", () => {
  test("Debe de mostrar el componente <LoginPage /> correctamente", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getAllByText("Ingreso").length).toBeGreaterThanOrEqual(1);
  });

  test("El boton de Google debe de llamar el startGoogleSignIn", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const googleButton = screen.getByLabelText("google-btn");
    fireEvent.click(googleButton);
    expect(mockStartGoogleSignIn).toHaveBeenCalled();
  });
});
