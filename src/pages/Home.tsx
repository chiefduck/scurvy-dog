import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  ArrowRight, Users, Award, Shield, Star, Quote, Instagram,
  Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle, ExternalLink
} from 'lucide-react';

export default function Home() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    artist: '',
    message: '',
    company: '',
    tcpaConsent: false,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const artists = [
    {
      id: 'morbid-mark',
      name: 'Morbid Mark',
      instagram: 'https://www.instagram.com/morbidmarkd',
      handle: '@morbidmarkd',
      videoId: '_lOBOH5fWxY',
    },
    {
      id: 'izzy-dalton',
      name: 'Izzy Dalton',
      instagram: 'https://www.instagram.com/izzydaltontattoos',
      handle: '@izzydaltontattoos',
      videoId: 'kL-iI9LVhx4',
    },
    {
      id: 'elora-hinton',
      name: 'Elora Hinton',
      instagram: 'https://www.instagram.com/x_gutter_glitter_x',
      handle: '@x_gutter_glitter_x',
      videoId: 'o6SHrXvKQVs',
    },
    {
      id: 'james-hinton',
      name: 'James Hinton',
      instagram: 'https://www.instagram.com/lowxlife_tattooer/',
      handle: '@lowxlife_tattooer',
      videoId: '1nrphDuazwo',
    },
  ];

  const reviews = [
    {
      name: 'Dane Slade',
      rating: 5,
      text: 'James took REALLY GOOD care of me!! We went in Saturday night right before closing and they were thrilled to do some work. Awesome people! Love the work he did!! ⭐️ HIGHLY RECOMMENDED ⭐️',
    },
    {
      name: 'B',
      rating: 5,
      text: 'Amazing shop and Izzy listened to my vision and brought it to life. I am forever greatful. More ink to come. THANKs Izzy you nailed it !!!!',
    },
    {
      name: 'Channing Vawter',
      rating: 5,
      text: "Izzy is a BEAST & the shop is immaculate. Clean environment, positive energy, welcoming artists, and fun conversation. I think I've found my forever home for tattoos. The talent and creativity that comes from this shop is unmatched.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://automations.level16media.com/webhook-test/scurvy-dog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        artist: '',
        message: '',
        company: '',
        tcpaConsent: false,
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        'Failed to submit your request. Please try again or contact us directly.'
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle scrolling when navigating from other pages
  useEffect(() => {
    if (location.state?.scrollTo) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
              <button
                onClick={() => scrollToSection('contact')}
                className="group px-8 py-4 bg-accent-teal text-primary-black font-bold uppercase tracking-wider rounded-lg hover:bg-accent-teal-light transition-all duration-300 shadow-glow-teal hover:shadow-glow-teal-lg flex items-center justify-center gap-2"
              >
                Book Appointment Online
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('artists')}
                className="px-8 py-4 bg-transparent border-2 border-accent-teal text-accent-teal font-bold uppercase tracking-wider rounded-lg hover:bg-accent-teal hover:text-primary-black transition-all duration-300"
              >
                Meet the Artists
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* Our Story Section */}
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

      {/* Artists Section */}
      <section id="artists" className="py-20 bg-primary-charcoal">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6 text-accent-teal text-glow">Our Artists</h2>
            <p className="text-lg text-secondary-bone/80 leading-relaxed">
              Meet the talented crew behind Scurvy Dog Tattoo. Each artist brings their own unique
              style, expertise, and passion to every piece they create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {artists.map((artist) => (
              <div
                key={artist.id}
                className="group bg-primary-dark rounded-lg overflow-hidden border border-accent-teal/20 hover:border-accent-teal/60 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden relative bg-gradient-to-br from-accent-teal/5 to-accent-teal/20">
                  {artist.videoId ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${artist.videoId}`}
                      title={`${artist.name} video`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-accent-teal/10 border-2 border-accent-teal/30 flex items-center justify-center">
                          <Users className="w-8 h-8 text-accent-teal/50" />
                        </div>
                        <p className="text-secondary-bone/40 text-xs">Video Coming Soon</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-secondary-bone mb-3">
                    {artist.name}
                  </h3>
                  <a
                    href={artist.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent-teal hover:text-accent-teal-light text-sm transition-colors group/link"
                  >
                    <Instagram className="w-4 h-4" />
                    <span className="group-hover/link:underline">{artist.handle}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent-teal text-accent-teal" />
                ))}
              </div>
              <span className="text-2xl font-bold text-accent-teal">5.0</span>
            </div>
            <p className="text-secondary-bone/60">Based on Google Reviews</p>
          </div>
          <h2 className="text-center mb-4 text-accent-teal text-glow">Client Reviews</h2>
          <p className="text-center text-secondary-bone/70 mb-12 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say about their experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-primary-charcoal rounded-lg border border-accent-teal/20 p-8 hover:border-accent-teal/40 transition-all duration-300 relative"
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aftercare Section */}
      <section id="aftercare" className="py-20 bg-primary-charcoal">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-6 text-accent-teal text-glow">Tattoo Aftercare</h2>
            <p className="text-center text-secondary-bone/70 mb-12 max-w-2xl mx-auto">
              Proper aftercare is essential for the best healing results. Follow these instructions carefully.
            </p>

            {/* Initial Care */}
            <div className="mb-12 bg-primary-dark rounded-lg border border-accent-teal/20 p-8">
              <h3 className="text-2xl font-display font-bold text-accent-teal mb-6">
                Initial Care (First 24-72 Hours)
              </h3>
              <div className="space-y-4 text-secondary-bone/80">
                <p>
                  Remove the derm product within 24-72 hours. Buildup of plasma and pigment under the bandage is normal. If leaking or skin irritation occurs, remove immediately and wash thoroughly.
                </p>
                <p>
                  Removal is easiest in a hot shower with generous soap application—peel slowly, then wash completely. Do not re-bandage; allow breathing.
                </p>
                <div className="bg-accent-teal/10 border border-accent-teal/30 rounded-lg p-4 mt-4">
                  <p className="text-accent-teal font-semibold mb-2">For Medical Adhesive Allergies:</p>
                  <p className="text-secondary-bone/80">
                    Inform staff during consent and tell your artist. They'll use a witch hazel wrap instead, which should stay on for only 3-4 hours before removal and standard aftercare.
                  </p>
                </div>
              </div>
            </div>

            {/* Washing & Ointment */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-primary-dark rounded-lg border border-accent-teal/20 p-8">
                <h3 className="text-xl font-display font-bold text-accent-teal mb-4">
                  Washing Instructions
                </h3>
                <ul className="space-y-3 text-secondary-bone/80">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Use anti-bacterial soap (RX Tattoo Care or Dial Gold recommended)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Wash gently with hands only—no washcloths</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Wash 3-4 times daily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Avoid prolonged soaking (hot tubs, pools, long showers)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Pat dry with paper towels; don't rub</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-dark rounded-lg border border-accent-teal/20 p-8">
                <h3 className="text-xl font-display font-bold text-accent-teal mb-4">
                  Ointment Application
                </h3>
                <ul className="space-y-3 text-secondary-bone/80">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Apply thin coats after cleaning (size of a chocolate chip)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>RX Tattoo Care or Aquaphor recommended</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Use clean hands; don't recontaminate the jar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Rub in until not shiny</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Apply 1-3 times daily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-teal mt-1">•</span>
                    <span>Avoid Vaseline, petroleum, Neosporin, and Bag Balm</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Do's and Don'ts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-8">
                <h3 className="text-xl font-display font-bold text-green-500 mb-4">
                  Do's
                </h3>
                <ul className="space-y-2 text-secondary-bone/80">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Wash with clean hands 3-4 times daily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Pat dry with paper towels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Apply thin layer of ointment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Wear clean, soft clothing for 2 weeks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Use sunblock after 3 weeks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Let it peel naturally</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-8">
                <h3 className="text-xl font-display font-bold text-red-500 mb-4">
                  Don'ts
                </h3>
                <ul className="space-y-2 text-secondary-bone/80">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Don't pick, scratch, or irritate the tattoo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Don't soak for 3 weeks (pools, hot tubs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Don't expose to sun for 3 weeks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Don't use washcloths or abrasive materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Don't touch with unclean hands</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Don't use Vaseline or Neosporin</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Peeling Phase */}
            <div className="bg-primary-dark rounded-lg border border-accent-teal/20 p-8 mb-8">
              <h3 className="text-xl font-display font-bold text-accent-teal mb-4">
                Peeling Phase
              </h3>
              <p className="text-secondary-bone/80">
                Peeling begins after several days—this is normal. Don't pick skin. Switch to mild, unscented, dye-free lotion for minimum 2 weeks, 1-2 times daily.
              </p>
            </div>

            {/* Warning */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
              <h3 className="text-xl font-display font-bold text-red-500 mb-3">
                When to Seek Help
              </h3>
              <p className="text-secondary-bone/80">
                If you experience excessive swelling, spreading redness, pus, or signs of infection, contact us immediately or seek medical attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Booking Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6 text-accent-teal text-glow">Book Your Tattoo</h2>
            <p className="text-lg text-secondary-bone/80 leading-relaxed">
              Ready to get inked? Fill out the form below and we'll get back to you within 24-48
              hours to schedule your consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-primary-charcoal rounded-lg border border-accent-teal/20 p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent-teal/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent-teal" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-secondary-bone mb-2">
                  Location
                </h3>
                <p className="text-secondary-bone/70 text-sm">
                  10055 S Parker Rd #4
                  <br />
                  Parker, CO 80134
                </p>
              </div>
            </div>

            <div className="bg-primary-charcoal rounded-lg border border-accent-teal/20 p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent-teal/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-accent-teal" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-secondary-bone mb-2">Phone</h3>
                <p className="text-secondary-bone/70 text-sm">
                  <a href="tel:+17203988051" className="hover:text-accent-teal transition-colors">
                    (720) 398-8051
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-primary-charcoal rounded-lg border border-accent-teal/20 p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent-teal/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-accent-teal" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-secondary-bone mb-2">Hours</h3>
                <p className="text-secondary-bone/70 text-sm">
                  Tue-Sat: 12pm - 8pm
                  <br />
                  Sun-Mon: Closed
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-primary-charcoal rounded-lg border border-accent-teal/30 p-8 md:p-12">
              <h3 className="text-2xl font-display font-bold text-accent-teal mb-8 text-center">
                Booking Request Form
              </h3>

              {status === 'success' && (
                <div className="mb-8 bg-green-500/10 border border-green-500/30 rounded-lg p-6 flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-bold text-green-500 mb-2">
                      Request Submitted Successfully!
                    </h4>
                    <p className="text-secondary-bone/80">
                      Thank you for your booking request. We'll review your information and get
                      back to you within 24-48 hours.
                    </p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-8 bg-red-500/10 border border-red-500/30 rounded-lg p-6 flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-bold text-red-500 mb-2">Submission Failed</h4>
                    <p className="text-secondary-bone/80">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ display: 'none' }}
                />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-secondary-bone mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary-dark border border-accent-teal/30 rounded-lg text-secondary-bone focus:outline-none focus:border-accent-teal transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-secondary-bone mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary-dark border border-accent-teal/30 rounded-lg text-secondary-bone focus:outline-none focus:border-accent-teal transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-secondary-bone mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary-dark border border-accent-teal/30 rounded-lg text-secondary-bone focus:outline-none focus:border-accent-teal transition-colors"
                    placeholder="(720) 555-0123"
                  />
                </div>

                <div>
                  <label
                    htmlFor="artist"
                    className="block text-sm font-medium text-secondary-bone mb-2"
                  >
                    Preferred Artist
                  </label>
                  <select
                    id="artist"
                    name="artist"
                    value={formData.artist}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary-dark border border-accent-teal/30 rounded-lg text-secondary-bone focus:outline-none focus:border-accent-teal transition-colors"
                  >
                    <option value="">No Preference</option>
                    {artists.map((artist) => (
                      <option key={artist.id} value={artist.id}>
                        {artist.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-secondary-bone mb-2"
                  >
                    Tattoo Idea Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-primary-dark border border-accent-teal/30 rounded-lg text-secondary-bone focus:outline-none focus:border-accent-teal transition-colors resize-none"
                    placeholder="Describe your tattoo idea, including size, placement, style preferences, and any reference images you have..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="tcpaConsent"
                    name="tcpaConsent"
                    required
                    checked={formData.tcpaConsent}
                    onChange={(e) => setFormData({ ...formData, tcpaConsent: e.target.checked })}
                    className="mt-1 w-4 h-4 bg-primary-dark border border-accent-teal/30 rounded text-accent-teal focus:ring-accent-teal focus:ring-2"
                  />
                  <label htmlFor="tcpaConsent" className="text-xs text-secondary-bone/70 leading-relaxed">
                    By signing up via text, you agree to receive recurring automated marketing messages, including appointment reminders, at the phone number provided from Scurvy Dog Tattoo. Consent is not a condition of purchase. Reply STOP to unsubscribe. Message frequency varies. Msg & data rates may apply. Your Privacy is our priority. Your information will not be shared.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading' || !formData.tcpaConsent}
                  className="w-full px-8 py-4 bg-accent-teal text-primary-black font-bold uppercase tracking-wider rounded-lg hover:bg-accent-teal-light transition-all duration-300 shadow-glow-teal hover:shadow-glow-teal-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-black/30 border-t-primary-black rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5" />
                      Submit Booking Request
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
