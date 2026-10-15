import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import KeyIcon from '@mui/icons-material/Key';
import { Checkbox, FormControlLabel } from '@mui/material';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import { Box } from '@mui/material';
import { red } from '@mui/material/colors';


function App() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

  return (
    <div className="App">
      <Box className="mainbox"
  sx={{
    
    display: 'flex',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#f5f5f5', 
    overflow:"hidden",
  }}
>     <Box
    sx={{
      flex: 1, // take half width
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
     
    }}
    
  >
      <div className="loginPart">
        <div className="part1">
        <FormControl sx={{ m: 1, }} fullWidth>
          
          <TextField
            //sx={{ m: 1, }}
            placeholder="Username"
            variant="outlined"
            slotProps={{
              input:{
            startAdornment: (
            <InputAdornment position="start">
            <AccountCircle />
            <Divider
              orientation="vertical"
              flexItem
              sx={{ mx: 1 }}
            />
            </InputAdornment>
            ),
          },
          }}
          />
        </FormControl><br></br>
        <FormControl sx={{ m: 1, }} fullWidth>
  <TextField
    variant="outlined"
    placeholder="Password"
    type={showPassword ? 'text' : 'password'}
    slotProps={{
      input: {
        startAdornment: (
          <InputAdornment position="start">
            <KeyIcon />
            <Divider
              orientation="vertical"
              flexItem
              sx={{ mx: 1 }}
            />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={(e) => e.preventDefault()}
              edge="end"
              aria-label={
                showPassword ? 'hide the password' : 'show the password'
              }
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      },
    }}
  />
</FormControl><br></br>
<FormControlLabel
  control={<Checkbox {...label} />}
  label="Remember me"
/> {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}
    <Button variant="contained">Login</Button>   <br></br>
    
    <Link href="#" underline="none">Register Now</Link> {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}
    <Link href="#" color="inherit" underline="none">
        Forgot Password?
      </Link>
    
    </div>
 
    <Divider sx={{ m: 1 }}>Or</Divider>
    <div className='part2'>
      
      <Button
  variant="contained"
  fullWidth
  sx={{
    //textTransform: 'none',
    height: 48,
    m: 1, 
    backgroundColor: '#23365e',  // dark blue
    color: '#fff',  
    borderRadius: 2, // optional: slightly rounded corners
 
  }}
>
  <Stack
    direction="row"
    alignItems="center"
    spacing={1.5}
    divider={
      <Divider orientation="vertical" flexItem />
    }
  >
    <FacebookIcon color="#fff" />
    <Box sx={{backgroundColor:'#3a5999',height:'45px',width:'240px',textAlign:'center',justifyContent:'center',alignItems:'center',borderRadius: 2,display: 'flex',}}>
       <span >Login with Facebook</span>
    </Box>
   
  </Stack>
</Button>
<br></br>

<Button
  variant="outlined"
   fullWidth
  sx={{
    //textTransform: 'none',
    height: 48,
    m: 1,
    
    backgroundColor:  '#42A5F5',  // dark blue
    color: '#fff',  
    borderRadius: 2, // optional: slightly rounded corners
 
  }}
>
  <Stack
    direction="row"
    alignItems="center"
    spacing={1.5}
    divider={
      <Divider orientation="vertical" flexItem />
    }
  >
    <TwitterIcon color="#fff" />
    <Box sx={{backgroundColor:'#75c3e7',height:'45px',width:'240px',textAlign:'center',justifyContent:'center',alignItems:'center',borderRadius: 2,display: 'flex',}}>
       <span >Login with Twitter</span>
    </Box>
  </Stack>
</Button><br></br>

<Button
  variant="outlined"
  fullWidth
  sx={{
    //textTransform: 'none',
    height: 48,
    m: 1,
    
    backgroundColor: '#c8351e', 
    color: '#fff',  
    borderRadius: 2, // optional: slightly rounded corners
 
  }}
>
  <Stack
    direction="row"
    alignItems="center"
    spacing={1.5}
    divider={
      <Divider orientation="vertical" flexItem />
    }
  >
    <GoogleIcon color="fff" />
   <Box sx={{backgroundColor:'#df5c5c',height:'45px',width:'240px',textAlign:'center',justifyContent:'center',alignItems:'center',borderRadius: 2,display: 'flex',}}>
       <span >Login with Google</span>
    </Box>
  </Stack>
</Button>



    </div>
      </div>
     </Box>


  <Box
    sx={{
      flex: 1, // take the other half
      position: 'relative',
    }}
  >
         <img
          src="modalImage.jpg"
          alt="Right Side"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // fills container without distortion
          }}
        />
     
      </Box>

    </Box>
  </div>
  
  );
}





export default App;
