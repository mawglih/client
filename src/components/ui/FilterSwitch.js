import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const FilterSwitch = ({
  handleFilter,
}) => {
  const [val, setVal] = useState(true);
  const [num, setNum] = useState('10')

  const handleChange = () => {
    if(val) {
      setNum('20');
    } else {
      setNum('10');
    }
    handleFilter(num);
    setVal(!val);
  };
  console.log('the val in sw', val);
  console.log('the num in sw', num);


  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={val}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Remove test directories"
      />
    </FormGroup>
  );
}

export default FilterSwitch;
