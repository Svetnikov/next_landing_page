import Link from 'next/link'
import React from 'react'
import { ActiveLink } from '../active-link/ActiveLink'
import Image from 'next/image'
import style from '../active-link/ActiveLink.module.css'

const navItems = [
  { path: '/about', text: 'AT. AL CLIENTE'},
  { path: '/contact', text: 'CONTACTO'},
]

const subnavItems = [
  { path: '/cobertura', text: 'COBERTURA'},
  { path: '/grilla', text: 'PARRILLA DE CANALES'},
  { path: '/oficinas', text: 'NUESTRAS OFICINAS'},
  { path: '/medios_pago', text: 'MEDIOS DE PAGO'},
]

export const Navbar = () => {
  return (
    <>
      <nav className='flex justify-stretch lg:justify-between bg-blue-800 p-2 lg:p-5 '>
          <Link className='mr-0 lg:mr-2 flex items-center' href={'/'}>
            <Image
              alt='hola'
              src='/cblogowhite.png'
              width={200}
              height={200}/>
            </Link>
            
          <div className='flex items-center justify-end md:justify-center'>
            {
              navItems.map( navItem => (
                <ActiveLink key={navItem.path} {...navItem} />
              ))
            }
            <Link href='portal_pagos' className={style['link-cb']}>PAGOS</Link>
          </div>
      </nav>
      <nav className='flex justify-center bg-orange-500 p-2'>
        <Link className='mr-2 flex items-center' href={'/'}/>
        <div className='flex items-center justify-center'>
          {
            subnavItems.map( navItem => (
              <ActiveLink key={navItem.path} {...navItem} />
            ))
          }
        </div>
    </nav>
    </>
  )
}
