import React from 'react'

const Hero = ({ hero: {title, subtitle, btn1, btn2, text, img }}) => {
  return (
    <>
      <main className='flex flex-col bg-gradient-to-b from-teal-400 to-white h-auto w-auto'>
        <div className='travigo-container grid items-start justify-items-center'>
          <div className='grid items-center justify-items-center mt-36 mb-16 md:mt-28 md:mb-12'>
            <h1 className='text-7xl text-center font-bold lg:text-5xl md:5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg'>{title}</h1>
            <h1 className='text-xl font-bold text-black filter drop-shadow-lg pt-2'>{subtitle}</h1>
            <p className='text-base my-5 text-center sm:text-sm'>{text}</p>
            <div className='flex items-center justify-center flex-wrap gap-4'>
              <button className='button-emrald' type="button">{btn1}</button>
              <button className='button-light' type="button">{btn2}</button>
            </div>
          </div>
          <div className='flex items-center justify-center mb-11'>
            <img src={img} alt="" className='h-[85vh] px-4 lg:w-full object-fill lg:h-[75vh]
            md:h-[57vh] sm:h-[35vh] sm:object-contain drop-shadow-emrald' />
          </div>
        </div>
      </main>
    </>
  )
}

export default Hero
