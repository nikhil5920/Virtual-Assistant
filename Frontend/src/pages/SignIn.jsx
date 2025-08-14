import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login_Page_background from '../assets/Sign_in_page_background.jpg';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { userDataContext } from '../context/userContext';
import axios from 'axios';

function SignIn() {
    const [showPassword, setshowPassword] = useState(false); // setting eye icon from hear
    const {serverUrl} = useContext(userDataContext);

    const navigat = useNavigate(); // routing the this page to another page

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');
    const [loadingSignIn, setloadingSignIn] = useState(false);

    const handleSignIn = async () => {
        console.log(`URL : ${serverUrl}/api/auth/signin`);
        try {
            setErr("");
            setloadingSignIn(true);
            console.log("setp 111");
            const result = await axios.post(`${serverUrl}/api/auth/signin`,
                {email, password },
                {withCredentials: true}
            );
    
            console.log("Signin success:", result.data);
            setloadingSignIn(false);
    
        } catch (error) {
            setloadingSignIn(false);
            setErr(error.response.data.message);
            
            // More detailed error logging
            if (error.response) {
                console.error("❌ Server responded with error:");
                console.error("Status:", error.response.status);
                console.error("Data:", error.response.data);
            } else if (error.request) {
                console.error("❌ Request was made but no response received: ");
                console.error(error.request);
            } else {
                console.error("❌ Error setting up request:");
                console.error("Message:", error.message);
            }
        }
    };

    return (
        <div
            className="w-full h-[100vh] bg-cover flex justify-center items-center"
            style={{ backgroundImage: `url(${Login_Page_background})` }}
        >
            <form
                className="w-[90%] h-[600px] max-w-[500px] bg-black/40 backdrop-blur shadow-lg shadow-black flex flex-col items-center justify-center gap-5 px-6 py-8 rounded-md px-[20px]"
                action=""
                method="post"
                onSubmit={(e)=>{
                    e.preventDefault();
                    handleSignIn();
                }}
            >
                <h1 className="text-white font-semibold text-2xl text-center mb-6 px-[20px]">
                    Registration for your <span className="text-blue-400"> Virtual-Assistant</span>
                </h1>

                <input
                    type="email"
                    placeholder="Enter your Email"
                    className="w-full h-[60px] px-4 outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 text-[18px] rounded-full"
                    required 
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                />

                <div className='w-full h-[60px] border-2 border-white bg-transparent text-white rounded-full text-[18px] relative'>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your Password"
                        className='w-full h-full rounded-full outline-none bg-transparent placeholder-gray-300 px-[20px] py-[10px]'
                        required 
                        onChange={(e)=>setPassword(e.target.value)}
                        value={password}
                    />
                    {!showPassword ?
                        <IoEyeOffOutline className='absolute top-[20px] right-[20px] text-white' onClick={() => setshowPassword(true)} />
                        :
                        <IoEyeOutline className='absolute top-[20px] right-[20px] text-white' onClick={() => setshowPassword(false)} />
                    }
                </div>

                {err.length > 0 && <p className='text-red-600'>
                    *{err}
                </p>}

                <button className='min-w-[150px] mt-[20px] h-[60px] bg-blue-500 rounded-3xl text-black font-bold text-19px' disabled= {loadingSignIn}>
                    {loadingSignIn ? 'Loading...' : 'Sign-in'}
                </button>

                <p className='text-white text-[16px] cursor-pointer' onClick={() => navigat('/signup')}>
                    Dont have an acount ? <span className='text-blue-500 bg-white rounded-3xl p-1.5 font-semibold'> Sign-up </span>
                </p>

            </form>
        </div>
    )
}

export default SignIn;
