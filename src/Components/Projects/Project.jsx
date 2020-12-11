import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
// import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    maxWidth: 400,
    minWidth: 400,
    margin: "20px",
    [theme.breakpoints.down("sm")]: {
      width: 370,
      maxWidth: 370,
      minWidth: 370,
      margin: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "70vw",
      maxWidth: "70vw",
      minWidth: "70vw",
      margin: "10px",
    },
    display: "flex",
    height: "100%",
    flexDirection: "column",
    textAlign: "center",
    zIndex: "0",
  },
  media: {
    height: 0,
    minWidth: 320,
    maxWidth: 320,
    margin: "0 auto",
    paddingTop: "52.62%", // 16:9
  },
  techContainer: {
    objectFit: "contain",
    maxWidth: "100%",
    alignItems: "center",
    maxHeight: "100%",
    display: "flex",
    textAlign: "left",
    flexFlow: "column nowrap",
    justifyContent: "flex-start",
  },
  techContainer2: {
    maxWidth: "100%",
    alignItems: "center",
    maxHeight: "100%",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    textAlign: "left",
  },
  div: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
    listStyle: "inherit",
    textAlign: "left",
    color: "black",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  techUsed: {
    fontWeight: "bold",
    textAlign: "left",
  },
}));

function Project(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card style={{ backgroundSize: "cover" }} className={classes.root}>
        {/* <Link to={`/projects/${props.project.id}`}> */}
        <CardHeader title={props.name} subheader={props.date} />
        <CardMedia
          className={classes.media}
          image={props.projectImage}
          alt={props.name}
        />

        {/* </Link> */}
        <CardContent>
          <Typography variant="body2" color="textPrimary" component="p">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="text" size="small" color="link">
            <a
              style={{ textDecoration: "none", color: "black" }}
              rel="noreferrer"
              target="_blank"
              href={props.github}
            >
              GitHub Repo
            </a>
          </Button>
          <Button variant="text" size="small" color="link">
            <a
              style={{ textDecoration: "none", color: "black" }}
              rel="noreferrer"
              target="_blank"
              href={props.website}
            >
              Live Website
            </a>
          </Button>
        </CardActions>
        <CardActions disableSpacing className={classes.techUsed}>
          Tech Used:
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent className={classes.techContainer}>
            {
              // <div className={classes.div}>
              <Typography
                className={classes}
                text={props.techName1}
                alt="tech used"
              >
                <ul style={{ color: "black", listStyle: "inherit" }}>
                  {props.techName1 && <li>{props.techName1} </li>}
                  {props.techName2 && <li>{props.techName2}</li>}
                  {props.techName3 && <li>{props.techName3}</li>}
                  {props.techName4 && <li>{props.techName4} </li>}
                </ul>
              </Typography>
              // </div>
            }
          </CardContent>
          <CardContent className={classes.techContainer2}></CardContent>
        </Collapse>
      </Card>
    </>
  );
}

export default Project;
