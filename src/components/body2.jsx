import React from 'react';

import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './cards.module.css';
import jd from '../images/jd.png';
import cj from '../images/cj.jpg';
import jed from '../images/jed.jpg';

const Body2  = () => {
    return(
        <div className={styles.container}>
            <Typography variant="h4"  color="primary" style={{  color:"#000000", textAlign: "center"}}>What Client Say </Typography>
            <Typography color="textSecondary" gutterBottom style={{ marginBottom:"5rem",textAlign:"center"}}>Here have a look what are client say about us and learn more about us from them.</Typography>
            <Grid container spacing={3} justify= "center">
                <Grid item component ={Card} xs={12} md={3} className={styles.card}>
                  <CardContent>
                  <Typography color="textSecondary" gutterBottom style={{textAlign:"center"}}>“I’m never really worried that the booth isn’t going to get there on time. I can call over there and talk to anyone and get my questions answered in an instant. Ease of getting a hold of people. “</Typography>
                  <img src={jd} style={{marginTop:"2rem", width: "70px", height: "70px", borderRadius:"50%", display:"center", marginLeft:"70px"}} alt=""/>
                  <Typography variant="h6"  color="primary" style={{  color:"#000000", textAlign: "center"}}>John Doe </Typography>
                      <Typography color="textSecondary" gutterBottom style={{textAlign:"center"}}>Designer</Typography>
                      
                  </CardContent>
                </Grid>
                <Grid item component ={Card} xs={12} md={3} className={styles.card}>
                  <CardContent>
                  <Typography color="textSecondary" gutterBottom style={{textAlign:"center"}}>“In my history of working with trade show vendors, I can honestly say that there is not one company that I've ever worked with that has better service than Syntra.”</Typography>
                  <img src={jed} style={{marginTop:"3rem", width: "70px", height: "70px", borderRadius:"50%", marginLeft:"70px"}} alt=""/>
                  <Typography variant="h6"  color="primary" style={{  color:"#000000", textAlign: "center"}}>Jeniffer Doe</Typography>
                      <Typography color="textSecondary" gutterBottom style={{textAlign:"center"}}>Marketing</Typography>
                     
                  </CardContent>
                </Grid>
                <Grid item component ={Card} xs={12} md={3} className={styles.card}>
                  <CardContent>
                  <Typography color="textSecondary" gutterBottom style={{textAlign:"center"}}>“Quality is always there. Top of the game in terms of that Syntra companies.”</Typography>
                  <img src={cj} style={{marginTop:"6rem", width: "70px", height: "70px", borderRadius:"50%", marginLeft:"70px"}} alt=""/>
                  <Typography variant="h6"  color="primary" style={{ color:"#000000", textAlign: "center"}}>Claudia Jane </Typography>
                      <Typography color="textSecondary" gutterBottom style={{textAlign:"center"}}>Consultant</Typography>
                     
                      
                      
                  </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default Body2