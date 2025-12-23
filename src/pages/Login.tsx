import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, Mail, Lock, User, ArrowRight } from "lucide-react";
import { toast } from "sonner";

type AuthMode = "login" | "signup" | "forgot";

const Login = () => {
  const [mode, setMode] = useState<AuthMode>("login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === "signup" && formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    switch (mode) {
      case "login":
        toast.success("Login successful! Welcome back.");
        break;
      case "signup":
        toast.success("Account created! Please check your email to verify.");
        break;
      case "forgot":
        toast.success("Password reset link sent to your email.");
        break;
    }

    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getTitle = () => {
    switch (mode) {
      case "login":
        return "Welcome Back";
      case "signup":
        return "Create Account";
      case "forgot":
        return "Reset Password";
    }
  };

  const getSubtitle = () => {
    switch (mode) {
      case "login":
        return "Sign in to access your personal library";
      case "signup":
        return "Join MyLib and start your reading journey";
      case "forgot":
        return "Enter your email to receive a reset link";
    }
  };

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          {/* Logo */}
          <div className="text-center mb-8 animate-fade-in">
            <Link to="/" className="inline-flex items-center gap-2">
              <BookOpen className="w-10 h-10 text-primary" />
              <span className="text-3xl font-heading font-bold text-foreground">
                My<span className="text-primary">Lib</span>
              </span>
            </Link>
          </div>

          {/* Auth Card */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-2xl shadow-primary/10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
                {getTitle()}
              </h1>
              <p className="text-muted-foreground">{getSubtitle()}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {mode === "signup" && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="pl-10 bg-input border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-10 bg-input border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              {mode !== "forgot" && (
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="pl-10 bg-input border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
              )}

              {mode === "signup" && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-foreground">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="pl-10 bg-input border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
              )}

              {mode === "login" && (
                <div className="text-right">
                  <button
                    type="button"
                    className="text-sm text-primary hover:underline"
                    onClick={() => setMode("forgot")}
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <Button type="submit" variant="hero" size="lg" className="w-full">
                {mode === "login" && "Sign In"}
                {mode === "signup" && "Create Account"}
                {mode === "forgot" && "Send Reset Link"}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>

            {/* Mode Switcher */}
            <div className="mt-8 pt-6 border-t border-border text-center">
              {mode === "login" && (
                <p className="text-muted-foreground">
                  Don't have an account?{" "}
                  <button
                    className="text-primary hover:underline font-medium"
                    onClick={() => setMode("signup")}
                  >
                    Sign up
                  </button>
                </p>
              )}
              {mode === "signup" && (
                <p className="text-muted-foreground">
                  Already have an account?{" "}
                  <button
                    className="text-primary hover:underline font-medium"
                    onClick={() => setMode("login")}
                  >
                    Sign in
                  </button>
                </p>
              )}
              {mode === "forgot" && (
                <p className="text-muted-foreground">
                  Remember your password?{" "}
                  <button
                    className="text-primary hover:underline font-medium"
                    onClick={() => setMode("login")}
                  >
                    Sign in
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
