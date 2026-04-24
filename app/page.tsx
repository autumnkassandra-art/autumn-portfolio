export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#052e2b] via-[#0b3d39] to-[#f7f2e8] text-white">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#052e2b]/80 backdrop-blur-md border-b border-emerald-300/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl tracking-[0.3em] font-light text-amber-300">
            AUTUMN GREEN
          </h1>

          <div className="hidden md:flex gap-8 text-sm uppercase tracking-[0.2em] text-zinc-200">
            <a href="#about">About</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-amber-300 tracking-[0.3em] uppercase text-sm mb-4">
              Public Relations Portfolio
            </p>

            <h2 className="text-5xl md:text-7xl font-light leading-tight mb-6">
              Strategy.<br />
              Presence.<br />
              Impact.
            </h2>

            <p className="text-zinc-200 text-lg leading-8 max-w-xl mb-8">
              Public Relations student with international experience in leadership,
              wellness, education, hospitality, and communications.
            </p>

            <a
              href="#about"
              className="inline-block px-8 py-4 rounded-full bg-amber-300 text-black font-medium hover:scale-105 transition"
            >
              Explore Portfolio
            </a>
          </div>

          <div>
            <img
              src="/travel-collage.jpg"
              alt="Travel collage"
              className="rounded-3xl shadow-2xl border border-amber-200/20"
            />
          </div>

        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div>
            <p className="text-amber-300 uppercase tracking-[0.3em] text-sm mb-4">
              About Me
            </p>

            <h3 className="text-4xl md:text-5xl font-light mb-6">
              Global Experience. Genuine Connection.
            </h3>

            <p className="text-zinc-200 leading-8 text-lg mb-6">
              I am a Public Relations student passionate about storytelling,
              branding, and creating meaningful human connection.
            </p>

            <p className="text-zinc-300 leading-8">
              My experiences in Costa Rica, Spain, and India helped shape my
              adaptability, confidence, and ability to communicate across
              cultures with empathy and professionalism.
            </p>
          </div>

          <div>
            <img
              src="/india-volunteer.jpg"
              alt="Autumn volunteering"
              className="rounded-3xl shadow-2xl border border-emerald-300/20"
            />
          </div>

        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="py-24 px-6 max-w-6xl mx-auto text-center">
        <p className="text-amber-300 uppercase tracking-[0.3em] text-sm mb-4">
          Resume
        </p>

        <h3 className="text-4xl font-light mb-6">
          Infographic Resume
        </h3>

        <p className="text-zinc-200 mb-10 max-w-2xl mx-auto">
          A visual overview of my professional experience, leadership background,
          and global career journey.
        </p>

        <a href="/resume-infographic.jpg" target="_blank">
          <img
            src="/resume-thumbnail.jpg"
            alt="Resume Thumbnail"
            className="mx-auto rounded-3xl shadow-2xl hover:scale-105 transition duration-300 border border-amber-200/20 max-w-md"
          />
        </a>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 text-center max-w-4xl mx-auto">
        <p className="text-amber-300 uppercase tracking-[0.3em] text-sm mb-4">
          Contact
        </p>

        <h3 className="text-4xl font-light mb-6">
          Let’s Connect
        </h3>

        <p className="text-zinc-200 leading-8 mb-8">
          Available for communications, branding, events, hospitality,
          leadership, and creative opportunities.
        </p>

        <div className="space-y-2 text-lg">
          <p>autumn.kassandra@gmail.com</p>
          <p>LinkedIn Available Upon Request</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-zinc-400 text-sm border-t border-white/10">
        © 2026 Autumn Green
      </footer>

    </main>

  );
}