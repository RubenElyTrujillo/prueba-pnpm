import React from 'react'
import Image from 'next/image'
import Title from "react-vanilla-tilt"
import { Logo } from 'ui'
import { buildImages } from '../../../libs/complementos'
import { Parallax  } from 'react-scroll-parallax'
import { useInView } from "react-hook-inview"
import Link from 'next/link'
import AnimatedText from "react-animated-text-content"

export default function Aprender({ ventajas }){
    const [ref, inView] = useInView({ threshold: 0 });
    const options = {
        max: 30,
        scale: 1.0,
        speed: 1000
    };
    return(
        <section className="block aprender" id="aprender">
            <Parallax speed={40}>
                <div className="circulo"></div>
            </Parallax>
            <div className="holder">
                <div className="container-fluid">
                    <div className="title" ref={ref}>
                        <AnimatedText
                            animation={{
                                y: "30px",
                                ease: "ease",
                            }}
                            duration={inView ? 0.8 : 0}
                            interval={0.06}
                            type="words"
                        >
                            Este Curso de Criptomonedas y Blockchain es para ti si:
                        </AnimatedText>
                    </div>
                    <div className="flex-row">
                        {ventajas.map((ventaja, index) =>(
                            <div className='ventaja' key={index}>
                                <div className='icon'>
                                    <Image src={buildImages(ventaja.imagen.asset).url()} fill alt={`icono-${index+1}`} />
                                </div>
                                <div className='content'>
                                    {ventaja.title}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='complemento'>
                        Nuestro Crash Course te brindará los conocimientos, estrategias y la asesoría que requieres para iniciar tu experiencia dentro del mundo crypto.
                    </div>
                    <div className='button'>
                        <Link href="/#contacto" legacyBehavior scroll={false}>
                            <a>Inscríbete al Crash Course</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}