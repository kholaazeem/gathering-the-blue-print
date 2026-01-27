import { Sparkles, Heart, Users } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "High Quality",
    description:
      "Professional instruction from world-class billiards coaches. Every lesson is crafted to perfection with cinematic production value.",
  },
  {
    icon: Heart,
    title: "Connection",
    description:
      "Strengthen your bond through friendly competition. Our lessons are designed to spark conversation, laughter, and teamwork.",
  },
  {
    icon: Users,
    title: "Approachability",
    description:
      "No experience needed. Our step-by-step approach makes learning enjoyable for complete beginners to aspiring pros.",
  },
];

const Values = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Our Philosophy
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3 mb-4">
            Why Couples Choose Gathering
          </h2>
          <p className="text-muted-foreground text-lg">
            We believe the best date nights combine learning something new with
            quality time together.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="card-elevated group hover:translate-y-[-4px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <value.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
