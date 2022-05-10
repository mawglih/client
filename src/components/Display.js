import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography  from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  table: {
    border: '1px solid',
  },
}))

const Display = ({
  data,
  title1,
  title2,
}) => {
  const classes = useStyles();
  return (
    <Grid>
      <Grid item container>
        <Grid container>
          <Grid item>
            <Typography variant='h2'>Files that have "{title1}" but do not have "{title2}"</Typography>
            <Typography variant="body1"></Typography>
              <table className={classes.table}>
                <thead>
                  <tr className={classes.table}>
                    <th className={classes.table}>Name of the file</th>
                    <th className={classes.table}>File path</th>
                  </tr>
                </thead>
                <tbody>
                {data?.map(item => {
                  let path = item.slice(5);
                  let fileArr = item.split('/');
                  let fileName = fileArr[fileArr.length - 1];
                  return (
                    <tr className={classes.table}>
                      <td className={classes.table}>{fileName}</td>
                      <td className={classes.table}>{path}</td>
                    </tr>
                  )
                })}
                </tbody>
              </table>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Display;
