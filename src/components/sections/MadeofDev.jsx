import React from 'react'
import boxLogo1 from '../../assets/icons/box-logo-1.svg'
import boxLogo2 from '../../assets/icons/box-logo-2.svg'
import boxLogo3 from '../../assets/icons/box-logo-3.svg'
import boxLogo4 from '../../assets/icons/box-logo-4.svg'
const Boxlist = [
    {
        logo: boxLogo1,
        title: 'Rust Support',
        description: 'Higher-level language support. Mozak supports Rust, C++ and other high- level languages for developers.',
    },
    {
        logo: boxLogo2,
        title: 'Rust Support',
        description: 'Higher-level language support. Mozak supports Rust, C++ and other high- level languages for developers.',
    },
    {
        logo: boxLogo3,
        title: 'Rust Support',
        description: 'Higher-level language support. Mozak supports Rust, C++ and other high- level languages for developers.',
    },
    {
        logo: boxLogo4,
        title: 'Rust Support',
        description: 'Higher-level language support. Mozak supports Rust, C++ and other high- level languages for developers.',
    }
];
function MadeofDev() {
    return (
        <>
            <section className='bg-black'>
                <div className='pt-36  container'>
                    <div className='px-24'>
                        <h2 className='text-white'>Made for<br />
                            <span className='text-orange '>Developers_</span>
                        </h2>
                        <p className='body-large mt-2'>Build, deploy and scale your apps with Mozak.</p>
                        <div className='my-36 grid grid-cols-2  justify-between gap-10'>
                            {Boxlist.map((item, index) => (
                                <div key={index} className='bg-[#111214] flex flex-col max-w-[508px] p-12'>
                                    <img src={item.logo} className=' w-11 mb-8' />
                                    <p className='label-medium text-white mb-4'>
                                        {item.title}
                                    </p>
                                    <p className='body-medium text-gray'>{item.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className='flex items-center justify-center flex-col'>
                            <p className='body-large text-white'>Powered By</p>
                            <div className='max-w-[180px]'></div>
                            <p
                                className='text-[clamp(2rem,10vw,128px)] leading-none text-white font-bold'
                                style={{
                                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.00) 82.39%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}
                            >
                                Zero-Knowledge
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MadeofDev