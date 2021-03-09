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
            

            <section className="experience_section" id="section">
                
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
                                                <div className="wavecontainer">
                                               <div className="wavetext">
                                                   <span style={{"--i": "1"}}>T</span>
                                                   <span style={{"--i": "2"}}>e</span>
                                                   <span style={{"--i": "3"}}>s</span>
                                                   <span style={{"--i": "4"}}>t</span>
                                                   <span style={{"--i": "5"}}>r</span>
                                                   <span style={{"--i": "6"}}>o</span>
                                                   <span style={{"--i": "7"}}>n</span>
                                                   <span style={{"--i": "8"}}>i</span>
                                                   <span style={{"--i": "9"}}>c</span>
                                                   <span style={{"--i": "10"}}>S</span>
                                                   <span style={{"--i": "11"}}>p</span>
                                                   <span style={{"--i": "12"}}>.</span>
                                                   <span style={{"--i": "13"}}>Z</span>
                                                   <span style={{"--i": "14"}}>o</span>
                                                   <span style={{"--i": "15"}}>o</span>


                                               </div>
                                               </div>
                                            </Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            
                                               <img src={testronic} style={{height :"6vh"}}></img>
                                           
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Paper elevation={2} className="paper">
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
                                           
                                            <div className="wavecontainer">
                                               <div className="wavetext">
                                                   <span style={{"--i": "1"}}>A</span>
                                                   <span style={{"--i": "2"}}>C</span>
                                                   <span style={{"--i": "3"}}>E</span>
                                                   <span style={{"--i": "4"}}>S</span>
                                                   <span style={{"--i": "5"}}>e</span>
                                                   <span style={{"--i": "6"}}>r</span>
                                                   <span style={{"--i": "7"}}>v</span>
                                                   <span style={{"--i": "8"}}>i</span>
                                                   <span style={{"--i": "9"}}>c</span>
                                                   <span style={{"--i": "10"}}>e</span>
                                                   <span style={{"--i": "11"}}>s</span>
                                                   <span style={{"--i": "12"}}>A</span>
                                                   <span style={{"--i": "13"}}>n</span>
                                                   <span style={{"--i": "14"}}>d</span>
                                                   <span style={{"--i": "15"}}>S</span>
                                                   <span style={{"--i": "16"}}>o</span>
                                                   <span style={{"--i": "17"}}>l</span>
                                                   <span style={{"--i": "18"}}>u</span>
                                                   <span style={{"--i": "19"}}>t</span>
                                                   <span style={{"--i": "20"}}>i</span>
                                                   <span style={{"--i": "21"}}>o</span>
                                                   <span style={{"--i": "22"}}>n</span>
                                                   <span style={{"--i": "23"}}>s</span>


                                               </div>
                                               </div>
                                            </Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            
                                               <img src={ace} style={{height :"9vh"}}></img>
                                           
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Paper elevation={2} className="paper">
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
                                                
                                            <div className="wavecontainer">
                                               <div className="wavetext">
                                                   <span style={{"--i": "1"}}>N</span>
                                                   <span style={{"--i": "2"}}>P</span>
                                                   <span style={{"--i": "3"}}>R</span>
                                                   <span style={{"--i": "4"}}>C</span>
                                                   <span style={{"--i": "5"}}>o</span>
                                                   <span style={{"--i": "6"}}>l</span>
                                                   <span style={{"--i": "7"}}>l</span>
                                                   <span style={{"--i": "8"}}>e</span>
                                                   <span style={{"--i": "9"}}>g</span>
                                                   <span style={{"--i": "10"}}>e</span>
                                                   <span style={{"--i": "11"}}>O</span>
                                                   <span style={{"--i": "12"}}>f</span>
                                                   <span style={{"--i": "13"}}>E</span>
                                                   <span style={{"--i": "14"}}>n</span>
                                                   <span style={{"--i": "15"}}>g</span>
                                                   <span style={{"--i": "16"}}>i</span>
                                                   <span style={{"--i": "17"}}>n</span>
                                                   <span style={{"--i": "18"}}>e</span>
                                                   <span style={{"--i": "19"}}>e</span>
                                                   <span style={{"--i": "20"}}>r</span>
                                                   <span style={{"--i": "21"}}>i</span>
                                                   <span style={{"--i": "22"}}>n</span>
                                                   <span style={{"--i": "23"}}>g</span>
                                                   <span style={{"--i": "24"}}>A</span>
                                                   <span style={{"--i": "25"}}>n</span>
                                                   <span style={{"--i": "26"}}>d</span>
                                                   <span style={{"--i": "27"}}>T</span>
                                                   <span style={{"--i": "28"}}>e</span>
                                                   <span style={{"--i": "29"}}>c</span>
                                                   <span style={{"--i": "30"}}>h</span>
                                                   <span style={{"--i": "31"}}>n</span>
                                                   <span style={{"--i": "32"}}>o</span>
                                                   <span style={{"--i": "33"}}>l</span>
                                                   <span style={{"--i": "34"}}>o</span>
                                                   <span style={{"--i": "35"}}>g</span>
                                                   <span style={{"--i": "36"}}>y</span>


                                               </div>
                                               </div>
                                            </Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            
                                               <img src={npr } style={{height :"6vh"}}></img>
                                           
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Paper elevation={2} className="paper">
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
                                            <div className="wavecontainer">
                                               <div className="wavetext">
                                                   <span style={{"--i": "1"}}>W</span>
                                                   <span style={{"--i": "2"}}>a</span>
                                                   <span style={{"--i": "3"}}>r</span>
                                                   <span style={{"--i": "4"}}>s</span>
                                                   <span style={{"--i": "5"}}>a</span>
                                                   <span style={{"--i": "6"}}>w</span>
                                                   <span style={{"--i": "7"}}>U</span>
                                                   <span style={{"--i": "8"}}>n</span>
                                                   <span style={{"--i": "9"}}>i</span>
                                                   <span style={{"--i": "10"}}>v</span>
                                                   <span style={{"--i": "11"}}>e</span>
                                                   <span style={{"--i": "12"}}>r</span>
                                                   <span style={{"--i": "13"}}>s</span>
                                                   <span style={{"--i": "14"}}>i</span>
                                                   <span style={{"--i": "15"}}>t</span>
                                                   <span style={{"--i": "16"}}>y</span>
                                                   <span style={{"--i": "17"}}>O</span>
                                                   <span style={{"--i": "18"}}>f</span>
                                                   <span style={{"--i": "19"}}>T</span>
                                                   <span style={{"--i": "20"}}>e</span>
                                                   <span style={{"--i": "21"}}>c</span>
                                                   <span style={{"--i": "22"}}>h</span>
                                                   <span style={{"--i": "23"}}>n</span>
                                                   <span style={{"--i": "24"}}>o</span>
                                                   <span style={{"--i": "25"}}>l</span>
                                                   <span style={{"--i": "26"}}>o</span>
                                                   <span style={{"--i": "27"}}>g</span>
                                                   <span style={{"--i": "28"}}>y</span>
                                                   

                                               </div>
                                               </div>
                                            </Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            
                                               <img src={wut} style={{height :"9vh"}}></img>
                                           
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Paper elevation={2} className="paper">
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