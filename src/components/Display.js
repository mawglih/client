import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography  from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import AlertDialog from './ui/Dialog';

const useStyles = makeStyles(theme => ({
  table: {
    border: '1px solid',
  },
  container: {
    marginTop: '2rem',
  },
  searchButton: {
    marginBottom: '1rem',
  },
  statsContent: {
        marginBottom: '1rem',
  },
  results: {
    padding: '1em',
  },
  btn1: {
    marginBottom: '10px',
  },
}));

const Display = ({
  data,
  title1,
  title2,
  resetSearch,
  dir,
  selector,
}) => {
  const [openDialog, setDialogOpen] = useState(false);
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('md'))
  const classes = useStyles();
  const handleClickOpen = e => {
    setDialogOpen(true);
  }
  const closeDialog = e => {
    e.preventDefault();
    setDialogOpen(false);
  }
  console.log('wwere is data?', data);
  return (
    <Grid>
      <Grid item container className={classes.container} >
        <Grid
          container
          justifyContents='center'
          alignItems={matchesXS ? 'center' : 'flex-start'}
          direction={matchesXS ? 'column-reverse' : 'row'}
          // spacing={2}
          className={classes.statsContent}
        >
          {data?.length > 0 && (
            <>
              <Grid item sm={matchesXS ? 'auto' : 9} className={classes.results}>
                <Typography variant='h2' style={{paddingBottom:'20px'}}>Files that have "{title1}" but do not have "{title2}"</Typography>
                <Typography variant="body2">
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
                        <tr className={classes.table} key={path + Math.random(600)*1000}>
                          <td className={classes.table}>{fileName}</td>
                          <td className={classes.table}>{path}</td>
                        </tr>
                      )
                    })}
                    </tbody>
                  </table>
                </Typography>
              </Grid>
              <Grid item container className={classes.searchButton} sm={matchesXS ? 'auto' : 2} direction="row">
                <Button
                  type="button"
                  onClick={resetSearch}
                  color="primary"
                  variant="contained"
                  fullWidth
                  className={classes.btn1}
                >
                  Reset search results
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleClickOpen}
                  fullWidth
                >
                  Show stats
                </Button>
              </Grid>
              <AlertDialog
                title='Dialog title'
                openDialog={openDialog}
                dir={dir}
                file1={title1}
                file2={title2}
                totalFiles={data?.length}
                setClose={closeDialog}
                selector={selector}
              />
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Display;
