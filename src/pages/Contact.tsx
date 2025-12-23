import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    artist: searchParams.get('artist') || '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const artists = [
    { id: '', label: 'No Preference' },
    { id: 'captain-jack', label: 'Captain Jack' },
    { id: 'sally-storms', label: 'Sally Storms' },
    { id: 'mad-dog-mike', label: 'Mad Dog Mike' },
    { id: 'ruby-waves', label: 'Ruby Waves' },
    { id: 'hooks-hardy', label: 'Hooks Hardy' },
    { id: 'anchor-annie', label: 'Anchor Annie' },
  ];

  useEffect(() => {
    const artistParam = searchParams.get('artist');
    if (artistParam) {
      setFormData((prev) => ({ ...prev, artist: artistParam }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://automations.level16media.com/webhook/form/scurvy-dog/contact', {
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

  return (
    <div>
      <section className="py-20 bg-primary-charcoal">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="mb-6 text-accent-teal text-glow">Book Your Tattoo</h1>
            <p className="text-lg text-secondary-bone/80 leading-relaxed">
              Ready to get inked? Fill out the form below and we'll get back to you within 24-48
              hours to schedule your consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-primary-dark rounded-lg border border-accent-teal/20 p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent-teal/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent-teal" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-secondary-bone mb-2">
                  Location
                </h3>
                <p className="text-secondary-bone/70 text-sm">
                  123 Anchor Street
                  <br />
                  Port City, PC 12345
                </p>
              </div>
            </div>

            <div className="bg-primary-dark rounded-lg border border-accent-teal/20 p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent-teal/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-accent-teal" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-secondary-bone mb-2">Phone</h3>
                <p className="text-secondary-bone/70 text-sm">
                  <a href="tel:5551234567" className="hover:text-accent-teal transition-colors">
                    (555) 123-4567
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-primary-dark rounded-lg border border-accent-teal/20 p-6 flex items-start gap-4">
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
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-primary-charcoal rounded-lg border border-accent-teal/30 p-8 md:p-12">
              <h2 className="text-2xl font-display font-bold text-accent-teal mb-8 text-center">
                Booking Request Form
              </h2>

              {status === 'success' && (
                <div className="mb-8 bg-green-500/10 border border-green-500/30 rounded-lg p-6 flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold text-green-500 mb-2">
                      Request Submitted Successfully!
                    </h3>
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
                    <h3 className="text-lg font-bold text-red-500 mb-2">Submission Failed</h3>
                    <p className="text-secondary-bone/80">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    placeholder="(555) 123-4567"
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
                    {artists.map((artist) => (
                      <option key={artist.id} value={artist.id}>
                        {artist.label}
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

                <button
                  type="submit"
                  disabled={status === 'loading'}
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

                <p className="text-sm text-secondary-bone/60 text-center">
                  By submitting this form, you agree to our{' '}
                  <a href="/privacy" className="text-accent-teal hover:text-accent-teal-light">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
