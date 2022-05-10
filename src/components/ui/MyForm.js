import React, { useEffect, useState } from "react";
import { makeStyles }from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ActionButton from './ActionButton';

const useStyles = makeStyles(theme => ({
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: '2em',
    borderRadius: '5px',
  },
  button: {
    marginTop: '1em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '1em',
    },
  },
}));

const MyForm = ({
  handleChange,
  label,
  buttonText,
  handleCounter,
  val,
  counter,
}) => {
  const classes = useStyles();
  const [value, setValue] = useState({});
  const onValueChange = e => {
    const { id, value } = e.target;
    handleChange(id,value);
  };

  const handleSubmit = e => {
    handleCounter(e);
    setValue({[label]: ''});
  };

  useEffect(() => {
    setValue(val.label);
    return () => setValue({[label]: ''});
  }, [value])

  return (
    <form onSubmit={handleSubmit}>
      <Grid item>
        <TextField
          label={label}
          id={label}
          fullWidth
          value={val.label}
          onChange={onValueChange}
        />
      </Grid>
      <Grid item>
        <ActionButton
          buttonText={buttonText}
          variant="outlined"
          height={100}
          width={300}
          bold='bold'
          type="submit"
        />
      </Grid>
    </form>
  );
};

export default MyForm;
