import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { userVerify } from "../services/Apis";
import otpimg from "../images/otp.png"
import '../styles/otp.css';

const Otp = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const location = useLocation();
  const navigate = useNavigate();
  const otpInputs = useRef([]);

  const handleOtpChange = (index, value) => {
    if (!isNaN(value) && value !== '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < 5 && value !== '') {
        otpInputs.current[index + 1].focus();
      }
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text/plain');
    const pasteArray = pasteData.split('').slice(0, 6);
    const newOtp = [...otp];

    for (let i = 0; i < pasteArray.length; i++) {
      newOtp[i] = pasteArray[i];
    }

    setOtp(newOtp);
  };

  const handleKeyPress = (e, index) => {
    const regex = /^[0-9]$/;
    if (!regex.test(e.key) && e.key !== 'Backspace') {
      e.preventDefault();
    }
  };

  const LoginUser = async (e) => {
    e.preventDefault();

    const enteredOtp = otp.join('');

    if (enteredOtp === "") {
      toast.error("Enter Your OTP");
    } else if (!/^[0-9]+$/.test(enteredOtp)) {
      toast.error("Enter Valid OTP");
    } else if (enteredOtp.length !== 6) {
      toast.error("OTP Length should be 6 digits");
    } else {
      const data = {
        otp: enteredOtp,
        email: location.state,
      };

      const response = await userVerify(data);
      if (response.status === 200) {
        localStorage.setItem("userdbtoken", response.data.userToken);
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/home");
        }, 5000);
      } else {
        toast.error(response.response.data.error);
      }
    }
  };

  return (
    <>
      <section>
        <div className="otp-data">
          <div className="otp-heading">
            <h2>Enter OTP</h2>
          </div>
          <div className="signup-image">
            <figure className="fig">
              <img src={otpimg}/>
            </figure>
            </div>
          <form>
            <div className="otp-container">
              {otp.map((digit, index) => (
                <input className='otp'
                  key={index}
                  ref={(ref) => (otpInputs.current[index] = ref)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onPaste={handleOtpPaste}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                />
              ))}
            </div>
            <button className='otpbtn' onClick={LoginUser}>Submit</button>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Otp;