import { Button, Modal, Row, Col, Form, Image } from "react-bootstrap";
import imageUpload from '../../assets/images/uploadFiles.jpg';

export default function ModalIndicador({show, programa, valor, handleClose}) {
  return(
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
          <Modal.Title>{programa}/{valor}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <strong className="d-block">¿Incorpora los rasgos?</strong>
            <Form.Check 
              type='checkbox'
              label="Si"
              className="d-inline-block me-3"
            />
            <Form.Check 
              type='checkbox'
              label="No"
              className="d-inline-block"
            />
          </Col>

        </Row>
        <Row className="mt-4">
          <Col>
            <strong className="d-block">Rasgos del perfil de egreso para indicador de formación personal:</strong>
            <Form.Check 
              type='checkbox'
              label="Construcción de una conciencia histórica que contribuya al mejoramiento de los ámbitos social, educativo, cultural, ambiental, económico y político."
              className="d-block me-3"
            />
            <Form.Check 
              type='checkbox'
              label="Impulso de la responsabilidad ciudadana y participación democrática, en el contexto de las problemáticas más sensibles de las comunidades cercanas."
              className="d-block me-3"
            />
            <Form.Check 
              type='checkbox'
              label="Comprensión de la interacción entre la naturaleza y la sociedad, para garantizar la preservación de entorno natural y promover estilos de vida sostenible."
              className="d-block me-3"
            />
            <Form.Check 
              type='checkbox'
              label="Contribución a la resolución de las crisis ambientales (cambio climático, biodiversidad, agua, entre otras)."
              className="d-block me-3"
            />
            <Button variant="secondary">+Agregar nuevo rasgo</Button>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Form.Label style={{fontWeight: 800}}>Comentarios:</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <strong className="d-block">Evidencias</strong>
            <Image src={imageUpload} style={{width: "100%"}}/>
          </Col>
        </Row>

      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary"  onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
    </Modal>
  );
}
