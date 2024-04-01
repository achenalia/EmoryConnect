"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { TextField } from '@mui/material'; // Ensuring TextField is correctly imported
import { TypeAnimation } from 'react-type-animation'; // Ensuring TypeAnimation is correctly imported

const AuthForm = () => {
  const [formType, setFormType] = useState('signin'); // Initialize form type as 'signin'
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const toggleFormType = () => {
    setFormType(formType === 'signin' ? 'signup' : 'signin');
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    let payload;
    if (formType === 'signup') {
      payload = { username, email, password1: password, password2: confirmPassword };
    } else {
      payload = { username, email, password };
    }

    const url = `http://127.0.0.1:8000/api/auth/${formType === 'signup' ? 'register' : 'login'}/`;

    try {
      const response = await axios.post(url, payload);
      console.log(`${formType} successful`, response.data);
      router.push('/mainpage'); // Redirect on successful form submission
    } catch (error) {
      console.error(`${formType} error`, error.response?.data || error);
    }
  };

  return (
    <div className='flex justify-center flex-row items-center w-screen h-[100dvh]'>
      {/* Text and TypeAnimation components are correctly implemented here */}
      <text className='absolute top-5 left-5 text-3xl'> <span className='text-blue-600'>Emory</span> <span className='text-blue-400'>Connect</span> </text>
        <div className='w-full h-full items-center flex justify-end'>
          <div className='text-left p-4 pr-20 h-1/2 flex justify-center items-center'>
            <div className='h-min'>
              <text className='text-6xl whitespace-pre-line'>Welcome to {'\n'} Emory Connect</text>
              <div className='w-1/2 border-4 border-blue-400 rounded-full my-6'></div>
              <text className='text-xl whitespace-pre-line'>A place where computer scientists {'\n'} connect and collaborate</text>
              <div className='my-2'/>
              <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Connect',
                1000, 
                'Collaborate',
                1000,
                'Learn',
                1000,
                'Innovate',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
            </div>
          </div>
        </div>
      <div className='w-full h-full items-center flex justify-start'>
        <div className='text-left p-4 pl-20 h-1/2 flex justify-center items-center border-l-[1px] border-slate-600'>
          <div className='h-min flex flex-col items-start'>
            <text className='text-6xl'>{formType === 'signin' ? 'Sign In' : 'Sign Up'}</text>
            <div className='my-2'>
              <text className='text-lg'>{formType === 'signin' ? 'Need an Emory Connect Account?' : 'Already have an Emory Connect Account?'}</text>
              <button className='bg-slate-200 rounded-md px-1 ml-2 text-md' onClick={toggleFormType}>{formType === 'signin' ? 'Switch to Sign Up' : 'Switch to Sign In'}</button>
            </div>
            {/* Form Fields */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <TextField fullWidth label="Username" value={username} onChange={e => setUsername(e.target.value)} size='small' placeholder='Username...' variant="outlined" />
              <TextField fullWidth label="Email" value={email} onChange={e => setEmail(e.target.value)} size='small' placeholder='Email...' variant="outlined" type="email" />
              <TextField fullWidth label="Password" value={password} onChange={e => setPassword(e.target.value)} size='small' placeholder='Password...' variant="outlined" type="password" />
              {formType === 'signup' && (
                <TextField fullWidth label="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} size='small' placeholder='Confirm Password...' variant="outlined" type="password" />
              )}
              <button type="submit" className='bg-blue-400 text-white w-full rounded-md mt-3 p-1 hover:bg-blue-600'>
                {formType === 'signin' ? 'Sign In' : 'Sign Up'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
