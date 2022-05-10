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
  // background: ({backgroundImg}) => ({
  //   backgroundImage: backgroundImg ? `url(${backgroundImg})` : `url(${infoBkg1})`,
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   height: '60em',
  // }),
  bkgImage: {
    // backgroundImage: ({image}) => `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
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

  const onValueChange = (id, value) => {
    setVal({[id]: value});
  }

  const navigte = useNavigate();

  const handleCounter = e => {
    e.preventDefault();
    setCounter(counter + 1);
    setBackground(bkgs[counter+1]);
    setFieldname(fieldName[counter+1]);
    setButtonText(btnTxt[counter+1]);
    setData(prev => ({...prev, ...val}));
    setVal({fieldname: ''});
    if(counter === 7) {
      setCounter(0);
      setBackground(bkgs[0]);
      navigte('/checker')
    }
  }

  // useEffect(() => {
  //   setBackground(bkgs[counter]);
  // }, [counter]);

  console.log('backImage', backgroundImg);
  console.log('counter', counter);
  console.log('bkg', bkgs[counter]);
  console.log('val', val);
  console.log('fieldname', fieldname);
  console.log('data', data);

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
            />
          </Grid>

        </Grid>
      </Grid>
      {matchesMd ? null : (
      <Grid
        item
        container
        lg={9}
        // className={classes.bkgImage}
        style={{
          backgroundImage: `url(${backgroundImg}`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '60em',
        }}
      >
        {/* <CallToActions /> */}
        {/* <CurrentImage image={backgroundImg} /> */}
        <h1>Here we go</h1>
      </Grid>
      )}
    </Grid>
  );
};

export default HomePage;
