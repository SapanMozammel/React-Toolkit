export default function Page() {
  return (
    <div className="css-grid">
      {[...Array(60)].map((e, i) => (
        <div
          className=""
          key={i}>
          {++i}
        </div>
      ))}
    </div>
  );
}
