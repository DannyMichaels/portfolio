import './Footer.scss';

const Footer = () => (
  <>
    <footer className="footer">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/daniel-michael-718825155/"
        style={{ textDecoration: 'none', color: '#fff' }}>
        Webpage by Daniel Michael &copy; {new Date().getFullYear()}
      </a>
    </footer>
  </>
);

export default Footer;
