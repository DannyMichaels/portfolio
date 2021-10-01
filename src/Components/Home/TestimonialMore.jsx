import styled from 'styled-components';
import withStyles from '@material-ui/styles/withStyles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
// logos
import HtmlLogo from '../../assets/images/tech_skills/html.png';
import CSSLogo from '../../assets/images/tech_skills/css3.png';
import JavaScriptLogo from '../../assets/images/tech_skills/javascript.png';
import JQueryLogo from '../../assets/images/tech_skills/jQuery.png';

import ReactLogo from '../../assets/images/tech_skills/react.png';
import MuiLogo from '../../assets/images/tech_skills/Mui.png';
import StyledComponentsLogo from '../../assets/images/tech_skills/styled-components.png';
import BootstrapLogo from '../../assets/images/tech_skills/bootstrap.png';

import RubyLogo from '../../assets/images/tech_skills/ruby.png';
import RubyOnRailsLogo from '../../assets/images/tech_skills/ruby-on-rails.png';
import PostgresLogo from '../../assets/images/tech_skills/postgresql.png';
import GitLogo from '../../assets/images/tech_skills/git.png';

import MongoDBLogo from '../../assets/images/tech_skills/mongodb.png';
import NodeLogo from '../../assets/images/tech_skills/node.png';
import ExpressLogo from '../../assets/images/tech_skills/express.png';
import AxiosLogo from '../../assets/images/tech_skills/axios.png';
import { Tooltip } from '@material-ui/core';

const SCSSLogo = 'https://miro.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png';

const IMAGES = {
  'Ruby on Rails': RubyOnRailsLogo,
  Ruby: RubyLogo,
  PostgreSQL: PostgresLogo,
  React: ReactLogo,
  HTML: HtmlLogo,
  JavaScript: JavaScriptLogo,
  jQuery: JQueryLogo,
  SCSS: SCSSLogo,
  CSS: CSSLogo,
  Bootstrap: BootstrapLogo,
  'Material UI': MuiLogo,
  'styled-components': StyledComponentsLogo,
  Axios: AxiosLogo,
  Git: GitLogo,
};

export default function TestimonialMore({ testimonial, open, onClose }) {
  const {
    fields: {
      content,
      date,
      rating,
      company,
      person,
      image,
      jobDescription,
      techStack,
    },
  } = testimonial;

  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      id="video-card">
      <DialogTitle
        style={{ minWidth: '200px' }}
        id="customized-dialog-title"
        onClose={onClose}>
        Job Description: {jobDescription}
      </DialogTitle>

      <StyledDialogContent dividers>
        <Typography variant="h6">Tech Used:</Typography>

        <div className="skills-list">
          {techStack.split(',').map((techSkill) => {
            let trimmedTechSkillName = techSkill.trim();

            return (
              <Tooltip title={trimmedTechSkillName} placement="top" arrow>
                <img src={IMAGES[trimmedTechSkillName]} alt={techSkill} />
              </Tooltip>
            );
          })}
        </div>
      </StyledDialogContent>

      <DialogActions
        style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Button variant="contained" color="primary" onClick={onClose}>
          Exit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const StyledDialogContent = styled(DialogContent)`
  .skills-list {
    max-height: 280px;
    min-height: 250px;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 30px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media (max-width: 600px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    img {
      object-fit: contain;
      max-width: 100px;
      min-width: 100px;
      padding: 20px;
      margin: 20px;
      max-height: 100px;
      height: 100px;
      border-radius: 36px;
      min-height: 100px;
      width: 100%;
      height: auto;
      background: #fff;
      cursor: help;
      border: 1px solid #000;
    }
  }
`;

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    marginLeft: 10,
  },
  closeButton: {
    position: 'absolute',
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
