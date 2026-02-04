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
    <section className="py-24 bg-muted">
      <div className="container px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Why Recoza
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            A Better Model for Everyone
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Built on trust networks, not technology overload.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
      className="group relative overflow-hidden rounded-2xl bg-card p-8 shadow-card transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
    >
      {/* Gradient Orb */}
      <div className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${benefit.gradient} opacity-10 blur-2xl transition-all duration-500 group-hover:opacity-20 group-hover:scale-150`} />
      
      {/* Content */}
      <div className="relative z-10">
        <div className={`mb-6 inline-flex rounded-xl bg-gradient-to-br ${benefit.gradient} p-4 text-primary-foreground shadow-lg`}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-3 text-xl font-bold text-foreground">
          {benefit.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </div>
  );
};

export default WhyRecoza;
