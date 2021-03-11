export default function getRating(rating, icon) {
  return Array(rating)
    .fill()
    .map(() => (
      <span role="img" aria-label="rating">
        {icon}&#8199;
      </span>
    ));
}
