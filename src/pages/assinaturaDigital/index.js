import "./index.css";
import { useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import axios from "axios";

export default function AssinaturaDigital() {
  const [sign, setSign] = useState();

  const handleClear = () => {
    sign.clear();
  };

  const handleUpload = async () => {
    const ass = sign.getTrimmedCanvas().toDataURL("image/png");
    if (ass) {
      try {
        await axios.put(
          "https://rich-jade-crane-suit.cyclic.app/user/6451b0bdd83ae278803706c6",
          {
            digitalSignature: ass,
          }
        );
        console.log("Assinatura digital enviada com sucesso!");
      } catch (error) {
        console.error("Erro ao enviar a assinatura digital", error);
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
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
            backgroundColor: "rgb(28, 69, 194)",
          }}
          onClick={handleClear}
        >
          Limpar
        </button>
        <button
          className="button"
          style={{ backgroundColor: "#4caf50" }}
          onClick={handleUpload}
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
