import { useState } from 'react';
import Layout from "../../components/layout/Layout";
import { Container } from "react-bootstrap";
import {fetchAll } from '../../services/indicadores.service';
import TituloAmbito from '../../components/indicador/TituloAmbito';
import Indicador from '../../components/indicador/Indicador';

export default function Indicadores() {
  
  const [data, setData] = useState(fetchAll());
  return (
    <Layout>
     <Container className="pt-5">
        {data.map(d => {
          return(
            <section key={d.id} className="mt-5">
              <TituloAmbito>
                {d.ambito}
              </TituloAmbito>
              {d.indicadores.map(i => {
                return (
                <Indicador indicador={i} key={i.numero} ambito={d.ambito.type}/>
                );
              })}
              </section>
          )
        })}
     </Container>
    </Layout>
  );
}
