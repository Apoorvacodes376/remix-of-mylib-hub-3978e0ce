import { BookOpen, Target, Heart, Compass, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create Your Account",
    description: "Sign up for free and set up your personal library profile.",
  },
  {
    number: "02",
    title: "Explore the Collection",
    description: "Browse through our extensive catalog of books and authors.",
  },
  {
    number: "03",
    title: "Add to Favourites",
    description: "Star the books you love to build your personal collection.",
  },
  {
    number: "04",
    title: "Manage Your Library",
    description: "Add custom books and organize your reading list.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <BookOpen className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse-glow" />
            <h1 className="text-5xl font-heading font-bold text-foreground mb-6">
              About MyLib
            </h1>
            <p className="text-xl text-muted-foreground">
              Your personal gateway to the world of literature. We believe every reader 
              deserves a beautiful space to explore, collect, and cherish their favourite books.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 animate-fade-in">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                To make book discovery and library management accessible, 
                enjoyable, and beautifully simple for everyone.
              </p>
            </div>
            <div className="text-center p-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                Our Passion
              </h3>
              <p className="text-muted-foreground">
                We're avid readers ourselves, driven by the love of stories 
                and the magic they bring to our lives.
              </p>
            </div>
            <div className="text-center p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Compass className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                Our Vision
              </h3>
              <p className="text-muted-foreground">
                To connect readers worldwide with the books that will 
                inspire, educate, and transform their lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              How to Use MyLib
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Getting started with MyLib is simple. Follow these steps to begin your literary journey.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex gap-6 mb-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <span className="text-xl font-heading font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="flex-1 pb-8 border-b border-border last:border-0">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-12">
              What You Can Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {[
                "Browse our curated book collection",
                "Learn about renowned authors",
                "Add books to your favourites",
                "Create your custom book entries",
                "Organize your personal library",
                "Access your library anywhere",
              ].map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
