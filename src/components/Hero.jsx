const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-6 bg-linear-to-br from-[#d3a49f] via-[#1a0a0a] to-[#0d0d0d] text-white">
      
      <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
        Hi, I'm <span className="text-white/90">Nirmal Jaiswal</span>
      </h1>

      <p className="text-2xl md:text-3xl mb-10 max-w-2xl">
        Frontend Developer skilled in React.js, Three.js, GSAP & UI Animation
      </p>

      <a href="projects"
        className="px-10 py-4 bg-white text-black font-semibold rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
          See My Work
      </a>
    </section>
  );
};

export default Hero;