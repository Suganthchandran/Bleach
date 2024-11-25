import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Button from "./Button";
import { Tilt } from "react-tilt";


const ImageBox = ({ src, clipClass }) => {
  return (
    <div className={clipClass}>
       <img src={src} alt="Contact Image" />
    </div>
  );
};

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const image2Ref = useRef(null);

  React.useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact", 
        start: "top 75%", 
        end: "bottom center", 
        toggleActions: "play none none reset", 
      },
    });
    
    timeline.fromTo(
      imageRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    timeline.fromTo(
      textRef.current,
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      0
    );

    timeline.fromTo(
      image2Ref.current,
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
      0
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      id="contact"
      ref={contactRef}
      className="min-h-96 my-20 text-white w-screen xl:px-32 px-10"
    >
   <Tilt
        options={{
          max: 3,
          scale: 1.01,
          speed: 300,
          perspective: 1000,
        }}
      >   <div className="relative bg-black rounded-3xl mr-2 py-24 text-blue-50 sm:overflow-hidden">
        <div ref={imageRef} className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageBox clipClass="ml-20" src="img/contact-1.jpeg" />
          <ImageBox clipClass="lg:translate-y-12 w-72 ml-5 translate-y-60" src="img/ishida1.png" />
        </div>

        <div ref={image2Ref} className="absolute mr-12 -top-40 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageBox clipClass="absolute xl:w-[400px] w-[200px] xl:ml-0 ml-32" src="img/urahara.png" />
        </div>

        <div ref={textRef} className="flex flex-col items-center text-center mt-7">
          <p className="font-general text-[10px] uppercase md:text-[10px]">
            Join Soul Society
          </p>
          <p className="special-font mt-10 w-full font-zentry text-5xl leading-0.9 md:text-[6rem] z-40">
            Dr<b>o</b>p <b>u</b>s a m<b>e</b>ss<b>a</b>ge
          </p>
          <p className="special-font w-full font-zentry text-5xl leading-0.9 md:text-[6rem] z-40">
            Be p<b>a</b>rt of the
          </p>
          <p className="special-font w-full font-zentry text-5xl leading-0.9 md:text-[6rem] z-40">
            Ble<b>a</b>ch C<b>o</b>mm<b>u</b>nity
          </p>

          <div className="mt-10">
            <Button title="Contact Us" containerClass="cursor-pointer" />
          </div>
        </div>
      </div></Tilt>
    </div>
  );
};

export default Contact;
