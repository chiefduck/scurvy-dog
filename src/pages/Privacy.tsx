export default function Privacy() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-8 text-accent-teal text-glow">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <div className="bg-primary-charcoal rounded-lg border border-accent-teal/20 p-8">
              <p className="text-secondary-bone/80 leading-relaxed mb-4">
                <strong className="text-secondary-bone">Last Updated:</strong> December 2024
              </p>
              <p className="text-secondary-bone/80 leading-relaxed">
                At Scurvy Dog Tattoo, we respect your privacy and are committed to protecting your
                personal information. This Privacy Policy explains how we collect, use, and
                safeguard your data.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-display font-bold text-accent-teal mb-4">
                Information We Collect
              </h2>
              <div className="bg-primary-charcoal rounded-lg border border-accent-teal/20 p-8 space-y-4">
                <p className="text-secondary-bone/80 leading-relaxed">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary-bone/80">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Tattoo consultation and booking details</li>
                  <li>Payment information for services and merchandise</li>
                  <li>Communication preferences</li>
                  <li>
                    Health information relevant to tattoo services (allergies, medical conditions)
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-accent-teal mb-4">
                How We Use Your Information
              </h2>
              <div className="bg-primary-charcoal rounded-lg border border-accent-teal/20 p-8 space-y-4">
                <p className="text-secondary-bone/80 leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary-bone/80">
                  <li>Schedule and manage tattoo appointments</li>
                  <li>Communicate with you about our services</li>
                  <li>Process payments and transactions</li>
                  <li>Send appointment reminders and aftercare instructions</li>
                  <li>Improve our services and customer experience</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-accent-teal mb-4">
                Information Sharing
              </h2>
              <div className="bg-primary-charcoal rounded-lg border border-accent-teal/20 p-8">
                <p className="text-secondary-bone/80 leading-relaxed">
                  We do not sell, rent, or share your personal information with third parties
                  except:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary-bone/80 mt-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                  <li>With service providers who assist in our operations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-accent-teal mb-4">
                Data Security
              </h2>
              <div className="bg-primary-charcoal rounded-lg border border-accent-teal/20 p-8">
                <p className="text-secondary-bone/80 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your
                  personal information against unauthorized access, alteration, disclosure, or
                  destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-accent-teal mb-4">
                Your Rights
              </h2>
              <div className="bg-primary-charcoal rounded-lg border border-accent-teal/20 p-8">
                <p className="text-secondary-bone/80 leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-secondary-bone/80">
                  <li>Access your personal information</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Object to processing of your data</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-accent-teal mb-4">
                Cookies and Tracking
              </h2>
              <div className="bg-primary-charcoal rounded-lg border border-accent-teal/20 p-8">
                <p className="text-secondary-bone/80 leading-relaxed">
                  We may use cookies and similar tracking technologies to improve your browsing
                  experience and analyze site usage. You can control cookie preferences through your
                  browser settings.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-accent-teal mb-4">
                Changes to This Policy
              </h2>
              <div className="bg-primary-charcoal rounded-lg border border-accent-teal/20 p-8">
                <p className="text-secondary-bone/80 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any
                  changes by posting the new policy on this page and updating the "Last Updated"
                  date.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-accent-teal mb-4">Contact Us</h2>
              <div className="bg-primary-charcoal rounded-lg border border-accent-teal/20 p-8">
                <p className="text-secondary-bone/80 leading-relaxed">
                  If you have questions about this Privacy Policy or how we handle your information,
                  please contact us:
                </p>
                <div className="mt-4 space-y-2 text-secondary-bone/80">
                  <p>
                    <strong className="text-secondary-bone">Email:</strong>{' '}
                    privacy@scurvydog.tattoo
                  </p>
                  <p>
                    <strong className="text-secondary-bone">Phone:</strong> (555) 123-4567
                  </p>
                  <p>
                    <strong className="text-secondary-bone">Address:</strong> 123 Anchor Street,
                    Port City, PC 12345
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
