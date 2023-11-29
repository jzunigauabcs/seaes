import { getClassByType } from "../../utils/colorAmbito";
import './Indicador.scss';

export default function TituloAmbito({children}) {
  return (
    <>
    {children.map(ambito => {
      return (
        <h2 key={ambito.id} className={`ambito-title title-${getClassByType(ambito.type)}`}>{ambito.name}</h2>
      )
    })}
    </>
  )
}
