import { Apple, Play, Smartphone } from "lucide-react";

interface AppStoreBadgeProps {
  store: "apple" | "google" | "huawei";
  className?: string;
}

const storeConfig = {
  apple: {
    icon: Apple,
    label: "Download on the",
    store: "App Store",
    href: "#",
  },
  google: {
    icon: Play,
    label: "Get it on",
    store: "Google Play",
    href: "#",
  },
  huawei: {
    icon: Smartphone,
    label: "Explore it on",
    store: "AppGallery",
    href: "#",
  },
};

export const AppStoreBadge = ({ store, className = "" }: AppStoreBadgeProps) => {
  const config = storeConfig[store];
  const Icon = config.icon;

  return (
    <a
      href={config.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-xl bg-foreground px-4 py-2.5 text-background transition-all duration-200 hover:scale-105 hover:bg-foreground/90 active:scale-95 ${className}`}
    >
      <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
      <div className="flex flex-col items-start leading-tight">
        <span className="text-[10px] sm:text-xs font-medium opacity-80">{config.label}</span>
        <span className="text-sm sm:text-base font-bold">{config.store}</span>
      </div>
    </a>
  );
};

export const AppStoreBadges = () => {
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
      <AppStoreBadge store="google" />
      <AppStoreBadge store="apple" />
      <AppStoreBadge store="huawei" />
    </div>
  );
};

export default AppStoreBadges;
