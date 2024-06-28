import { useState } from 'react';
import PageUser from '../components/PageUser';
import ButtonDefaultStyled from '../components/ButtonDefaultStyled';
import InputTypeStyled from '../components/InputType';
import H1 from '../components/h1Styled';
import FormStyled from '../components/FormStyled';
import { Link } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [REpassword, setREPassword] = useState<string>('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    alert(`Usúario: ${username} cadastrado com sucesso`);
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
            <InputTypeStyled placeholder="Repita a senha" onChange={e => setREPassword(e.target.value)} type="password" value={REpassword} />
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <Link to={'/'}>
                <ButtonDefaultStyled label='Voltar' type='button'/>
            </Link>
            <ButtonDefaultStyled type="submit" label="Cadastrar" />
          </div>
        </FormStyled>
      </PageUser>
  );
}

export default Register;
