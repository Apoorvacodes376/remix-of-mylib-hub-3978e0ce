import { useState } from "react";
import { Search, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import BookCard from "@/components/BookCard";
import BookDetailModal from "@/components/BookDetailModal";
import { books, Book } from "@/data/books";
import { useFavourites } from "@/context/FavouritesContext";

const ExploreBooks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isFavourite, toggleFavourite } = useFavourites();

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  const handleFavouriteToggle = (id: string) => {
    const book = books.find((b) => b.id === id);
    if (book) {
      toggleFavourite(book);
    }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse-glow" />
          <h1 className="text-5xl font-heading font-bold text-foreground mb-4">
            Explore Books
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover your next favourite read from our curated collection of literary masterpieces.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by title or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 bg-input border-border text-foreground placeholder:text-muted-foreground h-12"
            />
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredBooks.map((book, index) => (
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
                    isFavourite={isFavourite(book.id)}
                    onFavouriteToggle={handleFavouriteToggle}
                    onClick={() => handleBookClick(book)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                No books found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Book Detail Modal */}
      <BookDetailModal
        book={selectedBook}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        isFavourite={selectedBook ? isFavourite(selectedBook.id) : false}
        onFavouriteToggle={handleFavouriteToggle}
      />
    </div>
  );
};

export default ExploreBooks;
