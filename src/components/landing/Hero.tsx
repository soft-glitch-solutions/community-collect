import { Button } from "@/components/ui/button";
import { Recycle, Users, TrendingUp, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary-foreground blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary-foreground blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-foreground blur-3xl opacity-20" />
      </div>

      {/* Main Content */}
      <div className="container relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm animate-fade-in">
          <Recycle className="h-4 w-4" />
          <span>Community Recycling for South Africa</span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Turn Recycling Into
          <span className="block mt-2 text-recoza-sand">Weekly Income</span>
        </h1>

        {/* Subheadline */}
        <p className="mb-10 max-w-2xl text-lg text-primary-foreground/80 sm:text-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Recoza helps unemployed youth become community recycling collectors by building trusted client networks with friends, family, and neighbours. No strangers. No chaos. Just organised collection.
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-4 sm:flex-row animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button variant="heroOutline" size="xl" className="group">
            Become a Collector
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="heroOutline" size="xl">
            Join as Household
          </Button>
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
