import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  image: string;
  isFavourite?: boolean;
  onFavouriteToggle?: (id: string) => void;
  onClick?: () => void;
  showStar?: boolean;
}

const BookCard = ({
  id,
  title,
  author,
  image,
  isFavourite = false,
  onFavouriteToggle,
  onClick,
  showStar = true,
}: BookCardProps) => {
  return (
    <div
      className="group relative bg-card border border-border rounded-lg overflow-hidden card-hover cursor-pointer"
      onClick={onClick}
    >
      {/* Book Image */}
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Star Button */}
      {showStar && (
        <button
          className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-primary/20 transition-all duration-300 z-10"
          onClick={(e) => {
            e.stopPropagation();
            onFavouriteToggle?.(id);
          }}
          aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
        >
          <Star
            className={cn(
              "w-5 h-5 transition-colors duration-300",
              isFavourite ? "fill-primary text-primary" : "text-muted-foreground hover:text-primary"
            )}
          />
        </button>
      )}

      {/* Book Info */}
      <div className="p-4 text-center">
        <h3 className="font-heading font-semibold text-foreground text-lg mb-1 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{author}</p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default BookCard;
