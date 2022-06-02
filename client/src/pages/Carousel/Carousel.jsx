import React from 'react';
/* import { CarouselProps } from './components'; */

import './CarouselStyle.css';

function Carousel () { 
    return ( 
        <div className='body'>
            <div className='title'>
                <p>Dá uma olhada no que rolou nas 
                    edições passadas do evento</p>
            </div>
            <div className='buttonContainer'>
            {/* aqui tenho que puxar três UButton */}
            <p>testando</p>
            </div>
            <div className='cards'>
                <p>alo</p> {/* aqui eu puxo o card assim como o LButton dentro dele */}
            </div>
        </div>
     )
 }

 export default Carousel; 