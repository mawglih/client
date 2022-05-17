import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Typography  from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  white: {
    color: 'white',
    textAlign: 'center',
  },
  brown: {
    color: 'brown',
  },
  yellow: {
    color: 'yellow',
  },
}));

const DisplayText = ({
  data,
}) => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] =useState('');
  const [ssc, setSsc] = useState('');
  const [dl, setDl] = useState('');
  const [address, setAddress] = useState('');
  const [income, setIncome] = useState('');
  const [bank, setBank] = useState('');

  useEffect(() => {
    if (data.name.length > 0){
      setName(data.name);
    }
    if(data.email.length > 0) {
      setEmail(data.email);
    }
    if(data.phone.length > 0) {
      setPhone(data.phone);
    }
    if (data.ssc.length > 0) {
      setSsc(data.ssc);
    }
    if(data.dl.length > 0) {
      setDl(data.dl);
    }
    if(data.address.length > 0) {
      setAddress(data.address);
    }
    if(data.income.length > 0) {
      setIncome(data.income);
    }
    if(data.bank.length > 0) {
      setBank(data.bank);
    }
  }, [data])
  return (
    <>
      <Grid container alignItems='center' direction='column' className={income ? classes.white : null} spacing={4}>
        <Grid item>
          {name && <Typography className={income? classes.white : ssc ? null : classes.white} variant='h2'>Hello, dear {name}</Typography>}
        </Grid>
        <Grid item>
          {email && <Typography variant='body1' className={address? classes.white : null}>I will not send you message to {email}</Typography>}
        </Grid>
        <Grid item>
          {phone && <Typography className={income? classes.yellow : ssc? classes.brown : classes.white} variant='h3'>Nobody will be calling you on your phone # {phone} at 2 am</Typography>}
        </Grid>
        <Grid item>
          {ssc && <Typography variant='h4' className={address? classes.white : null}>Of course, your knowledge of your social security # {ssc} can help me to resolve some issues</Typography>}
        </Grid>
        <Grid item>
          {dl && <Typography variant='body1'>With your driver license # {dl} it will become absolutely easy.</Typography>}
        </Grid>
        <Grid item>
          {address && <Typography variant='h4' className={address? classes.white : null}>Your home at {address} will not be taken by the bank.</Typography>}
        </Grid>
        <Grid item>
          {income && <Typography variant='h3' className={income ? classes.white : none}>We understand that you daily go to {income} to get your paychek.</Typography>}
        </Grid>
        <Grid item>
          {income && <Typography variant='h3' className={income ? classes.white : none}>Your bank info is not needed, as well as other answers. <br /><br/> <span className={classes.yellow}>You should click <Button color='secondary' variant='contained' size='large' component={Link} to='/checker'>CHECKER</Button> menu in the beginning!</span></Typography>}
        </Grid>
      </Grid>
    </>
  )
}

export default DisplayText;
