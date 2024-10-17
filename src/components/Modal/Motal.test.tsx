import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Modal } from "./Modal";

describe("Modal Component", () => {
  it("should not render modal when isOpen is false", () => {
    render(
      <Modal isOpen={false} onClose={jest.fn()}>
        <div>Modal Content</div>
      </Modal>
    );

    // Verificar se o modal não está no DOM
    expect(screen.queryByText("Modal Content")).toBeNull();
  });

  it("should render modal when isOpen is true", () => {
    render(
      <Modal isOpen={true} onClose={jest.fn()}>
        <div>Modal Content</div>
      </Modal>
    );

    // Verificar se o modal está no DOM
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("should not call onClose when clicking inside modal content", () => {
    const handleClose = jest.fn();

    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Conteudo do modal</div>
      </Modal>
    );

    // Simula o clique dentro do conteúdo do modal
    fireEvent.click(screen.getByText("Conteudo do modal"));
    expect(handleClose).not.toHaveBeenCalled();
  });

  it("should close modal when Esc key pressed", () => {
    const handleClose = jest.fn();

    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Modal Content</div>
      </Modal>
    );

    // Simula o pressionamento da tecla "Esc"
    fireEvent.keyDown(document, { key: "Escape", code: "Escape" });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
