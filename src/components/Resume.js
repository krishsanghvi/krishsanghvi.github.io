
//import './Resume.css';
import * as React from "react";

import PDFViewer from './PDFViewer';
import ResumePDF from "../media/Krish_Sanghvi_Resume.pdf"

function Resume() {
  return (
    
    <div>
      <PDFViewer pdf={ResumePDF}/>
      


    </div>
  );
}

export default Resume;
