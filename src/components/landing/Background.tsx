import { Globe, Target, Smartphone, ShieldCheck, Wifi, BatteryLow } from "lucide-react";
import communityImage from "@/assets/community-team.jpg";

const Background = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12 lg:mb-16">
          <span className="inline-block mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
            Our Story
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Why Recoza Exists
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground px-2">
            Community recycling already happens across South Africa. Recoza simply organises it.
          </p>
        </div>

        {/* Image + Text */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:gap-16 lg:grid-cols-2 items-center mb-12 sm:mb-16 lg:mb-20">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-elevated">
            <img
              src={communityImage}
              alt="South African youth community recycling team"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
              <p className="text-sm sm:text-base text-primary-foreground font-medium">
                🇿🇦 Built in South Africa, for South Africa
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6">
              Turning Everyday Recycling Into Real Opportunity
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              In communities across South Africa, people already collect recyclables from neighbours. 
              But without organisation, it stays informal—unpredictable income, no records, no structure.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              Recoza is an open-source, green-tech mobile application designed to help unemployed youth earn 
              income by organising community recycling through trusted networks of friends, family, and 
              neighbours. The app formalises everyday recycling behaviour without replacing it, giving 
              collectors <strong className="text-foreground">predictability, dignity, and a clear record of work</strong>.
            </p>

            {/* Product Goal */}
            <div className="rounded-xl sm:rounded-2xl bg-muted p-4 sm:p-6 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Target className="h-5 w-5 text-primary" />
                <h4 className="text-base sm:text-lg font-bold text-foreground">Product Goal</h4>
              </div>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  Enable unemployed youth to become recycling collectors
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  Help collectors build and manage a trusted client base
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  Track recyclable items and weekly collections
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  Estimate weekly earnings for collectors
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  Keep all interactions safe and inside the app
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Constraints */}
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Built With Safety & Simplicity First
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Every design decision puts the user's safety, privacy, and data costs first.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            <ConstraintCard icon={ShieldCheck} label="No WhatsApp or off-platform chat" />
            <ConstraintCard icon={ShieldCheck} label="No phone numbers shared" />
            <ConstraintCard icon={ShieldCheck} label="No in-app payments or cash" />
            <ConstraintCard icon={Globe} label="No maps or GPS needed" />
            <ConstraintCard icon={Smartphone} label="Mobile-first, Android-first" />
            <ConstraintCard icon={BatteryLow} label="Low data usage" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ConstraintCard = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <div className="flex flex-col items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-card p-4 sm:p-5 shadow-soft text-center">
    <div className="rounded-lg bg-primary/10 p-2.5 sm:p-3 text-primary">
      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
    </div>
    <p className="text-xs sm:text-sm font-medium text-foreground leading-snug">{label}</p>
  </div>
);

export default Background;
