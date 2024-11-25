import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const Author = () => {
  const imageRef = useRef(null);
  const detailsRef = useRef(null);
  const worksRef = useRef(null);

  React.useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#author",
        start: "top center",
        end: "bottom center",
        toggleActions: "play reset play reset",
      },
    });

    timeline.fromTo(
      imageRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    timeline.fromTo(
      detailsRef.current,
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.8"
    );

    gsap.fromTo(
      worksRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: worksRef.current,
          start: "top 75%",
          toggleActions: "play none none reset",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="author" className="min-h-[100vh] bg-black text-white w-screen">
      <div className="relative mb-8 pt-32 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Learn more about the genius behind Bleach!
        </h2>
        <AnimatedTitle
          title="The <b>A</b>uthor of Ble<b>a</b>ch"
          containerClass="mt-5 !text-white text-center"
        />
      </div>

      <div className="container mx-auto py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="w-full" ref={imageRef}>
            <img
              src="img/Author.webp"
              alt="Author"
              className="object-cover w-[690px] h-[430px] border-black rounded-3xl border-4"
            />
          </div>

          <div
            className="text-left text-white px-8 flex flex-col mb-6 justify-center"
            ref={detailsRef}
          >
            <AnimatedTitle
              title="Tit<b>e</b> Kub<b>o</b>"
              containerClass="mt-5 mb-16 w-[700px] ml-[-10px] !text-white"
            />
            <h2 className="text-3xl font-bold mb-4">About the Author</h2>
            <p className="text-lg mb-6">
              Tite Kubo, born on June 26, 1977, in Hiroshima, Japan, is a renowned manga
              artist best known for creating the legendary series *Bleach*. His
              distinctive art style, dynamic storytelling, and fusion of traditional
              Japanese culture with modern aesthetics have made him a global icon in the
              manga industry. Kubo's works, including *Bleach* and *Burn the Witch*, have
              left an indelible mark, inspiring fans and creators worldwide.
            </p>
          </div>
        </div>

        <div
          className="mt-16 text-center px-8 md:px-16 lg:px-32"
          ref={worksRef}
        >
          <h2 className="text-3xl font-bold mb-8">Other Works and Achievements</h2>
          <p className="text-lg mb-6">
            Besides *Bleach*, Tite Kubo has also worked on the manga *Burn the Witch*,
            which is set in the same universe as *Bleach*. His unique storytelling,
            inspired by Japanese folklore and Western influences, has captivated
            audiences worldwide. Kubo has received numerous awards and accolades for his
            contributions to the manga industry. He continues to inspire aspiring manga
            artists and storytellers.
          </p>
          <p className="text-lg">
            *Bleach* has been adapted into an anime series, movies, and even a live-action
            film, showcasing the global popularity of Kubo's work. His ability to combine
            action, emotion, and humor has made him one of the most beloved creators in
            the manga world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Author;
