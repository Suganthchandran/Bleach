import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/all'
import AnimatedTitle from './AnimatedTitle'

gsap.registerPlugin(ScrollTrigger)

const About = () => {

    useGSAP(()=>{
        const clipAnimation = gsap.timeline({
            scrollTrigger:{
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })

        clipAnimation.to('.mask-clip-path',{
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
        })
    })

  return (
    <div id='about' className='min-h-screen w-screen '>
        <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
            <h2 className='font-general text-sm uppercase md:text-[10px]'>Watashi no Soul Society</h2>
            <AnimatedTitle title="Unl<b>e</b>ash Your Inner Soul Re<b>a</b>per <br/> Dive into the W<b>o</b>rld of Ble<b>a</b>ch!" containerClass="mt-5 !text-black text-center" />
            
            <div className='about-subtext'>
                <p>Step Beyond the Gate – Embrace the Secrets of Soul Society!</p>
                <p>Awaken Your Zanpakutō – Enter the Realm of Bleach!</p>
            </div>
        </div>
        <div className='h-dvh w-screen' id='clip'>
            <div className='mask-clip-path about-image'>
                <img 
                    src="img/Bleach1.png"
                    alt='Background'
                    className='absolute left-0 top-0 size-full object-cover'
                />
            </div>
        </div>
    </div>
  )
}

export default About
