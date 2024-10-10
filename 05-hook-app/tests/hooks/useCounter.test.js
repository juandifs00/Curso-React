import { act, renderHook } from "@testing-library/react";
import useCounter from "../../src/hooks/useCounter";

describe("Pruebas en el useCounter", () => {
  test("Debe de retonar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("Debe de generar el counter en 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test("Debe de incrementar el counter en 1 y en 2", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, increment } = result.current;

    act(() => {
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(103);
  });

  test("Debe de decrementar el counter en 1 y en 2", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, decrement } = result.current;

    act(() => {
      decrement();
      decrement(2);
    });

    expect(result.current.counter).toBe(97);
  });

  test("Debe de resetear el counter a 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, reset, decrement, increment } = result.current;

    act(() => {
      decrement();
      increment();
      reset();
    });

    expect(counter).toBe(100);
  });
});
