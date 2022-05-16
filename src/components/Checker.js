import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import Form from './Form';

const useStyles = makeStyles(theme => ({
  spinner: {
    color: 'crimson',
  },
  title: {
    textAlign: 'center',
  },
  container: {
    margin: '5rem 0 15rem 0',
  },
}));

const Checker = ({
  handlePostSubmit,
}) => {

  const classes = useStyles();
  const handleSubmit = (t1, t2, dir, sel) => {
    handlePostSubmit(t1, t2, dir, sel)
  }

  return (
    <Grid container direction="row" className={classes.container}>
      <Grid 
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item >
              <Typography
                variant="h2"
                className={classes.title}
              >
                Please set your search first
              </Typography>
              <Typography
                variant="body1"
                className={classes.body}
              >
                Select strings that you want to search for and starting directory
              </Typography>
            </Grid>
            <Grid item container justifyContent="center">
              <Grid
                item
                container
                alignItems="center"
                justifyContent="center"
                direction="column"
                className={classes.form}
              >
                <Form
                  handleSubmit={handleSubmit}
                  type
                  disabled
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Checker;

    