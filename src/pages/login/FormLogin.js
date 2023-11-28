import { Form, Button } from 'react-bootstrap';
import './FormLogin.scss';

export default function formLogin() {
  return(
    <Form className="formLogin">
      <Form.Group className="mb-2" controlId="tbxEmail">
        <Form.Label>Usuario:</Form.Label>
        <Form.Control type="email" placeholder='name@mail.com' />
      </Form.Group>
      <Form.Group className='mb-2' controlId='tbxPassword'>
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" bg="pantone-7421" />
      </Form.Group>
      <Button variant="success">Ingresar</Button>
    </Form>
  );
}
