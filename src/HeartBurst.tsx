import "./App.css";

export default function HeartBurst() {
  const hearts = Array.from({ length: 12 });

  return (
    <div className="heart-burst">
      {hearts.map((_, i) => (
        <span
          key={i}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 0.3}s`,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}
