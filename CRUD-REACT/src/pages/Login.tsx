import { useState } from 'react';
import PageUser from '../components/PageUser';
import ButtonDefaultStyled from '../components/ButtonDefaultStyled';
import InputTypeStyled from '../components/InputType';
import H1 from '../components/h1Styled';
import FormStyled from '../components/FormStyled';
import { Link } from 'react-router-dom';

function Home() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    alert(`${username} + ${password}`);
  }

  return (
      <PageUser>
        <FormStyled onSubmit={handleSubmit}>
          <H1>Login</H1>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <InputTypeStyled placeholder="Insira o usúario" onChange={e => setUsername(e.target.value)} type="text" value={username} />
            <InputTypeStyled placeholder="Insira a senha" onChange={e => setPassword(e.target.value)} type="password" value={password} />
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <ButtonDefaultStyled type="submit" label="Login" />
            
              <Link to={'/register'}><ButtonDefaultStyled type="button" label="Cadastro" /></Link>

          </div>
        </FormStyled>
      </PageUser>
  );
}

export default Home;
