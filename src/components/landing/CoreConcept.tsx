import { Link2, ClipboardList, Calendar, TrendingUp } from "lucide-react";
import appInHand from "@/assets/app-in-hand.jpg";
import collectorSorting from "@/assets/collector-sorting.jpg";

const CoreConcept = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted">
      <div className="container px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12 lg:mb-16">
          <span className="inline-block mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent">
            Core Concept
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Trust Networks, Not Technology Overload
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground px-2">
            Recoza works because it builds on relationships that already exist in your community.
          </p>
        </div>

        {/* Two Column Concept */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:gap-16 lg:grid-cols-2 mb-12 sm:mb-16">
          {/* Collector Side */}
          <div className="relative">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elevated mb-6">
              <img
                src={collectorSorting}
                alt="South African collector sorting recyclables"
                className="w-full h-48 sm:h-64 object-cover"
              />
            </div>
            <div className="rounded-xl sm:rounded-2xl bg-card p-5 sm:p-6 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-primary p-2.5 text-primary-foreground">
                  <Link2 className="h-5 w-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">How Collectors Grow</h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                Collectors invite friends, family, and neighbours to join Recoza using a personal invite link.
                When someone joins via that link, they're <strong className="text-foreground">automatically linked</strong> to 
                that collector as their default collector.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                No searching. No maps. No strangers. Just your people, organised.
              </p>
            </div>
          </div>

          {/* Household Side */}
          <div className="relative">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elevated mb-6">
              <img
                src={appInHand}
                alt="Person using the Recoza app on their phone"
                className="w-full h-48 sm:h-64 object-cover"
              />
            </div>
            <div className="rounded-xl sm:rounded-2xl bg-card p-5 sm:p-6 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-secondary p-2.5 text-secondary-foreground">
                  <ClipboardList className="h-5 w-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">How Households Contribute</h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                Households log the recyclable items they've been saving during the week — bottles, cans, plastic — 
                with approximate amounts. They don't request "now". They just <strong className="text-foreground">log availability</strong>.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Collectors plan weekly collections and see estimated earnings based on what's logged.
              </p>
            </div>
          </div>
        </div>

        {/* The Cycle */}
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-hero p-0.5 sm:p-1 shadow-elevated">
            <div className="rounded-[14px] sm:rounded-[20px] bg-card p-5 sm:p-8 lg:p-10">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-6 sm:mb-8">
                The Weekly Cycle
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <CycleStep
                  icon={ClipboardList}
                  step="1"
                  title="Households Log"
                  description="Log bottles, cans, and plastic saved during the week"
                />
                <CycleStep
                  icon={Calendar}
                  step="2"
                  title="Collector Plans"
                  description="Set a collection day and see all linked households"
                />
                <CycleStep
                  icon={TrendingUp}
                  step="3"
                  title="Earnings Estimated"
                  description="See projected income based on buy-back prices"
                />
                <CycleStep
                  icon={Link2}
                  step="4"
                  title="Collect & Track"
                  description="Visit known clients, collect, and mark done in-app"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CycleStep = ({
  icon: Icon,
  step,
  title,
  description,
}: {
  icon: React.ElementType;
  step: string;
  title: string;
  description: string;
}) => (
  <div className="flex gap-3 sm:gap-4">
    <div className="flex-shrink-0">
      <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm sm:text-base">
        {step}
      </div>
    </div>
    <div>
      <h4 className="text-sm sm:text-base font-bold text-foreground mb-1">{title}</h4>
      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </div>
);

export default CoreConcept;
