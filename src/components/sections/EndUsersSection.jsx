import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import arrowdown from '../../assets/icons/arrow-down.svg'
import line1 from '../../assets/images/line-1.png'
import line2 from '../../assets/images/line-2.png'
import line3 from '../../assets/images/line-3.png'
const list = [
    {
        image: line1,
        title: 'No dynamic fees',
        decription: 'Mozak reimagines the way we built trustless system. The system works without any eternal incentives',
    },
    {
        image: line2,
        title: 'Fast local proof',
        decription: 'Mozak reimagines the way we built trustless system. The system works without any eternal incentives',
    },
    {
        image: line3,
        title: 'Offline transactions',
        decription: 'Mozak reimagines the way we built trustless system. The system works without any eternal incentives',
    },
];
function EndUsersSection() {
    return (
        <>
            <section className='container py-28'>
                <div className='px-24'>
                    <h2 className='pb-14 border-b border-black/15'>Made for<br />
                        <span className='text-orange '>end users</span>
                    </h2>

                    {list.map((item, index) => (
                        <div key={index}>
                            <Disclosure as="div" className="border-b border-black/15">
                                {({ open }) => (
                                    <>
                                        <DisclosureButton className="w-full group">
                                            <div className='flex justify-between items-center w-full'>
                                                <p className='label-large py-11'>{item.title}</p>
                                                <div className='flex gap-11'>
                                                    <img src={item.image} alt="line" />
                                                    <img
                                                        src={arrowdown}
                                                        alt="arrow down"
                                                        className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                                                    />
                                                </div>
                                            </div>
                                        </DisclosureButton>
                                        <DisclosurePanel className="text-gray-500 mb-6 max-w-[467px] mt-0">
                                           {item.decription}
                                        </DisclosurePanel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    ))}


                </div>

            </section>
        </>
    )
}

export default EndUsersSection