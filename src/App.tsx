import { useState } from "react";
import "./App.css";

type Stage = "question" | "envelope" | "open";

function App() {
  const [stage, setStage] = useState<Stage>("question");
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
          <button className="yes" onClick={() => setStage("envelope")}>
            Yes 💖
          </button>

          <button
            className="no"
            onMouseEnter={moveNoButton}
            style={{
              position: "relative",
              left: noPosition.left,
              top: noPosition.top,
            }}
          >
            No 💔
          </button>
        </div>
      </div>
    );
  }

  if (stage === "envelope") {
    return (
      <div className="center">
        <h1>You said YES 💌</h1>
        <div className="envelope" onClick={() => setStage("open")}>
          Click to open ✉️
        </div>
      </div>
    );
  }

  return (
    <div className="center">
      <h1>💘 Happy Valentine’s Day 💘</h1>
      <p>You make every day better. I love you ❤️</p>
    </div>
  );
}

export default App;
