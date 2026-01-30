import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow text-center">
        {/* Content */}
        <span className="text-accent font-medium text-sm uppercase tracking-wider">
          Ready to Begin?
        </span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3 mb-6 text-balance">
          Start Your Billiards Journey Together
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          Join thousands of couples who have transformed their date nights with
          our premium billiards lessons. Your first lesson is on us.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="group">
            <Link to="/shop">
              Browse All Lessons
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/contact">Have Questions?</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
