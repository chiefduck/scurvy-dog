import { ExternalLink, ShoppingBag } from 'lucide-react';

export default function Merch() {
  const merchItems = [
    {
      name: 'Scurvy Dog T-Shirt',
      price: '$29.99',
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Logo Hoodie',
      price: '$54.99',
      image: 'https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Anchor Hat',
      price: '$24.99',
      image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Tattoo Care Kit',
      price: '$39.99',
      image: 'https://images.pexels.com/photos/6620901/pexels-photo-6620901.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Studio Sticker Pack',
      price: '$9.99',
      image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Logo Tote Bag',
      price: '$19.99',
      image: 'https://images.pexels.com/photos/7679464/pexels-photo-7679464.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div>
      <section className="py-20 bg-primary-charcoal">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="mb-6 text-accent-teal text-glow">Official Merchandise</h1>
            <p className="text-lg text-secondary-bone/80 leading-relaxed">
              Show your Scurvy Dog pride with our exclusive merchandise. From apparel to aftercare
              products, represent the crew in style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {merchItems.map((item, index) => (
              <div
                key={index}
                className="group bg-primary-dark rounded-lg overflow-hidden border border-accent-teal/20 hover:border-accent-teal/60 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden bg-gray-800">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-display font-bold text-secondary-bone mb-2">
                    {item.name}
                  </h3>
                  <p className="text-accent-teal text-xl font-bold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-primary-dark border border-accent-teal/30 rounded-lg p-8 md:p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent-teal/10 flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 text-accent-teal" />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4 text-accent-teal">
                Shop Coming Soon
              </h2>
              <p className="text-lg text-secondary-bone/80 mb-8 leading-relaxed">
                Our online store is currently under construction. In the meantime, visit us at the
                studio to purchase merchandise in person.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-teal text-primary-black font-bold uppercase tracking-wider rounded-lg hover:bg-accent-teal-light transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                  Visit External Store
                </a>
                <button className="px-6 py-3 border-2 border-accent-teal text-accent-teal font-bold uppercase tracking-wider rounded-lg hover:bg-accent-teal hover:text-primary-black transition-all duration-300">
                  Notify Me When Available
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12 text-accent-teal">Why Choose Our Merch?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary-charcoal rounded-lg border border-accent-teal/20 p-6">
                <h3 className="text-lg font-display font-bold text-secondary-bone mb-2">
                  Premium Quality
                </h3>
                <p className="text-secondary-bone/70">
                  High-quality materials and printing for merchandise that lasts.
                </p>
              </div>
              <div className="bg-primary-charcoal rounded-lg border border-accent-teal/20 p-6">
                <h3 className="text-lg font-display font-bold text-secondary-bone mb-2">
                  Original Designs
                </h3>
                <p className="text-secondary-bone/70">
                  Exclusive artwork created by our talented in-house artists.
                </p>
              </div>
              <div className="bg-primary-charcoal rounded-lg border border-accent-teal/20 p-6">
                <h3 className="text-lg font-display font-bold text-secondary-bone mb-2">
                  Support Local
                </h3>
                <p className="text-secondary-bone/70">
                  Every purchase supports our studio and local tattoo community.
                </p>
              </div>
              <div className="bg-primary-charcoal rounded-lg border border-accent-teal/20 p-6">
                <h3 className="text-lg font-display font-bold text-secondary-bone mb-2">
                  Limited Editions
                </h3>
                <p className="text-secondary-bone/70">
                  Special releases and seasonal designs available in limited quantities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
