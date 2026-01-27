import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  isPopular = false,
}: PricingCardProps) => {
  return (
    <div
      className={cn(
        "relative rounded-3xl p-8 transition-all duration-300 hover:translate-y-[-4px]",
        isPopular
          ? "bg-primary text-primary-foreground shadow-elevated scale-105"
          : "bg-card text-card-foreground shadow-card"
      )}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="font-serif text-2xl font-semibold mb-2">{title}</h3>
        <p
          className={cn(
            "text-sm",
            isPopular ? "text-primary-foreground/70" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      </div>

      {/* Price */}
      <div className="mb-8">
        <span className="font-serif text-5xl font-bold">${price}</span>
        <span
          className={cn(
            "text-sm ml-1",
            isPopular ? "text-primary-foreground/70" : "text-muted-foreground"
          )}
        >
          / couple
        </span>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <div
              className={cn(
                "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                isPopular ? "bg-primary-foreground/20" : "bg-accent/10"
              )}
            >
              <Check
                className={cn(
                  "w-3 h-3",
                  isPopular ? "text-primary-foreground" : "text-accent"
                )}
              />
            </div>
            <span
              className={cn(
                "text-sm",
                isPopular ? "text-primary-foreground/90" : "text-foreground"
              )}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        className={cn(
          "w-full",
          isPopular
            ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            : ""
        )}
        variant={isPopular ? "secondary" : "default"}
        size="lg"
      >
        Buy Now
      </Button>
    </div>
  );
};

export default PricingCard;
