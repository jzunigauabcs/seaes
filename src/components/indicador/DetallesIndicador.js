import { useState } from "react";
import { Button, Tab, Tabs, Row, Col, Image } from "react-bootstrap";
import { fetchDetallesIndicadores } from "../../services/indicadores.service";
import TablaIndicadores from "./TablaIndicadores";
import graficaImg from '../../assets/images/grafica.jpg';
import ModalLicenciatura from "./ModalLicenciatura";

export default function DetallesIndicador({ambito}) {

  const toCapitalize = (text) => { 
    return`${text.charAt(0).toUpperCase()}${text.slice(1)}`
  }

  const detallesIndicadores = fetchDetallesIndicadores();
  const [key, setKey] = useState(detallesIndicadores[0].nivel);
  const [show, setShow] = useState(false)
  const [nivel, setNivel] = useState('');

  const handleShow = (e, param) => {
    setShow(true);
    setNivel(param);
  }

  const handleClose = () => {
    setShow(false);
  }

  return (
    <>
    <Tabs
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      {detallesIndicadores.map(n => {
        return(
          <Tab key={n.nivel} eventKey={n.nivel} title={`${toCapitalize(n.nivel)}`}>
            <TablaIndicadores detalle={n.detalles} />
            <Button variant="secondary" 
              onClick={function(e) {
                const niv = toCapitalize(n.nivel);
                return handleShow(e, niv)
              }} 
            >
              + Agregar {toCapitalize(n.nivel)}
            </Button>
            <Row className="mt-4 flex-column">
              <Col className="bg-secondary text-white p-2 d-block"><strong>{n.nivel.toUpperCase()}</strong></Col>
              <Col style={{border: "1px solid rgb(108,117,125)" }}>
                <Image src={graficaImg} />
              </Col>
            </Row>
          </Tab>
        )
      })}
    </Tabs>
      <ModalLicenciatura show={show} nivel={nivel} handleClose={handleClose}/>
    </>
  );
}
