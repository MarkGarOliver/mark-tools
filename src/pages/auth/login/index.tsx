// @flow 
import * as React from 'react';
import InputGeneral from '../../../components/InputGeneral';
import { useState } from 'react'
import { Link } from 'react-router-dom';
// components


type Props = {

};
const Login = (props: Props) => {

    return (
        <div className='flex justify-center p-20'>

            <div className='grid divide-x grid-cols-2 rounded-xl shadow w-[800px] h-[500px]'>


                <div className='flex justify-center flex-wrap rounded-l-xl text-white p-10 bg-gradient-to-r from-green-500 to-green-400'>

                    <div className='flex flex-wrap items-center'>

                        <div className='text-center'>


                            <h1 className='mb-2 font-bold text-4xl'>Hello, Friend!</h1>
                            <h2 className='text-md'>Enter your personal details and start journey with us</h2>

                            <Link to={'/register'}>
                                <div className='mr-auto ml-auto mt-3 p-2 h-10 w-48 font-semibold border rounded-xl hover:border-none hover:bg-white hover:text-gray-400'>
                                    Sing Up

                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
                <div className='flex flex-wrap justify-center rounded-r-xl p-5 '>
                    <div className='flex flex-wrap justify-center'>
                        <h1 className='bold text-gray-700 text-4xl'>Sing In</h1>

                        {/* login forms */}
                        <div className=' m-5 pl-10 pr-10 flex w-full justify-around'>
                            <span className='cursor-pointer p-2 w-10 h-10 text-center text-gray-700 font-bold border border-gray-300 rounded-full hover:bg-gray-300 hover:text-white'>F</span>
                            <span className='cursor-pointer p-2 w-10 h-10 text-center text-gray-700 font-bold border border-gray-300 rounded-full hover:bg-gray-300 hover:text-white'>G+</span>
                            <span className='cursor-pointer p-2 w-10 h-10 text-center text-gray-700 font-bold border border-gray-300 rounded-full hover:bg-gray-300 hover:text-white'>IN</span>
                        </div>

                        <span className='text-gray-700'>or use your account</span>

                        <div>

                            <InputGeneral type={'email'} id={'email'} placeholder={'E-mail'} />

                            <InputGeneral type={'password'} id={'password'} placeholder={'Password'} />

                        </div>
                        <p className='m-2 text-center text-gray-600'>Forgot your password?</p>

                        <button className='rounded-xl p-2 w-48 text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500'>Sing In</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Login