interface AppStoreBadgeProps {
  store: "apple" | "google" | "huawei" | "web"
  className?: string;
}

import Applogo from "@/assets/app-store-icon.svg";
import Playlogo from "@/assets/google-play-icon.svg";
import Huaweilogo from "@/assets/huawei-appgallery-icon.svg";
import Webligo from "@/assets/web-app-icon.svg";

const storeConfig = {
  apple: {
    icon: Applogo,
    alt: "Download on the App Store",
    href: "#",
  },
  google: {
    icon: Playlogo,
    alt: "Get it on Google Play",
    href: "#",
  },
  huawei: {
    icon: Huaweilogo,
    alt: "Get it on AppGallery",
    href: "#",
  },
  web: {
    icon: Webligo,
    alt: "Use the Web App",
    href: "#",
  },
};

export const AppStoreBadge = ({ store, className = "" }: AppStoreBadgeProps) => {
  const config = storeConfig[store];

  return (
    <a
      href={config.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block transition-all duration-200 hover:scale-105 active:scale-95 ${className}`}
    >
      <img
        src={config.icon}
        alt={config.alt}
        className="h-40 w-auto sm:h-42"
      />
    </a>
  );
};

export const AppStoreBadges = () => {
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
      <AppStoreBadge store="google" />
      <AppStoreBadge store="apple" />
      <AppStoreBadge store="huawei" />
      <AppStoreBadge store="web" />
    </div>
  );
};

export default AppStoreBadges;