import { UserPlus, Link2, ClipboardList, Calendar, Calculator, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Become a Collector",
    description: "Download Recoza, apply to be a collector, and get approved. You're now a Recoza Collector ready to build your client base.",
    color: "bg-primary",
  },
  {
    icon: Link2,
    title: "Invite Your Network",
    description: "Send invite links to friends, family, and neighbours. People you already know and trust become your clients automatically.",
    color: "bg-secondary",
  },
  {
    icon: ClipboardList,
    title: "Households Log Recyclables",
    description: "Your clients log what they're saving—bottles, cans, plastic—with approximate amounts. No scheduling pressure.",
    color: "bg-accent",
  },
  {
    icon: Calendar,
    title: "Set Your Collection Day",
    description: "Choose a weekly collection day. See all linked households and what each has ready. You plan, you control.",
    color: "bg-recoza-earth",
  },
  {
    icon: Calculator,
    title: "See Your Earnings",
    description: "Recoza calculates estimated weight and weekly income based on buy-back prices. Real visibility, real motivation.",
    color: "bg-primary",
  },
  {
    icon: CheckCircle,
    title: "Collect & Track",
    description: "Visit your known clients, collect recyclables, and mark items collected in the app. Build your work history.",
    color: "bg-accent",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-earth">
      <div className="container px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12 lg:mb-16">
          <span className="inline-block mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            From Signup to Steady Income
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground px-2">
            Recoza organises community recycling into a predictable weekly routine using your existing social relationships.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StepCard = ({
  step,
  index,
}: {
  step: typeof steps[0];
  index: number;
}) => {
  const Icon = step.icon;
  
  return (
    <div 
      className="group relative rounded-xl sm:rounded-2xl bg-card p-5 sm:p-6 lg:p-8 shadow-card transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Step Number */}
      <div className="absolute -top-2.5 -left-2.5 sm:-top-3 sm:-left-3 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-foreground text-xs sm:text-sm font-bold text-background">
        {index + 1}
      </div>

      {/* Icon */}
      <div className={`mb-4 sm:mb-6 inline-flex rounded-lg sm:rounded-xl ${step.color} p-3 sm:p-4 text-primary-foreground`}>
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>

      {/* Content */}
      <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-foreground">
        {step.title}
      </h3>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
        {step.description}
      </p>
    </div>
  );
};

export default HowItWorks;
