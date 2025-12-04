
// src/pages/Projects.jsx

const Projects = () => {
  const projects = [
    {
      title: "3D Haunted House",
      desc: "Interactive haunted house using Three.js with lights, textures & ghost animations.",
      img: "/haunt.jpg",
      link: "https://three-js-haunted-house-virid.vercel.app/"
    },
    {
      title: "Delicious Drinks Website",
      desc: "React + GSAP + Tailwind premium drinks website.",
      img: "/drink.jpg",
      link: "https://delicious-drinks-gsap-website.vercel.app/"
    },
    {
      title: "3D Planets Website",
      desc: "Solar system model using Three.js with smooth camera controls.",
      img: "/planet.jpg",
      link: "https://three-js-foundation.vercel.app/"
    },
    {
      title: "Cocktail Animated Website",
      desc: "Beautiful landing page with GSAP animations.",
      img: "/cocktail.jpg",
      link: "https://cocktail-animated-website.vercel.app/"
    },
    {
      title: "Ramdhani Beverages",
      desc: "Premium wholesale snacks & drinks website using React.",
      img: "/storedrink.jpg",
      link: "https://ramdhani-beverages-website.vercel.app/"
    },
    {
      title: "E-commerce Website",
      desc: "React + Tailwind minimal clean shopping UI.",
      img: "/ecommerce.jpg",
      link: "https://fashion-shop-ecommerce-orcin.vercel.app/"
    },
  ];

  return (
    <div id="projects" className=" min-h-screen bg-linear-to-br from-[#d3a49f] via-[#1a0a0a] to-[#0d0d0d] text-white px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div key={i}
          
            className="bg-white/10 backdrop-blur-lg rounded-xl p-5 shadow-xl border border-white/20 hover:scale-105 transition-transform duration-300">

            <div className="h-40 w-full bg-white/20 rounded-lg mb-3 flex items-center justify-center text-gray-200">

               <span>
                <img src={p.img} alt={p.title} />
                </span>
            </div>

            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-sm mb-4">{p.desc}</p>
            
            <a href={p.link} target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 bg-white text-black font-semibold rounded-lg hover:scale-105 transition-transform">
              View Project
            </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;