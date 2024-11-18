import "./OpenPDFLink.css"; // Importa o arquivo CSS

const OpenPDFLink = ({ pdfUrl, linkText }) => {
  return (
    <a
      className="pdf-link"
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {linkText}
    </a>
  );
};

export default OpenPDFLink;
