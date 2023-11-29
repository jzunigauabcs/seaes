import { Accordion } from "react-bootstrap";
import DetallesIndicador from "./DetallesIndicador";

export default function Indicador({indicador, ambito}) {
  return(
    <Accordion className="mb-3">
      <Accordion.Item eventKey={indicador.numero}>
        <Accordion.Header className="flex-column">
          <strong>{ `${indicador.numero}. ${indicador.nombre}`}</strong>
          <p>{indicador.descripcion}</p>
        </Accordion.Header>
        <Accordion.Body>
          <section className="detalle-indicador">
            <strong>Nivel</strong>
           <DetallesIndicador ambito={ambito} />
          </section>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
