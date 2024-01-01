import React from 'react';

function PDFViewer({ pdf }) {
  return (
    <iframe 
      src={pdf} 
      style={{ width: '100%', height: '800px', border: 'none' }}
      title="PDF Viewer"
    ></iframe>
  );
}

export default PDFViewer;
