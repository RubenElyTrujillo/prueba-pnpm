import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, BlockChain, Textura3, IconoC, IconoA } from 'ui'
import { Parallax  } from 'react-scroll-parallax'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { PayPalButtons } from '@paypal/react-paypal-js'
import Axios from 'axios'
import { setFips } from 'crypto'

const steps = ["Formulario", "Fromas de pago"]


export default function Contacto({ months }){
    const [ activeStep, setActiveStep ] = useState(0)
    const isLastStep = activeStep === steps.length - 1
    const [ open, setOpen ] = useState(false);
    const [ isHidden, setIsHidden ] = useState(true)
    const validation = Yup.object().shape({
        nombre: Yup.string().required(),
        email: Yup.string().email().required(),
        phone: Yup.string().required(),
        horario: Yup.string().required(),
        aviso: Yup.boolean().oneOf([true])
    })
    const handleOpen = () => {
        setOpen(!open);
    };
    function _renderStepContent(step, errors, touched, months){
        switch (step) {
            case 0:
                return(
                    <>
                        <div className='inputs'>
                            <div className='form-control'>
                                <label htmlFor="nombre" className={`${errors.nombre && touched.nombre ? ("isError") : null}`}>Nombre*</label>
                                <Field type="text" name='nombre' className={`${errors.nombre && touched.nombre ? ("isError") : null}`} />
                            </div>
                            <div className="form-control">
                                <label htmlFor="email" className={`${errors.email && touched.email ? ("isError") : null}`}>Correo Electrónico*</label>
                                <Field type="text" name='email' className={`${errors.email && touched.email ? ("isError") : null}`} />
                            </div>
                            <div className="form-control">
                                <label htmlFor="phone" className={`${errors.phone && touched.phone ? ("isError") : null}`}>Teléfono (10 dígitos)*</label>
                                <Field type="text" name='phone' className={`${errors.phone && touched.phone ? ("isError") : null}`} />
                            </div>
                        </div>
                        <div className='radios'>
                            <div className='radio-title'>
                                Selecciona la fecha deseada:*
                            </div>
                            <div className='radio-content'>
                                {months.map((month, index) =>(
                                    <div className='radio-control' key={index}>
                                        <div className='radio-title-inputs'>{month.month}</div>
                                        <div className='radio-input'>
                                            {month.days.map((day, index) =>(
                                                <div className='input' key={index}>
                                                    <Field type="radio" name="horario" value={`${month.month} ${day}`} />
                                                    <label htmlFor="">{day}</label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )
            case 1:
                return(
                    <>
                        <div className='paypal'>
                            <PayPalButtons  createOrder={async () =>{
                                try {
                                    const res = await Axios({
                                        url: "/api/payments",
                                        method: "POST",
                                        headers:{
                                            "Content-Type": "application/json"
                                        }
                                    })
                                    return res.data.id
                                } catch (error) {
                                    console.log(error)
                                }
                            }}
                            onCancel={data =>{
                                console.log("compra cancelada")
                                setIsHidden(true)
                            }}
                            onApprove={(data, actions) =>{
                                console.log(data)
                                setIsHidden(false)
                                actions.order.capture()
                            }}
                            style={{ layout: "horizontal", color: 'gold'}} />
                        </div>
                    </>
                )
            default:
                break;
        }
    }
    function _handleBack() {
        setActiveStep(activeStep - 1);
    }
    function _handleSubmit(values, actions){
        if(isLastStep){
            _submitForm(values, actions)
        } else {
            setActiveStep(activeStep + 1)
            actions.setTouched({});
            actions.setSubmitting(false);
        }
    }
    async function _submitForm(values, actions) {
        console.log(values)
    }
    return(
        <section className="block contacto" id="contacto">
            <div className='textura'>
                <Image src={Textura3} fill alt='textura' />
            </div>
            <div className='c'>
                <Parallax speed={-5}>
                    <Image src={IconoC} fill alt='Icono C' />
                </Parallax>
            </div>
            <div className="holder">
                <div className="container-fluid">
                    <div className='subtitle'>
                        ÚNETE AHORA
                    </div>
                    <div className='title'>
                        Contamos con disponibilidad de horarios
                    </div>
                    <div className='text-schedule'>
                        <div className='icon-schedule'>
                            <Image src={Clock} fill alt='reloj' />
                        </div>
                        Sábados y domingos de 9:30 a 11:30 am &nbsp;<span>HORA CDMX</span>
                    </div>
                    <div className='form-contact'>
                        <Formik
                            initialValues={{
                                nombre: "",
                                email: "",
                                phone: "",
                                horario: "",
                                aviso: false
                            }}
                            validationSchema={validation}
                            onSubmit={_handleSubmit}
                        >
                            {({isSubmitting, errors, touched, values, isValid }) =>(
                                <Form>
                                    {_renderStepContent(activeStep, errors, touched, months)}
                                    <div className='buttons'>
                                            <div className='button'>
                                        {activeStep !== 0 && (
                                                <button onClick={_handleBack} >
                                                    Atras
                                                </button>
                                        )}
                                            </div>
                                        <div className='button'>
                                            {isLastStep ? (
                                                <>
                                                    <button type='submit' disabled={isHidden}>
                                                        {isLastStep ? "Inscribirme al Crash Course" : "Siguiente"}
                                                    </button>
                                                    <div className='check'>
                                                        <div>
                                                            <Field type="checkbox" name="aviso" className={`${errors.aviso && touched.aviso ? ("isError") : null}`} />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="aviso">*He leido y acepto el <Link href="/aviso" legacyBehavior><a>aviso de privacidad</a></Link></label>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <button type='submit'>
                                                        {isLastStep ? "Inscribirme al Crash Course" : "Siguiente"}
                                                    </button>
                                                    <div className='check'>
                                                        <div>
                                                            <Field type="checkbox" name="aviso" className={`${errors.aviso && touched.aviso ? ("isError") : null}`} />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="aviso">*He leido y acepto el <Link href="/aviso" legacyBehavior><a>aviso de privacidad</a></Link></label>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className='imagen'>
                        <div className='blockchain'>
                            <Image src={BlockChain} fill alt='BlockChain' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}