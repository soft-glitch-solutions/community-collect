import { Button } from "@/components/ui/button";
import { Github, Heart, Code2, Users } from "lucide-react";

const OpenSource = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          {/* Main Card */}
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-hero p-0.5 sm:p-1 shadow-elevated">
            <div className="rounded-[18px] sm:rounded-[22px] bg-card p-5 sm:p-8 lg:p-12">
              <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2 lg:items-center">
                {/* Left Content */}
                <div>
                  <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-primary">
                    <Code2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span>Open Source</span>
                  </div>
                  <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                    Built by the Community, For the Community
                  </h2>
                  <p className="mb-4 sm:mb-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Recoza is completely open source. Anyone can view, contribute to, and improve the codebase. 
                    We believe transparency builds trust, and community builds better software.
                  </p>
                  <p className="mb-6 sm:mb-8 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    The project is not-for-profit, but we gladly accept donations and funding to keep the 
                    services running and continuously improving for South African communities.
                  </p>
                  
                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                    <Button variant="default" size="default" className="group sm:size-lg">
                      <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                      View on GitHub
                    </Button>
                    <Button variant="outline" size="default" className="group sm:size-lg">
                      <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-destructive" />
                      Support the Project
                    </Button>
                  </div>
                </div>

                {/* Right - Stats/Info */}
                <div className="space-y-4 sm:space-y-6">
                  <InfoCard
                    icon={<Code2 className="h-5 w-5 sm:h-6 sm:w-6" />}
                    title="Flutter & Firebase"
                    description="Built with Flutter for cross-platform mobile and Google Firebase for the backend."
                  />
                  <InfoCard
                    icon={<Users className="h-5 w-5 sm:h-6 sm:w-6" />}
                    title="Community Driven"
                    description="Contributors from around the world helping solve local problems."
                  />
                  <InfoCard
                    icon={<Heart className="h-5 w-5 sm:h-6 sm:w-6" />}
                    title="Not-for-Profit"
                    description="100% of donations go towards keeping services free and accessible."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex gap-3 sm:gap-4 rounded-lg sm:rounded-xl bg-muted p-4 sm:p-5">
      <div className="flex-shrink-0 rounded-md sm:rounded-lg bg-primary p-2 sm:p-2.5 text-primary-foreground">
        {icon}
      </div>
      <div>
        <h4 className="text-sm sm:text-base font-semibold text-foreground">{title}</h4>
        <p className="text-xs sm:text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default OpenSource;
