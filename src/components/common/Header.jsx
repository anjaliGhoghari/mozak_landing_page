import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import logo from '../../assets/images/logo.svg'
import rightarrow from '../../assets/icons/arrow-right.svg'
import humburger from '../../assets/icons/humburger.svg'


function Header() {
    return (
        <>
            <header className='sticky z-50 top-0 border-b border-black/10 bg-white'>
                <div className='py-6 container'>
                <div className='flex justify-between items-center text-center'>
                    <img src={logo} alt="Logo"></img>
                    <nav className='max-md:hidden' >
                        <ul className='flex label-small gap-8'>
                            <li><a href="#">Docs</a></li> 
                            <li><a href="#">Career</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </nav>
                    <a href="#" className='max-md:hidden'>Get update<img className='inline' src={rightarrow} alt="Right arrow" /></a> 
                   
                    <Menu as="div" className="relative md:hidden">
                        <MenuButton><img className='w-6 cursor-pointer' src={humburger} alt="Menu"></img></MenuButton>
                        <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <MenuItem>
                                    {({ active }) => (
                                        <a href="#" className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm`}>
                                            Docs
                                        </a>
                                    )}
                                </MenuItem>
                                <MenuItem>
                                    {({ active }) => (
                                        <a href="#" className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm`}>
                                            Career
                                        </a>
                                    )}
                                </MenuItem>
                                <MenuItem>
                                    {({ active }) => (
                                        <a href="#" className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm`}>
                                            About
                                        </a>
                                    )}
                                </MenuItem>
                                <MenuItem>
                                    {({ active }) => (
                                        <a href="#" className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm`}>
                                            Get update <img className='inline' src={rightarrow} alt="Right arrow" />
                                        </a>
                                    )}
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>
                    </div>
                    </div>
            </header>
        </>
    )
}

export default Header