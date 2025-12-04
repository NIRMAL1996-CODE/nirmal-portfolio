import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// src/components/Navbar.jsx
const Navbar = () => {
  useGSAP(()=>{
    gsap.from(".nav a, img",{
      opacity:0,
       y:-20,
       duration:0.6,
       stagger:0.2
    })
  })
  return (
    <nav className="nav fixed w-full top-0 left-0 text-white shadow-lg z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div>
          <img className="h-8 w-8 p-1 bg-[#925d58] rounded-full" src="/n.png" alt="logo" />
          </div>
         <ul className="flex space-x-6">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
         </ul>
      </div>
    </nav>
  );
};

export default Navbar;