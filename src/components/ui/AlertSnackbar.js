import React, {useState} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={12} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  message: {
    textAlign: 'center',
    fontSize: '1.3rem',
  },
  red: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize:'1.5rem',
  },
}));

const AlertSnackbar = ({
  isOpen,
  whatHow,
  term1,
  term2,
  dir,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [how, setHow] = useState('includes')

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  useState(() => {
    if(whatHow === 220 || whatHow === 110) {
      setHow('includes');
    } else {
      setHow('excludes');
    }
    if(isOpen) {
      setOpen(open);
    }
  })

  console.log('whathow', whatHow);
  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" />
      </Snackbar>
      <Alert severity="success" classes={{message: classes.message}}>
        <AlertTitle>Success</AlertTitle>
        You searched for files in   <span className={classes.red}>"{dir}"</span>   that includes string   <span className={classes.red}>"{term1}"</span>   and   <span>{how}</span>   string   <span className={classes.red}>"{term2}"</span>.</Alert>
    </div>
  );
}
export default AlertSnackbar;
