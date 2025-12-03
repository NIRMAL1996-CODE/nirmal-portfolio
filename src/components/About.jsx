const About = () => {
  return (
    <section id="about" className=" min-h-screen px-6 py-20 bg-linear-to-br from-[#d3a49f] via-[#1a0a0a] to-[#0d0d0d] text-white">
      <h2 className="text-4xl font-bold mb-10 text-center">About Me</h2>

      <div className="max-w-5xl mx-auto grid gap-10">

        {/* Intro Card */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20">
          <h3 className="text-2xl font-semibold mb-3">Who I Am</h3>
          <p className="text-lg">
            Hi! I'm <strong>Nirmal Jaiswal</strong>, a passionate Creative Frontend Developer skilled in React.js, Three.js, GSAP, and Tailwind CSS. I write code that moves, reacts, and surprises the user in a good way.
          </p>
        </div>

        {/* Skills Card */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/30">
          <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>

          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
            <li className="bg-white/5 p-3 rounded-xl text-center">HTML5</li>
            <li className="bg-white/5 p-3 rounded-xl text-center">CSS3</li>
            <li className="bg-white/5 p-3 rounded-xl text-center">JavaScript</li>
            <li className="bg-white/5 p-3 rounded-xl text-center">React.js</li>
            <li className="bg-white/5 p-3 rounded-xl text-center">Tailwind CSS</li>
            <li className="bg-white/5 p-3 rounded-xl text-center">Three.js</li>
            <li className="bg-white/5 p-3 rounded-xl text-center">GSAP</li>
            <li className="bg-white/5 p-3 rounded-xl text-center">Node.js (Basics)</li>
            <li className="bg-white/5 p-3 rounded-xl text-center">MongoDB (Basics)</li>
          </ul>
        </div>

        {/* Education Card */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20">
          <h3 className="text-2xl font-semibold mb-4">Education</h3>

          <ul className="space-y-3 text-lg">
            <li className="bg-white/5 p-3 rounded-xl">
              LLM — GH Raisoni University - 2022 | 8.6 CGPA
            </li>
            <li className="bg-white/5 p-3 rounded-xl">
              PGDCA — Makhanlal Chaturvedi National University of Journalism and Communication - 2020 | 65%
            </li>
            <li className="bg-white/5 p-3 rounded-xl">
              XII — CBSE - 2014 | 82%
            </li>
            <li className="bg-white/5 p-3 rounded-xl">
              X — CBSE - 2012 | 72%
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;