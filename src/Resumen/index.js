import React  from 'react';
import PropTypes from 'prop-types';
import {firstMayus} from '../Helpers';
// Importamos emotion para style component
import styled from '@emotion/styled';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {

    // extraemos los datos
    const { marca, year, plan} = datos;

    // Validamos para mostrar los datos
    if( marca === '' || year === '' || plan === ''){
        return null;
    }

    return (
        <ContenedorResumen>
        <h2>Resumen de Cotizacion</h2>
            <ul>
                <li>Marca: { firstMayus(marca) }</li>
                <li>Plan: { firstMayus(plan) }</li>
                <li>Año del Auto: {year}</li>
            </ul>
        </ContenedorResumen>
    );

}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

export default Resumen;