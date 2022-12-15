import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Template from '../template/Template'
import Client from '../libs/Client'
import { Fecha } from '../libs/complementos'
import BlockContent from "@sanity/block-content-to-react"
import { TexturaFooter } from 'ui'
import Texto from '../src/componentes/texto/Texto'

function Aviso({ pagina }){
    console.log(pagina)
    return(
        <Template title={pagina.title+" | Aeternum"}>
            <section className="block aviso" id="aviso">
                <div className='textura'>
                    <Image src={TexturaFooter} fill alt='Textura' />
                </div>
                <div className="holder">
                    <div className="container-fluid">
                        <div className='title'>
                            {pagina.title}
                        </div>
                        <div className="fecha">
                            Ultima actualización el {Fecha(pagina._updatedAt)}
                        </div>
                        <div className='content'>
                            <BlockContent blocks={pagina.content} />
                        </div>
                        <div className="button">
                            <Link href="/" legacyBehavior>
                                <a>Regresar</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Texto />
        </Template>
    )
}

export async function getServerSideProps(){
    const pagina = await Client.fetch(
        `
            *[_type == "aviso" ][0]{
                ...
            }
        `
    )
    return{
        props: {
            pagina
        }
    }
}

export default Aviso