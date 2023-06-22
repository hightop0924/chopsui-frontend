import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import chopsui from "./chopsui.pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "./pdf.worker.js",
//   import.meta.url
// ).toString();
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function MyDocument() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: any }) {
    setNumPages(numPages);
  }

  return (
    <div className="mt-40 ">
      <Document file={chopsui} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
