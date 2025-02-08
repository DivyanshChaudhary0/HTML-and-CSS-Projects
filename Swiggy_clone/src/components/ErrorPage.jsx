
import React from 'react'
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);

  return (
    <div className='w-full h-screen flex items-center justify-center flex-col'>
        <h1 className='text-2xl mb-2'>OOPs Something went wrong ...</h1>
        <p>{error.error.message}</p>
        <p>Bad Request Error Code: {error.status}</p>
    </div>  
  )
}

export default ErrorPage;