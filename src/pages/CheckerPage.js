import React, { useState } from "react";
import Checker from "../components/Checker";
import Display from "../components/Display";
import { query2 } from "../api";
import {BallTriangle} from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Button, Typography } from "@material-ui/core";
import AlertSnackbar from "../components/ui/AlertSnackbar";

const useStyles = makeStyles(theme => ({
  loader: {
    minHeight: '80vh',
  },
  button: {
    marginTop: '1rem',
  },
}));

const CheckerPage = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState('#48d1cc');
  const [titles, setTitles] = useState({title1: '', title2: '', dir: '', sel: 0});
  const [error, setError] = useState('');
  const [status, setStatus] = useState(null);
  const classes = useStyles();
  // let res = {};
  // const handleGetSubmit = async (t1, t2, param) => {
  //   setLoading(true);
  //   setColor('#90ee90');
  //   res = await query2(t1, t2, param);
  //   setResult(res);
  //   setLoading(false);
  // }

  const handleLoading = flag => {
    if (flag) {
      setLoading(true);
      setColor('#ff0090');
    } else {
      setLoading(false);
      setColor('#48d1cc');
    }
  };
    const handleSearchReset = e => {
    e.preventDefault();
    setResult([]);
    // setTitles({title1: '', title2: '', dir: '', sel: 0});
    handleLoading(false);
    setStatus(null);
  };

  const handlePostSubmit = async (term1, term2, searchDir, selector) => {
    handleLoading(true);
    setTitles({title1: term1, title2: term2, dir: searchDir, sel: selector});
    const res = await query2(term1, term2, searchDir, selector);
    if(res.status === 200) {
      setResult(res.data.data);
      console.log(res.data.message);
      handleLoading(false);
    } else {
      console.log(res);
      handleLoading(false);
      setError(`Error occured, status: ${res.status}`);
      setStatus(res.status);
      // handleSearchReset();
    }
  };


  console.log('titles', titles);
  console.log('result in page', result);
  console.log('result length', result.length);
  console.log('loading is', loading);
  console.log('color is', color);
  console.log('my status', status);

  return (
    <div>
      {(result.length === 0 && !loading && status === 400) && (
        <Grid container justifyContent='center' alignItems="center" className={classes.loader}>
          <Grid item>
            <Typography variant="h2">Search did not succeeded</Typography>
            <Button
              onClick={handleSearchReset}
              className={classes.button}
              color="primary"
              variant="contained"
              fullWidth
            >
              Reset search
            </Button>
          </Grid>
        </Grid>
      )}
      {(result.length === 0 && !loading && status === null) && (
        <Checker
          // handleGetSubmit={handleGetSubmit}
          handlePostSubmit={handlePostSubmit}
          res={result}
        />
      )}
      {result.length > 0 &&
       (
          <Display
            data={result}
            title1={titles.title1}
            title2={titles.title2}
            dir={titles.dir}
            loading={loading}
            color={color}
            resetSearch={handleSearchReset}
            selector={titles.sel}
          />
        )
      }
      {loading && (
        <>
          <Grid container justifyContent='center' className={classes.loader}>
            <Grid item>
              <BallTriangle color={color} height={500} width={500}/>
            </Grid>
          </Grid>
          <AlertSnackbar
            term1={titles.title1}
            term2={titles.title2}
            dir={titles.dir}
            isOpen={loading}
            whatHow={titles.sel}
          />
        </>

        )
      }
    </div>
  );
};

export default CheckerPage;
