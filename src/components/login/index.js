import { React, useState } from 'react';
import Card from '@mui/material/Card';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alert from '@mui/material/Alert';

function Login({ parentisUserAuthCallback }) {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    userName: "",
    accountNumber: "",
    password: "",
    sixDigitPin: 0
  });
  const [passwordValues, setPasswordValue] = useState({  
    password: '',   
    showPassword: false,
  });

  const [userNameError, setUserNameError] = useState(false);
  const [isEnablePINLogin, setIsEnablePINLogin] = useState(false);
  const [enableLogin, setEnableLoginError] = useState(false);


  const userNameChanged = (evt) => {
    const value = evt.target.value;
    if (evt.target.name === 'username' && value.length === 0) {
      setUserNameError(true)
    } else {
      setUserNameError(false)
    }

    setUserDetails({
      ...userDetails,
      [evt.target.name]: value
    });

  }
  const login = () => {
if(userDetails){
  
   let getUsersList =  axios.get('https://62567b2f52d8738c692f698e.mockapi.io/register')
.then(response => {

  console.log('login users', response.data);
let loggedInUserDetails = {};
  if(response.data.length > 0 && userDetails.password != '' && userDetails.username != ''){
    let usersList = response.data;
    loggedInUserDetails = usersList.find(user => user.userName == userDetails.userName && user.password == userDetails.password);
    if(loggedInUserDetails){
      setEnableLoginError(false);
      navigate('/dashboards');
    } else {
      setEnableLoginError(true);
    }
  } else if(response.data.length > 0 && userDetails.accountNumber != '' && userDetails.sixDigitPin > 0){

    let usersList = response.data;
    loggedInUserDetails = usersList.find(user => user.accountNumber == userDetails.accountNumber && user.sixDigitPin == userDetails.sixDigitPin);
    if(loggedInUserDetails){
      setEnableLoginError(false);
      navigate('/dashboards');
    } else {
      setEnableLoginError(true);
    }

  } else {
    setEnableLoginError(true);

  }

});


}
    // if (userDetails && userDetails.username === 'user' && userDetails.password === 'user') {
    //   navigate('/onboarding');
    // } else if (userDetails && userDetails.username === 'admin' && userDetails.password === 'admin') {
    //   navigate('/admin/onboarding');
    // }
  }

  const handleClickShowPassword = () => {
    setPasswordValue({
      ...passwordValues,
      showPassword: !passwordValues.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const enablePINLogin = () =>{
    setIsEnablePINLogin(!isEnablePINLogin);
  }


  return (
    
    <Grid container spacing={{ xs: 2, md: 3 }}   justifyContent="center"
    className='login-bg'>
      <Grid item xs={10} md={6} lg={4}>
        <Card variant="outlined" className='card-main card-bs'>
          <Typography variant="h5" mb={2} component="div">
            Login
          </Typography>
      { enableLogin && <Alert severity="warning">Entered details are not found!!</Alert>}
          {isEnablePINLogin ? <div>
          <TextField onChange={userNameChanged} value={userDetails.accountNumber} error={userNameError} name="accountNumber" InputLabelProps={{ style: { fontSize: 13, lineHeight: 1.9 } }} fullWidth className='text-field' size='small' label="Account Number" />
          <FormControl className='password-textfield'>
          <InputLabel htmlFor="outlined-adornment-password">Six Digit PIN</InputLabel>
          <OutlinedInput           
            type={passwordValues.showPassword ? 'text' : 'password'}
            value={userDetails.sixDigitPin}
            name="sixDigitPin"
            onChange={userNameChanged}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {passwordValues.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            InputLabelProps={{ style: { fontSize: 13, lineHeight: 1.9 } }} fullWidth className='text-field' size='small'
            label="Password"
          />
        </FormControl>
        </div> : <div>
          <TextField onChange={userNameChanged} value={userDetails.username} error={userNameError} name="userName" InputLabelProps={{ style: { fontSize: 13, lineHeight: 1.9 } }} fullWidth className='text-field' size='small' label="Username" />
          <FormControl className='password-textfield'>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput           
            type={passwordValues.showPassword ? 'text' : 'password'}
            value={userDetails.password}
            name="password"
            onChange={userNameChanged}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {passwordValues.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            InputLabelProps={{ style: { fontSize: 13, lineHeight: 1.9 } }} fullWidth className='text-field' size='small'
            label="Password"
          />
        </FormControl>
        </div>}
          <Grid container >
            <Grid mb={2} item xs={12}>
            {isEnablePINLogin ?
            <div> If you want to login with Username and Password <Link href onClick={enablePINLogin} >Click</Link> </div> :  <div> If you want to login with Account and PIN <Link href onClick={enablePINLogin} >Click</Link> </div> }
            </Grid>
           
          </Grid>
          <Button fullWidth className='filled-primary' onClick={() => {login() }} variant="contained" >
            Login
          </Button>
          <Typography variant="p" mt={3} mb={3} component="div">
            Don't you have account ? <Link href="/register">Register</Link>
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Login;
