import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import {Rank1, Rank2, Rank3, Rank4, Rank5, Rank6, Rank7, Rank8, Rank9, Rank10} from '../../images/ranks/Ranks';

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient(95deg, rgba(54,53,153,1) 0%, rgba(165,63,117,1) 50%, rgba(210,161,55,1) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
      'linear-gradient(95deg, rgba(54,53,153,1) 0%, rgba(165,63,117,1) 50%, rgba(210,161,55,1) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
    'linear-gradient(95deg, rgba(54,53,153,1) 0%, rgba(165,63,117,1) 50%, rgba(210,161,55,1) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
    'linear-gradient(95deg, rgba(54,53,153,1) 0%, rgba(165,63,117,1) 50%, rgba(210,161,55,1) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <Rank1/>,
    2: <Rank2/>,
    3: <Rank3/>,
    4: <Rank4/>,
    5: <Rank5/>,
    6: <Rank6/>,
    7: <Rank7/>,
    8: <Rank8/>,
    9: <Rank9/>,
    10: <Rank10/>,
  };

  return (
    <div style={{padding: '0.5rem', fill: '#ffffff'}}
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
      },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));




const RankStepper = (props) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [ranks, setRanks] = useState([]);

  
  useEffect( () => {
    getRanks();
    setActiveStep(props.activeRank-1);
            
  }, [])

  const getRanks = () => {
    axios
    .get("http://localhost:8080/api/user/get-available-ranks")
    .then(res => {
        setRanks(res.data);
        setIsLoading(false);        
    })
    .catch(e => {
        console.log(e);
    })
  }



  if (isLoading) return (<div>Loading..</div>)
  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {ranks.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}


export default RankStepper;