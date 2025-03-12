import React, { useEffect, useRef, useState } from 'react'
import { TiLocationArrow } from 'react-icons/ti';
import Button from './Button';

const BentoTilt = ({ children, className = '' }) => {

  const [transformStyle, setTransformStyle] = useState('');
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`

    setTransformStyle(newTransform)
  }

  const handleMouseLeave = () => {
    setTransformStyle('');
  }

  return (
    <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transform: transformStyle }}>
      {children}
    </div>
  )
}

const BentoCard = ({ src, title, desc }) => {
  return (
    <div className='relative size-full '>
      <video
        src={src}
        loop
        muted
        autoPlay
        className='absolute left-0 top-0 size-full object-cover object-center'
      />
      <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
        <div>
          <h1 className='bento-title special-font'>{title}</h1>
          <p className='mt-3 max-w-64 text-xs md:text-base'>{desc}</p>
        </div>
      </div>
    </div>
  )
}

const Characters = () => {

  const [isSeeMore, setIsSeeMore] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsSeeMore(false);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section id="characters" ref={containerRef} className={`bg-black ${isSeeMore ? 'pb-36' : 'pb-60'}`}>
      <div className='container relative mx-auto pb-0 px-3 md:px-10'>
        <div className='px-5 py-32'>
          <p className='font-circular-web text-lg text-blue-50'>Discover Characters, Unveil Legends!</p>
          <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>Explore the iconic characters of Bleach that define courage, loyalty, and power. Each has a unique story to tell and a battle to fight. Dive deep into their journeys and unravel their secrets!</p>
        </div>
        <BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
          <BentoCard
            src="videos/Character-1.mp4"
            title={<>Kur<b>o</b>s<b>a</b>ki I<b>c</b>hig<b>o</b></>}
            desc="Ichigo Kurosaki, the fearless Substitute Soul Reaper, protects both the human and spiritual worlds. With his immense spiritual pressure and relentless determination, he wields his iconic Bankai, Tensa Zangetsu, unleashing incredible speed and power in battle."
          />
        </BentoTilt>

        <div className='grid h-[80vh] grid-cols-2 grid-rows-2 gap-7'>
          <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
            <BentoCard
              src="videos/Character-2.mp4"
              title={<>S<b>o</b>us<b>u</b>ke <b>A</b>iz<b>e</b>n</>}
              desc="Sosuke Aizen, the mastermind of deception, hides his ruthless ambition behind a calm and charismatic facade. With his Zanpakuto, Kyoka Suigetsu, he controls perception itself, making his enemies powerless before his illusions and god-like intellect."
            />

          </BentoTilt>
          <BentoTilt className='bento-tilt_1 row-span-1 ms-14 md:col-span-1 md:ms-0'>
            <BentoCard
              src="videos/Character-3.mp4"
              title={<>Y<b>o</b>ru<b>ic</b>hi S<b>h</b>ih<b>o</b>in</>}
              desc="Yoruichi Shihōin, the lightning-fast former captain, is a master of Shunpo and hand-to-hand combat. Known as the 'Flash Goddess,' she combines unmatched agility, intelligence, and a playful yet formidable presence in battle."
            />

          </BentoTilt>
          <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
            <BentoCard
              src="videos/Character-4.mp4"
              title={<>Gri<b>mm</b>j<b>o</b>w J<b>a</b>eg<b>e</b>rj<b>a</b>qu<b>e</b>z</>}
              desc="Grimmjow Jaegerjaquez, the ruthless and rebellious Sexta Espada, thrives on battle and destruction. With his savage strength and relentless instinct, he unleashes his Resurrección, Pantera, to dominate his enemies with raw speed and power."
            />

          </BentoTilt>
        </div>

        <div className='relative'>
          {
            isSeeMore ? '' : (
              <div className='absolute top-[85px] left-[660px] z-40' onClick={() => setIsSeeMore(true)}>
                <Button id="product-button" title="SEE MORE" rightIcon={<TiLocationArrow />} containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1" />
              </div>
            )
          }
          {
            isSeeMore && 

        <div className='grid h-[80vh] grid-cols-2 grid-rows-2 gap-7 mt-7'>
          
          <BentoTilt className='bento-tilt_1 row-span-1 ms-14 md:col-span-1 md:ms-0'>
          <BentoCard
                  src="videos/Character-9.mp4"
                  title={<>S<b>hu</b>n<b>s</b>ui Ky<b>o</b>r<b>a</b>ku</>}
                  desc="Shunsui Kyōraku, the easygoing yet deadly Captain-Commander, wields dual zanpakutō with deceptive lethality. Beneath his carefree nature lies a cunning strategist and a fearsome warrior."
                />
          </BentoTilt>

          <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
          <BentoCard
                  src="videos/Character-7.mp4"
                  title={<>Ki<b>s</b>uke Ur<b>a</b>har<b>a</b></>}
                  desc="Kisuke Urahara, the enigmatic former Squad 12 captain, is a genius inventor and strategist. His laid-back demeanor masks a brilliant mind and a mastery of powerful techniques."
                />
          </BentoTilt>
          
          <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
          <BentoCard
                  src="videos/Character-6.mp4"
                  title={<>N<b>el</b>li<b>e</b>l Tu O<b>d</b>elsch<b>wa</b>nck</>}
                  desc="Nel, the former Espada No. 3, hides her true strength behind a childlike form. Fiercely loyal and protective, she unleashes immense power when her friends are in danger."
                />
          </BentoTilt>
        </div>
  }      
        </div>
      </div>
    </section>
  )
}

export default Characters
