import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import Video from '../Dialogs/Video';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    maxWidth: 400,
    minWidth: 400,
    margin: '20px',
    [theme.breakpoints.down('sm')]: {
      width: 370,
      maxWidth: 370,
      minWidth: 370,
      margin: '20px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '70vw',
      maxWidth: '70vw',
      minWidth: '70vw',
      margin: '10px',
    },
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    textAlign: 'center',
    zIndex: '0',
  },

  media: {
    height: 0,
    minWidth: 320,
    maxWidth: 320,
    margin: '0 auto',
    paddingTop: '100%', // 16:9
  },

  techContainer: {
    objectFit: 'contain',
    maxWidth: '100%',
    alignItems: 'center',
    maxHeight: '100%',
    display: 'flex',
    textAlign: 'left',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
  },
  techContainer2: {
    maxWidth: '100%',
    alignItems: 'center',
    maxHeight: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    textAlign: 'left',
  },
  div: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    listStyle: 'inherit',
    textAlign: 'left',
    color: 'black',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  techUsed: {
    fontWeight: 'bold',
    textAlign: 'left',
  },
  UL: {
    fontFamily: 'Roboto',
    margin: '10px',
  },
  LI: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

function Project(props) {
  const classes = useStyles(props);
  const [expanded, setExpanded] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);

  const handleVideoOpen = () => {
    setOpenVideo(true);
  };

  const handleVideoClose = () => {
    setOpenVideo(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <project-card>
        <CardHeader
          className="project-title"
          title={<p className="project-title">{props.name}</p>}
          subheader={props.date}
        />
        <picture className="thumbnail">
          <img src={props.projectImage} alt={props.name} />
        </picture>
        <CardContent className="project-description">
          <Typography variant="body2" color="textPrimary" component="p">
            {props.description}
          </Typography>
        </CardContent>
        <footer className="actions">
          <Button variant="text" size="small" color="link">
            <a
              style={{ textDecoration: 'none', color: 'black' }}
              rel="noreferrer"
              target="_blank"
              href={props.github}>
              GitHub Repo
            </a>
          </Button>
          <Button variant="text" size="small" color="link">
            <a
              style={{ textDecoration: 'none', color: 'black' }}
              rel="noreferrer"
              target="_blank"
              href={props.website}>
              Live Website
            </a>
          </Button>
          {props.video && (
            <Button
              variant="text"
              size="small"
              color="link"
              onClick={handleVideoOpen}>
              Video Walkthrough
            </Button>
          )}
        </footer>
        <CardActions disableSpacing className={classes.techUsed}>
          <Typography
            style={{ fontFamily: 'Roboto, Sans-Serif', fontWeight: 'bold' }}>
            More:
          </Typography>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more">
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent className={classes.techContainer}>
            <Typography className={classes.techUsed}>Tech Used:</Typography>
            <br />
            {
              <Typography
                className={classes}
                text={props.techName1}
                alt="tech used">
                <ul style={{ color: 'black', listStyle: 'disc' }}>
                  {props.techName1 && <li>{props.techName1} </li>}
                  {props.techName2 && <li>{props.techName2}</li>}
                  {props.techName3 && <li>{props.techName3}</li>}
                  {props.techName4 && <li>{props.techName4} </li>}
                </ul>
              </Typography>
            }
            <br />
            {props.name === 'Root' && (
              <>
                <br />
                <Typography className={classes.techUsed}>The Team:</Typography>
                <br />
                <Typography className={classes.techUsed}>
                  Developers:
                </Typography>
                <ul
                  className={classes.UL}
                  style={{ color: 'black', listStyle: 'disc' }}>
                  <li className={classes.LI}>
                    <a
                      href="https://www.linkedin.com/in/daniel-michael-718825155/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: 'none', color: 'black' }}>
                      Daniel Michael
                    </a>
                  </li>
                  <br />
                  <li className={classes.LI}>
                    <a
                      href="https://www.linkedin.com/in/eddie-didonato/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: 'none', color: 'black' }}>
                      Eddie Didonato
                    </a>
                  </li>
                  <br />
                  <li className={classes.LI}>
                    <a
                      href="https://www.linkedin.com/in/allisonquiroz/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: 'none', color: 'black' }}>
                      Allison Quiroz
                    </a>
                  </li>
                  <br />
                  <li className={classes.LI}>
                    <a
                      href="https://www.linkedin.com/in/nathan-wigen-6337121b0/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: 'none', color: 'black' }}>
                      Nathan Wigen
                    </a>
                  </li>
                  <br />
                </ul>
                <Typography className={classes.techUsed}>
                  UX/UI Designers:
                </Typography>
                <ul
                  className={classes.UL}
                  style={{ color: 'black', listStyle: 'disc' }}>
                  <li className={classes.LI}>
                    <a
                      href="https://www.claudiazacharias.com/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: 'none', color: 'black' }}>
                      Claudia Zacharias
                    </a>
                  </li>
                  <br />
                  <li className={classes.LI}>
                    <a
                      href="https://www.linkedin.com/in/toni-marie-brown-b44b7696/"
                      target="_blank"
                      style={{ textDecoration: 'none', color: 'black' }}
                      rel="noreferrer">
                      Toni Brown
                    </a>
                  </li>
                  <br />
                  <li className={classes.LI}>
                    <a
                      href="https://www.linkedin.com/in/kendallkessler/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: 'none', color: 'black' }}>
                      Kendall Kessler
                    </a>
                  </li>
                  <br />
                  <li className={classes.LI}>
                    <a
                      href="https://www.linkedin.com/in/erica-cleary/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: 'none', color: 'black' }}>
                      Erica Cleary
                    </a>
                  </li>
                  <br />
                </ul>
              </>
            )}
            {props.name === 'Care' && (
              <>
                <br />
                <Typography className={classes.techUsed}>
                  Test Account:
                </Typography>
                <ul
                  className={classes.UL}
                  style={{ color: 'black', listStyle: 'disc' }}>
                  <li className={classes.LI}>Email: test@email.com</li>
                  <li className={classes.LI}>Password: 12345678</li>
                </ul>
              </>
            )}
            {props.name === 'Challenge.me' && (
              <>
                <br />
                <Typography className={classes.techUsed}>The Team:</Typography>
                <br />
                <Typography className={classes.techUsed}>
                  Developers:
                </Typography>
                <ul
                  className={classes.UL}
                  style={{ color: 'black', listStyle: 'disc' }}>
                  <li className={classes.LI}>
                    <a
                      href="https://www.linkedin.com/in/daniel-michael-718825155/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: 'none', color: 'black' }}>
                      Daniel Michael
                    </a>
                  </li>
                  <br />
                  <li className={classes.LI}>
                    <a
                      href="https://www.linkedin.com/in/kristina-timkova/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: 'none', color: 'black' }}>
                      Kristina Timkova
                    </a>
                  </li>
                  <br />
                </ul>
                <Typography className={classes.techUsed}>
                  UX/UI Designers:
                </Typography>
                <ul
                  className={classes.UL}
                  style={{ color: 'black', listStyle: 'disc' }}>
                  <li className={classes.LI}>
                    <a
                      href="https://www.linkedin.com/in/phoenix-ehmann/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: 'none', color: 'black' }}>
                      Phoenix Ehmann
                    </a>
                  </li>
                  <br />
                  <li className={classes.LI}>
                    <a
                      href="https://www.linkedin.com/in/k-alarcon/"
                      target="_blank"
                      style={{ textDecoration: 'none', color: 'black' }}
                      rel="noreferrer">
                      Karen Alarcon
                    </a>
                  </li>
                  <br />
                </ul>
                <Typography className={classes.techUsed}>
                  Data Scientist:
                </Typography>
                <ul
                  className={classes.UL}
                  style={{ color: 'black', listStyle: 'disc' }}>
                  <li className={classes.LI}>
                    <a
                      href="https://www.linkedin.com/in/cristinasahoo/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: 'none', color: 'black' }}>
                      Cristina Sahoo
                    </a>
                  </li>
                </ul>
              </>
            )}
          </CardContent>
        </Collapse>
      </project-card>

      <Video
        video={props.video}
        handleOpen={handleVideoOpen}
        handleClose={handleVideoClose}
        openVideo={openVideo}
        name={props.name}
      />
    </>
  );
}
export default Project;
