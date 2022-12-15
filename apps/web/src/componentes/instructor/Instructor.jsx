import React from 'react'
import Image from 'next/image'
import { Textura4 } from 'ui'
import { buildImages } from '../../../libs/complementos'

export default function Instructor({ instructor }){
    return(
        <section className="block instructor" id="instructor">
            <div className="textura">
                <Image src={Textura4} fill alt='Textura' />
            </div>
            <div className="holder">
                <div className="container-fluid">
                    <div className='title'>
                        Criptocontador
                    </div>
                    <div className="flex-row">
                        <div className='imagen'>
                            <Image src={buildImages(instructor?.imagen?.asset).url()} fill alt={instructor.nombre} />
                        </div>
                        <div className='content'>
                            <div className='name'>
                                {instructor.nombre}
                            </div>
                            <div className="especializado">
                                {instructor.content?.map((estudio, index) =>(
                                    <div key={index}>{estudio}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}