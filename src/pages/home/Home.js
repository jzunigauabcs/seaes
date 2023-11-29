import Layout from '../../components/layout/Layout' ;
import {Container, Row, Col } from 'react-bootstrap';
import MainMenu from '../../components/navigation/MainMenu';
import './Home.scss';

export default function Home() {
  return (
      <Layout>
        <div className="hero p-5 mb-4">
          <Container fluid className="py-5">
            <h3 className=" col-md-5 mb-3">Bienvenidos al Sistema de Evaluación y Acreditación de la Educación Superior</h3>
            <p>Evaluación de vanguardia, resultados escepcionales</p>
          </Container>
        </div>
        <Container>
          <MainMenu />
        </Container>
      </Layout>
  )
}
