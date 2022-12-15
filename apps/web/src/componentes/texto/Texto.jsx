import React from 'react'
import { Parallax  } from 'react-scroll-parallax'

export default function Texto(){
    return(
        <section className="block texto" id="texto">
            <Parallax speed={-5}>
                <div className='circulo'></div>
            </Parallax>
            <div className="holder">
                <div className="container-fluid">
                    <div className='text'>
                        En Aeternum nos ofrecemos cursos de criptomonedas, cursos de criptomonedas para principiantes, cursos de inversión en criptomonedas, cursos online criptomonedas, cursos de blockchain, blockchain en español, curso de blockchain y criptomonedas, además podrás aprender sobre bitso impuestos, impuestos criptomonedas, tratamiento fiscal de las criptomonedas e impuestos sobre criptomonedas. 
                    </div>
                </div>
            </div>
        </section>
    )
}