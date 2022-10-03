import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <p className={s.footerText}>
        Regulated by the ADGM Financial Services Regulatory Authority. All information contained in
        the site are for the use of Professional Clients and Market Counterparties only.
      </p>
    </footer>
  );
};

export default Footer;
