import React from "react";
import WorkIcon from "@material-ui/icons/Work";
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import Typed from "react-typed";
import Grid from '@material-ui/core/Grid';
import testronic from "../testronic.ico";
import ace from "../logo.ico";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import npr from "../nprlogo.jpeg";
import wut from "../wutlogo.png";

 
class Experience extends React.Component {
   
    render() {
       
        return(
            

            <section className="experience_section" >
                
                <Grid container className="section" >
                   

                {/* //Work and Experience section  */}
                <Grid item xs={12} className="work_column" spacing={24}>
                <Grid container className="title_container">
                        <Grid item className='section_title'>
                            <span></span>
                            <h2 className="experiencetitle" ><WorkIcon/>Work Exeperience</h2>
                        </Grid>
                        </Grid>
                    <Grid container>
                        <Grid item sm={12} md={12}>
                                <Timeline align="alternate">
                                    {/*Timeline Item for Testronic Experience */}
                                    <TimelineItem>
                                        <TimelineOppositeContent>
                                            <Typography variant="h5" style={{color:"#090561"}}>
                                               <Typed className="typed-text1"
                                               strings = {[" Testronics Sp.Zoo"]}
                                               typeSpeed ={40}
                                               backSpeed = {80}
                                               loop
                                               ></Typed>
                                            </Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            
                                               <img src={testronic} style={{height :"6vh"}}></img>
                                           
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Paper elevation={5} className="paper">
                                                <Typography variant={"h6"} component="h1">
                                                    QA Tester from June 2017 - July 2018
                                                </Typography>
                                                <Typography variant="body1" style={{color: "blue"}}>
                                                    Works in Space Junkkies, Angry Birds, League of Legends
                                                </Typography>
                                                <Typography>
                                                    Experience in Consoloe, Xbox, PS and Mobile Game Testing
                                                </Typography>
                                            </Paper>
                                        </TimelineContent>
                                    </TimelineItem>

                                         {/*Timeline Item for ACE Experience */}
                                    <TimelineItem>
                                        <TimelineOppositeContent>
                                            <Typography variant="h5" style={{color:"#090561"}}>
                                           
                                               <Typed className="typed-text1"
                                               strings = {[" ACE Services and Solutions"]}
                                               typeSpeed ={60}
                                               backSpeed = {20}
                                               loop
                                               ></Typed>
                                            </Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            
                                               <img src={ace} style={{height :"9vh"}}></img>
                                           
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Paper elevation={4} className="paper">
                                                <Typography variant={"h6"} component="h1">
                                                   Web Developer From October 2017 - Present
                                                </Typography>
                                                <Typography variant="body1" style={{color: "blue"}}>
                                                    Works in PHP, Javascript, HTML, CSS and Query
                                                </Typography>
                                                <Typography>
                                                   Works in Malaysian client(Leiya Wellness) and Algebra Consultants Website
                                                </Typography>
                                                <Typography>
                                                    Having Skills in PHP, React, HTML, CSS and jQuery
                                                </Typography>
                                            </Paper>
                                        </TimelineContent>
                                    </TimelineItem>
                                </Timeline>
                       
                    </Grid>
                </Grid>
                </Grid>

<TimelineSeparator/>

                   

              
                 </Grid>
                 <Grid container className="section1">

                           {/* //Educational Qualification section  */}
                <Grid item xs={12} className="education_column">
                <Grid container className="title_container">
                        <Grid item className='section_title'>
                            <span></span>
                            <h2 className="experiencetitle"><ImportContactsIcon/>Educational Qualification</h2>
                        </Grid>
                        </Grid>
                    <Grid container>
                        <Grid item sm={12} md={12}>
                                <Timeline align="alternate">
                                    {/*Timeline Item for Testronic Experience */}
                                    <TimelineItem>
                                        <TimelineOppositeContent>
                                            <Typography  variant="h5" style={{color:"#090561"}}>
                                                
                                              <Typed className="typed-text1"
                                               strings = {["NPR College", "Of Engineering", "And Technology"]}
                                               typeSpeed ={60}
                                               backSpeed = {30}
                                               loop
                                               ></Typed> 
                                            </Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            
                                               <img src={npr } style={{height :"6vh"}}></img>
                                           
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Paper elevation={5} className="paper">
                                                <Typography variant={"h6"} component="h1">
                                                    QA Tester from June 2017 - July 2018
                                                </Typography>
                                                <Typography variant="body1" style={{color: "blue"}}>
                                                    Works in Space Junkkies, Angry Birds, League of Legends
                                                </Typography>
                                                <Typography>
                                                    Experience in Consoloe, Xbox, PS and Mobile Game Testing
                                                </Typography>
                                            </Paper>
                                        </TimelineContent>
                                    </TimelineItem>

                                         {/*Timeline Item for ACE Experience */}
                                    <TimelineItem>
                                        <TimelineOppositeContent>
                                            <Typography  variant="h5" style={{color:"#090561"}}>
                                            <Typed className="typed-text1"
                                               strings = {["Warsaw", "University", "of Technology"]}
                                               typeSpeed ={60}
                                               backSpeed = {30}
                                               loop
                                               ></Typed>
                                            </Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            
                                               <img src={wut} style={{height :"9vh"}}></img>
                                           
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Paper elevation={4} className="paper">
                                                <Typography variant={"h6"} component="h1">
                                                   Web Developer From October 2017 - Present
                                                </Typography>
                                                <Typography variant="body2" style={{color: "blue"}}>
                                                    Works in PHP, Javascript, HTML, CSS and jQuery
                                                </Typography>
                                                <Typography>
                                                   Works in Malaysian client(Leiya Wellness) and Algebra Consultants Website
                                                </Typography>
                                                <Typography>
                                                    Having Skills in PHP, React, HTML, CSS and jQuery
                                                </Typography>
                                            </Paper>
                                        </TimelineContent>
                                    </TimelineItem>
                                </Timeline>
                       
                    </Grid>
                </Grid>
                </Grid>


                 </Grid>
                </section>
        )
    }
}
export default Experience;