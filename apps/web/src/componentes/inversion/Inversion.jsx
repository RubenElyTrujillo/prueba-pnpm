import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SmartPhone2 } from 'ui'
import { Parallax  } from 'react-scroll-parallax'
import { useInView } from "react-hook-inview"
import { separator } from '../../../libs/complementos'

export default function Inversion({ titlePrecio, titlePrecioCrypto, precio, precioCrypto, adicionalPrecioCrypto}){
    const [ref, inView] = useInView({ threshold: 0 });
    return(
        <section className='block inversion' id='inversion'>
            <div className="holder">
                <div className="container-fluid">
                    <div className="flex-row">
                        <div className='inversion'>
                            <div className='title' ref={ref}>
                                <p className={inView ? "isActive" : ""}>Inversión</p>
                            </div>
                            <div className='precios'>
                                <div className="transferencia">
                                    <div className='costo'><strong>$</strong> {separator(precio)} <span>MXN</span></div>
                                    <div className="titulo">{titlePrecio}</div>
                                </div>
                                <div className="crypto">
                                    <div className='costo'><strong>$</strong> {separator(precioCrypto)} <span>MXN</span></div>
                                    <div className="titulo">{titlePrecioCrypto}</div>
                                    <div className="subtitulo">{adicionalPrecioCrypto}</div>
                                </div>
                            </div>
                            <div className='terminos'>
                                Si deseas cancelar tu participación favor de hacerlo mínimo con 3 días de anticipación. Una vez realizada la operación de crypto, no hay devolución.
                            </div>
                            <div className='button'>
                                <Link href="/#contacto" legacyBehavior>
                                    <a>Inscríbete al Crash Course</a>
                                </Link>
                            </div>
                        </div>
                        <div className={`imagen ${inView ? "View" : ""}`}>
                            <div className="background">
                                <Parallax speed={-5}>
                                    <div className='circulo1'></div>
                                </Parallax>
                            </div>
                            <Parallax speed={-3}>
                                <div className='circulo2'></div>
                            </Parallax>
                            <div className="img">
                                <Image src={SmartPhone2} fill alt='SmartPhone' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}