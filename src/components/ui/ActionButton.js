import React from "react";
 import Button from "@material-ui/core/Button";
 import { Icon, makeStyles } from "@material-ui/core";
 
 const useStyles = makeStyles(theme => ({
  action: {
    ...theme.typography.action,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },  
  actionText: {
    marginRight: '10px',
  },
 }));

 const ActionButton = ({
   height,
   width,
   bRadius,
   fontSize,
   marginRight,
   marginLeft,
   iconClass,
   variant,
   type,
   disabled,
   onClick,
   buttonText,
   bold,
 }) => {

  const classes = useStyles(bold);
  return (
  <Button
    variant={variant}
    className={classes.action}
    endIcon={iconClass ? <Icon className={iconClass}/> : null}
    style={{ height:height, width: width, borderRadius: bRadius, fontSize: fontSize, marginRight: marginRight, marginLeft: marginLeft, }}
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    <span className={classes.actionText} styles={{ fontWeight: bold}}>{buttonText}</span>
  </Button>
  );
 }
 
 export default ActionButton;
 