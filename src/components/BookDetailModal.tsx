import { Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
  description: string;
}

interface BookDetailModalProps {
  book: Book | null;
  isOpen: boolean;
  onClose: () => void;
  isFavourite: boolean;
  onFavouriteToggle: (id: string) => void;
}

const BookDetailModal = ({
  book,
  isOpen,
  onClose,
  isFavourite,
  onFavouriteToggle,
}: BookDetailModalProps) => {
  if (!isOpen || !book) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-card border border-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-fade-in shadow-2xl shadow-primary/20">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Book Image */}
          <div className="md:w-2/5 p-6">
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Book Details */}
          <div className="md:w-3/5 p-6 flex flex-col">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-2">
                  {book.title}
                </h2>
                <p className="text-lg text-primary">{book.author}</p>
              </div>

              {/* Favourite Star */}
              <Button
                variant="outline"
                size="icon"
                className={cn(
                  "shrink-0",
                  isFavourite && "border-primary bg-primary/10"
                )}
                onClick={() => onFavouriteToggle(book.id)}
              >
                <Star
                  className={cn(
                    "w-5 h-5 transition-colors",
                    isFavourite ? "fill-primary text-primary" : "text-muted-foreground"
                  )}
                />
              </Button>
            </div>

            {/* Description */}
            <div className="flex-1 overflow-y-auto">
              <h3 className="font-heading font-semibold text-foreground mb-3">
                About this book
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {book.description}
              </p>
            </div>

            {/* Action Button */}
            <div className="mt-6 pt-4 border-t border-border">
              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={() => onFavouriteToggle(book.id)}
              >
                <Star className={cn("w-5 h-5", isFavourite && "fill-current")} />
                {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailModal;
