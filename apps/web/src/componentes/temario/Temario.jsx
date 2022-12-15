import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { Textura3 } from 'ui'
import { buildImages } from '../../../libs/complementos'
import { useInView } from "react-hook-inview"
import AnimatedText from "react-animated-text-content"

export default function Temario({ dias }){
    const [ref, inView] = useInView({ threshold: 0, unobserveOnEnter: true });
    const [title, inViewTitle] = useInView({ threshold: 0, unobserveOnEnter: true });
    return(
        <section className='block temario' id='temario'>
            <div className='textura'>
                <Image src={Textura3} fill alt="textura" />
            </div>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className='subtitle' ref={title}>
                        <p className={inViewTitle ? "isActive" : ""}>TEMARIO&nbsp;</p>
                        <p className={inViewTitle ? "isActive" : ""}>Y&nbsp;</p>
                        <p className={inViewTitle ? "isActive" : ""}>COSTOS&nbsp;</p>
                    </div>
                    <div className='title'>
                        <p className={inViewTitle ? "isActive" : ""}>¿Qué&nbsp;</p>
                        <p className={inViewTitle ? "isActive" : ""}>aprenderás&nbsp;</p>
                        <p className={inViewTitle ? "isActive" : ""}>en&nbsp;</p>
                        <p className={inViewTitle ? "isActive" : ""}>nuestro&nbsp;</p>
                        <p className={inViewTitle ? "isActive" : ""}>curso&nbsp;</p>
                        <p className={inViewTitle ? "isActive" : ""}>de&nbsp;</p>
                        <p className={inViewTitle ? "isActive" : ""}>Cripto&nbsp;</p>
                        <p className={inViewTitle ? "isActive" : ""}>y&nbsp;</p>
                        <p className={inViewTitle ? "isActive" : ""}>Blockchain?</p>
                    </div>
                    <div className='flex-row'>
                        {dias?.map((dia, index) =>(
                            <div className='tarjeta' key={index}>
                                <div className='imagen' ref={ref}>
                                    <Image src={buildImages(dia?.imagen?.asset).url()} fill alt={`Dia ${index+1}`} className={`${inView ? "prueba" : ""}`} data-delay={`${index * 1}`}  />
                                </div>
                                <div className='dia'>
                                    <AnimatedText
                                        animation={{
                                            y: "30px",
                                            ease: "ease",
                                        }}
                                        duration={inView ? 0.8 : 0}
                                        interval={0.06}
                                        type="words"
                                    >
                                        {"Bloque "+(index+1)}
                                    </AnimatedText>
                                </div>
                                <div className='title'>
                                    <AnimatedText
                                        animation={{
                                            y: "30px",
                                            ease: "ease",
                                        }}
                                        duration={inView ? 0.8 : 0}
                                        interval={0.06}
                                        type="words"
                                    >
                                        {dia?.title}
                                    </AnimatedText>
                                </div>
                                <div className="subtitle">
                                    <AnimatedText
                                        animation={{
                                            y: "30px",
                                            ease: "ease",
                                        }}
                                        duration={inView ? 0.8 : 0}
                                        interval={0.06}
                                        type="words"
                                    >
                                        {dia?.subtitle}
                                    </AnimatedText>
                                </div>
                                <ul>
                                    {dia?.temario?.map((tema, index) =>(
                                        <li key={index}>
                                            <AnimatedText
                                                animation={{
                                                    y: "30px",
                                                    ease: "ease",
                                                }}
                                                duration={inView ? 0.8 : 0}
                                                interval={0.06}
                                                type="words"
                                            >
                                                {tema}
                                            </AnimatedText>
                                        </li>
                                    ))}
                                </ul>
                                {dia?.title2 ? (
                                    <div className='title'>
                                        <AnimatedText
                                            animation={{
                                                y: "30px",
                                                ease: "ease",
                                            }}
                                            duration={inView ? 0.8 : 0}
                                            interval={0.06}
                                            type="words"
                                        >
                                            {dia?.title2}
                                        </AnimatedText>
                                    </div>
                                ): ""}
                                {dia?.subtitle2 ? (
                                    <div className="subtitle">
                                        <AnimatedText
                                            animation={{
                                                y: "30px",
                                                ease: "ease",
                                            }}
                                            duration={inView ? 0.8 : 0}
                                            interval={0.06}
                                            type="words"
                                        >
                                            {dia?.subtitle2}
                                        </AnimatedText>
                                    </div>
                                ) : ""}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}