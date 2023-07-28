import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Button from '@mui/joy/Button';
import Button from '@mui/material/Button';
import Cookies from 'js-cookie';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import GoogleIcon from '@mui/icons-material/Google';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch } from "react-redux";
import { loginSuccess } from "../Redux/action.js";
import { caseSuccess } from '../Redux/userSlice';
import { useLocation } from 'react-router-dom';


import './Login.css';
import axios from 'axios';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      dispatch(caseSuccess({
        "email":email
    }))

    const login = async() => {
            try{
                await signInWithEmailAndPassword(getAuth(), email, password);          
                console.log(email, password);
                Cookies.set('email', email);
    
                const response = await axios.post('http://127.0.0.1:8181/api/v1/auth/authenticate', {
                    email,
                    password,
                    });
    
        let token = response.data.token;
        let user = response.data.userResponse;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        window.alert("Successfully Logged In " + email);
    
                navigate('/Home');
            }
            catch(e){
                setError(e.message);
                console.log(error);
                 window.alert("Invalid Credentials");
            }
        try{
            await signInWithEmailAndPassword(getAuth(), email, password);
            console.log(email, password);
            Cookies.set('email', email);
            // navigate('/Home');
            navigate('/User');
        }
        catch(e){
            setError(e.message);
        }
        navigate('/Home', { state: { email } });
    }
    const signInWithGoogle = async () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
    
        try {
          const result = await signInWithPopup(auth, provider);
          const user = result.user;
          // You can access the user's information like user.displayName, user.email, etc.
          Cookies.set('email', user.email);
          navigate('/home');
        } catch (e) {
          setError(e.message);
        }
      };
     
    return (
        <div>
            <div class="Top">
                <div class="left">
                    <div class="">

                    </div>
                    <h2><span><i>A</i></span> recipe has no soul , you as the cook must bring soul to the recipe.</h2>
                </div>
                <div>
    
                </div>

                <div class="right">

            <h1>Welcome</h1>
            <div class="loginform">
            {error && <p style={{color: "red"}}>{error}</p>}
            <div class="border border-dark pb-3 rounded-lg" style={{width: "100%", }}>
            <div class="text-center p-1 mb-2 text-light " style={{background: "#016b7a"}}>
                    <h2>User</h2>
                </div>
                <form id="logf">
                    <div class="form-group ml-3 mr-3">
                        <label class="text-inverse">UserName(Your email)</label>
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            // defaultValue="Hello World"
                            type="email"
                            style={{width: '80%'}}
                            value={email}
                            onChange={e => setEmail(e.target.value)} 
                        />
                    </div>
                    <div class="form-group ml-3 mr-3">
                        <label class="text-inverse">Password</label>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            style={{width: '80%'}}
                            label="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)} 
                            required
                            endAdornment={
                                <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                    
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            // label="Password"
                            />
                            
                            {/* </FormControl> */}
                    </div>
                    <div class="form-group ml-3 mr-3 mt-2 mb-2">
                    <Button id="logfib1" class="form-control" type="button" style={{background: "#4CAF50", color: "#ffffff", width: "80%", marginLeft: "10%"}} name="nlogfib1 " onClick={login}>LOGIN</Button>
                        <Button variant="contained" endIcon={<GoogleIcon/>} style={{marginTop: "4%"}} onClick={signInWithGoogle}><span>Sign in with Google</span></Button>
                        <div class=" mt-3 mr-3" style={{marginTop: "5%"}}>
                            <i>New user? </i>
                            <a href="/signup">Click here</a>
                        </div>
                        <div class=" mt-3 mr-3" style={{marginTop: "5%"}}>
                            <i>Forgot Password</i>
                           <a href="">Click here</a> 
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>

                </div>

            </div>
    );
}

export default Login;