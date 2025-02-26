import Link from 'next/link'
import React from 'react'
import {HomeIcon} from '@primer/octicons-react'
import { ActiveLink } from '../active-link/ActiveLink'



const navItems = [
  { path: '/about', text: 'About'},
  { path: '/pricing', text: 'Pricing'},
  { path: '/contact', text: 'Contact'},
]

export const Navbar = () => {
  return (
    <nav className='flex justify-between bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
        <Link className='mr-2 flex items-center' href={'/'}>
          <HomeIcon className='mr-2'/>
          <span>Home</span>
        </Link>

        <div>
          {
            navItems.map( navItem => (
              <ActiveLink key={navItem.path} {...navItem} />
            ))
          }
        </div>
    </nav>
  )
}
