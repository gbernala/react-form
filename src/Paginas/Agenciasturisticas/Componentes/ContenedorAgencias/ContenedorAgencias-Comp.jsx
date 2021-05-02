import React from 'react';
import FormAgencias from '../FormularioAgencias/Formulario-Comp';
import ListadoAgencias from '../ListadoAgencias/ListadoAgencias-Comp';
import './ContenedorAgencias-Estilo.css';
 const ContenedorAgencias = (props) =>{


    return (
        <div className='Agen-contenedor'>
           <FormAgencias/>
           <ListadoAgencias PlanesTuristico={props.PlanesTuristico}/>
        </div>
     );
}

export default ContenedorAgencias;