import {useLocation} from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Header.scss';
import logoSep from '../../assets/images/logoSep.PNG';
import logoUABCS from '../../assets/images/logoUABCS.PNG';
import logoUan from '../../assets/images/logoUAN.png';
import logoUas from '../../assets/images/logoUAS.PNG';

export default function Header() {
  const {pathname} = useLocation();
  //const widthCol = pathname === '/' ? 'col-12' : 'col-6';
  const direction = pathname === '/' ? 'flex-column' : 'flex-row-reverse';
  return(

    <header>
      <Container fluid>
      <Row className={direction}>
      <Col className={`logos d-flex justify-content-center align-items-center`} >
        <Image className="logos-oficiales" src={logoSep}/>
        <Image className="logos-oficiales" src={logoUABCS} style={{width: "120px"}}/>
        <Image className="logos-oficiales" src={logoUas} style={{width: "120px"}}/>
        <Image className="logos-oficiales" src={logoUan} style={{width: "50px"}}/>
      </Col>
       <Col className="title">
          <h1 className="text-center py-3 m-0">SEAES 2023</h1>
        </Col>
      </Row>
      </Container>
    </header>
  );
}
