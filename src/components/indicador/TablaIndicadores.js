import { Table } from "react-bootstrap"
import { FaCheck } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { FaRegFolder } from "react-icons/fa";
import { BsPersonFillAdd } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import ModalIndicador from "./ModalIndicador"; 
import { useState } from "react";

export default function TablaIndicadores({detalle}) {
  const [show, setShow] = useState(false);
  const [programa, setPrograma] = useState('');
  const [valor, setValor] = useState('');

  const handleShow = (event, {programa, val}) => {

    setShow(true);
    setPrograma(programa);
    setValor(val);
  };

  const handleClose = () => {
    setShow(false);
  }

  function getIconStatus(status, programa, val) {
    if(status === 1)
      return <FaCheck className="check" style={{color: 'green', cursor: 'pointer'}} onClick={event => handleShow(event, {programa, val})}/>;
    else if(status === 2)
      return <RxCross1 className="cross" style={{color: 'red', cursor: 'pointer'}} onClick={event => handleShow(event, {programa,val})}/>
    return <FaRegFolder style={{color: 'black', cursor: 'pointer'}} onClick={event => handleShow(event, {programa, val})}/>;
  }

  return (
    <>
    <Table hover>
      <thead>
        <tr className="text-center align-middle">
          <th></th>
          <th></th>
          <th>Programa educativo</th>
          <th>Responsabilidad Social</th>
          <th>Equidad Social y de Género</th>
          <th>Inclusión</th>
          <th>Excelencia</th>
          <th>Vanguardia</th>
          <th>Innovación Social</th>
          <th>Interculturalidad</th>
        </tr>
      </thead>
      <tbody>
        {
          detalle.map(d => {
            return(
              <tr key={d.nombre} className="text-center align-middle">
                <td><BsPersonFillAdd/></td>
                <td><CiMenuKebab /></td>
                <td>{d.nombre}</td>
                <td>{getIconStatus(d.status[0], d.nombre, "Responsabilidad Social")}</td>
                <td>{getIconStatus(d.status[1], d.nombre, "Equidad Social y de Género")}</td>
                <td>{getIconStatus(d.status[2], d.nombre, "Inclusión")}</td>
                <td>{getIconStatus(d.status[3], d.nombre, "Excelencia")}</td>
                <td>{getIconStatus(d.status[4], d.nombre, "Vanguardia")}</td>
                <td>{getIconStatus(d.status[5], d.nombre, "Innovación Social")}</td>
                <td>{getIconStatus(d.status[6], d.nombre, "Interculturalidad")}</td>
              </tr>
            );
          })
        }
      </tbody>
    </Table>
     <ModalIndicador show={show} programa={programa} handleClose={handleClose} valor={valor}/>
    </>
  )
}
