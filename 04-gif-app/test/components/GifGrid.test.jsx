import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en el componente <GifGrid />", () => {
  const category = "Fast & Furious";

  test("Debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("Debe de mostrar items cuando se cargan las imagenes mediante el useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Fast & Furious",
        url: "https://fast&furious.com/XDXDXD.jpg",
      },
      {
        id: "ADC",
        title: "Coca Cola",
        url: "https://cocacola.com/XDXDXD.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
