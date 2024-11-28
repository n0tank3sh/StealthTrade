
import React from 'react'
import { NavbarButton } from './footernavbuttons'

export const Footer = () => {
  return (
    <footer>
    <ul className='flex flex-row justify-around items-end'>
    <NavbarButton props="Garage"/>
    <NavbarButton props="Offers"/>
    <NavbarButton props="Create"/>
    <NavbarButton props="Orders"/>
    <NavbarButton props="Settings"/>
    <NavbarButton props="More"/>
    </ul>
    </footer>
  )
}

