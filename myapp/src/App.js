import logo from './logo.svg';
import './App.css';




import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import { FormLabel } from '@mui/material';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="loginpage"  sx={{ borderRadius: 16, p: 3 }}>
          <h1>Login</h1>
        <Box
          component="form"
          //sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
          noValidate
          autoComplete="off"
        >
          <FormControl fullWidth sx={{ mb: 2, }}>
            <FormLabel sx={{ textAlign: 'left',mb: 0.15 }} >Username</FormLabel>
             <TextField id="outlined-basic" variant="outlined" fullWidth sx={{
            '& .MuiOutlinedInput-root': {
                borderRadius: 12, backgroundColor: '#dce1e6'
              },
            }}/>
          </FormControl>
          
         <br></br><br></br>
          
          
          <FormControl fullWidth sx={{ mb: 3, }}>
            <FormLabel sx={{ textAlign: 'left',mb:0.15 }}>Password</FormLabel>
            <TextField id="outlined-basic" variant="outlined" fullWidth sx={{
            '& .MuiOutlinedInput-root': {
                borderRadius: 12, backgroundColor: '#e7ecf0'
              },
            }}/>
          </FormControl>
          
        

        </Box>
        <br></br>
        <Button id="btn" variant="contained" fullWidth sx={{ borderRadius: 999, mt: 2,}}>Login</Button>
      
        </div>
      </div>
    </div>
  );
}

export default App;
