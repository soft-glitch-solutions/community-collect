import { Recycle, Users, TrendingUp } from "lucide-react";
import { AppStoreBadges } from "./AppStoreBadges";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-5 w-48 h-48 sm:top-20 sm:left-10 sm:w-72 sm:h-72 rounded-full bg-primary-foreground blur-3xl animate-float" />
        <div className="absolute bottom-10 right-5 w-64 h-64 sm:bottom-20 sm:right-10 sm:w-96 sm:h-96 rounded-full bg-primary-foreground blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] rounded-full bg-primary-foreground blur-3xl opacity-20" />
      </div>

      {/* Main Content */}
      <div className="container relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-24 sm:py-20 text-center">
        {/* Badge */}
        <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-primary-foreground backdrop-blur-sm animate-fade-in">
          <Recycle className="h-3 w-3 sm:h-4 sm:w-4" />
          <span>Community Recycling for South Africa</span>
        </div>

        {/* Headline */}
        <h1 className="mb-4 sm:mb-6 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Turn Recycling Into
          <span className="block mt-1 sm:mt-2 text-recoza-sand">Weekly Income</span>
        </h1>

        {/* Subheadline */}
        <p className="mb-8 sm:mb-10 max-w-2xl text-base sm:text-lg md:text-xl text-primary-foreground/80 px-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Recoza helps unemployed youth become community recycling collectors by building trusted client networks with friends, family, and neighbours. No strangers. No chaos. Just organised collection.
        </p>

        {/* App Store CTAs */}
        <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <AppStoreBadges />
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <StatCard
            icon={<Users className="h-6 w-6" />}
            value="Trust-Based"
            label="Personal Networks"
          />
          <StatCard
            icon={<Recycle className="h-6 w-6" />}
            value="Weekly"
            label="Scheduled Collections"
          />
          <StatCard
            icon={<TrendingUp className="h-6 w-6" />}
            value="Predictable"
            label="Estimated Earnings"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-primary-foreground/30 p-1">
          <div className="h-2 w-1.5 rounded-full bg-primary-foreground/50 mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl bg-primary-foreground/10 p-6 backdrop-blur-sm">
      <div className="rounded-full bg-primary-foreground/20 p-3 text-primary-foreground">
        {icon}
      </div>
      <span className="text-2xl font-bold text-primary-foreground">{value}</span>
      <span className="text-sm text-primary-foreground/70">{label}</span>
    </div>
  );
};

export default Hero;
