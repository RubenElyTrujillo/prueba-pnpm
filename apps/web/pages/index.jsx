import React from 'react'
import Client from '../libs/Client'
import Template from '../template/Template'
import Cover from '../src/componentes/cover/Cover'
import Expertos from '../src/componentes/expertos/Expertos'
import Temario from '../src/componentes/temario/Temario'
import Inversion from '../src/componentes/inversion/Inversion'
import Curso from '../src/componentes/curso/Curso'
import Aprender from '../src/componentes/aprender/Aprender'
import Instructor from '../src/componentes/instructor/Instructor'
import Pregunta from '../src/componentes/pregunta/Pregunta'
import Carousel from '../src/componentes/carousel/Carousel'
import Contacto from '../src/componentes/contacto/Contacto'
import Texto from '../src/componentes/texto/Texto'

function Index({ home }){
    console.log(home)
    return(
        <Template title={home.title} description={home.metadescription} keywords={home.keywords} >
            <Cover />
            <Expertos title1={home.titulo1} title2={home.titulo2} title3={home.titulo3} />
            <Temario dias={home.dias} />
            <Inversion titlePrecio={home.titlePrecio} titlePrecioCrypto={home.titlePrecioCrypto} precio={home.precio} precioCrypto={home.precioCrypto} adicionalPrecioCrypto={home.adicionalPrecioCrypto} />
            <Curso  aprende={home.aprender} />
            <Instructor instructor={home.instructor} />
            <Aprender ventajas={home.ventajas} />
            <Pregunta />
            <Carousel opiniones={home.opiniones} />
            <Contacto months={home.Months} />
            <Texto />
        </Template>
    )
}

export async function getServerSideProps(){
    const home = await Client.fetch(
        `
            *[_type == "home" ][0]{
                ...
            }
        `
    )
    return{
        props: {
            home
        }
    }
}

export default Index