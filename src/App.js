
import './App.css';
import {Navbar,Body1, Body2, Body3, Footer} from './components'
import {Typography} from '@material-ui/core';
import web1 from './images/img2.png';
import time from './images/on-time.png';
import quality from './images/brand-positioning.png';
import innovation from './images/project-management.png';
import dedicated from './images/customer-service.png';
import award from './images/trophy.png';
import complete from './images/complete.png';
import trusted from './images/friendship.png';
import team from './images/team.png';


function App() {
  return (
    <div className="App">
      <div className="section">
        <Navbar useTransparent/>
        <Typography variant="h3"  color="primary" style={{marginTop: "10rem", textAlign: "center", color: "#ffdb4d"}}>About Us </Typography>
        <Typography variant="body2"  color="primary" style={{textAlign: "center", color: "#ffffff", justifyContent:"space-around"}}>Home | About </Typography>
     <div className="wave wave1"></div>
     <div className="wave wave2"></div>
     <div className="wave wave3"></div>
     <div className="wave wave4"></div>
     </div>
     <Body1/>
     <div className="section">
     <div className="waves wave1"></div>
     <div className="waves wave2"></div>
     <div className="waves wave3"></div>
     <div className="waves wave4"></div>
     
     <div className="section">
     <Typography variant="h4"  color="primary" style={{marginTop: "9rem", textAlign: "center", color: " #ffdb4d"}}>Why Choose Us </Typography>
     <Typography variant="body2"  color="primary" style={{textAlign: "center", color: "#ffffff"}}>We provide everything at a cheap rate which anyone can afford. </Typography>
     <div className="web" style={{display:"flex", justifyContent:"space-around"}}>
     <div className="circle" >
     <img src={quality} style={{marginTop: "3rem",width: "40px", height: "40px", float:"left"}} alt=""/>
     <Typography variant="body1"  color="primary" style={{marginTop: "3rem",textAlign: "left", color: " #ffdb4d"}}>High Quality Service </Typography>
     <Typography variant="body2"  color="primary" style={{ color: "#ffffff", textAlign: "left", marginBottom: "3rem"}}>Our team provides high quality services.</Typography>
     <img src={time} style={{width: "40px", height: "40px", display:"block",float:"left"}} alt=""/>
     <Typography variant="body1"  color="primary" style={{marginTop: "3rem",textAlign: "left", color: " #ffdb4d"}}>Project On Time </Typography>
     <Typography variant="body2"  color="primary" style={{ color: "#ffffff", textAlign: "left", marginBottom: "5rem"}}>Our team is very particular about time.</Typography>
     </div>
     <div className="web">
     <img src={web1} style={{ marginTop: "2rem", width: "230px", height: "230px"}} alt=""/>
     </div>
     <div className="circle">
     <img src={innovation} style={{marginTop: "3rem", width: "40px", height: "40px", float:"left"}} alt=""/>
     <Typography variant="body1"  color="primary" style={{marginTop: "3rem",textAlign: "left", color: " #ffdb4d"}}>Innovative Solution </Typography>
     <Typography variant="body2"  color="primary" style={{ color: "#ffffff", textAlign: "left", marginBottom: "5rem"}}>Our team provides various innovative ideas.</Typography>
     <img src={dedicated} style={{width: "40px", height: "40px", float:"left"}} alt=""/>
     <Typography variant="body1"  color="primary" style={{marginTop: "3rem",textAlign: "left", color: " #ffdb4d"}}>Dedicative Support </Typography>
     <Typography variant="body2"  color="primary" style={{ color: "#ffffff", textAlign: "left", marginBottom: "5rem"}}>Our team is extremely supportive.</Typography>
     </div>
     </div>
     <div className="wave wave1"></div>
     <div className="wave wave2"></div>
     <div className="wave wave3"></div>
     <div className="wave wave4"></div>
     </div>
     </div>
     <Body2/>
     <div className="curved">
       <div>
     <img src={complete} style={{width: "70px", height: "70px", marginTop: "3rem"}} alt=""/>
     <Typography variant="body1"  color="primary" style={{textAlign: "center", color: " #ffdb4d"}}>100% </Typography>
     <Typography variant="body2"  color="primary" style={{textAlign: "center", color: " #ffffff", marginBottom: "10rem"}}>Project Completed </Typography>
     </div>
     <div>
     <img src={trusted} style={{width: "70px", height: "70px", marginTop: "3rem"}} alt=""/>
     <Typography variant="body1"  color="primary" style={{textAlign: "center", color: " #ffdb4d"}}>100+ </Typography>
     <Typography variant="body2"  color="primary" style={{textAlign: "center", color: " #ffffff", marginBottom: "10rem"}}>Trusted Client </Typography>
     </div>
     <div>
      <img src={award} style={{width: "70px", height: "70px", marginTop: "3rem"}} alt=""/>
      <Typography variant="body1"  color="primary" style={{textAlign: "center", color: " #ffdb4d"}}>100+ </Typography>
     <Typography variant="body2"  color="primary" style={{textAlign: "justify", color: " #ffffff", marginBottom: "10rem"}}>Awards & Recognition </Typography>
     </div>
     <div>
      <img src={team} style={{width: "70px", height: "70px", marginTop: "3rem"}} alt=""/>
      <Typography variant="body1"  color="primary" style={{textAlign: "center", color: " #ffdb4d"}}>50+ </Typography>
     <Typography variant="body2"  color="primary" style={{textAlign: "justify", color: " #ffffff", marginBottom: "10rem"}}>Professional Team </Typography>
     </div>
     </div>
     <Body3/>
     <div className="section">
       <div style={{marginTop:"10rem"}}>
       <Footer/>
       </div>
     <div className="waves wave1"></div>
     <div className="waves wave2"></div>
     <div className="waves wave3"></div>
     <div className="waves wave4"></div>
     </div>
    </div>
  );
}

export default App;
