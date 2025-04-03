"use client"; // Required for Next.js App Router
import Link from "next/link";

import "bootstrap/dist/css/bootstrap.min.css";
//import Container from 'react-bootstrap/Container';
import '../Styles/Footer.css';
// import { useTranslation } from "react-i18next";
import {useTranslations} from 'next-intl';

function Footer(){
    const t = useTranslations();
    return(
        <div className="footer-container" >
            <div className="left">            
                <ul className="footer_list">
                    <li className="footer_item">
                        <Link rel="prefetch"  href='/'className="footer_link">
                        {t("Home")}
                        </Link>
                    </li>
                    <li className="footer_item">
                        <Link rel="prefetch"  href='/About'className="footer_link">{t("About")}</Link>
                    </li>
                    <li className="footer_item">
                        <Link rel="prefetch"  href='/Contact'className="footer_link">{t("contactus")}</Link>
                    </li>
                </ul>
                <div className="copy-rights-container">
                    <p className="copy-rights"> {t("copyrights")}</p>
                </div>
            </div>
            <div className="right">
                <div className="first-pol"/>
                <div className="second-pol"/>
                <div className="third-pol"/>
                <div className="forth-pol"/>
            </div>
        </div>
    );
}

export default Footer;