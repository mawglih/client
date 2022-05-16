import React from "react";
import { makeStyles } from "@material-ui/core";
import {  aboutOptions, allOptions } from "../constants";
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    height: '15em',
    padding: 0,
    [theme.breakpoints.down('md')]: {
      height: '10em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '7em',
    },
  },
  adorn: {
    height: '100%',
    width: '50%',
    backgroundColor: 'black',
    // zIndex: -1,
    transform: 'perspective(10px) rotateX(-1deg) translate(-20%, 25px)',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      transform: 'perspective(10px) rotateX(-1deg) translate(-20%, 10px)',
    },
    [theme.breakpoints.down('xs')]: {
      transform: 'perspective(10px) rotateX(-1deg) translate(-20%, 5px)',
    },
  },
  gridContainer: {
    position: 'absolute',
    zIndex: 2,
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '.75rem',
    fontWeight: 'bold',
    lineHeight: '2rem',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '4rem',
  },
}));

const Footer = ({
  value,
  setValue,
  selectedIndex,
  setSelectedIndex,
}) => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Hidden mdDown>
        <Grid container justifyContent="center" className={classes.gridContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={5}>
              <Grid
                onClick={(e) => setValue(0)}
                className={classes.link}
                component={Link}
                to='/'
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={5}>
              {allOptions?.map(({ name, link, selectedIndex }, index) => (
                <Grid
                  className={classes.link}
                  key={`${link}${index}`}
                  component={Link}
                  selected={index === selectedIndex}
                  to={link}
                  onClick={() => {setValue(1); setSelectedIndex(selectedIndex);}}
                >
                  {name}
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={5}>
              {aboutOptions?.map(({ name, link, value }, index) => (
                <Grid
                  className={classes.link}
                  key={`${link}${index}`}
                  component={Link}
                  to={link}
                  onClick={() => setValue(value)}
                >
                  {name}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={5}>
              <Grid
                className={classes.link}
                component={Link}
                to='/contact'
                onClick={() => setValue(4)}
              >
                Contact us
              </Grid>
              <Grid
                className={classes.link}
                component={Link}
                to='/checked'
                onClick={() => setValue(1)}
              >
                Contact us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <div className={classes.adorn}/>
    </footer>
  )
};

export default Footer;
