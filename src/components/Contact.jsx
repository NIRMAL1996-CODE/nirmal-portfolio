// src/pages/Contact.jsx

const contactData = [
  { title: "GitHub", link: "https://github.com/NIRMAL1996-CODE", img: "/github.png" },
  { title: "Email", link: "mailto:nirmaljaiswal888@gmail.com", img: "/mail.png" },
  { title: "Phone", link: "tel:+919691045059", img: "/call.png" },
  { title: "LinkedIn", link: "https://linkedin.com/in/nirmal-jaiswal-01b747186", img: "/link.png" },
  { title: "Instagram", link: "https://www.instagram.com/webb.ydexter/?hl=en", img: "/insta.png" },
  { title: "Twitter", link: "https://x.com/syncNirmal", img: "/x.png" },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-linear-to-br from-[#d3a49f] via-[#1a0a0a] to-[#0d0d0d] text-white px-6 py-20"
    >
      <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {contactData.map((p, i) => (
          <div
            key={i}
            className="bg-center bg-contain bg-no-repeat bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:scale-105 transition-transform duration-300 text-center h-60 flex flex-col justify-center items-center"
            style={{ backgroundImage: `url(${p.img})` }}
          >
            {/* <img src={p.img} alt={p.title} className="w-12 h-12 mb-4" /> */}

            <h3 className="text-xl underline font-semibold mb-2"><a
                href={p.link}
                target={p.link.startsWith("http") ? "_blank" : undefined}
                rel={p.link.startsWith("http") ? "noopener noreferrer" : undefined}>
                {p.title}
              </a>
            </h3>
      
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;