import { cn } from "@/lib/utils";

interface AdBannerProps {
  size: "leaderboard" | "rectangle" | "skyscraper" | "mobile";
  className?: string;
}

const adSizes = {
  leaderboard: "h-[70px] md:h-[90px] w-full max-w-full md:max-w-[728px]",
  rectangle: "h-[200px] md:h-[250px] w-full max-w-full md:max-w-[300px]",
  skyscraper: "h-[400px] md:h-[600px] w-full max-w-full md:max-w-[300px]",
  mobile: "h-[50px] w-full max-w-[320px]",
};

const AdBanner = ({ size, className }: AdBannerProps) => {
  return (
    <div className={cn("py-4", className)}>
      <div className={cn("ad-container flex items-center justify-center mx-auto lg:mx-0 relative", adSizes[size])}>
        <span className="font-sans text-xs text-dark-grey uppercase tracking-wider">
          Publicité
        </span>
      </div>
    </div>
  );
};

export default AdBanner;
