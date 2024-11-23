import React, { useEffect, useRef, useState } from 'react'
import { TiLocationArrow } from 'react-icons/ti';
import Button from './Button';

const BentoTilt = ({ children, className = ''}) => {

  const [transformStyle, setTransformStyle] = useState('');
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if(!itemRef.current) return;

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

const BentoCard = ({ src, title, desc}) => {
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
          setIsSeeMore(false); // Reset isSeeMore when the component is not in view
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
    <section ref={containerRef} className='bg-black pb-96'>
      <div className='container relative mx-auto pb-0 px-3 md:px-10'>
          <div className='px-5 py-32'>
              <p className='font-circular-web text-lg text-blue-50'>Discover Characters, Unveil Legends!</p>
          <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>Explore the iconic characters of Bleach that define courage, loyalty, and power. Each has a unique story to tell and a battle to fight. Dive deep into their journeys and unravel their secrets!</p>
          </div>
        <BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
            <BentoCard
              src="videos/Character-1.mp4" 
              title={<>Kur<b>o</b>s<b>a</b>ki Ichig<b>o</b></>} 
              desc="Ichigo Kurosaki, the fearless Substitute Soul Reaper, protects both the human and spiritual worlds. With his immense spiritual pressure and relentless determination, he wields his iconic Bankai, Tensa Zangetsu, unleashing incredible speed and power in battle." 
            />
        </BentoTilt>

        <div className='grid h-[80vh] grid-cols-2 grid-rows-2 gap-7'>
            <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
              <BentoCard
                src="videos/Character-2.mp4" 
                title={<>Kur<b>o</b>s<b>a</b>ki Ichig<b>o</b></>} 
                desc="Ichigo Kurosaki, the fearless Substitute Soul Reaper, protects both the human and spiritual worlds. With his immense spiritual pressure and relentless determination, he wields his iconic Bankai, Tensa Zangetsu, unleashing incredible speed and power in battle." 
              />
            </BentoTilt>
            <BentoTilt className='bento-tilt_1 row-span-1 ms-14 md:col-span-1 md:ms-0'>
              <BentoCard
                  src="videos/Character-3.mp4" 
                  title={<>Kur<b>o</b>s<b>a</b>ki Ichig<b>o</b></>} 
                  desc="Ichigo Kurosaki, the fearless Substitute Soul Reaper, protects both the human and spiritual worlds. With his immense spiritual pressure and relentless determination, he wields his iconic Bankai, Tensa Zangetsu, unleashing incredible speed and power in battle." 
              />
            </BentoTilt>
            <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
              <BentoCard
                  src="videos/Character-4.mp4" 
                  title={<>Kur<b>o</b>s<b>a</b>ki Ichig<b>o</b></>} 
                  desc="Ichigo Kurosaki, the fearless Substitute Soul Reaper, protects both the human and spiritual worlds. With his immense spiritual pressure and relentless determination, he wields his iconic Bankai, Tensa Zangetsu, unleashing incredible speed and power in battle." 
              />
            </BentoTilt>
        </div>

       <div className='relative'>
       {
          isSeeMore ? '' : (
            <div className='absolute top-[50px] left-[660px] z-40' onClick={()=> setIsSeeMore(true)}>
                  <Button id="product-button" title="SEE MORE" rightIcon={<TiLocationArrow/>} containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1" />
            </div>
          )
        }
        {
          isSeeMore && <div className='grid mt-[27px] h-[80vh] grid-cols-2 grid-rows-2 gap-7'>
          <BentoTilt className='bento-tilt_1 row-span-1 ms-14 md:col-span-1 md:ms-0'>
            <BentoCard
                src="videos/Character-3.mp4" 
                title={<>Kur<b>o</b>s<b>a</b>ki Ichig<b>o</b></>} 
                desc="Ichigo Kurosaki, the fearless Substitute Soul Reaper, protects both the human and spiritual worlds. With his immense spiritual pressure and relentless determination, he wields his iconic Bankai, Tensa Zangetsu, unleashing incredible speed and power in battle." 
            />
          </BentoTilt>
        
          <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
            <BentoCard
                src="videos/Character-4.mp4" 
                title={<>Kur<b>o</b>s<b>a</b>ki Ichig<b>o</b></>} 
                desc="Ichigo Kurosaki, the fearless Substitute Soul Reaper, protects both the human and spiritual worlds. With his immense spiritual pressure and relentless determination, he wields his iconic Bankai, Tensa Zangetsu, unleashing incredible speed and power in battle." 
            />
          </BentoTilt>


          <BentoTilt className='bento-tilt_1 row-span-1 ms-14 md:col-span-1 md:ms-0'>
            <BentoCard
                src="videos/Character-3.mp4" 
                title={<>Kur<b>o</b>s<b>a</b>ki Ichig<b>o</b></>} 
                desc="Ichigo Kurosaki, the fearless Substitute Soul Reaper, protects both the human and spiritual worlds. With his immense spiritual pressure and relentless determination, he wields his iconic Bankai, Tensa Zangetsu, unleashing incredible speed and power in battle." 
            />
          </BentoTilt>
        
          <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
            <BentoCard
                src="videos/Character-4.mp4" 
                title={<>Kur<b>o</b>s<b>a</b>ki Ichig<b>o</b></>} 
                desc="Ichigo Kurosaki, the fearless Substitute Soul Reaper, protects both the human and spiritual worlds. With his immense spiritual pressure and relentless determination, he wields his iconic Bankai, Tensa Zangetsu, unleashing incredible speed and power in battle." 
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
