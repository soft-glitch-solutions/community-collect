import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container px-4 pt-28 pb-16 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-6 text-foreground">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Who We Are</h2>
            <p className="text-muted-foreground">
              Recoza is an open-source, not-for-profit recycling platform based in South Africa.
              This policy explains what information we collect and how we use it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li><strong className="text-foreground">Account details:</strong> full name, phone number, and invite code.</li>
              <li><strong className="text-foreground">Profile data:</strong> whether you are a collector, your service area, and motivation if you apply as a collector.</li>
              <li><strong className="text-foreground">Activity data:</strong> recyclable items you log, collections, and estimated weights.</li>
              <li><strong className="text-foreground">Usage data:</strong> last seen timestamp and basic technical logs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>To operate household and collector features.</li>
              <li>To match households with approved collectors via trust networks.</li>
              <li>To estimate recycling earnings and track collection history.</li>
              <li>To improve and secure the platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Data Sharing</h2>
            <p className="text-muted-foreground">
              We do not sell your personal data. Limited information (such as your name and area) is
              visible to approved collectors connected to your household to enable collections.
              We do not facilitate off-platform messaging or payments.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Data Storage</h2>
            <p className="text-muted-foreground">
              Data is stored securely using Supabase. We apply row-level security so that users can only
              access data they are authorised to see.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
            <p className="text-muted-foreground">
              You can request access to, correction of, or deletion of your personal data at any time.
              You may delete your account directly via our <a href="/delete-account" className="text-primary hover:underline">Delete Account</a> page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Children</h2>
            <p className="text-muted-foreground">
              Recoza is not intended for users under the age of 13 without parental consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Contact</h2>
            <p className="text-muted-foreground">
              Questions about your privacy? Email <a href="mailto:hello@recoza.org" className="text-primary hover:underline">hello@recoza.org</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
