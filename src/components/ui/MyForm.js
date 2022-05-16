import React, { useEffect, useState, useRef } from "react";
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
  clear,
  disabled,
  txtHelper,
  autofocus,
}) => {
  const classes = useStyles();
  const [value, setValue] = useState({});
  const ref = useRef(null);
  const onValueChange = e => {
    const { id, value } = e.target;
    handleChange(id,value);
  };

  const empty = true;

  const handleSubmit = e => {
    handleCounter(e);
    clear(e);
    ref.current.value = '';
  };

  useEffect(() => {
    setValue(val.label);
    return () => setValue({[val.label]: ''});
  }, [value])

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Grid item>
        <TextField
          label={label}
          id={label}
          fullWidth
          value={val.label}
          onChange={onValueChange}
          margin='normal'
          variant="outlined"
          color="primary"
          inputRef={ref}
          error={txtHelper.length > 0}
          helperText={txtHelper}
          autoFocus={autofocus}
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
          disabled={disabled && empty}
        />
      </Grid>
    </form>
  );
};

export default MyForm;
