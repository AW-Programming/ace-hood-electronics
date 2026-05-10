const productCategories = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Phone Accessories',
    color: 'bg-blue-500',
    items: ['Chargers', 'Earphones', 'Power banks', 'Phone covers', 'Screen protectors'],
    emoji: '📱',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M9 9h.01M15 9h.01M9.5 12h5" />
      </svg>
    ),
    title: 'Sound Accessories',
    color: 'bg-purple-500',
    items: ['Amplifiers', 'Woofers', 'Speakers', 'Audio cables', 'Subwoofers'],
    emoji: '🔊',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Electrical Accessories',
    color: 'bg-amber-500',
    items: ['Extension cables', 'Bulbs', 'Adapters', 'Switches', 'Power strips'],
    emoji: '⚡',
  },
]

function ProductCard({ category, index }) {
  return (
    <div
      className="animate-on-scroll group card overflow-hidden hover:-translate-y-2"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="p-8">
        {/* Icon */}
        <div className={`w-20 h-20 ${category.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
          {category.icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-heading font-bold text-dark mb-2">{category.title}</h3>

        {/* Items */}
        <div className="flex flex-wrap gap-2 mt-4">
          {category.items.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-lg text-sm text-gray-700 font-medium border border-gray-100"
            >
              <span className="text-lg">{category.emoji}</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function Products() {
  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Shop With Us
          </span>
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Quality accessories at the best prices. Ask us on WhatsApp for the latest stock and deals.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {productCategories.map((cat, i) => (
            <ProductCard key={i} category={cat} index={i} />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="animate-on-scroll relative overflow-hidden bg-gradient-to-r from-primary to-blue-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-12 -translate-x-12" />
          
          <div className="relative">
            <span className="text-5xl mb-4 block">💬</span>
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3">
              Ask on WhatsApp for Latest Prices
            </h3>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              We update our stock and prices regularly. Chat with us now to get the best deals!
            </p>
            <a
              href="https://wa.me/254707428233?text=Hi%20ACE%20Hood!%20I'd%20like%20to%20know%20your%20latest%20prices."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent hover:bg-green-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.332 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Get Latest Prices
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
