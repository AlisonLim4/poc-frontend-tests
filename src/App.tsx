import Carousel from "./components/Carousel/Carousel";
import { Input } from "./components/Form/Input";
import { Button } from "./components/Form/Button";
import { useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal/Modal";
function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit() {
    alert(`Usuário: ${email}\n Senha: ${senha} `);
  }

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  return (
    <div className="main-container">
      <div className="form-container">
        <form>
          <fieldset>
            <legend>Teste Frontend</legend>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Digite seu email"
            />
            <Input
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              type="password"
              placeholder="Digite sua senha"
            />
            <Button onClick={handleSubmit}>Enviar</Button>
          </fieldset>
        </form>
      </div>

      <Carousel />

      <div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <h2>Conteúdo do Modal</h2>
          <p>Este é um exemplo de modal simples com React.</p>
        </Modal>
        <div style={{ width: "200px" }}>
          <Button onClick={handleOpenModal}>Abrir Modal</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
