import Carousel from './components/Carousel/Carousel';
import { Input } from './components/Form/Input';
import { Button } from './components/Form/Button';
import { useState } from 'react';
import './App.css';
function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleSubmit() {
    alert(`Usuário: ${email}\n Senha: ${senha} `);
  }

  return (
    <div className='main-container'>
      <div className='form-container'>
        <form>
          <fieldset>
            <legend>Teste Frontend</legend>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
            />
            <Input
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              type='password'
            />
            <Button onClick={handleSubmit}>Enviar</Button>
          </fieldset>
        </form>
      </div>

      <Carousel />
    </div>
  );
}

export default App;
