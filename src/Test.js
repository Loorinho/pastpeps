import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useState } from "react";

import React from "react";

export default function Text() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages); //setting them to equal the number of pages got by the renderer
    setPageNumber(1);
  }
  return (
    <div className="semester d-flex justify-content-center">
      <div className="mt-3 zind2">
        {/* <Document file="/one.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            height="600"
            width="900"
            pageNumber={pageNumber}
          />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        {pageNumber > 1 && (
          <button onClick={changePageBack}>Previous page</button>
        )}
        {pageNumber < numPages && (
          <button onClick={changePageNext}>Next page</button>
        )} */}

        <center className="zind2">
          <Document file="/one.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (element, index) => (
              <div className="m-4 mt-2">
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  width="800"
                />
                <p>
                  Page {index + 1} of {numPages}
                </p>
              </div>
            ))}
          </Document>
        </center>
      </div>
    </div>
  );
}
