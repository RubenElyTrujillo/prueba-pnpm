import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SmartPhone, Coin1, Coin2, Coin3, Coin4, Coin5, Coin6, AeternumIcon } from 'ui'
import { Parallax  } from 'react-scroll-parallax'
import BlockContent from "@sanity/block-content-to-react"
import { MovingComponent } from 'react-moving-text'
import { useInView } from "react-hook-inview"
import AnimatedText from "react-animated-text-content"


export default function Expertos({ title1, title2, title3 }){
    const [ref, inView] = useInView({ threshold: 0, unobserveOnEnter: true });
    const text1 = <BlockContent blocks={title1} />
    return(
        <section className='block expertos' id='expertos'>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className='flex-row'>
                        <div className='texto'>
                            <div className='texto1' ref={ref}>
                            {inView ?
                                    <MovingComponent
                                        type="slideInFromTop"
                                        duration="1000ms"
                                        delay="0.1s"
                                        direction="alternate"
                                        timing="ease-in-out"
                                        iteration="1"
                                        fillMode="forwards"
                                    >
                                        <BlockContent blocks={title1} />
                                    </MovingComponent>
                                : <div style={{visibility: "hidden"}} ></div>}
                            </div>
                            <div className='texto2' ref={ref}>
                                {inView ?
                                    <MovingComponent
                                        type="slideInFromTop"
                                        duration="1000ms"
                                        delay="0.1s"
                                        direction="alternate"
                                        timing="ease-in-out"
                                        iteration="1"
                                        fillMode="forwards"
                                    >
                                        <BlockContent blocks={title2} />
                                    </MovingComponent>
                                : <div style={{visibility: "hidden"}} ></div>}
                            </div>
                            <div className='texto1 espacio' ref={ref}>
                                {inView ?
                                    <MovingComponent
                                        type="slideInFromTop"
                                        duration="1000ms"
                                        delay="0.2s"
                                        direction="alternate"
                                        timing="ease-in-out"
                                        iteration="1"
                                        fillMode="forwards"
                                    >
                                        <BlockContent blocks={title3} />
                                    </MovingComponent>
                                : <div></div>}
                            </div>
                            <Link href="/#contacto" legacyBehavior>
                                <a>Has llegado con los expertos.</a>
                            </Link>
                        </div>
                        <div className={`imagenes ${inView ? "inView" : ""}`}>
                            <div className='background'>
                                <Parallax speed={3}>
                                    <div className='coin1'>
                                        <Image src={Coin1} fill quality={100}/>
                                    </div>
                                </Parallax>
                                <Parallax speed={2}>
                                    <div className='coin2'>
                                        <Image src={Coin2} fill quality={100}/>
                                    </div>
                                </Parallax>
                                <Parallax speed={4}>
                                    <div className='coin3'>
                                        <Image src={Coin3} fill quality={100}/>
                                    </div>
                                </Parallax>
                                <Parallax speed={5}>
                                    <div className='coin4'>
                                        <Image src={Coin4} fill quality={100}/>
                                    </div>
                                </Parallax>
                                <Parallax speed={5}>
                                    <div className='coin5'>
                                        <Image src={Coin5} fill quality={100}/>
                                    </div>
                                </Parallax>
                                <Parallax speed={3}>
                                    <div className='coin6'>
                                        <Image src={Coin6} fill quality={100}/>
                                    </div>
                                </Parallax>
                                <div className='icono'>
                                    <Parallax speed={3}>
                                        <Image src={AeternumIcon} fill quality={100}/>
                                    </Parallax>
                                </div>
                            </div>
                            <div className='imagen'>
                                <Image src={SmartPhone} fill quality={100}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}