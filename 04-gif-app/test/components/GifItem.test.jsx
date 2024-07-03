import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en el componente <GifItem />", () => {
  const title = "XDXDXD";
  const url = "https://fast&furious.com/XDXDXD.jpg";

  test("Debe de hacer match con el SnapShot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
});
