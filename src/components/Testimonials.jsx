const testimonials = [
  {
    name: 'Kevin Mwangi',
    location: 'Nairobi',
    avatar: '👨🏿‍💻',
    rating: 5,
    text: 'ACE Hood fixed my iPhone screen in under an hour! The quality is amazing and the price was very fair. Highly recommend for anyone needing quick phone repairs.',
    service: 'Phone Repair',
  },
  {
    name: 'Brian Otieno',
    location: 'Kiambu',
    avatar: '👨🏿‍🔧',
    rating: 5,
    text: 'Got my car sound system repaired by the ACE Hood team. The woofer repair is fire! 🔥 Best sound quality in the area. They really know their stuff.',
    service: 'Sound Installation',
  },
  {
    name: 'Mercy Wanjiku',
    location: 'Thika',
    avatar: '👩🏿‍💼',
    rating: 5,
    text: 'My phone had water damage and I thought it was finished. ACE Hood brought it back to life! Same day service and very affordable. God bless this fundi! 🙏',
    service: 'Water Damage Repair',
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial, index }) {
  return (
    <div
      className="animate-on-scroll group card p-6 md:p-8 hover:-translate-y-2 relative"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Quote mark */}
      <div className="absolute top-6 right-6 text-6xl font-heading font-bold text-primary/10 leading-none">"</div>
      
      <div className="relative">
        {/* Rating */}
        <StarRating rating={testimonial.rating} />
        
        {/* Text */}
        <p className="text-gray-700 leading-relaxed mt-4 mb-6 text-lg">
          "{testimonial.text}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
          <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center text-3xl">
            {testimonial.avatar}
          </div>
          <div>
            <h4 className="font-heading font-bold text-dark">{testimonial.name}</h4>
            <p className="text-gray-500 text-sm">{testimonial.location}</p>
          </div>
          <div className="ml-auto">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
              {testimonial.service}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 bg-yellow-400/20 text-yellow-700 rounded-full text-sm font-semibold mb-4">
            ⭐ Reviews
          </span>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it — hear from our happy customers who trust us with their devices.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
