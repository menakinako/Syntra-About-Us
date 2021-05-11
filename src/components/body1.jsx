import React from 'react';

import {Typography} from '@material-ui/core';
import web2 from '../images/img1.png';
import quote from '../images/left-quotes-sign.png';
import './body.css'

const Body1  = () => {
    return(
        <div className="b1" >
            <div className="leftcontent">
           <Typography variant="h4"  color="primary" style={{color:"#000000", marginLeft:"50px"}}>Syntra Digital Agency </Typography>
           <Typography variant="body2"  color="textSecondary" style={{marginTop:"1rem", marginLeft:"50px", textAlign:"left", float:""}}>SYNTRA is a modern clean and elegant Figma Template to create website for SEO, Digital Agency, Creative Studio, and other services. This template carefully crafted with great attention to details for you to develop your professional website using WordPress, Drupal, Joomla, or other CMS. </Typography>
           <div className="wrapper">
           <div className="row">
           <div className="column" >
           <Typography variant="h5"  color="primary" style={{color:"#000000", marginLeft:"50px"}}>Expert Team</Typography>
           <Typography variant="body2"  color="textSecondary" style={{marginTop:"1rem", marginLeft:"50px", textAlign:"left", float:""}}>Our team provides a wide range of products and solutions. </Typography>
            </div>
             <div className="column" >
             <Typography variant="h5"  color="primary" style={{color:"#000000", marginLeft:"50px"}}>Business Analysis </Typography>
             <Typography variant="body2"  color="textSecondary" style={{marginTop:"1rem", marginLeft:"50px", textAlign:"left", float:""}}>We offer appropriate solutions for any of the associated problems. Solution range from process management improvement to software to strategic planning </Typography>
             </div>
           </div>
           </div>
           <div className="text">
           <img src={quote} style={{ marginTop:"1rem", width: "20px", height: "20px"}} alt=""/>
           <Typography variant="subtitle1"  color="primary" style={{fontWeight:"90px",marginTop:"1rem",color:"#000000", marginLeft:"10px", textAlign:"left", float:""}}>We build thoughtful identities and experiences to elevate and empower organisations </Typography>
           </div>
           </div>
           <div className="rightcontent"> 
            <img src={web2} style={{ width: "600px", height: "400px"}} alt=""/>
            </div>
        </div>
    )
}
export default Body1