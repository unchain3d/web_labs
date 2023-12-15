import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__main">
                <div className="footer__text">
                    <h4 className="footer__text-title">TimberTech Emporium</h4>
                    <p className="footer__text-paragraph">Discover the power of precision</p>
                </div>
                <div className="footer__logo">
                    <img src="logos/logo1.png" alt="logo" width="120" height="90" />
                </div>
                <div className="footer__logos">
                    <a href="#"><img className="footer__logos1" src="logos/facebook_logo.png" alt="Facebook Logo" /></a>
                    <a href="#"><img className="footer__logos1" src="logos/twitter_logo.png" alt="Twitter Logo" /></a>
                    <a href="#"><img className="footer__logos1" src="logos/google_logo.png" alt="Google Logo" /></a>
                    <a href="#"><img className="footer__logos1" src="logos/linkedin_logo.png" alt="LinkedIn Logo" /></a>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom-line"></div>
                <p className="footer__bottom-copyrights">2023 TTCE © All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
