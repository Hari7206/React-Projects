import { useState, useEffect } from "react";

export default function RandomColor() {
  const [color, setColor] = useState("#000000");
  const [colorType, setcolorType] = useState("hex");

  function RandomNumber(length) {
    return Math.floor(Math.random() * length);
  }

  function HandleHexColor() {
    const Nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += Nums[RandomNumber(Nums.length)];
    }
    setColor(hex);
  }

  function HandleRGBColor() {
    let r = RandomNumber(256);
    let g = RandomNumber(256);
    let b = RandomNumber(256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (colorType === "hex") {
      HandleHexColor();
    } else {
      HandleRGBColor();
    }
  }, [colorType]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        gap: "20px",
        transition: "background 0.5s ease",
        textAlign: "center",
      }}
    >
      <div style={{ display: "flex", gap: "15px" }}>
        <button
          onClick={() => setcolorType("hex")}
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.background = "#444")}
          onMouseOut={(e) => (e.target.style.background = "#222")}
        >
          Create Hex Color{colorType === "hex" ? "👀" : " "}
        </button>

        <button
          onClick={() => setcolorType("rgb")}
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.background = "#444")}
          onMouseOut={(e) => (e.target.style.background = "#222")}
        >
          Create RGB Color{colorType === "hex" ? "" : " 👀 "}
        </button>

        <button
          onClick={colorType === "hex" ? HandleHexColor : HandleRGBColor}
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.background = "#444")}
          onMouseOut={(e) => (e.target.style.background = "#222")}
        >
          Generate Random Color
        </button>
      </div>

      <div>
        <h3 style={{ marginBottom: "5px" }}>
          {colorType === "hex" ? "Hex Color" : "RGB Color"}
        </h3>
        <h1
          style={{
            fontSize: "2rem",
            letterSpacing: "1px",
            textShadow: "0 0 10px rgba(0,0,0,0.5)",
          }}
        >
          {color}
        </h1>
      </div>
    </div>
  );
}

// Reusable button style
const buttonStyle = {
  background: "#222",
  color: "white",
  border: "none",
  padding: "12px 20px",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "1rem",
  transition: "0.3s ease",
};
