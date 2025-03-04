
import Image from 'next/image'
import React from 'react'
import {} from '@primer/octicons-react'

export const Footer = () => {
  return (
    <>
        <footer className="bg-gray-500 text-white py-4">

            {/* <div className='flex flex-col lg:flex-row lg:justify-around items-center lg:mx-48'> */}
            <div className='grid grid-cols-1 lg:grid-cols-3 auto-cols-auto'>
                <div className='mb-5 text-center'>
                    <p className='text-xl mb-2'>LA EMPRESA</p>
                    <p className=''>NUESTRO EQUIPO</p>
                    <p className=''>VALORES</p>

                </div>

                <div className='mb-5 text-center'>
                    <p className='text-xl mb-2'>ATENCIÓN AL CLIENTE</p>
                    <p className=''>NUESTRO EQUIPO</p>
                    <p className=''>PREGUNTAS FRECUENTES</p>
                    <p className=''>CENTROS DE ATENCIÓN</p>
                </div>
                <div className='mb-5 text-center'>
                    <p className='text-xl mb-2'>PAGOS</p>
                    <p className=''>PLATAFORMA DE PAGOS</p>
                    <p className=''>MEDIOS DE PAGO</p>
                </div>
            </div>
        </footer>

        <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto grid lg:grid-cols-3 gap-6">

            <div className='flex flex-col items-center order-3 lg:order-1'>
                <Image
                alt='hola'
                src='/cblogowhite.png'
                width={200}
                height={200}
                />
                
                <span>J-315963400</span>
                <span>Habilitación HGTS-00303</span>
            </div>
                
            
            {/* <div className="flex space-x-4"></div> */}

            <div className='grid text-center items-end order-3 lg:order-2'>
                <span>Av. Arismendi, al lado de la E/S San Luis, Cumaná, Venezuela.</span>
                <span>© {new Date().getFullYear()} CABLEBRASIL, C.A.</span>
                <span className='text-sm'>Made with ❤️ by Svetnikov (Antonio De Santis)</span>
            </div>

            <div className='flex gap-2 justify-center order-1 lg:order-3'>
            <Image
                alt='WhatsApp'
                src='/whatsapp.svg'
                width={50}
                height={50}
                />
            <Image
                alt='instagram'
                src='/instagram.svg'
                width={50}
                height={50}
                />
            <Image
                alt='email'
                src='/email.svg'
                width={50}
                height={50}
                />
            </div>
        </div>
        
        </footer>
    </>
  )
}
