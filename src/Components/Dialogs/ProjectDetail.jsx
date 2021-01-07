import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    marginLeft: 10,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

// code for dialog referenced from Material-ui's docs
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function ProjectDetail(props) {
  return (
    <Dialog
      onClose={props.handleDetailClose}
      aria-labelledby="customized-dialog-title"
      open={props.openDetail}
      id="video-card">
      <DialogTitle
        style={{ minWidth: "200px" }}
        id="customized-dialog-title"
        onClose={props.handleDetailClose}>
        More
      </DialogTitle>
      <DialogContent>
        <Typography className={props.classes.techUsed}>Tech Used:</Typography>
        <br />
        {
          <Typography
            className={props.classes}
            text={props.techName1}
            alt="tech used">
            <ul style={{ color: "black", listStyle: "disc" }}>
              {props.techName1 && <li>{props.techName1} </li>}
              {props.techName2 && <li>{props.techName2}</li>}
              {props.techName3 && <li>{props.techName3}</li>}
              {props.techName4 && <li>{props.techName4} </li>}
            </ul>
          </Typography>
        }
        <br />
        {props.name === "Root" && (
          <>
            <br />
            <Typography className={props.classes.techUsed}>
              The Team:
            </Typography>
            <br />
            <Typography className={props.classes.techUsed}>
              Developers:
            </Typography>
            <ul
              className={props.classes.UL}
              style={{ color: "black", listStyle: "disc" }}>
              <li className={props.classes.LI}>
                <a
                  href="https://www.linkedin.com/in/daniel-michael-718825155/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "black" }}>
                  Daniel Michael
                </a>
              </li>
              <br />
              <li className={props.classes.LI}>
                <a
                  href="https://www.linkedin.com/in/eddie-didonato/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "black" }}>
                  Eddie Didonato
                </a>
              </li>
              <br />
              <li className={props.classes.LI}>
                <a
                  href="https://www.linkedin.com/in/allisonquiroz/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "black" }}>
                  Allison Quiroz
                </a>
              </li>
              <br />
              <li className={props.classes.LI}>
                <a
                  href="https://www.linkedin.com/in/nathan-wigen-6337121b0/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "black" }}>
                  Nathan Wigen
                </a>
              </li>
              <br />
            </ul>
            <Typography className={props.classes.techUsed}>
              UX/UI Designers:
            </Typography>
            <ul
              className={props.classes.UL}
              style={{ color: "black", listStyle: "disc" }}>
              <li className={props.classes.LI}>
                <a
                  href="https://www.claudiazacharias.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "black" }}>
                  Claudia Zacharias
                </a>
              </li>
              <br />
              <li className={props.classes.LI}>
                <a
                  href="https://www.linkedin.com/in/toni-marie-brown-b44b7696/"
                  target="_blank"
                  style={{ textDecoration: "none", color: "black" }}
                  rel="noreferrer">
                  Toni Brown
                </a>
              </li>
              <br />
              <li className={props.classes.LI}>
                <a
                  href="https://www.linkedin.com/in/kendallkessler/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "black" }}>
                  Kendall Kessler
                </a>
              </li>
              <br />
              <li className={props.classes.LI}>
                <a
                  href="https://www.linkedin.com/in/erica-cleary/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "black" }}>
                  Erica Cleary
                </a>
              </li>
              <br />
            </ul>
          </>
        )}
        {props.name === "Care" && (
          <>
            <br />
            <Typography className={props.classes.techUsed}>
              Test Account:
            </Typography>
            <ul
              className={props.classes.UL}
              style={{ color: "black", listStyle: "disc" }}>
              <li className={props.classes.LI}>Email: test@email.com</li>
              <li className={props.classes.LI}>Password: 12345678</li>
            </ul>
          </>
        )}
        {props.name === "Challenge.me" && (
          <>
            <br />
            <Typography className={props.classes.techUsed}>
              The Team:
            </Typography>
            <br />
            <Typography className={props.classes.techUsed}>
              Developers:
            </Typography>
            <ul
              className={props.classes.UL}
              style={{ color: "black", listStyle: "disc" }}>
              <li className={props.classes.LI}>
                <a
                  href="https://www.linkedin.com/in/daniel-michael-718825155/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "black" }}>
                  Daniel Michael
                </a>
              </li>
              <br />
              <li className={props.classes.LI}>
                <a
                  href="https://www.linkedin.com/in/kristina-timkova/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "black" }}>
                  Kristina Timkova
                </a>
              </li>
              <br />
            </ul>
            <Typography className={props.classes.techUsed}>
              UX/UI Designers:
            </Typography>
            <ul
              className={props.classes.UL}
              style={{ color: "black", listStyle: "disc" }}>
              <li className={props.classes.LI}>
                <a
                  href="https://www.linkedin.com/in/phoenix-ehmann/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "black" }}>
                  Phoenix Ehmann
                </a>
              </li>
              <br />
              <li className={props.classes.LI}>
                <a
                  href="https://www.linkedin.com/in/k-alarcon/"
                  target="_blank"
                  style={{ textDecoration: "none", color: "black" }}
                  rel="noreferrer">
                  Karen Alarcon
                </a>
              </li>
              <br />
            </ul>
            <Typography className={props.classes.techUsed}>
              Data Scientist:
            </Typography>
            <ul
              className={props.classes.UL}
              style={{ color: "black", listStyle: "disc" }}>
              <li className={props.classes.LI}>
                <a
                  href="https://www.linkedin.com/in/cristinasahoo/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "black" }}>
                  Cristina Sahoo
                </a>
              </li>
            </ul>
          </>
        )}
      </DialogContent>
      <DialogActions
        style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={props.handleDetailClose}>
          Exit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
