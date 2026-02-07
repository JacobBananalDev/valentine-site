import { useState } from "react";
import "./App.css";
import dogPic from "./assets/Finn.jpg"; // put dog.jpg in src/

export default function App() {
  const [stage, setStage] = useState<"question" | "envelope">("question");
  const [open, setOpen] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: "0px", left: "0px" });

  const moveNoButton = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;

    setNoPosition({
      left: `${x}px`,
      top: `${y}px`,
    });
  };

  if (stage === "question") {
    return (
      <div className="center">
        <h1>Will you be my Valentine? 💘</h1>

        <div className="buttons">
          <button
            className="yes"
            onClick={() => {
              setShowHearts(true);
              setTimeout(() => setStage("envelope"), 500);
            }}
          >
            Yes 💖
          </button>
          <button
            className="no"
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton} // important for iPhone
            style={{
              position: "relative",
              ...noPosition,
            }}
          >
            No 💔
          </button>
        </div>

        {showHearts && (
          <div className="hearts">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="heart">💖</span>
            ))}
          </div>
        )}
        <footer className="footer">
          Created by <strong>JacobBananalDev</strong> 💖
        </footer>
      </div>
    );
  }

  return (
    <div className="center">

      <div
        className="envelope-wrapper"
        onClick={() => setOpen(true)}
      >
        {/* LETTER (separate paper) */}
        <div className={`letter ${open ? "show" : ""}`}>
          <p className="letter-title">My Valentine 💖</p>
          <p>
            I’m so grateful for you and everything we share.
            You make my days brighter, my laughs louder,
            and my life better just by being in it.
          </p>
          <p>Will you be my Valentine — today and always? ❤️</p>

          <img src={dogPic} alt="Her dog" className="dog-pic" />
        </div>

        {/* ENVELOPE */}
        <div className="envelope">
          <div className={`flap ${open ? "open" : ""}`} />
          <div className="body" />
        </div>
      </div>

      <p className="hint">
        {open ? "💖" : "Tap to open ✉️"}
      </p>

      <footer className="footer">
        Created by <strong>JacobBananalDev</strong> 💖
      </footer>
    </div>
  );
}
