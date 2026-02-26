function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} HER_BROWNIES. All rights reserved.</p>

      <p className="tagline">Taste The Joy ✨</p>

      <p className="developer-credit">
        Designed & Developed by{" "}
        <a
          href="https://github.com/akasgj007"
          target="_blank"
          rel="noopener noreferrer"
          className="developer-link"
        >
          Akash GJ
        </a>
      </p>
    </footer>
  );
}

export default Footer;
