import React from 'react'
import Button from './Button'

const ImageBox = ({src, clipClass}) => {
  return (
    <div className={clipClass}>
      <img src={src} />
    </div>
  )
}

const Contact = () => {
  return (
    <div id='contact' className='my-20 min-h-96 w-screen px-10'>
        <div className='relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden'>
            <div className='absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96'>
                <ImageBox clipClass="contact-clip-path-1" src="img/contact-1.webp" />
                <ImageBox clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60" src="img/contact-2.webp" />
            </div>
            <div className='absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80'>
                {/* <ImageBox clipClass="absolute md:scale-125 " src="img/urahara.png" /> */}
                <ImageBox clipClass="sword-man-clip-path md:scale-125 absolute -right-56 -top-24 w-[800px]" src="img/urahara.png" />
            </div>
            <div className='flex flex-col items-center text-center'>
                <p className='font-general text-[10px] uppercase'>Join Soul Society</p>
                <p className='special-font mt-10 w-full font-zentry text-5xl leading-0.9 md:text-[6rem]'>Dr<b>o</b>p <b>u</b>s a m<b>e</b>ss<b>a</b>ge <br/> Be p<b>a</b>rt of the <br/> Ble<b>a</b>ch C<b>o</b>mm<b>u</b>nity</p>
                <Button title="Contact Us" containerClass="mt-10 cursor-pointer" />
            </div>
        </div>
    </div>
  )
}

export default Contact
