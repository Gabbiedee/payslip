"use client";
import React, { useContext } from 'react';
import AuthContext from '@/app/context/AuthProvider';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Logout = () => {
  const { setAuth } = useContext(AuthContext);
  const router = useRouter();

  const logUserOut = () => {
   
    sessionStorage.removeItem('accessToken');

    setAuth(null);

    router.push('/login');
  };

  return (
    <div onClick={logUserOut} className='cursor-pointer'>
     Logout
    </div>
  );
};

export default Logout;