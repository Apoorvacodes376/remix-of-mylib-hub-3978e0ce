import { useState } from "react";
import { X, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AddBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (book: { title: string; author: string; image: string }) => void;
}

const AddBookModal = ({ isOpen, onClose, onAdd }: AddBookModalProps) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && author) {
      onAdd({
        title,
        author,
        image: imageUrl || "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400",
      });
      setTitle("");
      setAuthor("");
      setImageUrl("");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-card border border-border rounded-xl max-w-md w-full p-6 animate-fade-in shadow-2xl shadow-primary/20">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
          Add New Book
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-foreground">Book Title</Label>
            <Input
              id="title"
              type="text"
              placeholder="Enter book title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="bg-input border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="author" className="text-foreground">Author Name</Label>
            <Input
              id="author"
              type="text"
              placeholder="Enter author name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              className="bg-input border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image" className="text-foreground">Book Cover Image URL (optional)</Label>
            <Input
              id="image"
              type="url"
              placeholder="https://example.com/book-cover.jpg"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="bg-input border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <Button type="submit" variant="hero" size="lg" className="w-full mt-6">
            <Upload className="w-5 h-5" />
            Add to Favourites
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddBookModal;
