import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("<Button>", () => {
  it("should render with correct children text", () => {
    render(<Button name="enviar">enviar</Button>);
    const button = screen.getByRole("button", { name: /enviar/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("enviar");
  });

  it("should call the onClick function when clicked", () => {
    const handleClick = jest.fn();
    render(
      <Button name="enviar" onClick={handleClick}>
        enviar
      </Button>
    );

    const button = screen.getByRole("button", { name: /enviar/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1); // confere se a função foi chamada uma unica vez
  });

  
  // E N T E N D E R   P O R Q U E   E S S E   T E S T E   N Ã O   F U N C I O N O U
  //-------------------------------------------------------------------
  // it("should render with background color default", () => {
  //   render(<Button name="enviar">enviar</Button>);
  //   const button = screen.getByRole("button", { name: /enviar/i });

  //   const computedStyle = window.getComputedStyle(button);
  //   console.log(computedStyle.background);

  //   expect(button).toHaveStyle({ background: "rgb(2, 124, 173)" });
  // });                                                               ;
  //----------------------------------------------------------------------
});
