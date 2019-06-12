import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { TextInput, CustomizeForm } from './CustomInputs';
import {required, email} from './Validation';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  }
}));

function App() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: 'nguyenvana',
    address: 'Hanoi'
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div className="App">
      <CustomizeForm className={classes.container} autoComplete="off">
        <TextInput
          label="Email"
          value={values.email}
          onChange={handleChange('email')}
          name='email'
          validations={[required, email]}
        />

        <TextInput
          label="Address"
          value={values.address}
          onChange={handleChange('address')}
          name='address'
          validations={[required]}
        />
      </CustomizeForm>
    </div>
  );
}

export default App;
