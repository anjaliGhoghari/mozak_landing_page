import React from 'react'
import box3 from '../../assets/images/box-3.png';
import box2 from '../../assets/images/box-2.png';
import box1 from '../../assets/images/box-1.png';
import MassAdoption from '../../assets/images/mass-adoption.png';
const boxlist =[
    {
        image:box1,
        title:'Reimagine Syste',
        decription:'Mozak reimagines the way we built trustless system. The system works without any eternal incentives',

    },
    {
        image:box2,
        title:'Parallel Processing',
        decription:'Mozak reimagines the way we built trustless system. The system works without any eternal incentives',

    },
     {
        image:box3,
        title:'In-built composability',
        decription:'Mozak reimagines the way we built trustless system. The system works without any eternal incentives',

    },
];


function MassAdoptionSection() {
    return (
        <section className='container'>
            <div className='bg-black pt-24 px-24'>
                <div>
                    <h2 className='text-white'>Made for<br />
                        <span className='text-orange '> Mass adoption</span>
                    </h2>
                    <div className=' flex justify-between mt-24 border-b border-white/15'>
                    {boxlist.map((item,index)=>(
                        <div key={index} className='flex flex-col w-[307px]' >
                            <div className='mb-10'>
                           <img src={item.image}/>  </div>
                            <p className='label-medium text-white'>{item.title}</p>
                            <p className='text-gray body-medium mb-24'>{item.decription}</p>
                        </div>
                    ))}
                       
                    </div>

                    <div className='flex justify-between'>
                        <div className='mt-24'>
                            <p className='label-medium text-white'>Easy Setup without any updates</p>
                            <p className='text-gray body-medium max-w-[477px]'>Mozak reimagines the way we built trustless system. The system works without any eternal incentives</p>
                        </div>
                        <div>
                            <img src={MassAdoption}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MassAdoptionSection