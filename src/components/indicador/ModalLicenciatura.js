import { Button, Modal, Row, Col, Form, Image } from "react-bootstrap";

export default function ModalLicenciatura({show, nivel, handleClose}) {
  return(
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
          <Modal.Title>Agregar {nivel}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <strong>Nombre:</strong>
            <Form.Control
              type='input'
              className=""
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <strong >Facultad:</strong>
            <Form.Control
              type='input'
              className=""
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <strong >Campus:</strong>
            <Form.Control
              type='input'
              className=""
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <strong >Ciudad:</strong>
            <Form.Control
              type='input'
              className=""
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <strong >Plan:</strong>
            <Form.Control
              type='number'
              className=""
            />
          </Col>
        </Row>
      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
    </Modal>
  );
}
