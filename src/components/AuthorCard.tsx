interface AuthorCardProps {
  name: string;
  image: string;
}

const AuthorCard = ({ name, image }: AuthorCardProps) => {
  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden card-hover">
      {/* Author Image */}
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Author Name */}
      <div className="p-4 text-center">
        <h3 className="font-heading font-semibold text-foreground text-lg group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default AuthorCard;
