import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavouritesProvider } from "@/context/FavouritesContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ExploreBooks from "./pages/ExploreBooks";
import KnowAuthors from "./pages/KnowAuthors";
import Favourites from "./pages/Favourites";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <FavouritesProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/explore" element={<ExploreBooks />} />
                <Route path="/authors" element={<KnowAuthors />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </FavouritesProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
