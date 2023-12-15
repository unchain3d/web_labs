function Footer() {
    return (
        <footer className="footer">
            <div className="footer__main">
                <div className="footer__text">
                    <h4 className="footer__text-title">TimberTech Chainsaw Emporium</h4>
                    <p className="footer__text-paragraph">Best chainsaws you will ever find</p>
                </div>
                <div className="footer__logo">
                    <img src="logos/logo1.png" alt="logo" width="96.2" height="72.2" />
                </div>
                <div className="footer__logos">
                    <a href="#"><img className="footer__logos1" src="logos/facebook_logo.png"></img></a>
                    <a href="#"><img className="footer__logos1" src="logos/twitter_logo.png"></img></a>
                    <a href="#"><img className="footer__logos1" src="logos/google_logo.png"></img></a>
                    <a href="#"><img className="footer__logos1" src="logos/linkedin_logo.png"></img></a>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom-line"></div>
                <p className="footer__bottom-copyrights">2023 TSM © Copyright all rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer