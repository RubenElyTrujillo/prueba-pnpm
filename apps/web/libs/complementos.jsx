import Client from './Client'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from "@sanity/block-content-to-react"
const builder = imageUrlBuilder(Client)

export function buildImages(source){
    const img = builder.image(source)
    return img
}

export function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}

export function Fecha(dato){
    var meses = [
        "Enero", "Febrero", "Marzo",
        "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Septiembre", "Octubre",
        "Noviembre", "Diciembre"
    ]
    let fecha = new Date(dato)
    let dia = fecha.getDate()
    let mes = fecha.getMonth()
    let ano = fecha.getFullYear()
    let CompleteDate = dia + " " + meses[mes] + " " + ano
    return CompleteDate
}

export function useConvertText({ text }){
    return <BlockContent blocks={text} />
}