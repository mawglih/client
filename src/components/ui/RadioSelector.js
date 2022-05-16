import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  label: {
    fontSize: '.8rem',
  },
}));

const RadioSelector = ({
  handleSelection,
}) => {
  const [val, setVal] = useState('2');
  const classes = useStyles();
  const handleChange = (e) => {
    const {value} = e.target;
    setVal(value);
    handleSelection(val);
  };

  console.log('radio', val);
  return (
    <FormControl margin='dense' size='small' fullWidth className={classes.radioContainer}>
      <FormLabel component="legend" >Select search type</FormLabel>
      <RadioGroup aria-label="search" name="search1" value={val} onChange={handleChange}>
        <FormControlLabel value='1' classes={{label: classes.label,}} control={<Radio />} label="Including second string" />
        <FormControlLabel value='2' classes={{label: classes.label,}} control={<Radio />} label="Excluding second string" />
      </RadioGroup>
    </FormControl>
  );
}

export default RadioSelector;
