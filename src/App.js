import React, { useState } from 'react';
import Header from './Header';

import styled from '@emotion/styled';

// Importamos los componentes personalizados
import Formulario from './Formulario';
import Resumen from './Resumen';
import Resultado from './Resultado';
import Spinner from './Spinner';


const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [cargando, setCargando] = useState(false);

  const { datos, cotizacion } = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />

      <ContenedorFormulario>

        <Formulario
          setResumen={setResumen}
          setCargando={setCargando}
        />

        {
          cargando ? <Spinner /> : null

        }

        {
          !cargando
          ?
            <div>
              <Resumen datos={datos} />
              <Resultado cotizacion={cotizacion} />
            </div>
            :
            null
        }

      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
