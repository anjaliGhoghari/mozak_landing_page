import React from 'react'
import logo from '../../assets/images/logo.svg'
import footer from '../../assets/images/footer.png'

function Footer() {
  return (
    <>
      <footer className=''>
        <div className='py-20 container'>
          <div className='flex items-center text-center justify-center mb-24'>
            <img src={logo}></img>
          </div>

          <div className='border-t border-black/15 flex justify-between text-start'>
            <div>
              <p className='label-small py-8 border-b border-black/15 '>Powered by Zero-knowledge</p>
              <h3 className='mt-8'>
                New radical approach to <br />
                <span className='text-orange'>Trustless Systems</span>
              </h3>
            </div>
            <div className='flex gap-16 items-start'>
              <div className=''>
                <p className='label-small py-8 border-b border-black/15 '>Devlopers</p>
                <div className='text-[#00000099] flex gap-5 flex-col mt-8 '>
                  <a className='body-medium'>Documentation</a>
                  <a className='body-medium'>API Docs</a>
                  <a className='body-medium'>Changelog</a>
                  <a className='body-medium'>Github</a>
                </div>
              </div>
              <div>
                <p className='label-small py-8 border-b border-black/15 '>Company</p>
                <div className='text-[#00000099] flex gap-5 flex-col mt-8 '>
                  <a className='body-medium'>About</a>
                  <a className='body-medium'>Blog</a>
                  <a className='body-medium'>We’re hiring</a>
                  
                </div>
              </div>
              <div>
                <p className='label-small py-8 border-b border-black/15 '>Community</p>
                <div className='text-[#00000099] flex gap-5 flex-col mt-8 '>
                  <a className='body-medium'>X (Twitter)</a>
                  <a className='body-medium'>Telegram</a>
                 
                </div>
              </div>

            </div>
          </div>
        </div>
        <img src={footer} className='w-full'></img>
      </footer>
    </>
  )
}

export default Footer