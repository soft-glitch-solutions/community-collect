import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container px-4 pt-28 pb-16 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Terms & Conditions</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-sm sm:prose-base max-w-none text-foreground space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using Recoza ("the Service"), you agree to be bound by these Terms & Conditions.
              If you do not agree, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. About Recoza</h2>
            <p className="text-muted-foreground">
              Recoza is an open-source, not-for-profit platform that helps South African communities
              organise recycling collection through trust networks. Recoza does not process payments
              and does not facilitate off-platform communications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. User Accounts & Roles</h2>
            <p className="text-muted-foreground">
              Every user is registered as a household. Users may optionally apply to become a collector,
              subject to approval. You are responsible for keeping your account credentials secure and for
              all activity that occurs under your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Acceptable Use</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Provide accurate information about yourself and your recycling activity.</li>
              <li>Do not misuse, abuse, or harass other community members.</li>
              <li>Do not attempt to circumvent platform safety or trust mechanisms.</li>
              <li>Do not use Recoza for illegal activity.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Collections & Earnings</h2>
            <p className="text-muted-foreground">
              Earnings shown in Recoza are estimates based on logged items and current reference prices.
              Recoza does not guarantee any income and is not responsible for transactions between
              collectors, households, and buy-back centres.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Open Source</h2>
            <p className="text-muted-foreground">
              Recoza's source code is publicly available. Contributions are welcome under the project's
              open-source licence.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Termination</h2>
            <p className="text-muted-foreground">
              We may suspend or terminate accounts that violate these terms. You may delete your account
              at any time via the Delete Account page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Changes</h2>
            <p className="text-muted-foreground">
              We may update these Terms from time to time. Continued use of the Service after changes
              constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">9. Contact</h2>
            <p className="text-muted-foreground">
              Questions? Email <a href="mailto:hello@recoza.org" className="text-primary hover:underline">hello@recoza.org</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
