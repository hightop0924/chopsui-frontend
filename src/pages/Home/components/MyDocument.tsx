import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import chopsui from "./chopsui.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function MyDocument() {
  const [loading, setLoading] = useState(true);

  function onDocumentLoadSuccess() {
    setLoading(false);
  }

  return (
    <div className="pt-20 bg-blue-300">
      {loading ? (
        <Document file={chopsui} onLoadSuccess={onDocumentLoadSuccess}>
          <Page />
        </Document>
      ) : null}
    </div>
  );
}
