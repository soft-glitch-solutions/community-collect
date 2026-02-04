import { Shield, Coins, CheckCircle, Briefcase } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Safer",
    description: "Collect from people you know. No random door knocking or approaching strangers.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Coins,
    title: "Cheaper",
    description: "No maps, no real-time dispatch, no payment systems. Just simple, effective organisation.",
    gradient: "from-secondary to-recoza-earth",
  },
  {
    icon: CheckCircle,
    title: "More Realistic",
    description: "This already happens informally. Recoza just organises and tracks it properly.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Briefcase,
    title: "Employment-Focused",
    description: "Weekly income visibility, personal client base, and work history. A real job, not a hustle.",
    gradient: "from-recoza-earth to-secondary",
  },
];

const WhyRecoza = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted">
      <div className="container px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12 lg:mb-16">
          <span className="inline-block mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
            Why Recoza
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            A Better Model for Everyone
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground px-2">
            Built on trust networks, not technology overload.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({
  benefit,
  index,
}: {
  benefit: typeof benefits[0];
  index: number;
}) => {
  const Icon = benefit.icon;
  
  return (
    <div 
      className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-card p-5 sm:p-6 lg:p-8 shadow-card transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
    >
      {/* Gradient Orb */}
      <div className={`absolute -top-16 -right-16 sm:-top-20 sm:-right-20 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-gradient-to-br ${benefit.gradient} opacity-10 blur-2xl transition-all duration-500 group-hover:opacity-20 group-hover:scale-150`} />
      
      {/* Content */}
      <div className="relative z-10">
        <div className={`mb-4 sm:mb-6 inline-flex rounded-lg sm:rounded-xl bg-gradient-to-br ${benefit.gradient} p-3 sm:p-4 text-primary-foreground shadow-lg`}>
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
        <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-foreground">
          {benefit.title}
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </div>
  );
};

export default WhyRecoza;
