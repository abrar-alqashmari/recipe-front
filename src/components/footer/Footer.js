import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.css'
const Footer = () => {
    return (
        <>
            <footer className={`${styles.tum} bg-light`}>
                <div className={`${styles.container} container`}>
                    <div className="row align-items-center">
                        <div className="col d-flex justify-content-start justify-content-sm-start mb-5 mb-sm-0 text-black-50">
                            <h5>Copyrights &copy; 2022 All Rights Reserved by MEM.</h5>
                        </div>
                        <div className="col d-flex justify-content-center justify-content-sm-end mb-3 mb-sm-0">
                            <a href="https://facebook.com/semicolonweb" target="_blank" className="social-icon si-small si-colored si-facebook" title="Facebook"><i className="icon-facebook"></i>
                                <i className="icon-facebook"></i>
                            </a>
                            <a href="https://twitter.com/__semicolon" target="_blank" className="social-icon si-small si-colored si-twitter" title="Twitter">
                                <i className="icon-twitter"></i>
                                <i className="icon-twitter"></i>
                            </a>
                            <a href="https://www.youtube.com/semicolonweb" target="_blank" className="social-icon si-small si-colored si-youtube" title="youtube">
                                <i className="icon-youtube"></i>
                                <i className="icon-youtube"></i>
                            </a>
                            <a href="https://www.instagram.com/semicolonweb" target="_blank" className="social-icon si-small si-colored si-instagram" title="instagram">
                                <i className="icon-instagram"></i>
                                <i className="icon-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer