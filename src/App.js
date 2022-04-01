
import './App.css';

import "./component/style.css"

import FacebookIcon from '@mui/icons-material/Facebook';

import TwitterIcon from '@mui/icons-material/Twitter';

import GoogleIcon from '@mui/icons-material/Google';

import { useState } from 'react';



function App() {

  const [User, setValue] = useState("");

  const [Pass, setPass] = useState("");

  const [data, setData] = useState([]);


  const handleSubmit = (event) => {
    event.preventDefault();

    const FullData = {
      text: User,
      Passcode: Pass+Math.random()
    }
    

    console.log(FullData)

    setData([...data, FullData]);

 
    
   
  }

  const userValue = (e) => {


    setValue(e.target.value)


  }

  const Password = (e) => {

    setPass(e.target.value)

  }

  
  


  return (
    <div className='Bgc'>
      <form className='card-style' onSubmit={handleSubmit}>

        <h1 className='title'>Login</h1>

        <p className='p-1'>Username</p>

        <input className='input' type="text" placeholder='UserName' required onChange={userValue} />


        <p className='p-2'>Password</p>

        <input className='input' type='password' placeholder='Password' required onChange={Password} />

        
        <a className='Forgot' href='#'>Forgot Password?</a>

        <button className='Btn' type='login'>Login</button>

        <a className='NewUser' href='#'>Or Sign Up Using</a>

        <a className='f-icon' href='#'> <FacebookIcon style={{ fontSize: "50", marginLeft: "120" }} /></a>


        <a className='t-icon' href='#'> <TwitterIcon fontSize='large' style={{ fontSize: "50" }} /></a>

        <a className='g-icon' href="#"><GoogleIcon style={{ fontSize: "50" }} /></a>

      </form >
    </div>
  );
}

export default App;
