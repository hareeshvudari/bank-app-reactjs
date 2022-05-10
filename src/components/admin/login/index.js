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

function AdminLogin({ parentisUserAuthCallback }) {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: ""
  });
  const [passwordValues, setPasswordValue] = useState({  
    password: '',   
    showPassword: false,
  });

  const [userNameError, setUserNameError] = useState(false);


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
    if (userDetails && userDetails.username === 'user' && userDetails.password === 'user') {
      navigate('/onboarding');
    } else if (userDetails && userDetails.username === 'admin' && userDetails.password === 'admin') {
      navigate('/admin/onboarding');
    }
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

  return (

    <Grid container spacing={{ xs: 2, md: 3 }}   justifyContent="center"
    alignItems="center">
      <Grid item xs={10} md={6} lg={4}>
        <Card variant="outlined" className='card-main card-bs'>
          <Typography variant="h5" mb={2} component="div">
           Admin Login
          </Typography>
          <TextField onChange={userNameChanged} value={userDetails.username} error={userNameError} name="username" InputLabelProps={{ style: { fontSize: 13, lineHeight: 1.9 } }} fullWidth className='text-field' size='small' label="Username or Email" />
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
          <Grid container >
            <Grid item xs={7}>
              Remember me <Switch />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={4}>
              Forgot Passord?
            </Grid>
          </Grid>
          <Button fullWidth className='filled-primary' onClick={() => { parentisUserAuthCallback(userDetails); login() }} variant="contained" >
            Login
          </Button>
          <Typography variant="p" mt={3} mb={3} component="div">
            Don't you have account ? <Link href="/admin/register">Register</Link>
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

export default AdminLogin;
