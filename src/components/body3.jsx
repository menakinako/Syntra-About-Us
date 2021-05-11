import React from 'react';

import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import styles from './cards.module.css';
import dm from '../images/dm.png';
import seo from '../images/seo.png';
import sm from '../images/dm1.jpg';

const Body3  = () => {
    return(
        <div className={styles.container}>
           <Typography variant="h4"  color="primary" style={{ textAlign: "center", color:"#000000"}}>Latest Blog</Typography>
           <Typography variant="body1"  color="primary" style={{ textAlign: "center", color:"rgb(185, 185, 185)"}}>Here are some of our latest blogs. You can go through them and read more about it and also the other blogs in our blog page.</Typography>
           <div style={{marginTop:"5rem"}}>
           <Grid container spacing={3} justify= "center">
                <Grid item component ={Card} xs={12} md={3} className={styles.card}>
                  <CardContent>
                  <div className="e-card-image">
                       <img src={dm} style={{width: "300px", height: "200px", overflow: "hidden"}} alt=""/>
                      <Typography variant="h6" color="primary" gutterBottom style={{color:"#000000"}}>Why Digital Marketing is important?</Typography>
                      <Typography variant="body1" color="textSecondary" gutterBottom >Using digital marketing, you can reach an enormous audience in a way that is both cost-effective and measurable. It provides ability to reach a global marketplace</Typography>
                      <Button variant="contained" style={{marginTop:"1rem",backgroundColor:" #ffcc00", color:"#ffffff", borderRadius:"50px"}}>Read More</Button>
                   </div>
                  </CardContent>
                </Grid>
                <Grid item component ={Card} xs={12} md={3} className={styles.card}>
                  <CardContent>
                  <div className="e-card-image">
                       <img src={seo} style={{width: "280px", height: "200px", overflow: "hidden", display: "center"}} alt=""/>
                      <Typography variant="h6" color="primary" gutterBottom style={{color:"#000000"}}>What is SEO and How it Works?</Typography>
                      <Typography variant="body1" color="textSecondary" gutterBottom >SEO stands for search engine optimization. This is the process of optimizing your website to get organic, or un-paid, traffic from the search engine results page.</Typography>
                      <Button variant="contained"style={{backgroundColor:"  #ffcc00", color:"#ffffff", borderRadius:"50px"}}>Read More</Button>
                    </div> 
                  </CardContent>
                </Grid>
                <Grid item component ={Card} xs={12} md={3} className={styles.card}>
                  <CardContent>
                  <div className="e-card-image">
                       <img src={sm} style={{width: "260px", height: "200px", overflow: "hidden"}} alt=""/>
                      <Typography variant="h6" color="primary" gutterBottom style={{color:"#000000"}}>Top 10 Tools for Social Media Management</Typography>
                      <Typography variant="body1" color="textSecondary" gutterBottom >The social media landscape of businesses is evolving rapidly since Covid-19 came on the scene in December 2019.</Typography>
                      <Button variant="contained" style={{marginTop:"1rem",backgroundColor:" #ffcc00", color:"#ffffff", borderRadius:"50px"}}>Read More</Button>
                     </div>
                    </CardContent>
                </Grid>
            </Grid>
            </div>
        </div>
    )
}
export default Body3