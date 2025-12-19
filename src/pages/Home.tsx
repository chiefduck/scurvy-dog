import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Shield, Star, Quote } from 'lucide-react';

export default function Home() {
  const reviews = [
    {
      name: 'Sarah Martinez',
      rating: 5,
      text: 'Captain Jack did an amazing job on my sleeve. The attention to detail is incredible and the whole experience was professional from start to finish.',
      date: '2 weeks ago',
    },
    {
      name: 'Mike Thompson',
      rating: 5,
      text: "Best tattoo shop in the city! Sally's black and grey work is absolutely stunning. Clean studio, friendly staff, and exceptional artistry.",
      date: '1 month ago',
    },
    {
      name: 'Jessica Chen',
      rating: 5,
      text: 'Ruby created the most beautiful fine line piece for me. She really listened to what I wanted and brought my vision to life perfectly.',
      date: '3 weeks ago',
    },
  ];

  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/thescurvydogtattooprojectllc.jpg)',
          }}
        ></div>
        <div className="absolute inset-0 bg-primary-black/70"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-block">
              <img
                src="/logo10.png"
                alt="Scurvy Dog"
                className="w-32 h-32 md:w-48 md:h-48 mx-auto drop-shadow-[0_0_30px_rgba(20,184,166,0.4)]"
              />
            </div>
            <h1 className="mb-6 text-secondary-bone">
              <span className="block text-glow-lg">Scurvy Dog Tattoo</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-bone/80 mb-12 leading-relaxed">
              Where bold art meets rebellious spirit. Premium custom tattoos crafted by master
              artists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-accent-teal text-primary-black font-bold uppercase tracking-wider rounded-lg hover:bg-accent-teal-light transition-all duration-300 shadow-glow-teal hover:shadow-glow-teal-lg flex items-center justify-center gap-2"
              >
                Book a Tattoo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/artists"
                className="px-8 py-4 bg-transparent border-2 border-accent-teal text-accent-teal font-bold uppercase tracking-wider rounded-lg hover:bg-accent-teal hover:text-primary-black transition-all duration-300"
              >
                Meet the Artists
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent-teal/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-accent-teal rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-charcoal">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-primary-dark rounded-lg border border-accent-teal/20 hover:border-accent-teal/40 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-teal/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-accent-teal" />
              </div>
              <h3 className="text-xl font-display font-bold text-secondary-bone mb-2">
                Master Artists
              </h3>
              <p className="text-secondary-bone/70">
                Our crew of talented artists bring decades of combined experience.
              </p>
            </div>

            <div className="text-center p-8 bg-primary-dark rounded-lg border border-accent-teal/20 hover:border-accent-teal/40 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-teal/10 flex items-center justify-center">
                <Award className="w-8 h-8 text-accent-teal" />
              </div>
              <h3 className="text-xl font-display font-bold text-secondary-bone mb-2">
                Premium Quality
              </h3>
              <p className="text-secondary-bone/70">
                Top-tier equipment and techniques for exceptional results.
              </p>
            </div>

            <div className="text-center p-8 bg-primary-dark rounded-lg border border-accent-teal/20 hover:border-accent-teal/40 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-teal/10 flex items-center justify-center">
                <Shield className="w-8 h-8 text-accent-teal" />
              </div>
              <h3 className="text-xl font-display font-bold text-secondary-bone mb-2">
                Safe & Clean
              </h3>
              <p className="text-secondary-bone/70">
                Fully licensed with strict health and safety protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-6 text-accent-teal text-glow">Our Story</h2>
            <p className="text-lg text-secondary-bone/80 mb-6 leading-relaxed text-center">
              Founded on the principles of bold artistry and unwavering dedication, Scurvy Dog
              Tattoo has been charting new waters in the tattoo industry since day one.
            </p>
            <p className="text-lg text-secondary-bone/80 leading-relaxed text-center">
              We believe tattoos are more than ink—they're stories, memories, and declarations of
              identity. Our artists work closely with each client to bring their vision to life with
              precision, creativity, and respect for the craft.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-charcoal">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-center mb-4 text-accent-teal text-glow">Client Reviews</h2>
          <p className="text-center text-secondary-bone/70 mb-12 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say about their experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-primary-dark rounded-lg border border-accent-teal/20 p-8 hover:border-accent-teal/40 transition-all duration-300 relative"
              >
                <Quote className="w-10 h-10 text-accent-teal/20 absolute top-4 right-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-teal text-accent-teal" />
                  ))}
                </div>
                <p className="text-secondary-bone/80 leading-relaxed mb-6 relative z-10">
                  "{review.text}"
                </p>
                <div className="border-t border-accent-teal/20 pt-4">
                  <p className="text-secondary-bone font-medium">{review.name}</p>
                  <p className="text-secondary-bone/60 text-sm">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/artists"
              className="inline-flex items-center gap-2 text-accent-teal hover:text-accent-teal-light font-medium transition-colors group"
            >
              Meet Our Artists
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center bg-primary-charcoal border border-accent-teal/30 rounded-lg p-12">
            <h2 className="mb-6 text-accent-teal text-glow">Ready to Get Inked?</h2>
            <p className="text-lg text-secondary-bone/80 mb-8">
              Book your consultation today and let's create something legendary together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-teal text-primary-black font-bold uppercase tracking-wider rounded-lg hover:bg-accent-teal-light transition-all duration-300 shadow-glow-teal hover:shadow-glow-teal-lg"
            >
              Book Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
