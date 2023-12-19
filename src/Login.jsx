
import { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
const apiUrl = 'https://reacttestprojectapi.azurewebsites.net/api';

const Login = () => {
  const navigate =useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


const handleApi = (e)=>{
    axios.post( `${apiUrl}/UserManagement/AuthenticateUser?UserName=${username}&Password=${password}`).then(result =>{
      console.log(result.data)
      alert('success')
      localStorage.setItem('token',result.data.token)
      navigate('/home')
    }).catch(error=>{
      alert('service error')
      console.log(error)
    })
  }

  return (
    <div className='container d-grid align-text-bottom text-center my-5 '>
      <h1>LOGIN</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </label>
      <br />
      <div className="">
         <button onClick={handleApi} type="button" className="btn btn-dark col-3">Login</button>
      </div>

    </div>
  );
};

export default Login;
