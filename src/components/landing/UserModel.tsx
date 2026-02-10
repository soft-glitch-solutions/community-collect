import { UserCheck, Users, ArrowRightLeft, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const UserModel = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <span className="inline-block mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-secondary">User Model</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">No Fixed Roles. Just Empowerment.</h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground px-2 max-w-2xl mx-auto">Every user starts as a household. Anyone can become a collector. Recoza is about fluid participation, not gatekeeping.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 items-center mb-10 sm:mb-14">
              <div className="rounded-xl sm:rounded-2xl bg-card p-5 sm:p-6 lg:p-8 shadow-card text-center">
                <div className="mx-auto mb-4 sm:mb-5 inline-flex rounded-xl sm:rounded-2xl bg-secondary/10 p-4 sm:p-5 text-secondary"><Users className="h-8 w-8 sm:h-10 sm:w-10" /></div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Household</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Every user starts here. Log recyclables, see your collector's schedule, switch collectors anytime.</p>
              </div>
              <div className="flex justify-center">
                <div className="rounded-full bg-primary/10 p-3 sm:p-4"><ArrowRightLeft className="h-6 w-6 sm:h-8 sm:w-8 text-primary" /></div>
              </div>
              <div className="rounded-xl sm:rounded-2xl bg-card p-5 sm:p-6 lg:p-8 shadow-card text-center">
                <div className="mx-auto mb-4 sm:mb-5 inline-flex rounded-xl sm:rounded-2xl bg-primary/10 p-4 sm:p-5 text-primary"><UserCheck className="h-8 w-8 sm:h-10 sm:w-10" /></div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Collector</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Apply, get approved, and start building your client network. Earn weekly income from recycling.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl sm:rounded-3xl bg-gradient-hero p-5 sm:p-8 lg:p-10 text-primary-foreground">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Sparkles className="h-6 w-6 sm:h-7 sm:w-7" />
                <h3 className="text-xl sm:text-2xl font-bold">What Makes This Different</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="rounded-lg sm:rounded-xl bg-primary-foreground/10 p-4 sm:p-5 backdrop-blur-sm">
                  <h4 className="text-sm sm:text-base font-bold mb-2">No Hierarchies</h4>
                  <p className="text-xs sm:text-sm text-primary-foreground/80">Collectors aren't "above" households. Everyone participates on equal terms. Roles are fluid.</p>
                </div>
                <div className="rounded-lg sm:rounded-xl bg-primary-foreground/10 p-4 sm:p-5 backdrop-blur-sm">
                  <h4 className="text-sm sm:text-base font-bold mb-2">Real Employment</h4>
                  <p className="text-xs sm:text-sm text-primary-foreground/80">Weekly earnings visibility, a personal client base, and tracked work history. A real job, not a hustle.</p>
                </div>
                <div className="rounded-lg sm:rounded-xl bg-primary-foreground/10 p-4 sm:p-5 backdrop-blur-sm">
                  <h4 className="text-sm sm:text-base font-bold mb-2">Trust-First</h4>
                  <p className="text-xs sm:text-sm text-primary-foreground/80">You only collect from people you know. No strangers, no random door knocking, no fear.</p>
                </div>
                <div className="rounded-lg sm:rounded-xl bg-primary-foreground/10 p-4 sm:p-5 backdrop-blur-sm">
                  <h4 className="text-sm sm:text-base font-bold mb-2">Already Happening</h4>
                  <p className="text-xs sm:text-sm text-primary-foreground/80">Informal recycling collection exists everywhere. Recoza just organises and tracks it properly.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default UserModel;
