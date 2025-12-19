import { Shield, Droplet, Sun, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

export default function Aftercare() {
  const immediateSteps = [
    'Leave the bandage on for 2-4 hours as instructed by your artist',
    'Wash your hands thoroughly before touching your tattoo',
    'Remove the bandage gently and wash with lukewarm water and fragrance-free soap',
    'Pat dry with a clean paper towel (avoid fabric towels)',
    'Apply a thin layer of recommended aftercare ointment',
  ];

  const healingSteps = [
    {
      title: 'Days 1-3: Initial Healing',
      description:
        'Wash 2-3 times daily with lukewarm water and fragrance-free soap. Pat dry and apply a thin layer of aftercare ointment. Your tattoo may feel warm and look slightly swollen.',
    },
    {
      title: 'Days 4-7: Peeling Phase',
      description:
        'Your tattoo will start to peel like a sunburn. DO NOT pick or scratch. Continue washing and moisturizing. Switch to fragrance-free lotion if recommended by your artist.',
    },
    {
      title: 'Days 8-14: Continued Healing',
      description:
        'Keep moisturizing 2-3 times daily. The tattoo may look dull or cloudy - this is normal. Continue protecting from sun exposure.',
    },
    {
      title: 'Weeks 3-4: Final Healing',
      description:
        'Your tattoo should be fully healed. Continue using sunscreen when exposed to sun. Schedule a touch-up appointment if needed.',
    },
  ];

  const dos = [
    'Keep your tattoo clean and moisturized',
    'Wear loose, breathable clothing',
    'Use fragrance-free products',
    'Stay hydrated and eat healthy',
    'Sleep on clean sheets',
    'Apply sunscreen after healing (SPF 30+)',
  ];

  const donts = [
    'Pick, scratch, or peel your tattoo',
    'Submerge in water (pools, ocean, baths)',
    'Expose to direct sunlight',
    'Wear tight or restrictive clothing',
    'Use scented lotions or soaps',
    'Exercise heavily for 48 hours',
    'Touch with dirty hands',
  ];

  return (
    <div>
      <section className="py-20 bg-primary-charcoal">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="mb-6 text-accent-teal text-glow">Tattoo Aftercare Guide</h1>
            <p className="text-lg text-secondary-bone/80 leading-relaxed">
              Proper aftercare is essential for optimal healing and vibrant, long-lasting results.
              Follow these instructions carefully to ensure your new tattoo heals beautifully.
            </p>
          </div>

          <div className="mb-16">
            <div className="bg-accent-teal/10 border border-accent-teal/30 rounded-lg p-6 flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-accent-teal flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-display font-bold text-accent-teal mb-2">
                  Important Note
                </h3>
                <p className="text-secondary-bone/80 leading-relaxed">
                  These are general guidelines. Always follow the specific instructions provided by
                  your artist, as they may have personalized recommendations based on your tattoo
                  size, location, and skin type.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12 text-accent-teal">Immediate Care (First 24 Hours)</h2>
            <div className="bg-primary-charcoal rounded-lg border border-accent-teal/20 p-8">
              <ol className="space-y-4">
                {immediateSteps.map((step, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-teal/20 border border-accent-teal flex items-center justify-center text-accent-teal font-bold">
                      {index + 1}
                    </span>
                    <span className="text-secondary-bone/80 leading-relaxed pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-charcoal">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12 text-accent-teal">Healing Timeline</h2>
            <div className="space-y-6">
              {healingSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-primary-dark rounded-lg border border-accent-teal/20 p-6 hover:border-accent-teal/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-display font-bold text-secondary-bone mb-3">
                    {step.title}
                  </h3>
                  <p className="text-secondary-bone/80 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-12 text-accent-teal">Do's and Don'ts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-primary-charcoal rounded-lg border border-green-500/30 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-green-500">DO</h3>
                </div>
                <ul className="space-y-3">
                  {dos.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-bone/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary-charcoal rounded-lg border border-red-500/30 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-red-500">DON'T</h3>
                </div>
                <ul className="space-y-3">
                  {donts.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-bone/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-charcoal">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12 text-accent-teal">Essential Care Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-primary-dark rounded-lg border border-accent-teal/20 p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-teal/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-lg font-display font-bold text-secondary-bone mb-2">
                  Keep Clean
                </h3>
                <p className="text-secondary-bone/70 text-sm">
                  Wash gently with fragrance-free soap 2-3 times daily
                </p>
              </div>

              <div className="bg-primary-dark rounded-lg border border-accent-teal/20 p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-teal/10 flex items-center justify-center">
                  <Droplet className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-lg font-display font-bold text-secondary-bone mb-2">
                  Stay Moisturized
                </h3>
                <p className="text-secondary-bone/70 text-sm">
                  Apply thin layers of ointment or lotion as directed
                </p>
              </div>

              <div className="bg-primary-dark rounded-lg border border-accent-teal/20 p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-teal/10 flex items-center justify-center">
                  <Sun className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-lg font-display font-bold text-secondary-bone mb-2">
                  Avoid Sun
                </h3>
                <p className="text-secondary-bone/70 text-sm">
                  Keep covered and use SPF 30+ after healing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-8">
              <h3 className="text-2xl font-display font-bold text-red-500 mb-4 flex items-center gap-3">
                <AlertCircle className="w-8 h-8" />
                When to Seek Help
              </h3>
              <p className="text-secondary-bone/80 mb-4">
                Contact your artist or seek medical attention if you experience:
              </p>
              <ul className="space-y-2 text-secondary-bone/80">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Excessive redness, swelling, or warmth after the first few days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Yellow or green discharge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Red streaks extending from the tattoo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Fever or chills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Severe pain or unusual symptoms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
