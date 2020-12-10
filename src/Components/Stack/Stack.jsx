import React from "react";
import styled from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

const Div = styled.div`
  /* border: 3px solid black; */
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  flex-flow: column wrap;
  h1 {
    font-family: montserrat, sans-serif;
    font-size: 36px;
  }
  img {
    max-width: 100px;
    padding: 10px;
    margin: 20px;
    max-height: 100px;
    transition: transform 250ms ease-out;
  }

  img:hover {
    transform: scale(1.05);
    transition: transform 250ms ease-in;
    cursor: pointer;
  }
  /* margin-top: 50px; */
  .card {
    /* box-shadow: 2px 2px 2px 2px #999; */
    /* margin: 20px 100px 20px 100px; */
    margin: 0 auto;
    padding: 20px;
    margin-top: 100px;
  }
`;

function Stack() {
  const classes = useStyles();

  return (
    <Div className="stack">
      <div className="card">
        <h1>Technologies I Use:</h1> <br />
        <Tooltip title="HTML5">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/html5-41-1175209.png"
            alt="HTML"
          />
        </Tooltip>
        <Tooltip title="CSS3 (Cascading Style Sheets)">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/730px-CSS.3.svg.png"
            alt="CSS"
          />
        </Tooltip>
        <Tooltip title="JavaScript">
          <img
            src="https://www.devexhub.com/wp-content/uploads/2019/12/javascript-icon-png-23.png"
            alt="JavaScript"
          />
        </Tooltip>
        <br />
        <Tooltip title="React.js">
          <img
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            alt="React"
          />
        </Tooltip>
        <Tooltip title="Ruby">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Ruby_logo.png"
            alt="ruby"
          />
        </Tooltip>
        <Tooltip title="Ruby on Rails">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png"
            alt="Rails"
          />
        </Tooltip>
        <br />
        <Tooltip title="PostgreSQL">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
            alt="postgresql"
          />
        </Tooltip>
        <Tooltip title="MongoDB">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/mongodb-3-1175138.png"
            alt="mongodb"
          />
        </Tooltip>
        <Tooltip title="Node.js">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
            alt="node"
          />
        </Tooltip>
        <br />
      </div>
    </Div>
  );
}

export default Stack;
