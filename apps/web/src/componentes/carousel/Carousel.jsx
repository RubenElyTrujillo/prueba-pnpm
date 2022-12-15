import React from 'react'
import Image from 'next/image'
import BlockContent from "@sanity/block-content-to-react"
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative,Navigation } from "swiper";
import { buildImages } from '../../../libs/complementos'
import { AeternumAcedemy } from 'ui'

export default function Carousel({opiniones}){
    return(
        <section className="block carousel" id="carousel">
            <Swiper
                navigation={true}
                grabCursor={true}
                effect={"creative"}
                creativeEffect={{
                prev: {
                    shadow: true,
                    translate: ["-20%", 0, -1],
                },
                next: {
                    translate: ["100%", 0, 0],
                },
                }}
                modules={[EffectCreative, Navigation]}
                className="carousel"
            >
                {opiniones?.map((opinion, index) =>(
                    <SwiperSlide key={index}>
                        <div className='opinion'>
                            <div className='left'>
                                <div className='icono'>
                                    <Image src={AeternumAcedemy} fill alt='Aeternum Acedemy' />
                                </div>
                                <div className='title'>
                                    Lo que nuestros estudiantes dicen…
                                </div>
                            </div>
                            <div className="imagen">
                                <Image src={buildImages(opinion?.imagen?.asset).url()} fill alt={opinion.nombre} />
                            </div>
                            <div className='right'>
                                <div className='content'>
                                    <div className='opi'>
                                        <BlockContent blocks={opinion.content} />
                                    </div>
                                    <div className='nombre'>
                                        - {opinion.nombre}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}