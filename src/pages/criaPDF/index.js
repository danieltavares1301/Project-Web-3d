import "./index.css";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useState } from "react";
import { logoAlumar } from "../../utils";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
function CriaPDF() {
  const [tag, setTag] = useState();

  const docDefinition = {
    content: [
      {
        style: "table",
        table: {
          widths: ["100%"],
          //: [30],
          body: [
            [
              [
                {
                  width: 515,
                  height: 40,
                  style: "image",
                  image: logoAlumar,
                  fillColor: "#00B0F0",
                },
                {
                  text: "RELATÓRIO DE MANUTENÇÃO CONTROLE DE QUALIDADE",
                  style: "tableHeader",
                  colSpan: 1,
                  alignment: "center",
                  fillColor: "#0cf",
                },
              ],
            ],
          ],
        },
      },
      {
        style: "tableNotFirst",
        table: {
          widths: ["60%", "20%", "20%"],
          body: [
            [
              { text: `TAG: ${tag}`, style: "textHeader" },
              { text: "ESTOQUE:", style: "textHeader" },
              { text: "PO:", style: "textHeader" },
            ],
            [
              { text: "FABRICANTE:", style: "textHeader" },
              { text: "WO:", style: "textHeader" },
              { text: "ST:", style: "textHeader" },
            ],
          ],
        },
      },
      {
        style: "tableNotFirst",
        table: {
          widths: ["70%", "30%"],
          body: [
            [
              { text: "MODELO DE EQUIPAMENTO:", style: "textHeader" },
              { text: "RASTREIO:", style: "textHeader" },
            ],
          ],
        },
      },
      {
        style: "tableNotFirst",
        table: {
          widths: ["65%", "12.5%", "5%", "12.5%", "5%"],
          body: [
            [
              { text: "INSPETOR C.Q.:", style: "textHeader" },
              { text: "EMERGÊNCIA", style: "textHeader" },
              { text: `${tag}`, style: "textHeader", alignment: "center" },
              { text: "PLANEJADO", style: "textHeader" },
              { text: `${tag}`, style: "textHeader", alignment: "center" },
            ],
          ],
        },
      },
    ],

    styles: {
      header: {
        fontSize: 22,
        bold: true,
      },
      anotherStyle: {
        italics: true,
        alignment: "right",
      },
      tableExample: {
        width: "100%",
      },
      tableNotFirst: {
        width: "100%",
        marginTop: -1,
      },
      tableHeader: {
        bold: true,
        fontSize: 8,
        marginTop: -22,
        marginBottom: 11,
      },
      textHeader: {
        fontSize: 9,
        bold: true,
      },
      image: {
        marginLeft: -5,
        marginTop: -1,
      },
    },
  };

  const [url, setUrl] = useState(null);

  const createPdf = () => {
    const pdfGenerator = pdfMake.createPdf(docDefinition);
    pdfGenerator.getBlob((blob) => {
      const url = URL.createObjectURL(blob);
      setUrl(url);
    });
    pdfGenerator.download();
  };

  return (
    <div className="App">
      {createPdf}
      <button onClick={createPdf}>Generate PDF</button>
      {url && <a href={url}>{url}</a>}
      <input onChange={(event) => setTag(event.target.value)}></input>
    </div>
  );
}

export default CriaPDF;
