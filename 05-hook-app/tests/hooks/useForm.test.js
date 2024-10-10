import { act, renderHook } from "@testing-library/react";
import useForm from "../../src/hooks/useForm";

describe("Pruebas en el useForm", () => {
  const initialForm = {
    name: "Jhon Doe",
    email: "jhonDoe@example.com",
  };

  test("Debe de retonar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("Debe de cambiar el valor del formulario", () => {
    const newValue = "Juan Perez";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({
        target: {
          name: "name",
          value: newValue,
        },
      });
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });

  test("Debe de reestablecer el formulario con RESET", () => {
    const newValue = "Juan Perez";
    const { result } = renderHook(() => useForm(initialForm));
    const { onResetForm, onInputChange } = result.current;

    act(() => {
      onInputChange({
        target: {
          name: "name",
          value: newValue,
        },
      });
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.email).toBe(initialForm.email);
    expect(result.current.formState).toEqual(initialForm);
  });
});
