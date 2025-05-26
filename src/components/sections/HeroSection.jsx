import React from 'react'
import heroImage from '../../assets/images/bg-image.png'

function HeroSection() {
  return (

    <>
      <section
        className="relative w-screen h-screen flex items-center justify-center"
        style={{
          background: `
      radial-gradient(circle at top, rgba(255, 235, 235, 22.4) 0%, rgba(255, 255, 255, 1) 60%),
      linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 235, 235, 0.3) 100%)
    `
        }}
      >
        <img
          src={heroImage}
          alt="Hero"
          className="absolute top-0 left-0 w-full h-full object-contain"
          style={{ right: 0, bottom: 0, margin: 'auto' }}
        />

        <div className="relative z-10 flex flex-col text-center items-center">
          <div className="body-large">Designed and built for future</div>
          <h1 className="mb-8">
            New radical approach to<br />
            <span className="text-orange">Trustless Systems</span>
          </h1>
           <button className="btn btn-black ">Learn more</button>

         






      </div>
    </section>






    </>
  )
}

export default HeroSection