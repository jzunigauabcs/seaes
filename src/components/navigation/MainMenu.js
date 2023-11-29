import './MainMenu.scss';

import { Link } from "react-router-dom";
import {BsPeople, BsGraphUp, BsPaperclip, BsFileEarmarkCheck} from 'react-icons/bs';
import { TbBooks } from "react-icons/tb";
import {FaPaperclip } from "react-icons/fa6"

export default function MainMenu() {
  return (
    <nav className="main-menu">
      <ul className="nav justify-content-center">
        <li className="nav-item px-2">
          <Link to="/indicadores" className="nav-link text-center">
            Autoevaluación
            <BsFileEarmarkCheck className='icon' />
          </Link>
      </li>
        <li className="nav-item px-2">
          <Link to="#" className="nav-link text-center">
            Dictamen
            <TbBooks className="icon"/>
          </Link>
        </li>
        <li className="nav-item px-2">
          <Link to="#" className="nav-link text-center">
            Mejora Continua
            <BsGraphUp className="icon"/>
          </Link>
        </li>
        <li className="nav-item px-2">
          <Link to="#" className="nav-link text-center">
            Colaboradores
            <BsPeople className='icon'/>
          </Link>
        </li>
        <li className="nav-item px-2">
          <Link to="#" className="nav-link text-center">
            Evidencias Globales
            <FaPaperclip className='icon'/>
          </Link>
        </li>
      </ul>
    </nav>

  ) 
}
