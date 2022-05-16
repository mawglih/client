import { makeStyles }from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import RadioSelector from './ui/RadioSelector';
import FilterSwitch from './ui/FilterSwitch';


const handleChange = e => {

}
const useStyles = makeStyles(theme => ({
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: '2em',
    borderRadius: '5px',
  },
  button: {
    ...theme.typography.action,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 60,
    width: 245,
    marginTop: '1em',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },     
  estimateText: {
    marginRight: '10px',
    fontSize: '.8em',
    color: 'white',
  },
}));

const Form = ({
  handleSubmit,
  type,
}) => {
  const classes = useStyles();

  const [term1, setTerm1] = useState('');
  const [term2, setTerm2] = useState('');
  const [dir, setDir] = useState('');
  const [selection, setSelection] = useState('2')
  const [selection2, setSelection2] = useState('10')
  const onValueChange = e => {
    const { id, value } = e.target;
    switch(id) {
      case 'term1': 
        setTerm1(value);
        break;
      case 'term2': 
        setTerm2(value);
        break;
      case 'dir':
        setDir(value);
        break;
      default:
        break;
    };
  }

  const handleSelection = val => {
    setSelection(val);
  }

  const handleSelection2 = val => {
    setSelection2(val);
  }

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log('selection', selection);
    console.log('selection2', selection2);
    let sel = selection + selection2;
    console.log('total selected', sel);
    handleSubmit(term1, term2, dir, sel);
    setTerm1('');
    setTerm2('');
    setDir('');
    setSelection(2);
    setSelection2(10);
  }
  // useEffect(() => {
  //   setTerm1(Term1);
  //   setTerm2(Term2);
  //   setDir(Dir);
  // }, [Term1, Term2, Dir])

  console.log('selection in form', selection);
  console.log('selection2 in form', selection2);

  return (
    <form onSubmit={handleFormSubmit}>
      <Grid item>
        <TextField
          label="First search term"
          id="term1"
          fullWidth
          value={term1}
          onChange={onValueChange}
        />
      </Grid>
      <Grid item>
        <RadioSelector
          handleSelection={handleSelection}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Second search term"
          id="term2"
          fullWidth
          value={term2}
          onChange={onValueChange}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Directory relative path from application"
          fullWidth
          id="dir"
          value={dir}
          onChange={onValueChange}
        />
        <FilterSwitch
          handleFilter={handleSelection2}
          value={selection2}
        />
      </Grid>
      <Grid item>
        <Button
          variant='outlined'
          className={classes.button}
          endIcon={<Icon className='fa fa-plane-departure' style={{color: 'white'}}/>}
          type="submit"
        >
          <span className={classes.estimateText}>Start your search</span>
        </Button>
      </Grid>
    </form>
  );
};

export default Form;
