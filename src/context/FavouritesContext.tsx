import { createContext, useContext, useState, ReactNode } from "react";
import { Book } from "@/data/books";

interface FavouriteBook extends Book {
  isCustom?: boolean;
}

interface FavouritesContextType {
  favourites: FavouriteBook[];
  addToFavourites: (book: FavouriteBook) => void;
  removeFromFavourites: (id: string) => void;
  isFavourite: (id: string) => boolean;
  toggleFavourite: (book: FavouriteBook) => void;
}

const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

export const FavouritesProvider = ({ children }: { children: ReactNode }) => {
  const [favourites, setFavourites] = useState<FavouriteBook[]>([]);

  const addToFavourites = (book: FavouriteBook) => {
    setFavourites((prev) => {
      if (prev.find((b) => b.id === book.id)) return prev;
      return [...prev, book];
    });
  };

  const removeFromFavourites = (id: string) => {
    setFavourites((prev) => prev.filter((book) => book.id !== id));
  };

  const isFavourite = (id: string) => {
    return favourites.some((book) => book.id === id);
  };

  const toggleFavourite = (book: FavouriteBook) => {
    if (isFavourite(book.id)) {
      removeFromFavourites(book.id);
    } else {
      addToFavourites(book);
    }
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourite,
        toggleFavourite,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw new Error("useFavourites must be used within a FavouritesProvider");
  }
  return context;
};
