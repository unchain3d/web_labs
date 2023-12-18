import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__main">
                <div className="footer__text">
                    <h4 className="footer__text-title">TimberTech Emporium</h4>
                    <p className="footer__text-pharahraph">Discover the power of precision</p>
                </div>
                <div className="footer__logo">
                    <img src="logos/logo.png" alt="logo" width="120" height="90" />
                </div>
                <div className="footer__logos">
                    <a href="#"><img className="footer__logos1" src="logos/facebook.png"></img></a>
                    <a href="#"><img className="footer__logos1" src="logos/twitter.png"></img></a>
                    <a href="#"><img className="footer__logos1" src="logos/google.png"></img></a>
                    <a href="#"><img className="footer__logos1" src="logos/linkedin.png"></img></a>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom-line"></div>
                <p className="footer__bottom-copyrights">2023 TTCE © All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer