import React, { useEffect, useState } from 'react';
import {search, query} from '../api';
import Display from './Display';
import Grid from '@material-ui/core/Grid';
import {BallTriangle} from 'react-loader-spinner';
import { makeStyles } from '@material-ui/core';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const useStyles = makeStyles(theme => ({
  spinner: {
    color: 'crimson',
  },
}));

function App() {
  const [data, getData] = useState([]);
  const [term1, setTerm1] = useState('');
  const [term2, setTerm2] = useState('');
  const [color, setColor] = useState('#48d1cc');
  const [loading, setLoading] = useState(false);
  let url = 'http://localhost:8999/'
  const searchDir = '../../mbp-pwa-ui/src';
  const classes = useStyles();

  const handleClick1 = async () => {
    setLoading(true);
    setColor('#90ee90');
    const res = await search(`${url}styles`);
    getData(res.data);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setColor('#90ee90');
    const res = await query(`${url}query`, term1, term2, searchDir);
    getData(res.data);
    setTerm1('');
    setTerm2('');
  }

  useEffect(() => {
    if(data.length > 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [data]);

  return (
    <div className="App">
        <h1>Here is the checker</h1>
        <div>
          <button onClick={handleClick1}>Check without terms</button>
        </div>
        <hr />
        <div>
          <form onSubmit={handleSubmit}>
            <label id="term1">Files that contain a string
              <input htmlFor="term1" value={term1} onChange={(e) => setTerm1(e.target.value)}/>
            </label>
            <label id="term2">Exclude files with string
              <input htmlFor="term2" value={term2} onChange={(e) => setTerm2(e.target.value)}/>
            </label>
            <button type='submit'>Check with terms</button>
          </form>       
        </div>

        <Grid container justifyContent='center'>
          <Grid item container>
            {data?.length > 0 && !loading ? <Display data={data} title1={term1} title2={term2}/> : (
            <Grid container justifyContent='center'>
              <Grid item>
                <BallTriangle color={color} height={500} width={500}/>
              </Grid>
            </Grid>
            )}
          </Grid>
        </Grid>
    </div>
  );
}

export default App;