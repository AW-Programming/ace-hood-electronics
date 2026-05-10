function About() {
  return (
    <section id="about" className="section-padding bg-bg">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="animate-on-scroll">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-6">
              Your Trusted Neighborhood{' '}
              <span className="text-primary">Electronics Fundi</span>
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                <strong className="text-dark">ACE HOOD ELECTRONICS</strong> is a trusted neighborhood electronics technician helping customers with repairs, installations, and affordable accessories.
              </p>
              <p>
                What started as a passion for fixing gadgets has grown into a go-to destination for phone repairs, sound installations, and electrical services. We take pride in delivering quality work at prices that make sense.
              </p>
              <p>
                Whether it's a cracked screen, a woofer that needs repair, or electrical wiring for your home — we've got the skills and experience to get it done right.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-dark text-lg mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  Provide reliable and affordable electronics solutions that keep you connected and your devices running smoothly.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-dark text-lg mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  Become the most trusted electronics hub in the community — where quality meets affordability.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="animate-on-scroll relative">
            <div className="relative bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-8 md:p-12 text-white overflow-hidden">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-12 translate-x-12" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-8 -translate-x-8" />
              
              <div className="relative">
                {/* Phone illustration */}
                <div className="w-48 h-48 mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                  <svg className="w-24 h-24 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-heading font-bold text-center mb-4">
                  Quality You Can Trust
                </h3>
                <p className="text-white/80 text-center leading-relaxed mb-8">
                  Every repair, every installation, every service — done with care and precision. That's the ACE Hood promise.
                </p>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { number: '5000+', label: 'Repairs' },
                    { number: '99%', label: 'Satisfaction' },
                    { number: '5+', label: 'Years' },
                  ].map((stat, i) => (
                    <div key={i} className="text-center bg-white/10 rounded-xl p-4">
                      <div className="text-2xl font-heading font-bold">{stat.number}</div>
                      <div className="text-white/70 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
