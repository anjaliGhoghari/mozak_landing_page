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
                    <img src={logo}></img>
                    <nav className='max-md:hidden' >
                        <ul className='flex gap-8'>
                            <li><a>Docs</a></li> 
                            <li><a>Career</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </nav>
                    <a className='max-md:hidden'>Get update<img className='inline '  src={rightarrow} /></a> 
                   
                    <Menu as="div" className="relative md:hidden">
                        <MenuButton><img className='max-w-[25px] pb-2 hidden max-md:inline' src={humburger}></img></MenuButton>
                        <MenuItems anchor="bottom" className="p-2 flex gap-2 flex-col ">
                            <MenuItem>
                                <a className="Docs" href="">
                                Docs
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a className="Career" href="">
                                Career   
                              </a>
                            </MenuItem>
                            <MenuItem>
                                <a className="About " href="">
                                About
                                </a>
                            </MenuItem>
                            <MenuItem>
                            <a>
                            <img className='inline'src={rightarrow} />
                            </a> 
                               
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                    </div>
                    </div>


            </header>
        </>
    )
}

export default Header