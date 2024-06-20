import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {registerfunction} from "../services/Apis";
import { NavLink, useNavigate } from "react-router-dom"
import "../styles/signup.css"
import sign from "../images/sign.png"

const Register = () => {

  const [passhow,setPassShow] = useState(false);

  const [inputdata,setInputdata] = useState({
    fname:"",
    email:"",
    password:"",
    phoneno:""
  });

  const navigate = useNavigate();

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setInputdata({...inputdata,[name]:value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const {fname,email,password,phoneno} = inputdata;

    if(fname === ""){
      toast.error("Enter Your Name")
    }else if(email === ""){
      toast.error("Enter Your Email")
    }else if(!email.includes("@")){
      toast.error("Enter Valid Email")
    }else if(password === ""){
      toast.error("Enter Your Password")
    }else if(password.length < 6){
      toast.error("password length minimum 6 character")
      }else if(phoneno === "" || isNaN(phoneno) || phoneno.length>10 ){
        toast.error('Please enter valid phone number')
      }else{
        const response = await registerfunction(inputdata);
      
      if(response.status === 200){
        setInputdata({...inputdata,fname:"",email:"",password:"",phone:""});
        navigate("/")
      }else{
        toast.error(response.response.data.error);
      }
    }
  }

return(
  <>
    <section classname="signup">
      <div className="container mt-5">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">Sign up</h2>
            <form className="register-form" id="register-form">

              <div className="form-group">
                <label htmlFor="fname">
                  <i class="zmdi zmdi-account material-icon-name"></i>
                </label>
                <input type="text" name="fname" id="fname" autoComplete="off" onChange={handleChange} placeholder='Enter Your Name' />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                <i class="zmdi zmdi-email material-icon-name"></i>
                </label>
                <input type="email" name="email" id="" autoComplete='off' onChange={handleChange}  placeholder='Enter Your Email Address' />
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  <i class="zmdi zmdi-lock material-icon-name"></i>
                </label>
                  <input type={!passhow ? "password" : "text"} name="password" id="" autoComplete='off' onChange={handleChange}  placeholder='Enter Your password' />
                  <div className='showpass' onClick={()=>setPassShow(!passhow)} >
                    {!passhow ? "Show" : "Hide"}
                  </div>
              </div>

              <div className="form-group">
                <label htmlFor="phoneno">
                  <i class="zmdi zmdi-phone-in-talk material-icon-name"></i>
                </label>
                <input type="number" name="phoneno" id="" autoComplete='off' onChange={handleChange}  placeholder='Enter Your Phone Number' />
              </div>
              <p className="p1">Already have an account? <NavLink to="/">Login</NavLink></p>
              <button className='rbtn' onClick={handleSubmit}>Sign Up</button>
            </form>
            <div className="signup-image">
            <figure className="fig">
              <img src={sign}/>
            </figure>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  </>
)
}

export default Register 