import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import "./Stack.scss";

function Stack() {
  return (
    <section className="language">
      <div className="card">
        <h1>
          <div className="span">S</div>
          <div className="span">k</div>
          <div className="span">i</div>
          <div className="span">l</div>
          <div className="span">l</div>
          <div className="span">s</div>
        </h1>
        <br />
        <br />

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
        <Tooltip title="jQuery">
          <img src="https://logodix.com/logo/941103.png" alt="jQuery" />
        </Tooltip>
        <br />
        <Tooltip title="React.js">
          <img
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            alt="React"
          />
        </Tooltip>
        <Tooltip title="Material UI">
          <img
            src="https://material-ui.com/static/logo.png"
            alt="Material UI"
          />
        </Tooltip>
        <Tooltip title="Styled-Components">
          <img
            src="https://avatars2.githubusercontent.com/u/20658825?s=200&v=4"
            alt="styled components"
          />
        </Tooltip>
        <Tooltip title="Bootstrap">
          <img
            src="https://camo.githubusercontent.com/a664defdd5c2ec93a3fbfb51e0f2aaafa5dc57bf1e13aa47456ced037b3cebe8/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e302f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67"
            alt="Bootstrap"
          />
        </Tooltip>
        <br />

        <br />
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
        <Tooltip title="PostgreSQL">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
            alt="postgresql"
          />
        </Tooltip>
        <Tooltip title="Git">
          <img
            src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
            alt="Git"
          />
        </Tooltip>
        <br />
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
        <Tooltip title="Express">
          <img
            src="https://img2.pngio.com/express-js-png-5-png-image-expressjs-png-800_800.png"
            alt="Express"
          />
        </Tooltip>
        <Tooltip title="Axios">
          <img
            src="https://user-images.githubusercontent.com/8939680/57233882-20344080-6fe5-11e9-9086-d20a955bed59.png"
            alt="Axios"
          />
        </Tooltip>
        <br />
      </div>
    </section>
  );
}

export default Stack;
