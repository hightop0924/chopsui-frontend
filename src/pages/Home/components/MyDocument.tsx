import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import chopsui from "@/assets/chopsui.pdf";
import { Button } from "@/components/Button";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function MyDocument() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: any }) {
    setNumPages(numPages);
  }

  const onBefore = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };

  const onNext = () => {
    if (pageNumber === numPages) return;
    setPageNumber(pageNumber + 1);
  };

  return (
    <div className="pt-150 bg-blue-300 grid ">
      <div className="grid place-content-center place-items-center mt-32">
        <Document
          file={chopsui}
          className="mt-32"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
      {numPages !== 1 ? (
        <div className="flex place-content-evenly ">
          <Button
            variant="primary"
            onClick={onBefore}
            className="text-secondary-50 mt-7 md:w-96 col-span-2  !font-[inter] justify-between md:!px-7 py-3 md:py-5 gap-20 text-base md:text-xl"
          >
            Before
          </Button>
          <Button
            onClick={onNext}
            variant="primary"
            className="text-secondary-50 mt-7 md:w-96 col-span-2  !font-[inter] justify-between md:!px-7 py-3 md:py-5 gap-20 text-base md:text-xl"
          >
            Next
          </Button>
        </div>
      ) : null}
    </div>
  );
}
