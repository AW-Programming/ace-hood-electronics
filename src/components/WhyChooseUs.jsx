const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fast Repairs',
    description: 'Most repairs done same-day. We value your time and get your devices back to you quickly.',
    color: 'from-yellow-400 to-amber-500',
    bgColor: 'bg-amber-50',
    iconColor: '#D97706',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Affordable Pricing',
    description: 'Quality service doesn\'t have to break the bank. We offer competitive prices for all services.',
    color: 'from-green-400 to-emerald-500',
    bgColor: 'bg-green-50',
    iconColor: '#059669',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Genuine Spare Parts',
    description: 'We use only quality and genuine parts to ensure your device lasts longer after repair.',
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: '#2563EB',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Trusted Local Fundi',
    description: 'Built a reputation as the go-to electronics technician in the neighborhood for years.',
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-50',
    iconColor: '#7C3AED',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Same-Day Service',
    description: 'Walk in with a problem, walk out with a solution. Most services completed the same day.',
    color: 'from-rose-400 to-pink-500',
    bgColor: 'bg-rose-50',
    iconColor: '#DB2777',
  },
]

function FeatureCard({ feature, index }) {
  return (
    <div
      className="animate-on-scroll group card p-6 md:p-8 hover:-translate-y-2"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon - Visible with color */}
      <div 
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
        style={{ backgroundColor: feature.bgColor.replace('bg-', '').includes('50') ? feature.bgColor : feature.bgColor }}
      >
        <div style={{ color: feature.iconColor }}>
          {feature.icon}
        </div>
      </div>
      <h3 className="text-xl font-heading font-bold text-dark mb-2">{feature.title}</h3>
      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
    </div>
  )
}

function WhyChooseUs() {
  return (
    <section className="section-padding bg-bg">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Why Us
          </span>
          <h2 className="section-title">Why Choose ACE Hood?</h2>
          <p className="section-subtitle">
            We're not just another repair shop. We're your trusted neighborhood fundi who cares about quality and your satisfaction.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>

        {/* Stats */}
        <div className="animate-on-scroll mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '5000+', label: 'Phones Repaired' },
            { number: '500+', label: 'Sound Installations' },
            { number: '2000+', label: 'Happy Customers' },
            { number: '5+', label: 'Years Experience' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
