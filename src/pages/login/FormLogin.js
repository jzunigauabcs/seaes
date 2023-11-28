import { Form, Button } from 'react-bootstrap';
import './FormLogin.scss';

function handleLogin(e) {
  e.preventDefault();
  const email = document.querySelector('#tbxEmail');
  const password = document.querySelector('#tbxPassword');
  
  if(email.value === 'usuario@mail.com' && password.value === 'user123') 
    console.log('Bienvenido');
  else 
    console.log('Usuario o contraseña incorrectos');
}

export default function formLogin() {
  return(
    <Form className="formLogin" onSubmit={handleLogin}>
      <Form.Group className="mb-2" controlId="tbxEmail">
        <Form.Label>Usuario:</Form.Label>
        <Form.Control type="email" placeholder='name@mail.com' />
      </Form.Group>
      <Form.Group className='mb-2' controlId='tbxPassword'>
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" bg="pantone-7421" />
      </Form.Group>
      <Button variant="success" type="submit">Ingresar</Button>
    </Form>
  );
}
