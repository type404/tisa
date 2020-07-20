import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Computer from "@material-ui/icons/Computer";
import School from "@material-ui/icons/School";
import Work from "@material-ui/icons/Work";
import Hand from "@material-ui/icons/PanTool";
import Achievements from "@material-ui/icons/Star";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/tisa.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div>
      <Header
        color="transparent"
        brand="Tisa Majumder"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>
                      Hey! I'm Tisa! <h6>Pronounced: /Tisha/</h6>
                    </h3>
                    <h5>SOFTWARE DEVELOPER</h5>
                    <h6>
                      <a
                        href="public\Tisa Majumder_Resume.pdf"
                        className={classes.block}
                        target="_blank"
                        download
                      >
                        Download my Resume
                      </a>
                    </h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                I'm a recent Masters in IT graduate with a Bachelor's degree in
                Economics. I have worked with Java, R, .Net Framework in my
                degree. Currently working on improving my React skills by
                working on a MERN stack application.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Uni Projects",
                      tabIcon: School,
                      tabContent: (
                        <span>
                          <p>
                            <a href="https://github.com/type404/Android-Calorie-Tracker-App">
                              {" "}
                              Android App
                            </a>
                            <List>
                              <ListItem>
                                The application makes server side calls to
                                RESTful Webservices, the code for the server
                                side is not included in this project repo. It
                                makes use of Public Web APIs like Google Custom
                                Search as well as Food API to fetch and display
                                information about the food item searched. The
                                daily steps are stored in SQLite Database in the
                                application. The application also displays the
                                location of the user as well as parks in a 5 km
                                radius around him on the map screen. The reports
                                genrated is displayed in the form of bar graph
                                and pie chart which makes use of PhilJay
                                library.
                              </ListItem>
                            </List>
                          </p>

                          <p>
                            <a href="https://github.com/type404/Android-Calorie-Tracker-App">
                              {" "}
                              ASP .NET MVC Application
                            </a>

                            <List>
                              <ListItem>
                                A web application using C# ASP .NET MVC and MS
                                SQL Database created using database first
                                approach which has CRUD authentication, an
                                external API authentication, makes use of MAP
                                API and has features like Captcha, bulk emails.
                              </ListItem>
                            </List>
                          </p>
                          <br />
                        </span>
                      ),
                    },
                    {
                      tabButton: "Work Experience",
                      tabIcon: Work,
                      tabContent: (
                        <span>
                          <p>
                            <Box fontWeight="fontWeightBold">
                              Mantel Group: Software Engineer Intern
                              <br />
                              Feb'20-Mar'20
                            </Box>

                            <List component="nav">
                              <ListItem>
                                Worked on Backend of an Internal Project working
                                with PostgreSQL, ExpressJS in NodeJS to create
                                APIs and React in the frontend to interact with
                                the APIs.
                              </ListItem>
                              <ListItem>
                                Worked in a team following Agile methodology,
                                with regular standups, and had an experience
                                with backlog grooming and retrospective after a
                                sprint.
                              </ListItem>
                            </List>
                          </p>
                          <br />
                          <p>
                            <Box fontWeight="fontWeightBold">
                              Ernst & Young: Risk Analyst
                              <br />
                              Jul'16-Nov'17
                            </Box>

                            <List component="nav">
                              <ListItem>
                                Analyzed and tested internal controls created to
                                mitigate risks of various client companies.
                              </ListItem>
                              <ListItem>
                                Handled dealership audit at automobile industry
                                as a new team member with minimum guidance and
                                communicate with clients independently to
                                discuss the challenges faced during audits and
                                explained them the areas of improvement.
                              </ListItem>
                              <ListItem>
                                Travelled to Dubai with Senior Consultant and
                                got a chance to work collaboratively with teams
                                from across different locations
                              </ListItem>
                              <ListItem>
                                Quickly learnt to use the different client
                                software required for different projects through
                                the available documentation and even helped
                                other team members to understand and navigate
                                around the technical aspect of different
                                software
                              </ListItem>
                            </List>
                          </p>
                          <br />
                        </span>
                      ),
                    },
                    {
                      tabButton: "Currently Working On",
                      tabIcon: Computer,
                      tabContent: (
                        <span>
                          <p>
                            <a href="https://github.com/type404/">
                              {" "}
                              MERN Application
                            </a>
                            <br />
                            <List component="nav">
                              <ListItem>
                                A frontend React application using MongoDB and
                                NodeJS in the backend, to prepare a directory
                                using local business open datasets for
                                Melbourne.
                              </ListItem>
                            </List>
                          </p>
                          <br />
                          <p>
                            <a href="https://www.instagram.com/p/CCNj_kOA66N/?utm_source=ig_web_copy_link">
                              {" "}
                              Insta Tech Blogging
                            </a>
                            <br />
                            <List>
                              <ListItem>
                                Blogging on Instagram about my technical journey
                                and sharing technical concepts that I find
                                interesting, in a way that is easy to understand
                                especially in the areas of information security.
                              </ListItem>
                            </List>
                          </p>
                          <br />
                        </span>
                      ),
                    },
                    {
                      tabButton: "Achievements",
                      tabIcon: Achievements,
                      tabContent: (
                        <span>
                          <p>
                            <List component="nav">
                              <Box fontWeight="fontWeightBold">
                                Monash University
                              </Box>
                              <ListItem>
                                Awarded scholarship to attend inaugural Hopper
                                Down Under'19 conference in Brisbane by Monash
                                Faculty of IT.
                              </ListItem>
                              <ListItem>
                                Secured third position as a team in a CTF
                                organized by MonashSec.
                              </ListItem>
                              <Box fontWeight="fontWeightBold">
                                Ernst & Young
                              </Box>
                              <ListItem>
                                Awarded extra-miler in May’17 and Nov’17 for
                                coming up with effective ideas that benefits the
                                team at EY.
                              </ListItem>
                              <ListItem>
                                Awarded a rating of 4/5 (exceeding expectations)
                                in the annual performance cycle.
                              </ListItem>
                            </List>
                          </p>
                        </span>
                      ),
                    },
                    {
                      tabButton: "Volunteer",
                      tabIcon: Hand,
                      tabContent: (
                        <span>
                          <p>
                            <Box fontWeight="fontWeightBold">
                              VIC ICT for Women - Grad Girls
                            </Box>
                            <List component="nav">
                              <ListItem>
                                Organize and help with admin work for online
                                events and study social media posts to curate
                                hashtags for posts in different platforms.
                              </ListItem>
                            </List>
                          </p>
                          <p>
                            <Box fontWeight="fontWeightBold">
                              Robogals Monash
                            </Box>
                            <List component="nav">
                              <ListItem>
                                Assist in running the robogals event organized
                                by different companies and schools to encourage
                                students to explore the field of STEM.
                              </ListItem>
                              <ListItem>
                                Interact with students and explain them through
                                robots’ basic concepts of programming in a
                                simple and interesting manner.
                              </ListItem>
                            </List>
                          </p>
                          <p>
                            <Box fontWeight="fontWeightBold">
                              O-Week Monash University
                            </Box>
                            <List component="nav">
                              <ListItem>
                                Lead a group of new students to familiarize them
                                with the university and the course and assissted
                                in organisation of social events by the faculty.
                              </ListItem>
                            </List>
                          </p>
                          <p>
                            <Box fontWeight="fontWeightBold">
                              Red Cross, Elsternwick
                            </Box>
                            <List component="nav">
                              <ListItem>
                                Assist in arranging and keeping the store area
                                presentable and helping the manager as required
                                and interacting with the customers to guide them
                                and help them around the store and completing
                                the checkout process.
                              </ListItem>
                            </List>
                          </p>
                          <br />
                        </span>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
