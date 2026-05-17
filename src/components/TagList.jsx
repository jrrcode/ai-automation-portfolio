export function TagList({ tags }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="chip">
          {tag}
        </span>
      ))}
    </div>
  );
}
