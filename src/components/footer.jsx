import React from 'react';

import {Typography} from '@material-ui/core';
import './footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Footer = () => {
    return(
      <div className="footer">
          <div className="row">
              <div className="column">
              <Typography variant="h4"  color="primary" style={{color:"#ffffff", marginLeft:"50px"}}>SYNTRA</Typography>
              <Typography variant="body2"  color="primary" style={{marginTop:"1rem",color:"#ffffff", marginLeft:"50px", textAlign:"left", float:""}}>SYNTRA is a modern clean and elegant Figma Template to create website for SEO, Digital Agency, Creative Studio, and other services. </Typography>
              <div style={{marginTop:"1rem", display:"flex", marginLeft:"40px", justifyContent:"space-around" }}>
              <FacebookIcon style={{ color:"#ffdb4d" }} />
              <TwitterIcon style={{ color:"#ffdb4d" }} />
              <LinkedInIcon style={{ color:"#ffdb4d" }} />
              <YouTubeIcon style={{ color:"#ffdb4d" }} />
              </div>
              </div>
              <div className="column">
              <Typography variant="subtitle1"  color="primary" style={{color:"#ffdb4d", marginLeft:"50px"}}>Information</Typography>
              <ul style={{color:"#ffffff",  marginLeft:"50px", marginTop:"1em"}}>
               <li style={{listStyle:"none", marginTop:"0.7em"}}>About Us</li>
               <li style={{listStyle:"none", marginTop:"0.7em"}}>Services</li>
               <li style={{listStyle:"none", marginTop:"0.7em"}}>Our Team</li>
               <li style={{listStyle:"none", marginTop:"0.7em"}}>Our Price</li>
               <li style={{listStyle:"none", marginTop:"0.7em"}}>Contact</li>
              </ul>
              </div>
              <div className="column">
              <Typography variant="subtitle1"  color="primary" style={{color:"#ffdb4d", marginLeft:"50px"}}>Contact</Typography>
              <div style={{marginTop:"1em"}}>
              <li style={{listStyle:"none", color:"#ffffff"}}><LocationOnIcon style={{ color:"#ffdb4d" }} />280 jeffer son Street Port Charlotte, FL 33052S</li>
              <li style={{listStyle:"none", marginTop:"0.7em", color:"#ffffff"}}><PhoneIcon style={{ color:"#ffdb4d" }} />+012 3458 584</li>
              <li style={{listStyle:"none", marginTop:"0.7em", color:"#ffffff"}}><MailIcon style={{ color:"#ffdb4d" }} />syntra@support.com</li>
              </div>
              </div>
              <div className="column">
              <Typography variant="subtitle1"  color="primary" style={{color:"#ffdb4d", marginLeft:"50px"}}>Newsletter</Typography>
              <Typography variant="body1"  color="primary" style={{marginTop:"1rem",color:"#ffffff", marginLeft:"50px", marginBottom:"1rem"}}>Identify the topics are care about and update them through emails or social media </Typography>   
              <div style={{displ:"flex"}}>
              <TextField id="outlined-search" label="Your Email Address" type="search" variant="outlined" size="small" style={{marginLeft:"20px", backgroundColor:"#ffffff", borderRadius:"50px"}} /><Button variant="outlined" style={{ backgroundColor:"#ffdb4d", borderRadius:"50px"}}><MailIcon style={{ color:"#ffffff" }} /></Button>
              </div>
              </div>
          </div>
          <div style={{marginTop:"10rem", display:"flex", justifyContent:"space-between"}}>
              <Typography variant="body2"  color="primary" style={{color:"#ffffff", marginLeft:"50px", marginBottom:"1rem"}}>Copyright © 2000 SYNTRA All rights reserved</Typography>  
            <div style={{display:"flex", float:"right", justifyContent:"space-around"}}>
               <li style={{listStyle:"none", color:"#ffffff", fontSize:"13px", padding:"14px 10px" }}>Terms of Service  </li>
               <li style={{listStyle:"none", color:"#ffffff", fontSize:"13px", padding:"14px 10px"  }}> Privacy Policy </li>
               <li style={{listStyle:"none", color:"#ffffff", fontSize:"13px", padding:"14px 10px" }}> Legal</li>
            </div>
            </div>
      </div>
    )
}
export default Footer