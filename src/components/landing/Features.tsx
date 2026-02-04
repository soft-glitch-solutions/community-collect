import { 
  Users, 
  ClipboardList, 
  Calendar, 
  TrendingUp, 
  History, 
  RefreshCw,
  Package,
  Bell,
  UserCheck,
  ArrowRightLeft
} from "lucide-react";

const collectorFeatures = [
  {
    icon: Users,
    title: "Invite Households",
    description: "Send personal invite links to build your trusted client network.",
  },
  {
    icon: ClipboardList,
    title: "See Linked Clients",
    description: "View all your connected households and their recycling availability.",
  },
  {
    icon: Calendar,
    title: "Weekly Collection Plan",
    description: "Set your collection day and manage your schedule efficiently.",
  },
  {
    icon: TrendingUp,
    title: "Estimated Earnings",
    description: "Get weekly income projections based on current buy-back prices.",
  },
  {
    icon: History,
    title: "Job History",
    description: "Track your collection history and build a verifiable work record.",
  },
];

const householdFeatures = [
  {
    icon: Package,
    title: "Log Recyclables",
    description: "Easily record bottles, cans, and plastics with approximate amounts.",
  },
  {
    icon: Bell,
    title: "Next Collection Day",
    description: "Know when your collector is coming for organised handoffs.",
  },
  {
    icon: ArrowRightLeft,
    title: "Switch Collectors",
    description: "Choose a different collector if needed—you're in control.",
  },
  {
    icon: UserCheck,
    title: "Become a Collector",
    description: "Any household can apply to start their own collection network.",
  },
];

const Features = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12 lg:mb-16">
          <span className="inline-block mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent">
            Features
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Tools for Everyone
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground px-2">
            Whether you're collecting or contributing, Recoza gives you what you need.
          </p>
        </div>

        {/* Role Switcher Info */}
        <div className="mx-auto max-w-2xl mb-10 sm:mb-12 lg:mb-16 rounded-xl sm:rounded-2xl bg-gradient-hero p-4 sm:p-6 text-center text-primary-foreground shadow-elevated">
          <RefreshCw className="mx-auto h-6 w-6 sm:h-8 sm:w-8 mb-3 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-bold mb-2">Fluid Participation</h3>
          <p className="text-sm sm:text-base text-primary-foreground/80">
            There are no fixed roles. Every user starts as a household and can become a collector. 
            Recoza is about empowerment, not gatekeeping.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2">
          {/* Collector Features */}
          <div>
            <div className="mb-5 sm:mb-6 lg:mb-8 flex items-center gap-2.5 sm:gap-3">
              <div className="rounded-lg sm:rounded-xl bg-primary p-2.5 sm:p-3 text-primary-foreground">
                <Users className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">For Collectors</h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {collectorFeatures.map((feature, index) => (
                <FeatureItem key={index} feature={feature} />
              ))}
            </div>
          </div>

          {/* Household Features */}
          <div>
            <div className="mb-5 sm:mb-6 lg:mb-8 flex items-center gap-2.5 sm:gap-3">
              <div className="rounded-lg sm:rounded-xl bg-secondary p-2.5 sm:p-3 text-secondary-foreground">
                <Package className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">For Households</h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {householdFeatures.map((feature, index) => (
                <FeatureItem key={index} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({
  feature,
}: {
  feature: { icon: React.ElementType; title: string; description: string };
}) => {
  const Icon = feature.icon;
  
  return (
    <div className="group flex gap-3 sm:gap-4 rounded-lg sm:rounded-xl bg-card p-4 sm:p-5 shadow-soft transition-all duration-200 hover:shadow-card">
      <div className="flex-shrink-0 rounded-md sm:rounded-lg bg-muted p-2 sm:p-2.5 text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>
      <div>
        <h4 className="text-sm sm:text-base font-semibold text-foreground">{feature.title}</h4>
        <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
      </div>
    </div>
  );
};

export default Features;
