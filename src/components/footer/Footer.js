import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
const Footer = () => {
   return (
       <>
       <div className='tum'> 
<div className="bg-light">
<div className="container">
<div className="row justify-content-center align-items-center">
<div className="col-sm-4 d-flex justify-content-sm-start mb-5 mb-sm-0 text-black-50">
<h5>Copyrights &copy; 2022 All Rights Reserved by MEM.</h5>
</div>
</div>
<div className="icons"> 
<div className="col-sm-4 d-flex justify-content-sm-center mb-3 mb-sm-0">
 <Link to="https://facebook.com/semicolonweb" target="_blank" className="social-icon si-small si-colored si-facebook" title="Facebook"><i className="icon-facebook"></i>
<i className="icon-facebook"></i>
</Link> 
 <Link to="https://twitter.com/__semicolon" target="_blank" className="social-icon si-small si-colored si-twitter" title="Twitter">
<i className="icon-twitter"></i>
<i className="icon-twitter"></i>
</Link> 
<Link to="https://www.youtube.com/semicolonweb" target="_blank" className="social-icon si-small si-colored si-youtube" title="youtube">
<i className="icon-youtube"></i>
<i className="icon-youtube"></i>
</Link> 
 <Link to="https://www.instagram.com/semicolonweb" target="_blank" className="social-icon si-small si-colored si-instagram" title="instagram">
<i className="icon-instagram"></i>
<i className="icon-instagram"></i>
</Link> 
</div>
</div>
</div>
</div>
</div>
       </>
   )
}

export default Footer