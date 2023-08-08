import "./index.css";
import { useState } from "react";
import SignatureCanvas from "react-signature-canvas";

export default function AssinaturaDigital() {
  const [sign, setSign] = useState();
  const [url, setUrl] = useState();

  const disabled = false;

  const handleClear = () => {
    sign.clear();
    setUrl("");
  };

  const handleGenerate = () => {
    setUrl(sign.getTrimmedCanvas().toDataURL("image/png"));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
        //backgroundColor: "#f5f",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "50%",
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        <button
          className="button"
          style={{
            backgroundColor: disabled
              ? "rgb(86, 106, 167)"
              : "rgb(28, 69, 194)",
          }}
          onClick={handleClear}
          disabled={disabled}
        >
          Limpar
        </button>
        <button
          className="button"
          style={{ backgroundColor: disabled ? "#667f67" : "#4caf50" }}
          onClick={handleGenerate}
          disabled={disabled}
        >
          Salvar
        </button>
      </div>
      <div
        style={{
          border: "2px solid black",
          width: "90%",
          height: "50vh",
          maxWidth: 800,
        }}
      >
        <SignatureCanvas
          canvasProps={{
            className: "sigCanvas",
            style: { width: "100%", height: "100%" },
          }}
          ref={(data) => setSign(data)}
        />
      </div>
      {/* 
      <br />

      <br />
      <br />
      <img src={url} alt="Signature" style={{ maxWidth: "50%" }} /> */}
    </div>
  );
}
