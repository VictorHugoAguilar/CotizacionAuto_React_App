import React from 'react';
import Header from './Header';

import styled from '@emotion/styled';
import Formulario from './Formulario';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {
  return (
    <Contenedor>
        <Header titulo="Cotizador de Seguros"/>

        <ContenedorFormulario>
          <Formulario />
        </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
