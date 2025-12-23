import { useState } from "react";
import { Heart, Plus, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookCard from "@/components/BookCard";
import AddBookModal from "@/components/AddBookModal";
import { useFavourites } from "@/context/FavouritesContext";

const Favourites = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const { favourites, toggleFavourite, addToFavourites } = useFavourites();

  const handleAddBook = (book: { title: string; author: string; image: string }) => {
    const newBook = {
      id: `custom-${Date.now()}`,
      title: book.title,
      author: book.author,
      image: book.image,
      description: "A custom book added to your favourites collection.",
      isCustom: true,
    };
    addToFavourites(newBook);
  };

  return (
    <div className="min-h-screen pt-24 pb-24">
      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse-glow" />
          <h1 className="text-5xl font-heading font-bold text-foreground mb-4">
            Your Favourites
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your personal collection of beloved books. Add new ones or explore books 
            you've starred from our collection.
          </p>
        </div>
      </section>

      {/* Favourites Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {favourites.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {favourites.map((book, index) => (
                <div
                  key={book.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <BookCard
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    image={book.image}
                    isFavourite={true}
                    onFavouriteToggle={() => toggleFavourite(book)}
                    showStar={true}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                No favourites yet
              </h3>
              <p className="text-muted-foreground mb-6">
                Start adding books by exploring our collection or clicking the + button below.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Floating Add Button */}
      <Button
        variant="glow"
        size="icon"
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full shadow-2xl z-40"
        onClick={() => setIsAddModalOpen(true)}
      >
        <Plus className="w-8 h-8" />
      </Button>

      {/* Add Book Modal */}
      <AddBookModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddBook}
      />
    </div>
  );
};

export default Favourites;
