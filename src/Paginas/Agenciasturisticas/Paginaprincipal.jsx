import React from 'react';
import ContenedorAgencias from './Componentes/ContenedorAgencias/ContenedorAgencias-Comp';


 const Paginaprin = () =>{

let agencias=[
         
        {   id:'ag1',
            name :'Aviatur',
            planturistico:[
              {   id:'pl1',
                  name: 'guajira', 
                  clientes:[{ id:'cl1',
                            name: 'geraldy',
                            edad: 22,
                        },
                        {   id:'cl2',
                            name: 'Antonio',
                            edad: 20,
                        },
                        {   id:'cl3',
                            name: 'Karol',
                            edad: 19,
                        },
                    ]
              }
            ]
    
        },

         {  id:'ag2',
            name :'Alcones',
            planturistico:[
              {   id:'pl2',
                  name: 'manizales', 
                  clientes:[{ 
                      id:'cl4',
                      name: 'Andrea',
                      edad: 30,
                  },
                  { id:'cl5',
                    name: 'Lina',
                    edad: 18,
                },
                {   id:'cl6',
                    name: 'Pablo',
                    edad: 30,
                },
                ]
              }
            ]
         },

         {  id:'ag3',
            name :'Onvacation',
            planturistico:[
              {   id:'pl3',
                  name: 'Medellin', 
                  clientes:[{ 
                      id:'cl7',
                      name: 'Jose',
                      edad: 15,
                  },
                  { id:'cl8',
                    name: 'Sandra',
                    edad: 18,
                },
                {   id:'cl9',
                    name: 'Manuel',
                    edad: 23 ,
                },
                ]
              }
            ]
         },
    ];

    return (
      <div>
        <ContenedorAgencias PlanesTuristico={agencias}/>
      </div>  
    );
}

export default Paginaprin;