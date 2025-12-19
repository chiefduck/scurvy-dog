import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const artists = [
  {
    id: 'captain-jack',
    name: 'Captain Jack',
    specialty: 'Traditional & Neo-Traditional',
    bio: 'With over 15 years of experience, Captain Jack specializes in bold traditional work with a modern twist.',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'sally-storms',
    name: 'Sally Storms',
    specialty: 'Black & Grey Realism',
    bio: 'Sally brings portraits to life with stunning detail and photorealistic precision.',
    image: 'https://images.pexels.com/photos/3394658/pexels-photo-3394658.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'mad-dog-mike',
    name: 'Mad Dog Mike',
    specialty: 'Color Work & Portraits',
    bio: 'Mike is known for his vibrant color palettes and dynamic compositions.',
    image: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'ruby-waves',
    name: 'Ruby Waves',
    specialty: 'Fine Line & Minimalist',
    bio: 'Ruby creates elegant, delicate designs with precision and grace.',
    image: 'https://images.pexels.com/photos/3771823/pexels-photo-3771823.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'hooks-hardy',
    name: 'Hooks Hardy',
    specialty: 'Japanese & Oriental',
    bio: 'Hooks specializes in traditional Japanese tattooing with authentic techniques.',
    image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'anchor-annie',
    name: 'Anchor Annie',
    specialty: 'Geometric & Abstract',
    bio: 'Annie pushes boundaries with bold geometric patterns and abstract designs.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Artists() {
  return (
    <div>
      <section className="py-20 bg-primary-charcoal">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="mb-6 text-accent-teal text-glow">Our Artists</h1>
            <p className="text-lg text-secondary-bone/80 leading-relaxed">
              Meet the talented crew behind Scurvy Dog Tattoo. Each artist brings their own unique
              style, expertise, and passion to every piece they create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist) => (
              <Link
                key={artist.id}
                to={`/artists/${artist.id}`}
                className="group block bg-primary-dark rounded-lg overflow-hidden border border-accent-teal/20 hover:border-accent-teal/60 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-black/90 via-primary-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-secondary-bone mb-2 flex items-center justify-between">
                    {artist.name}
                    <ArrowRight className="w-5 h-5 text-accent-teal opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-accent-teal text-sm font-medium mb-3">{artist.specialty}</p>
                  <p className="text-secondary-bone/70 text-sm leading-relaxed">{artist.bio}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center bg-primary-charcoal border border-accent-teal/30 rounded-lg p-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-accent-teal">
              Ready to Book?
            </h2>
            <p className="text-lg text-secondary-bone/80 mb-8">
              Choose your artist and let's start planning your next masterpiece.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-teal text-primary-black font-bold uppercase tracking-wider rounded-lg hover:bg-accent-teal-light transition-all duration-300 shadow-glow-teal hover:shadow-glow-teal-lg"
            >
              Book Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
