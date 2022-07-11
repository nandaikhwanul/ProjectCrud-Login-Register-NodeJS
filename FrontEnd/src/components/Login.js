import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState();
    const navigate = useNavigate();

    const Auth = async(e) => {
      e.preventDefault();
      try {
          await axios.post('http://localhost:5000/login',{
              email: email,
              password: password
          });
          navigate("/dashboard");
      } catch (error) {
          if(error.response){
              setMsg(error.response.data.msg);
          }
          
      }
  }


  return (
    <section className="hero has-background-grey-light is-fullwidth is-fullheight">
      <div className="hero-body">
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-4-desktop">
                    <form onSubmit={Auth} className='box'>
                      <p className='has-text-centered'>{msg}</p>
                        <div className="field mt-5 ">
                            <label className="label">Email OR Username</label>
                            <div className="control">
                                <input type="text" className="input" placeholder='username' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label className="label">Password</label>
                            <div className="control">
                                <input type="password" className="input" placeholder='Input Your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className="field mt-5">
                           <button className='button is-success is-fullwidth'>Login</button>
                        </div>
                        <a href="/register" className='text-center'>Need account ? Register here</a>
                    </form>
                </div>
            </div>
          
        </div>
      </div>
    </section>
  )
}

export default Login