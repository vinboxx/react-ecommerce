import React from 'react';
import s from './Footer.css';

function Footer() {
  const FooterTop = () => (
        <div className="mdl-mega-footer__middle-section">
            <div className={s['mdl-mega-footer__drop-down-section']}>
                <h1 className={s['mdl-mega-footer__heading']}>Features</h1>
                <ul className={s['mdl-mega-footer__link-list']}>
                    <li className={s['mdl-mega-footer__link-list_li']}>
                        <a className={s['mdl-mega-footer__link-list_a']} href="#">About</a>
                    </li>
                    <li className={s['mdl-mega-footer__link-list_li']}>
                        <a className={s['mdl-mega-footer__link-list_a']} href="#">Terms</a>
                    </li>
                    <li className={s['mdl-mega-footer__link-list_li']}>
                        <a className={s['mdl-mega-footer__link-list_a']} href="#">Partners</a>
                    </li>
                    <li className={s['mdl-mega-footer__link-list_li']}>
                        <a className={s['mdl-mega-footer__link-list_a']} href="#">Updates</a>
                    </li>
                </ul>
            </div>
            <div className={s['mdl-mega-footer__drop-down-section']}>
                <h1 className={s['mdl-mega-footer__heading']}>Details</h1>
                <ul className={s['mdl-mega-footer__link-list']}>
                    <li className={s['mdl-mega-footer__link-list_li']}>
                        <a className={s['mdl-mega-footer__link-list_a']} href="#">Specs</a>
                    </li>
                    <li className={s['mdl-mega-footer__link-list_li']}>
                        <a className={s['mdl-mega-footer__link-list_a']} href="#">Tools</a>
                    </li>
                    <li className={s['mdl-mega-footer__link-list_li']}>
                        <a className={s['mdl-mega-footer__link-list_a']} href="#">Resources</a>
                    </li>
                </ul>
            </div>
            <div className={s['mdl-mega-footer__drop-down-section']}>
                <h1 className={s['mdl-mega-footer__heading']}>Technology</h1>
                <ul className={s['mdl-mega-footer__link-list']}>
                    <li className={s['mdl-mega-footer__link-list_li']}>
                        <a className={s['mdl-mega-footer__link-list_a']} href="#">How it works</a>
                    </li>
                    <li className={s['mdl-mega-footer__link-list_li']}>
                        <a className={s['mdl-mega-footer__link-list_a']} href="#">Patterns</a>
                    </li>
                    <li className={s['mdl-mega-footer__link-list_li']}>
                        <a className={s['mdl-mega-footer__link-list_a']} href="#">Usage</a>
                    </li>
                    <li className={s['mdl-mega-footer__link-list_li']}>
                        <a className={s['mdl-mega-footer__link-list_a']} href="#">Products</a>
                    </li>
                    <li className={s['mdl-mega-footer__link-list_li']}>
                        <a className={s['mdl-mega-footer__link-list_a']} href="#">Contracts</a>
                    </li>
                </ul>
            </div>
            <div className={s['mdl-mega-footer__drop-down-section']}>
                <h1 className={s['mdl-mega-footer__heading']}>FAQ</h1>
                <ul className={s['mdl-mega-footer__link-list']}>
                    <li className={s['mdl-mega-footer__link-list_li']}>
                        <a className={s['mdl-mega-footer__link-list_a']} href="#">Questions</a>
                    </li>
                    <li className={s['mdl-mega-footer__link-list_li']}>
                        <a className={s['mdl-mega-footer__link-list_a']} href="#">Answers</a>
                    </li>
                    <li className={s['mdl-mega-footer__link-list_li']}>
                        <a className={s['mdl-mega-footer__link-list_a']} href="#">Contact us</a>
                    </li>
                </ul>
            </div>
        </div>
    );

  const FooterBottom = () => (
        <div className={s['mdl-mega-footer__bottom-section']}>
            <div className={s['mdl-logo']}>Title</div>
            <ul className={s['mdl-mega-footer__link-list']}>
                <li className={s['mdl-mega-footer__bottom-section__link-list_li']}>
                    <a className={s['mdl-mega-footer__link-list_a']} href="#">Help</a>
                </li>
                <li className={s['mdl-mega-footer__bottom-section__link-list_li']}>
                    <a className={s['mdl-mega-footer__link-list_a']} href="#">Privacy & Terms</a>
                </li>
            </ul>
        </div>
    );

  return (
        <footer className={s['mdl-mega-footer']}>
            <FooterTop />
            <FooterBottom />
        </footer>
    );
}

export default Footer;
