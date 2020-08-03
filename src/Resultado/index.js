import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// Importamos emotion para style component
import styled from '@emotion/styled';

const Mensaje = styled.p`
    background-color: rgb(127,224,237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127,224,237);
    margin-top: 1rem;
    position: relative;
`;

const TextoCotizacion = styled.p`
    color: #00838F;
    padding: 1rem;
     text-transform: uppercase;
     font-weight: bold;
     margin: 0;

`;

const Resultado = ({ cotizacion }) => {

    // Comprobamos que tenemos datos si no no mostramos nada
    if (cotizacion === 0) {
        return (<Mensaje>Elige marca, año, y tipo de seguro</Mensaje>);
    }

    return (
        <ResultadoCotizacion>
            <TransitionGroup
                className="resultado"
                component="span"
            >
                <CSSTransition
                    key={cotizacion}
                    timeout={{ enter: 500, exit: 500 }}
                    className="resultado"
                >
                    <TextoCotizacion> El total es: $ <span> {cotizacion} </span>  </TextoCotizacion>
                </ CSSTransition>
            </ TransitionGroup>
        </ResultadoCotizacion>
    );

}

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}

export default Resultado;