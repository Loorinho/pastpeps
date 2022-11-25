import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useState } from "react";
import { useParams } from "react-router-dom";

import React from "react";

export default function Exam() {
  //getting the file name of a specific pdf to display based on preference
  const { course, semester, exam, year } = useParams();

  // states for the number of pages and page number
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
          <Document
            // Getting the exact pdf based on its details
            // file={`/${course}${year}${semester}${exam}.pdf`}
            file="/bsseyr1sem22022exam.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
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
