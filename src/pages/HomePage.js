import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme }from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import infoBkg1 from '../assets/bkg-guard-beach.png';
import infoBkg2 from '../assets/bkg-broadwalk.png';
import infoBkg3 from '../assets/bkg-mount-view.png';
import infoBkg4 from '../assets/bkg-house-sky.png';
import infoBkg5 from '../assets/bkg-kanal-day.png';
import infoBkg6 from '../assets/bkg-water-dawn.png';
import infoBkg7 from '../assets/bkg-ny-dawn.png';
import infoBkg8 from '../assets/bkg-city-night.png';
import { TextField, useMediaQuery } from "@material-ui/core";
import ActionButton from '../components/ui/ActionButton';
import MyForm from '../components/ui/MyForm';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  title: {
    lineHeight: 2,
  },
  body: {
    color: theme.palette.common.blue,
  },
  icon: {
    color: theme.palette.common.blue,
    padding: '8px 10px 0 2px',
  },
  contacts: {
    marginLeft: '1rem',
  },
  form: {
    padding: '0 1rem 0 1rem',
  },
  fieldname: {
    marginBottom: '1em',
  },
}));

const bkgs = [
  infoBkg1,
  infoBkg2,
  infoBkg3,
  infoBkg4,
  infoBkg5,
  infoBkg6,
  infoBkg7,
  infoBkg8,
];
const btnTxt = ['Proceed slowly', 'You can go to step 2', 'Seriously? Click again', 'Next step', 'Are you Thomas?', 'You are persuasive!', 'I think my AI is blown away', 'Seriuosly you could use menu "Checker" from beginning'];

const mainTitle = ['Enter your name and go', 'What is your email', 'Your phone', 'Enter your social security', 'What\'s you driver license number?', 'Your home address', 'Source of income', 'Enter your bank account infornation', ];
const fieldName = ['name', 'email', 'phone', 'ssc', 'dl', 'address', 'income', 'bank' ];

const HomePage = ({
  handleSubmit,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down('md'));
  const [counter, setCounter] = useState(0);
  const [backgroundImg, setBackground] = useState(infoBkg1);
  const [buttonText, setButtonText] = useState('Proceed slowly');
  const [val, setVal] = useState({});
  const [data, setData] = useState({ name: '', email: '', phone: '', ssc: '', dl: '', address: '', income: '', bank: '', })
  const [fieldname, setFieldname] = useState(fieldName[0]);
  const [txtHelper, setTxtHelper] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [autofocus, setAutofocus] = useState(true);
  const onValueChange = (id, value) => {
    let valid;
    switch(id) {
      case 'name':
        setVal({[id]: value});
        valid = /^\w{2}/.test(value) && value.length > 0;
        if (!valid) {
          setTxtHelper('Name should include only letters and be at least 2 letters long');
        } else {
          setTxtHelper('');
          setDisabled(false);
        }
        break;
      case 'phone':
        setVal(value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value) && value.length > 0;
        if (!valid) {
          setTxtHelper('Invalid phone number');
        } else {
          setTxtHelper('');
          setDisabled(false);
        }
        break;
      case 'email':
        setVal(value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
        if (!valid) {
          setTxtHelper('Invalid email');
        } else {
          setTxtHelper('');
          setDisabled(false);
        }
        break;
      case 'ssc':
        setVal(value);
        valid = /^[0-9]{3}\-?[0-9]{2}\-?[0-9]{4}$/.test(value);
        if (!valid) {
          setTxtHelper('Invalid social security number');
        } else {
          setTxtHelper('');
          setDisabled(false);
        }
        break;
      case 'dl':
        setVal(value);
        valid = /^[0-9a-zA-Z]+$/.test(value) && value.length > 10;
        if (!valid) {
          setTxtHelper('Invalid driver license number');
        } else {
          setTxtHelper('');
          setDisabled(false);
        }
        break;
      case 'address':
        setVal(value);
        valid = value.length > 10;
        if(!valid) {
        setTxtHelper('Address is too short');
        } else {
        setTxtHelper('');
        setDisabled(false);
        }
        break;
      case 'income':
        setVal(value);
        valid = '1-800-flowers';
        if(value === '1800flowers.com' || value === '1-800-flowers' || value === '1800flowers') {
          setTxtHelper('');
          setDisabled(false);
        } else {
          setTxtHelper('Your only income is from 1-800-...');
        }
        break;
      case 'bank':
        setVal(value);
        valid = /^[a-zA-Z\s.]+$/.test(value) && value.length > 5;
        if(!valid) {
          setTxtHelper('Name should be a name, not routing number and long enough. PNC is not a bank, but PNC bank is!');
        } else {
          setTxtHelper('');
          setDisabled(false);
        }
        break;
      default:
        break;
    }
    setVal({[id]: value});
  }

  const navigate = useNavigate();

  const handleCounter = e => {
    setCounter(counter + 1);
    setBackground(bkgs[counter+1]);
    setFieldname(fieldName[counter+1]);
    setButtonText(btnTxt[counter+1]);
    setData(prev => ({...prev, ...val}));
    setDisabled(true);
    setAutofocus(true);
    if(counter === 7) {
      setCounter(0);
      setBackground(bkgs[0]);
      navigate('/checker')
    }
  }

  const clearValue = e => {
    setVal({fieldname: ''});
    e.preventDefault();
  }

  console.log('backImage', backgroundImg);
  console.log('counter', counter);
  console.log('bkg', bkgs[counter]);
  console.log('val', val);
  console.log('fieldname', fieldname);
  console.log('data', data);
  console.log('disabled', disabled);
  console.log('helper text', txtHelper);

  return (
    <Grid container direction="row">
      <Grid 
        item
        container
        direction="column"
        lg={3}
        justifyContent="center"
        alignItems="center"
      >
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <Grid item >
            <Typography variant='h2'>
              {mainTitle[counter]}
            </Typography>   
          </Grid>
          <Grid item className={classes.fieldname}>
            
            <MyForm
              handleChange={onValueChange}
              label={fieldname}
              buttonText={buttonText}
              handleCounter={handleCounter}
              counter={counter}
              val={val}
              clear={clearValue}
              disabled={disabled}
              txtHelper={txtHelper}
              autofocus={autofocus}
            />
          </Grid>

        </Grid>
      </Grid>
      {matchesMd ? null : (
      <Grid
        item
        container
        lg={9}
        style={{
          backgroundImage: `url(${backgroundImg}`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '60em',
        }}
      >
        {/* <CallToActions />   */}
        <h1>Here we go</h1>
      </Grid>
      )}
    </Grid>
  );
};

export default HomePage;
