import { Col, Container, Row} from 'react-bootstrap';
import Header from '../../components/Header';
import FormLogin from './FormLogin';
import './Login.css';
export default function Login() {
  return (
    <>
      <Container fluid className="login">
        <Row className='justify-content-center'>
          <Col xs={6} className="login-panel-1">
            <h1 className="login-title-1">SEAS 2003</h1>
            <h3 className="login-title-2">Sistema de Evaluación y Acreditación de la Educación Superior</h3>
            <div className="login-panel-1-bg">

            </div>
          </Col>
          <Col xs={6} className="login-panel-2 flex-column">
            <FormLogin />
            <div>
              <div className="recoveryPass"><a href="#">Recuperar cuenta</a></div>
            </div>

          </Col>
      </Row>
      </Container>
    </>
  )
}