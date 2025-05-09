import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";

import LoginPage from "../../../src/auth/pages/LoginPage";
import { authSlice } from "../../../src/store/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
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
});
