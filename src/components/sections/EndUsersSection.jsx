import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import line1 from '../../assets/images/line-1.png'
import line2 from '../../assets/images/line-2.png'
import line3 from '../../assets/images/line-3.png'
// import arrowdown from '../../assets/images/arrow-down.png'  // You forgot to import arrowdown image

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
        <section className='container py-28'>
            <div className='px-24'>
                <h2 className='pb-14 border-b border-black/15'>
                    Made for<br />
                    <span className='text-orange'>end users</span>
                </h2>
                <Accordion type="single" collapsible>
                    {list.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b border-black/15">
                            <AccordionTrigger>
                                <div className="flex justify-between items-center w-full">
                                    <p className="label-large py-11">{item.title}</p>
                                    <div className="flex gap-11 mr-6">
                                        <img src={item.image} alt="line" />
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-500 mb-6 max-w-[467px] text-xl mt-0">
                                {item.decription}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

            </div>
        </section>
    )
}

export default EndUsersSection
