import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  highlight: {
    color: 'darkred',
    fontWeight: 'bolder',
  },
  test: {
    fontWeight:'bold',
    color: theme.palette.common.blue,
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    color: theme.palette.common.blue,
  },
}))

const AlertDialog =({
  openDialog,
  file1,
  file2,
  dir,
  totalFiles,
  setClose,
  selector,
}) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState({file1: '', file2: '', dir: ''})
  const classes = useStyles();
  const [include, setInclude] = useState('does not include');
  const [testDir, setTestdir] = useState('Test directories are not included!');
  const handleClose = e => {
    setOpen(false);
    setClose(e);
  };
  useEffect(()=> {
    setOpen(openDialog);
    setContent({file1, file2, dir})
  }, [openDialog]);

  console.log('selector', selector);

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" classes={{ root: classes.title}}>{"The following search was performed"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
              Search for word <span className={classes.highlight}>{content.file1}</span> in the directory <span className={classes.highlight}>{content.dir}</span>, that {include} <span className={classes.highlight}>{content.file2}</span>. <br/><span className={classes.test}>{testDir} </span><br/>
            
              Total number of files found: <span className={classes.highlight}>{totalFiles}</span>.
            
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Dismiss
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialog;
