import { memo } from 'react';
import styled from 'styled-components';
import withStyles from '@material-ui/styles/withStyles';
import { Tooltip } from '@material-ui/core';
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
import ReduxLogo from '../../assets/images/tech_skills/redux.png';
import SCSSLogo from '../../assets/images/tech_skills/SCSS.png';
import VueLogo from '../../assets/images/tech_skills/vue.png';
import GraphqlLogo from '../../assets/images/tech_skills/graphql.png';
import ContentfulLogo from '../../assets/images/tech_skills/contentful.png';
import GatsbyLogo from '../../assets/images/tech_skills/gatsby.png';

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
  Express: ExpressLogo,
  Node: NodeLogo,
  MongoDB: MongoDBLogo,
  Vue: VueLogo,
  Redux: ReduxLogo,
  GraphQL: GraphqlLogo,
  Gatsby: GatsbyLogo,
  Contentful: ContentfulLogo,
};

function TestimonialMore({ testimonial, open, onClose }) {
  const {
    fields: { company, jobDescription, techStack, website },
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

      <StyledDialogContent
        dividers
        style={{ borderBottom: 0, display: 'flex', alignItems: 'center' }}>
        {website ? (
          <Typography variant="h6">
            Company / Client: &nbsp;
            <Tooltip arrow placement="top" title="Visit company website">
              <a
                className="link"
                target="_blank"
                rel="noreferrer"
                href={website}
                alt={company + ' website'}>
                {company}
              </a>
            </Tooltip>
          </Typography>
        ) : (
          <Typography variant="h6">Company / Client: {company}</Typography>
        )}
      </StyledDialogContent>

      <StyledDialogContent dividers>
        <Typography
          variant="h6"
          style={{ marginLeft: '20px', marginBottom: '10px' }}>
          Tech Used:
        </Typography>

        <div className="skills-list">
          {techStack.split(',').map((techSkill, key) => {
            let trimmedTechSkillName = techSkill.trim();

            return (
              <Tooltip
                title={trimmedTechSkillName}
                placement="top"
                arrow
                key={key}>
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
    overflow-y: auto;
    overflow-x: hidden;

    grid-gap: 20px;
    align-items: center;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

    padding: 20px;

    img {
      object-fit: contain;
      min-width: 100px;
      max-height: 100px;
      height: 100px;
      border-radius: 20px;
      min-height: 100px;
      width: 100%;
      height: auto;
      background: #fff;
      cursor: help;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      padding: 10px;
    }
  }

  .link {
    color: #000;
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

export default memo(TestimonialMore);
