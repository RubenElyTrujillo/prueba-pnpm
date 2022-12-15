import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import '../src/styles/global.scss'
import 'swiper/css'
import "swiper/css/effect-creative"
import "swiper/css/navigation"

export default function MyApp({ Component, pageProps }) {
    return(
        <PayPalScriptProvider options={{ "client-id": "AYMprwST6h7ZarJYCALE4AjhOg8Xilbls21O109JGDeM0V5AFDeuQW8Z18wI-jj3bOvM6hzLgEBeaJ05", currency: "MXN" }}>
            <ParallaxProvider>
                <Component {...pageProps} />
            </ParallaxProvider>
        </PayPalScriptProvider>
    )
}