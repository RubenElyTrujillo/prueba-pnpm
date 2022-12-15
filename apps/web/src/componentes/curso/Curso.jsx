import React from 'react'
import Image from 'next/image'
import { Textura1, Textura2, Logo } from 'ui'
import { useInView } from "react-hook-inview"
import { buildImages } from '../../../libs/complementos'
import AnimatedText from "react-animated-text-content"
import Title from "react-vanilla-tilt"


export default function Curso({ aprende }){
    const [ref, inView] = useInView({ threshold: 0 });
    const options = {
        max: 30,
        scale: 1.0,
        speed: 1000
    };
    return(
        <section className="block curso" id="curso">
            <div className='textura1'>
                <Image src={Textura1} fill alt="Textura" />
            </div>
            <div className='textura2'>
                <Image src={Textura2} fill alt="Textura" />
            </div>
            <div className="holder">
                <div className="container-fluid">
                    <div className='title' ref={ref}>
                        <AnimatedText
                            animation={{
                                y: "30px",
                                ease: "ease",
                            }}
                            duration={inView ? 0.8 : 0}
                            interval={0.06}
                            type="words"
                        >
                            ¿De quién vas a aprender?
                        </AnimatedText>
                    </div>
                    <div className='logo'>
                        <Image src={Logo} fill alt='Logo Aeternum' />
                    </div>
                    <div className='text'>
                        Somos una empresa con <span>más de 10 años de experiencia</span> en la industria Blockchain, misma que nos ha permitido desarrollar <span>nuestra propia metodología: Learn, Earn & Protect</span>
                    </div>
                    <div className='flex-row'>
                        {aprende.map((apre, index) =>(
                            <Title className="tilt" options={options}>
                                <div className="tarjeta" key={index}>
                                    <div className='icono'>
                                        <Image src={buildImages(apre?.imagen?.asset).url()} fill alt={`Icono-${index+1}`} />
                                    </div>
                                    <div className="content-title">
                                        {apre.title}
                                    </div>
                                    <div className="content">
                                        {apre.content}
                                    </div>
                                </div>
                            </Title>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}