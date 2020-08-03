import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Importamos los helpers
import { obtenerDiffYear, calculaMarca, calculaPlan } from '../Helpers';

import styled from '@emotion/styled';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #e1e1e1;
    --webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margint-top:2em;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 1.5rem;
`;

const Formulario = ({setResumen}) => {

    const [ datos, setDatos ] = useState({
        marca: '',
        year: '',
        plan: ''
    });
    const [ error, setError ] = useState(false);

    // Extraemos los valores del state
    const { marca, year, plan }  = datos;

    // leer los datos del formulario y colocarlos en el state
    const obtenerInformacion =  e => {
        setDatos({
            ...datos,
            [ e.target.name ] : e.target.value
        });
    }

    // cotizamos 
    const cotizarSeguro = e => {
        e.preventDefault();

        if(marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
            setError(true);
            return;
        }
        setError(false);

        // Iniciamos con la base de 1000;
        let resultado = 1000;

        // Obtener la diferencia de años
        const diffYear = obtenerDiffYear(year);
        
        // por cada año restar un 3%
        resultado -= ((diffYear * 3) * resultado ) / 100;

        // Marca incrementa A 15 E 40 As 5%
        resultado = calculaMarca(marca) * resultado;
        
        // Basico 20% Completo 50%
        const incrementoPlan = calculaPlan(plan);
        resultado = parseFloat( incrementoPlan * resultado ).toFixed(2);

        // Total
        console.log(resultado)
        setResumen({
            cotizacion: resultado,
            datos: datos
        });
    }

    return (
        <form
            onSubmit={ cotizarSeguro }
        >
            { error ? <Error>Todos los campos son obligatorios </Error> : null}

            <Campo>
                <Label>Marca</Label>
                <Select 
                    name="marca"
                    value={marca}
                    onChange={ obtenerInformacion }
                >
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={ obtenerInformacion }
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio" 
                    name="plan" 
                    value="basico"
                    checked={plan === 'basico'}
                    onChange={ obtenerInformacion }
                />Básico
                <InputRadio 
                    type="radio" 
                    name="plan" 
                    value="completo"
                    checked={plan === 'completo'}
                    onChange={ obtenerInformacion }
                />Completo
            </Campo>

            <Boton type="submit" >Cotizar</Boton>
        </form>
    );
}

Formulario.propTypes = {

}

export default Formulario;