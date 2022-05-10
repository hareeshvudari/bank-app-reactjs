import React from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import './register.css';

import axios from 'axios';
import Alert from '@mui/material/Alert';

function Register() {

  const [registeruser, setRegisterUser] = React.useState({
    firstName: "",
    lastName: "",
    userName: "",
    accountNumber: "",
    password: "",
    sixDigitPin: 0
      })
      const [isRegistered, setIsRegistered] = React.useState(false);
    
      const setInputValue = e => setRegisterUser(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    
    
      const registerUser = () =>{    
        console.log('registeruser', registeruser);
        if(registeruser){
          axios.post('https://62567b2f52d8738c692f698e.mockapi.io/register', registeruser)
          .then(response => {
            console.log('response', response.data);
            if(response.data && response.statusText == "Created"){
              setIsRegistered(true);
            } else{
              setIsRegistered(false)
            }
          });
        }

      }

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center"
      className='signup-bg'>
      <Grid item xs={10} md={6} lg={4}>
        <Card variant="outlined" className='card-main card-bs'>
          <Typography variant="h5" mb={2} component="div">
            Customer Registration
          </Typography>
          <TextField name='firstName' onChange={setInputValue} InputLabelProps={{ style: { fontSize: 13, lineHeight: 1.9 } }} fullWidth className='text-field' size='small' label="First Name" />
          <TextField name='lastName' onChange={setInputValue} InputLabelProps={{ style: { fontSize: 13, lineHeight: 1.9 } }} fullWidth className='text-field' size='small' label="Last Name" />
          <TextField name='userName' onChange={setInputValue} InputLabelProps={{ style: { fontSize: 13, lineHeight: 1.9 } }} fullWidth className='text-field' size='small' label="User Name" />
          <TextField name='accountNumber' onChange={setInputValue} InputLabelProps={{ style: { fontSize: 13, lineHeight: 1.9 } }} fullWidth className='text-field' size='small' label="Account Number" />
          <TextField name='password' onChange={setInputValue} type='password' InputLabelProps={{ style: { fontSize: 13, lineHeight: 1.9 } }} fullWidth className='text-field' size='small' label="Password" />
          <TextField mb={3} name='sixDigitPin' onChange={setInputValue} type='password' InputLabelProps={{ style: { fontSize: 13, lineHeight: 1.9 } }} fullWidth size='small' label="Six Digit Pin" />
        
       
          <Button onClick={registerUser} fullWidth className='filled-primary' variant="contained" >
            Submit
          </Button>
          <Typography variant="p" mb={2} component="div">
            Do you have account ? <Link href="/login">Login</Link>
          </Typography>
        </Card>
        { isRegistered && <Alert severity="success">Registered Successfully. Please <Link href="/login">Login</Link></Alert>}
      </Grid>
    
    </Grid>

  );
}

export default Register;
