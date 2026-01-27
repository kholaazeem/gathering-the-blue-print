import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-couple-billiards.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Couple enjoying billiards together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 py-20 md:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-royal-light rounded-full animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Premium Couples Experience
            </span>
          </div>

          {/* Headline */}
          <h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-primary-foreground leading-tight mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Make Your Date Night{" "}
            <span className="text-royal-light">Iconic.</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-xl animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Master the art of billiards together. Our premium lessons are designed
            exclusively for couples who want to connect, compete, and create
            unforgettable memories.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button size="lg" variant="secondary" asChild className="group">
              <Link to="/shop">
                Get Free Sample Lesson
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Preview
            </Button>
          </div>

          {/* Social Proof */}
          <div 
            className="mt-12 flex items-center gap-6 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-primary-foreground/20 border-2 border-primary flex items-center justify-center text-primary-foreground text-xs font-medium"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div>
              <p className="text-primary-foreground font-medium">2,500+ Couples</p>
              <p className="text-primary-foreground/60 text-sm">have mastered the game together</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
