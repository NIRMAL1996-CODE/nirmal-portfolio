// src/components/Navbar.jsx
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const navRef= useRef()
  useGSAP(()=>{
    gsap.from(navRef.current.querySelectorAll("a,img"),{
      opacity:0,
       y:-20,
       duration:0.6,
       stagger:0.2
    }) 
  })
  return (
    <nav ref={navRef} className="nav fixed w-full top-0 left-0 text-white shadow-lg z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div>
          <img className="h-8 w-8 p-1 bg-[#925d58] rounded-full" src="/n.png" alt="logo" />
          </div>
         <ul className="tabs flex space-x-6">
            <li><a className="text-white" href="#home">Home</a></li>
             <li><a className="text-white" href="#about">About</a></li>
             <li><a className="text-white" href="#projects">Projects</a></li>
             <li><a className="text-white" href="#contact">Contact</a></li>
         </ul>
      </div>
    </nav>
  );
};

export default Navbar;