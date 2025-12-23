export interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
  description: string;
}

export const books: Book[] = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    description: "Set in the Jazz Age on Long Island, The Great Gatsby is a tragic love story and a critique of the American Dream. Through the eyes of narrator Nick Carraway, we witness the mysterious millionaire Jay Gatsby's obsessive pursuit of Daisy Buchanan. Fitzgerald's masterpiece explores themes of decadence, idealism, social upheaval, and excess, creating a portrait of the Roaring Twenties that remains as relevant today as when it was written in 1925."
  },
  {
    id: "2",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400",
    description: "Harper Lee's Pulitzer Prize-winning masterwork of honor and injustice in the deep South, and the heroism of one man in the face of blind and violent hatred. Set in the small Alabama town of Maycomb during the Great Depression, this novel follows young Scout Finch as her father, Atticus, defends a Black man falsely accused of a terrible crime. Through Scout's innocent eyes, we witness the destruction of innocence by evil, injustice, and prejudice."
  },
  {
    id: "3",
    title: "1984",
    author: "George Orwell",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400",
    description: "Among the seminal texts of the 20th century, 1984 is a rare work that grows more haunting as its prophecy becomes more real. Published in 1949, this dystopian masterpiece presents a terrifying vision of a totalitarian future where Big Brother controls every aspect of life. Winston Smith's struggle against the Party's overwhelming power remains a chilling reminder of the fragility of freedom and the power of authoritarian control."
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
    description: "Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work her own darling child. The romantic clash between the opinionated Elizabeth Bennet and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring that has delighted generations of readers."
  },
  {
    id: "5",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "The hero-narrator of The Catcher in the Rye is an ancient child of sixteen, a native New Yorker named Holden Caulfield. Through circumstances that tend to preclude adult, zxtraordinary narrative voice, and the absence of conventional structure marks this novel as a remarkable literary achievement. Holden's struggle to find his way in an adult world he perceives as phony has resonated with readers for decades."
  },
  {
    id: "6",
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400",
    description: "One of the 20th century's enduring works, this landmark novel tells the story of the Buendía family, and chronicles the irreconcilable conflict between the desire for solitude and the need for love. García Márquez's magical realist masterpiece, set in the mythical town of Macondo, weaves together the extraordinary and the mundane to create a rich tapestry of Latin American history, culture, and human nature."
  },
  {
    id: "7",
    title: "Brave New World",
    author: "Aldous Huxley",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400",
    description: "Aldous Huxley's profoundly important classic of world literature, Brave New World is a searching vision of an unequal, technologically-advanced future where humans are genetically bred, socially indoctrinated, and pharmaceutically anesthetized to passively uphold an authoritarian ruling order. A powerful work of speculative fiction that has enthralled and terrified readers for generations."
  },
  {
    id: "8",
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    image: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?w=400",
    description: "In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. This epic tale of adventure, friendship, and the struggle between good and evil has captivated readers for over 60 years."
  },
  {
    id: "9",
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400",
    description: "One of the most influential novels of the nineteenth century, Dostoevsky's masterpiece tells the story of Raskolnikov, an impoverished student tormented by his own nihilism. When he commits a shocking act of violence, the psychological depth and moral complexity that unfolds has made this novel a cornerstone of world literature. It is a profound exploration of guilt, redemption, and the human soul."
  }
];

export interface Author {
  id: string;
  name: string;
  image: string;
}

export const authors: Author[] = [
  {
    id: "1",
    name: "F. Scott Fitzgerald",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
  },
  {
    id: "2",
    name: "Harper Lee",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
  },
  {
    id: "3",
    name: "George Orwell",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
  },
  {
    id: "4",
    name: "Jane Austen",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
  },
  {
    id: "5",
    name: "J.D. Salinger",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
  },
  {
    id: "6",
    name: "Gabriel García Márquez",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400"
  },
  {
    id: "7",
    name: "Aldous Huxley",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400"
  },
  {
    id: "8",
    name: "J.R.R. Tolkien",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400"
  },
  {
    id: "9",
    name: "Fyodor Dostoevsky",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
  }
];
