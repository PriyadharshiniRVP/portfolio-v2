function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="foot" id="foot">
      <div className="footer-content">
        <p className="footer-text">
          © {currentYear} Built with ❤️ by Priyadharshini R
        </p>
        <p className="footer-reference">
          <a 
            href="https://www.gazijarin.com/" 
            className="ref"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit reference website"
          >
            Reference
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;