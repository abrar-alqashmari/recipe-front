 import React from 'react';
 import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
<div className="footer-widgets-wrap">
<div className="row">
<div style={{padding:20 , margin:15 }} className="col-lg-3 col-md-3 col-6 pe-4">
 <div >
<h4 className="ls0 nott">Download App</h4>
<h4 className="ls0 nott">Share App</h4>
<h4 className="ls0 nott">Edit App</h4>
<h4 className="ls0 nott">Great App</h4>
{/* <Link to="/"><img src="demos/articles/images/appstore.png" alt="App Link"/></Link>
<Link to="/"><img src="demos/articles/images/googleplay.png" alt="App Link" className="mt-2"/></Link>  */}
</div> 
</div>
<div style={{padding:20 , margin:10 }}className="col-lg-3 col-md-3 col-6">
 <div >
 <h4 className="ls0 nott">Support</h4>
 <h4 className="ls0 nott">Dishes</h4>
 <h4 className="ls0 nott">Coffee</h4>
 <h4 className="ls0 nott">Appetites</h4>
 {/* <ul className="list-unstyled ms-0">
<li className="text-black-50">Home</li>
<li className="mb-2"><Link to="/Home" className="text-black-50">About</Link></li>
 <li className="mb-2"><Link to="/Home" className="text-black-50">FAQs</Link></li> 
 <li className="mb-2"><Link to="/Home" className="text-black-50">Support</Link></li>  
</ul> */}
</div> 
</div>
<div style={{padding:20 , margin:10 }} className="col-lg-3 col-md-3 col-6 mt-4 mt-md-0"> <div >
 <h4 className="ls0 nott">Trending</h4>
 <h4 className="ls0 nott">Food</h4>
 <h4 className="ls0 nott">Recipe</h4>
 <h4 className="ls0 nott">Drinks</h4>
 {/* <ul className="list-unstyled ms-0">
<li className="mb-2"><Link to="/" className="text-black-50">Shop</Link></li>
<li className="mb-2"><Link to="/" className="text-black-50">Portfolio</Link></li>
<li className="mb-2"><Link to="/" className="text-black-50">Blog</Link></li> 
 </ul> */}
</div>
</div>
<div style={{padding:20 , margin:20 }} className="col-lg-2 col-md-1 col-5 mt-3 mt-md-0">
<div >
 <h4 className="ls0 nott">Features</h4>
 <h4 className="ls0 nott">Advantages</h4>
 <h4 className="ls0 nott">Informations</h4>
 <h4 className="ls0 nott">About Us</h4>
  {/* <ul className="list-unstyled ms-0">
  <li className="mb-2"><Link to="/" className="text-black-50">Help Center</Link></li>
 <li className="mb-2"><Link to="/" className="text-black-50">Paid with Moblie</Link></li>
 <li className="mb-2"><Link to="/" className="text-black-50">Status</Link></li>
 <li className="mb-2"><Link to="/" className="text-black-50">Contact Support</Link></li> 
 </ul> */}
</div>
</div>
</div>
</div>
<div className="bg-light">
 <div className="container">
 <div className="row justify-content-center align-items-center">
 <div className="col-sm-4 d-flex justify-content-sm-start mb-5 mb-sm-0 text-black-50">
 <h5>Copyrights &copy; 2022 All Rights Reserved by MAM.</h5>
 </div>
</div>
<div className="col-sm-4 d-flex justify-content-sm-center mb-3 mb-sm-0">
 {/* <Link to="https://facebook.com/semicolonweb" target="_blank" className="social-icon si-small si-colored si-facebook" title="Facebook">//<i className="icon-facebook"></i>
<i className="icon-facebook"></i>
</Link>  */}
 {/* <Link to="https://twitter.com/__semicolon" target="_blank" className="social-icon si-small si-colored si-twitter" title="Twitter">
<i className="icon-twitter"></i>
<i className="icon-twitter"></i>
</Link>  */}
{/* <Link to="https://www.youtube.com/semicolonweb" target="_blank" className="social-icon si-small si-colored si-youtube" title="youtube">
<i className="icon-youtube"></i>
<i className="icon-youtube"></i>
</Link>  */}
 {/* <Link to="https://www.instagram.com/semicolonweb" target="_blank" className="social-icon si-small si-colored si-instagram" title="instagram">
<i className="icon-instagram"></i>
<i className="icon-instagram"></i>
</Link>  */}
</div>
<div className="col-sm-4 d-flex justify-content-sm-end">
{/* <div className="copyright-Links"><Link to="/">Terms of Use</Link> / <Link to="/">Privacy Policy</Link></div> */}
</div>
</div>
</div>
        </>
    )
}

export default Footer