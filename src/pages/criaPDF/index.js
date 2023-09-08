import "./index.css";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useEffect, useState } from "react";
import { logoAlumar } from "../../utils";
import axios from "axios";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

function CriaPDF() {
  const digitalSignature = logoAlumar;
  var obs = ["1 - dasdnksan", "2 - oidajsdm"];
  var tamanhoObs = 100;
  const [user, setUser] = useState();

  const handleGetInfos = async () => {
    try {
      await axios
        .get(
          "https://rich-jade-crane-suit.cyclic.app/user/6451b0bdd83ae278803706c6"
        )
        .then((res) => setUser(res));
      console.log("sucesso!");
    } catch (error) {
      console.error("Erro", error);
    }
  };

  useEffect(() => {
    handleGetInfos();
  }, []);

  var l =
    obs.length > 0
      ? [
          [
            {
              border: [true, true, true, false],
              text: "LISTE TODAS AS FALHAS IDENTIFICADAS DURANTE A DESMONTAGEM.",
              style: "textQuestions",
              alignment: "center",
              marginTop: 1,
            },
          ],
        ]
      : [
          [
            {
              border: [true, true, true, true],
              text: "LISTE TODAS AS FALHAS IDENTIFICADAS DURANTE A DESMONTAGEM.",
              style: "textQuestions",
              alignment: "center",
              marginTop: 1,
            },
          ],
        ];

  obs.map((item, index) => {
    if (obs.length - 1 === index) {
      l.push([
        {
          border: [true, false, true, true],
          text: item,
          style: "textQuestions",
          alignment: "left",
          marginTop: 1,
        },
      ]);
    } else {
      l.push([
        {
          border: [true, false, true, false],
          text: item,
          style: "textQuestions",
          alignment: "left",
          marginTop: 1,
        },
      ]);
    }
  });
  /* const fonts = {
    Helvetica: {
      normal: 'Helvetica',
      bold: 'Helvetica-Bold',
    },
  }; */
  //const printer = new PDFPrinter(fonts);

  const docDefinition = {
    //defaultStyle: { font: "Helvetica" },
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
              { text: "TAG: ${relatorio.TAG}", style: "textHeader" },
              { text: "ESTOQUE: ${relatorio.codEstoque}", style: "textHeader" },
              { text: "PO: ", style: "textHeader" },
            ],
            [
              {
                text: "FABRICANTE: ${relatorio.fabricante}",
                style: "textHeader",
              },
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
              { text: ``, style: "textHeader", alignment: "center" },
              { text: "PLANEJADO", style: "textHeader" },
              { text: ``, style: "textHeader", alignment: "center" },
            ],
          ],
        },
      },
      {
        style: "tableNotFirst",
        table: {
          widths: ["62.5%", "18.75%", "18.75%"],
          heights: [8, 8, 8],
          body: [
            [
              { text: "", style: "textHeader" },
              {
                text: "DATA INÍCIO: ",
                style: "textHeader",
                //alignment: 'center',
                fontSize: 5,
                alignment: "left",
              },
              {
                text: "DATA TÉRMINO: ",
                style: "textHeader",
                //alignment: 'center',
                fontSize: 5,
                alignment: "left",
              },
            ],
          ],
        },
      },
      {
        style: "tableNotFirst",
        table: {
          widths: ["100%"],
          heights: [25],
          body: [
            [
              {
                text: "ETAPA 01: DESMONTAGEM / LIMPEZA",
                style: "textHeader",
                alignment: "center",
                fillColor: "#00B0F0",
                marginTop: 10,
              },
            ],
          ],
        },
      },
      {
        style: "tableNotFirst",
        table: {
          widths: ["4%", "60%", "6%", "6%", "6%", "6%", "6%", "6%"],
          //heights: [25],
          //headerRows: 3,
          body: [
            [
              {
                text: "ITEM",
                style: "textQuestions",
                alignment: "center",
                bold: true,
              },
              {
                text: "DESCRIÇÃO",
                style: "textQuestions",
                alignment: "center",
                bold: true,
              },
              {
                text: "",
                style: "textQuestions",
                alignment: "center",
                colSpan: 6,
              },
              {},
              {},
              {},
              {},
              {},
            ],
            [
              {
                text: "1",
                style: "textQuestions",
                alignment: "center",
              },
              {
                text: "EQUIPAMENTO ESTÁ LIMPO?",
                style: "textQuestions",
                alignment: "left",
              },
              {
                text: "SIM",
                style: "textQuestions",
                alignment: "center",
              },
              {
                text: "",
                style: "textQuestions",
                alignment: "center",
              },
              {
                text: "NÃO",
                style: "textQuestions",
                alignment: "center",
              },
              {
                text: "",
                style: "textQuestions",
                alignment: "center",
              },
              {
                text: "N/A",
                style: "textQuestions",
                alignment: "center",
              },
              {
                text: "",
                style: "textQuestions",
                alignment: "center",
              },
            ],
          ],
        },
      },
      {
        style: "tableNotFirst",
        table: {
          widths: ["100%"],
          heights: [obs.length <= 1 ? tamanhoObs : 8],
          body: l,
        },
      },

      {
        style: "tableAllSignatures",
        table: {
          widths: ["100%"],
          heights: [100],
          body: [
            [
              [
                {
                  table: {
                    widths: ["32.66%", "1%", "32.66%", "1%", "32.66%"],
                    heights: [70, 0],
                    body: [
                      [
                        {
                          border: [true, true, true, false],
                          width: 100,
                          height: 40,
                          style: "image",
                          image: digitalSignature,
                          alignment: "center",
                          marginTop: 10,
                        },
                        { border: [true, false, true, false], text: "" },
                        {
                          border: [true, true, true, false],
                          width: 100,
                          height: 40,
                          style: "image",
                          image: digitalSignature,
                          alignment: "center",
                          marginTop: 10,
                        },
                        { border: [true, false, true, false], text: "" },
                        {
                          border: [true, true, true, false],
                          width: 100,
                          height: 40,
                          style: "image",
                          image: digitalSignature,
                          alignment: "center",
                          marginTop: 10,
                        },
                      ],
                      [
                        {
                          border: [true, false, true, false],
                          text: "Assinatura/carimbo",
                          alignment: "center",
                          fontSize: 8,
                        },
                        { border: [true, false, true, false], text: "" },
                        {
                          border: [true, false, true, false],
                          text: "Assinatura/carimbo",
                          alignment: "center",
                          fontSize: 8,
                        },
                        { border: [true, false, true, false], text: "" },
                        {
                          border: [true, false, true, false],
                          text: "Assinatura/carimbo",
                          alignment: "center",
                          fontSize: 8,
                        },
                      ],
                      [
                        {
                          border: [true, false, true, true],
                          text: "supervisor da OFC",
                          alignment: "center",
                          fontSize: 8,
                        },
                        { border: [true, false, true, false], text: "" },
                        {
                          border: [true, false, true, true],
                          text: "Engenheiro Responsável",
                          alignment: "center",
                          fontSize: 8,
                        },
                        { border: [true, false, true, false], text: "" },
                        {
                          border: [true, false, true, true],
                          text: "Inspertor da qualidade",
                          alignment: "center",
                          fontSize: 8,
                        },
                      ],
                    ],
                  },
                },
              ],
            ],
          ],
        },
      },
    ],

    styles: {
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
        marginTop: -20,
        marginBottom: 11,
      },
      textHeader: {
        fontSize: 8,
        bold: true,
        marginTop: 1,
      },
      textQuestions: {
        fontSize: 7,
        marginTop: 1,
      },
      tableAllSignatures: {
        width: "100%",
        marginTop: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      },
      tableDigitalSignature: {
        width: "100%",
        marginLeft: 3,
      },
      image: {
        marginLeft: -5,
        marginTop: -1.5,
      },
    },
  };

  const [url, setUrl] = useState(null);

  const baixarPdf = () => {
    const pdfGenerator = pdfMake.createPdf(docDefinition);
    pdfGenerator.getBlob((blob) => {
      const url = URL.createObjectURL(blob);
      setUrl(url);
    });
    pdfGenerator.download();
  };
  useEffect(() => {
    baixarPdf();
  }, []);

  /*   const verPdf = () => {
    const pdfGenerator = pdfMake.createPdf(docDefinition);
    pdfGenerator.getBlob((blob) => {
      const url = URL.createObjectURL(blob);
      setUrl(url);
    });
    if (url) window.location.assign(url);
  };
 */
  return (
    <div className="App">
      {/* {baixarPdf()} */}
      {/* <button onClick={baixarPdf}>Baixar PDF</button>
      <button onClick={verPdf}>ver PDF</button> */}
      {/*  <input onChange={(event) => setTag(event.target.value)}></input> */}
    </div>
  );
}

export default CriaPDF;
