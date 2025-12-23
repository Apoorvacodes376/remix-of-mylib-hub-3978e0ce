import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Heart, Search, Star, Library } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Explore Books",
    description: "Discover a vast collection of literary masterpieces from around the world.",
  },
  {
    icon: Users,
    title: "Know Authors",
    description: "Learn about the brilliant minds behind your favourite stories.",
  },
  {
    icon: Heart,
    title: "Save Favourites",
    description: "Build your personal collection of beloved books.",
  },
];

const stats = [
  { number: "10,000+", label: "Books" },
  { number: "500+", label: "Authors" },
  { number: "50,000+", label: "Readers" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in">
              <BookOpen className="w-12 h-12 text-primary animate-pulse-glow" />
              <span className="text-sm font-medium text-primary uppercase tracking-widest">
                Welcome to MyLib
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Your Personal
              <span className="block text-primary">Library Awaits</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Discover, organize, and cherish your book collection. Explore thousands of titles, 
              connect with your favourite authors, and build a library that tells your story.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="/explore">
                <Button variant="hero" size="xl">
                  <Library className="w-5 h-5" />
                  Explore Books
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="xl">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Everything You Need
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              MyLib provides all the tools you need to manage and enjoy your personal library.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-8 bg-card border border-border rounded-xl text-center card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <Star className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of book lovers who have made MyLib their home for literary exploration.
          </p>
          <Link to="/login">
            <Button variant="glow" size="xl">
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
