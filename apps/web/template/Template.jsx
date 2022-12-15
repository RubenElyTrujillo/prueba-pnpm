import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../src/componentes/footer/Footer'
import Navbar from '../src/componentes/navbar/Navbar'
import { Whats } from 'ui'

export default function Template({ children, title, description, keywords }){
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="shortcut icon" href="/FAVICON.jpg" type="image/x-icon" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content="/SOCIAL-1.jpg" />
                <meta property="og:url" content="" />
                <meta property="og:site_name" content="Aeternum" />

            </Head>
            <Navbar />
            <div className='outer-wrapper'>
                {children}
            </div>
            <Footer />
            <div className='button-float'>
                <a href="#contacto">Inscribirme al Crash Course</a>
                <a href="https://wa.me/525629776426" className='whats'>
                    <Image src={Whats} fill alt='Icono whatsapp' />
                </a>
            </div>
        </>
    )
}