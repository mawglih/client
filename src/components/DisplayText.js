import React, { useState, useEffect } from 'react'
import Typography  from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

}));

const DisplayText = ({
  data,
}) => {
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
  })
  return (
    <>
      <Grid container alignItems='center' direction='column'>
        <Grid item>
          {name && <Typography variant='h2'>Hello, dear {name}</Typography>}
        </Grid>
        <Grid item>
          {email && <Typography variant='body1'>I will not send you message to {email}</Typography>}
        </Grid>
        <Grid item>
          {phone && <Typography variant='h3'>Nobody will be calling you on your phone # {phone} at 2 am</Typography>}
        </Grid>
        <Grid item>
          {ssc && <Typography variant='h4'>Of course, your {ssc} can help me to resolve some issues</Typography>}
        </Grid>
        <Grid item>
          {dl && <Typography variant='body1'>With your driver license # {dl} it will become absolutely easy</Typography>}
        </Grid>
        <Grid item>
          {address && <Typography variant='h4'>Your home at  {address} will not be taken by the bank.</Typography>}
        </Grid>
        <Grid item>
          {income && <Typography variant='h3'>We understand that you daily fo to {income}.</Typography>}
        </Grid>
        <Grid item>
          {income && <Typography variant='h3'>Your bank info is not needed - you should press CHECKER menu right away!.</Typography>}
        </Grid>
      </Grid>
      
      
    </>
  )
}

export default DisplayText;
