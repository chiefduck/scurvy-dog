import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Instagram } from 'lucide-react';

const artistsData: Record<
  string,
  {
    name: string;
    specialty: string;
    bio: string;
    fullBio: string;
    experience: string;
    styles: string[];
    image: string;
    gallery: string[];
  }
> = {
  'captain-jack': {
    name: 'Captain Jack',
    specialty: 'Traditional & Neo-Traditional',
    bio: 'With over 15 years of experience, Captain Jack specializes in bold traditional work with a modern twist.',
    fullBio:
      "Captain Jack has been tattooing for over 15 years and is known for his bold, vibrant traditional work. He combines classic American traditional techniques with modern neo-traditional elements to create timeless pieces. His love for nautical themes and vintage Americana shines through in every tattoo.",
    experience: '15+ years',
    styles: ['Traditional', 'Neo-Traditional', 'American Traditional', 'Nautical'],
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1557652/pexels-photo-1557652.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  'sally-storms': {
    name: 'Sally Storms',
    specialty: 'Black & Grey Realism',
    bio: 'Sally brings portraits to life with stunning detail and photorealistic precision.',
    fullBio:
      'Sally Storms is a master of black and grey realism, specializing in portraits and photorealistic work. With a background in fine art, she brings an exceptional eye for detail and shading to every piece. Her portraits capture not just likeness, but the soul and emotion of her subjects.',
    experience: '10+ years',
    styles: ['Black & Grey', 'Realism', 'Portraits', 'Photo Realism'],
    image: 'https://images.pexels.com/photos/3394658/pexels-photo-3394658.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2183132/pexels-photo-2183132.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1194412/pexels-photo-1194412.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3181104/pexels-photo-3181104.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  'mad-dog-mike': {
    name: 'Mad Dog Mike',
    specialty: 'Color Work & Portraits',
    bio: 'Mike is known for his vibrant color palettes and dynamic compositions.',
    fullBio:
      "Mad Dog Mike brings energy and vibrancy to every tattoo he creates. Specializing in color portraits and dynamic compositions, Mike's work is instantly recognizable for its bold color choices and striking contrast. He loves working on large-scale pieces where he can really showcase his color theory expertise.",
    experience: '12+ years',
    styles: ['Color Realism', 'Color Portraits', 'Vibrant Color Work', 'Large Scale'],
    image: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  'ruby-waves': {
    name: 'Ruby Waves',
    specialty: 'Fine Line & Minimalist',
    bio: 'Ruby creates elegant, delicate designs with precision and grace.',
    fullBio:
      'Ruby Waves specializes in fine line and minimalist tattoos, creating elegant and delicate designs that speak volumes through simplicity. Her precise linework and attention to spacing make her pieces timeless and sophisticated. She excels at botanical designs, minimalist symbols, and dainty script work.',
    experience: '8+ years',
    styles: ['Fine Line', 'Minimalist', 'Botanical', 'Script'],
    image: 'https://images.pexels.com/photos/3771823/pexels-photo-3771823.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1456951/pexels-photo-1456951.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1667849/pexels-photo-1667849.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  'hooks-hardy': {
    name: 'Hooks Hardy',
    specialty: 'Japanese & Oriental',
    bio: 'Hooks specializes in traditional Japanese tattooing with authentic techniques.',
    fullBio:
      'Hooks Hardy has dedicated his career to mastering traditional Japanese tattooing (Irezumi). Having studied under Japanese masters, he brings authentic technique and deep cultural understanding to his work. His large-scale bodysuit work and traditional Japanese imagery showcase the true artistry of this ancient craft.',
    experience: '14+ years',
    styles: ['Japanese Traditional', 'Irezumi', 'Oriental', 'Large Scale Bodywork'],
    image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1616434/pexels-photo-1616434.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1719669/pexels-photo-1719669.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1166990/pexels-photo-1166990.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  'anchor-annie': {
    name: 'Anchor Annie',
    specialty: 'Geometric & Abstract',
    bio: 'Annie pushes boundaries with bold geometric patterns and abstract designs.',
    fullBio:
      "Anchor Annie is known for pushing the boundaries of tattoo art with her bold geometric patterns and abstract designs. She combines sacred geometry, dotwork, and modern abstract elements to create unique, contemporary pieces. Annie's work is perfect for those looking for something truly unique and modern.",
    experience: '9+ years',
    styles: ['Geometric', 'Abstract', 'Dotwork', 'Sacred Geometry'],
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1739748/pexels-photo-1739748.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
};

export default function ArtistDetail() {
  const { id } = useParams<{ id: string }>();

  if (!id || !artistsData[id]) {
    return <Navigate to="/artists" replace />;
  }

  const artist = artistsData[id];

  return (
    <div>
      <section className="py-12 bg-primary-charcoal">
        <div className="container mx-auto px-4 lg:px-8">
          <Link
            to="/artists"
            className="inline-flex items-center gap-2 text-accent-teal hover:text-accent-teal-light transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Artists
          </Link>
        </div>
      </section>

      <section className="py-12 bg-primary-charcoal">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden border-2 border-accent-teal/30">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h1 className="mb-4 text-accent-teal text-glow">{artist.name}</h1>
              <p className="text-xl text-accent-teal-light font-medium mb-6">
                {artist.specialty}
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-display font-bold text-secondary-bone mb-3">
                  About
                </h3>
                <p className="text-secondary-bone/80 leading-relaxed">{artist.fullBio}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-display font-bold text-secondary-bone mb-3">
                  Experience
                </h3>
                <p className="text-secondary-bone/80">{artist.experience}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-display font-bold text-secondary-bone mb-3">
                  Specialties
                </h3>
                <div className="flex flex-wrap gap-2">
                  {artist.styles.map((style) => (
                    <span
                      key={style}
                      className="px-4 py-2 bg-accent-teal/10 border border-accent-teal/30 text-accent-teal text-sm rounded-full"
                    >
                      {style}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-accent-teal hover:text-accent-teal-light transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  Follow on Instagram
                </a>
              </div>

              <Link
                to={`/contact?artist=${id}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-teal text-primary-black font-bold uppercase tracking-wider rounded-lg hover:bg-accent-teal-light transition-all duration-300 shadow-glow-teal hover:shadow-glow-teal-lg"
              >
                Book with {artist.name.split(' ')[0]}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-center mb-12 text-accent-teal">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artist.gallery.map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden border border-accent-teal/20 hover:border-accent-teal/60 transition-all duration-300 group"
              >
                <img
                  src={image}
                  alt={`${artist.name} work ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-secondary-bone/60 mt-8 text-sm">
            Portfolio images coming soon. Follow on Instagram for latest work.
          </p>
        </div>
      </section>
    </div>
  );
}
