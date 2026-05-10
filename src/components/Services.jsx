const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Phone Repair',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    items: [
      'Screen replacement',
      'Charging issues',
      'Water damage',
      'Software issues',
      'Phone unlocking',
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    title: 'Sound Installation',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    items: [
      'Woofer repair',
      'Amplifier repair',
      'Home theatre setup',
      'Car sound repair',
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Electrical Services',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
    subtitle: '(Stima)',
    items: [
      'House wiring',
      'Socket installation',
      'Lighting installation',
      'Power troubleshooting',
    ],
  },
]

function ServiceCard({ service, index }) {
  return (
    <div
      className="animate-on-scroll group card overflow-hidden hover:-translate-y-2"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className={`p-6 md:p-8 bg-gradient-to-br ${service.color} text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
        <div className="relative">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            {service.icon}
          </div>
          <h3 className="text-2xl font-heading font-bold mb-1">
            {service.title}
            {service.subtitle && (
              <span className="block text-sm font-normal opacity-80">{service.subtitle}</span>
            )}
          </h3>
        </div>
      </div>

      {/* Items */}
      <div className="p-6 md:p-8">
        <ul className="space-y-3">
          {service.items.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/254707428233"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-gray-200 hover:border-primary hover:text-primary text-gray-600 font-semibold transition-all group-hover:bg-primary/5"
        >
          Book This Service
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  )
}

function Services() {
  return (
    <section id="services" className="section-padding bg-bg">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            What We Do
          </span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            From phone repairs to sound installations and electrical work — we've got you covered with quality service at affordable prices.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
