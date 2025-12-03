const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-linear-to-r from-[#d3a49f] via-[#1a0a0a] to-[#0d0d0d] text-white py-12 border-t border-gray-700"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0">
        
        {/* About / Name */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">Nirmal Jaiswal</h3>
          <p className="text-sm mb-1 text-gray-300">
            Frontend Developer • React • Three.js • GSAP • Tailwind CSS
          </p>
          <p className="text-sm text-gray-300">
            Betul, Madhya Pradesh, India
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h4 className="text-lg font-semibold mb-2">Connect</h4>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-300 text-lg">
            <a href="https://github.com/NIRMAL1996-CODE" className="hover:text-white transition-colors underline">GitHub</a>
            <a href="https://linkedin.com/in/nirmal-jaiswal-01b747186" className="hover:text-white transition-colors underline">LinkedIn</a>
            <a href="https://www.instagram.com/webb.ydexter/?hl=en" className="hover:text-white transition-colors underline">Instagram</a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} Nirmal | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
