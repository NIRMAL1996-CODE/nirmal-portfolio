import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Hero = () => {
  const heroRef = useRef(null); // points to the section

  useGSAP(()=>{
    gsap.from(heroRef.current.querySelectorAll("div,h1,p,a"),{
      opacity:0,
      scale: 0.8,
      duration:0.6,
      delay:0.1,
      stagger: 0.2
    })

  })
  return (
    <section ref={heroRef} id="home" className="h-screen flex justify-center items-center px-6 bg-linear-to-br from-[#d3a49f] via-[#1a0a0a] to-[#0d0d0d] text-white">
      <div className="bg-white/10 backdrop-blur-2xl w-full max-w-4xl sm:h-[400px] h-[350px] flex flex-col justify-center items-center text-center rounded-3xl p-6 mx-4 sm:mx-auto">

      <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
        Hi, I'm <span className="text-white/90">Nirmal Jaiswal</span>
      </h1>

      <p className="text-2xl md:text-3xl mb-10 max-w-2xl">
        Frontend Developer skilled in React.js, Three.js, GSAP & UI Animation
      </p>

      <a href="#projects"
        className="px-10 py-4 bg-white text-black font-semibold rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
          See My Work
      </a>
      </div>
    </section>
  );
};

export default Hero;