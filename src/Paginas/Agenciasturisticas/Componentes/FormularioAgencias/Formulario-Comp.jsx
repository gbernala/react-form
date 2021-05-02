import React, { useState } from 'react';
import PlanTuristico from '../PlanTuristico/PlanTuristico-Comp';
import './Formulario-Estilo.css';
 const FormAgencias = (props) =>{

   const [Agencias,setagencias]= useState ('ag1');
   const [PlanesTuristicos,setplanesturisticos]= useState ('pl1');
   const [name,setname]= useState ();
   const [edad,setedad]= useState ();

   const addAgencia = (event)=>{
      event.preventDefault();
      console.log('Agencias '+ Agencias);
      console.log('planturistico'+ PlanesTuristicos);
      console.log('name '+ name);
      console.log('edad '+ edad);
   }
    return (
        <div className='FormularioAgencias'>
         <form>
            <h1>
            AGENCIAS 
            </h1>
      <br/>
               <span>
               Agencias
               </span>
                
            <br/>
               <select
                value={Agencias}
                onChange={(event)=>{
                   setagencias(event.target.value);
                   
                }
               }
               >

               <option value='age1'>Aviatur</option>
               <option value='age2'>Alcones</option>
               <option value='age3'>Onvacation</option>
            </select>
               
            <br/>
                <span>
               Planes Turisticos
               </span>
                
            <br/>
               <select
                value={PlanesTuristicos}
                onChange={(event)=>{
                   setplanesturisticos(event.target.value);
                   
                }
               }
               >
               <option value='pl1'>Guajira</option>
               <option value='pl2'>Manizales</option>
               <option value='pl3'>Medellin</option>
            </select>
            
            <br/>
            <span>
               Nombre del cliente
            </span>

            <br/>

      <input type ='text'
             value={name}
             onChange={(event)=>{
                setname(event.target.value);
                
             }
            }
              
              />


      <br/>
      <span>Edad</span>

      <br/>
      <input type ='number'
       value={edad}
       onChange={(event)=>{
          setedad(event.target.value);
          
       }
      }
      />
            
            <br/>
            <button
            onClick={addAgencia}
            >Agregar</button>
         </form>
        </div>
     );
}

export default FormAgencias;