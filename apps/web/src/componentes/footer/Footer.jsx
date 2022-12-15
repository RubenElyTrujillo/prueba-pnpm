import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AeternumAcedemyLogo, GoplekLogo, TexturaFooter, Boreal } from 'ui'

export default function Footer(){
    return(
        <footer className="block footer" id="footer">
            <div className='textura'>
                <Image src={TexturaFooter} fill alt='Textura footer' />
            </div>
            <div className="holder">
                <div className="container-fluid">
                    <div className='logo'>
                        <Image src={AeternumAcedemyLogo} fill alt='Logo Aeternum' />
                    </div>
                    <div className="text">
                        Nuestro Crash Course de criptomonedas y blockchain te brinda los conocimientos, estrategias y la asesoría que requieres para iniciar tu experiencia dentro del mundo crypto.
                    </div>
                    <div className='derechos'>
                        <div className="derechos-reservados">
                            Aeternum 2022. · Todos los derechos reservados. <br />
                            <Link href="/aviso">
                            AVISO DE PRIVACIDAD.
                            </Link>
                        </div>
                        <div className="logo">
                            <a href="https://www.goplek.com/">
                                <Image src={Boreal} fill alt="Logo Goplek" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}