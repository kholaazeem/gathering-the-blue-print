import Layout from "@/components/layout/Layout";
import PricingCard from "@/components/shop/PricingCard";

const pricingPlans = [
  {
    title: "Beginner Session",
    price: 50,
    description: "Perfect for first-time players",
    features: [
      "2-hour introductory lesson",
      "Basic stance and grip techniques",
      "Simple shot mechanics",
      "Practice drills for couples",
      "Lifetime access to lesson videos",
    ],
    isPopular: false,
  },
  {
    title: "Date Night Package",
    price: 120,
    description: "Our most loved experience",
    features: [
      "4-hour comprehensive course",
      "Beginner to intermediate skills",
      "Game strategy and rules mastery",
      "Couples challenge activities",
      "Bonus: Romantic game night guide",
      "1-on-1 instructor support",
      "Certificate of completion",
    ],
    isPopular: true,
  },
  {
    title: "Pro Masterclass",
    price: 200,
    description: "For aspiring billiards enthusiasts",
    features: [
      "8-hour advanced curriculum",
      "Professional-level techniques",
      "Competitive play strategies",
      "Video analysis of your shots",
      "Monthly live Q&A sessions",
      "Private community access",
      "Equipment recommendations",
    ],
    isPopular: false,
  },
];

const Shop = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide text-center">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Choose Your Journey
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-3 mb-4">
            Lesson Packages
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From complete beginners to aspiring pros, we have the perfect package
            for your billiards journey together. All lessons include lifetime
            access.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 items-start">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PricingCard {...plan} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Do we need our own pool table?",
                a: "Not at all! Our lessons are designed to be practiced at any local pool hall. We'll even help you find the best venues in your area.",
              },
              {
                q: "What if we've never played before?",
                a: "Perfect! Our Beginner Session is designed specifically for complete newcomers. We start from the absolute basics.",
              },
              {
                q: "Can we share one account?",
                a: "Absolutely! All our packages are designed for couples to learn together from a single account.",
              },
            ].map((item) => (
              <div key={item.q} className="card-glass">
                <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {item.q}
                </h4>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
