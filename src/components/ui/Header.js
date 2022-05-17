import React from "react";

import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs  from '@material-ui/core/Tabs';
import Tab  from '@material-ui/core/Tab';
import Logo from '../../assets/pic1a.svg';
import { Link, useLocation } from 'react-router-dom';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '2em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '1.5em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1em',
    },
  },
  smallMargin: {
    ...theme.mixins.toolbar,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  logoContainer: {
    height: 60,
    width: 60,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    [theme.breakpoints.down('md')]: {
      height: 40,
      width: 40,
      alignSelf: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      height: 30,
      width: 30,
    },
    '& img': {
      width: '70%',
    },
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      fontSize: '80%',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '60%',
      marginLeft: '10px',
    },
  },
  tabsContainer: {
    marginLeft: 150,
  },
  tab: {
    ...theme.typography.tab,
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginRight: '25px',
    marginLeft: '50px',
    color: 'white',
    fontSize: '1.2rem',
    height: 45,
    width: 145,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  title: {
    marginRight: 50,
    [theme.breakpoints.down('md')]: {
      marginRight: 30,
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: 10,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    marginLeft: 0,
    opacity: .7,
    '&:hover': {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
  },
  drawerContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: ' transparent',
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    marginLeft: 0,
    opacity: .7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    opacity: 1,
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

const Header = ({
  value,
  setValue,
}) => {
  const classes = useStyles();
  
  const [openDrawer, setOpenDrawer] = useState(false);
  
  const theme = useTheme();
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
    
  const handleChange = (e, value) => {
    setValue(value);
  };

  
  const menusOptions = [
    { name: 'Home', link: '/', itemValue: 0, popup: false} ,
    { name: 'Checker', link: '/checker', itemValue: 1, popup: false },
  ];

  useEffect(() => {
    const { pathname } = window.location;
    switch (pathname) {
      case '/':
        if (value !== 0) {
          setValue(0);
        };
        break;
      case '/checker':
        if (value !== 1) {
          setValue(1);
        };
      default:
        break;
    }
  }, [setValue, value]);

  const tabs = (
    <>
      <Tabs value={value} onChange={handleChange} className={classes.tabsContainer}>
        {menusOptions.map(({ name, link, itemValue, mouseover, }) => {
         
            return (
              <Tab
                key={itemValue}
                className={classes.tab}
                component={Link}
                onMouseOver={mouseover}
                to={link}
                label={name}
              />);
            })}
      </Tabs>
    </>
  )

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS} 
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{
          paper: classes.drawer,
        }}
      >
        <List disablePadding>
          {menusOptions.map(({name, link, itemValue},) => {
            return (
              <ListItem 
                key={link}
                component={Link}
                to={link}
                onClick={() => {setOpenDrawer(false); setValue(itemValue);}}
                button
                divider
                selected={value === itemValue}
                classes={{
                  selected: classes.drawerItemSelected,
                }}
              >
                <ListItemText className={classes.drawerItem}>{name}</ListItemText>
              </ListItem>
            )
          })}
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
  const { pathname } = useLocation();
  const override = (pathname === '/checker');
  
  return (
    <>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar disableGutters className={classes.toolbar}>
          <div className={classes.titleContainer}>
            <h2 className={classes.title}>Beutiful App for Everyday Use</h2>
            <div className={classes.logoContainer}>
              <img alt="company logo" src={Logo}/>
            </div>
          </div>
          {mobile ? drawer : tabs}
        </Toolbar>
      </AppBar>
      <div className={override ? classes.toolbarMargin : classes.smallMargin}></div>
    </>
  );
}

export default Header;
