// @flow 
import * as React from 'react';
import InputGeneral from '../../../components/InputGeneral';
import { Link } from 'react-router-dom';
// components


type Props = {

};
const Login = (props: Props) => {

    return (
        <div className='flex justify-center p-20'>

            <div className='sm:grid sm:divide-x sm:grid-cols-2 divide-none rounded-xl shadow w-[800px] h-[500px]'>


                <div className='hidden sm:block flex justify-center flex-wrap rounded-l-xl text-white p-10 bg-gradient-to-r from-green-500 to-green-400'>

                    <div className='flex flex-wrap items-center h-full'>

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
                {/* divisor */}
                <div className='flex flex-wrap justify-center rounded-xl sm:rounded-r-xl sm:rounded-l-none p-5 dark:bg-slate-800'>
                    <div className='flex flex-wrap justify-center'>
                        <h1 className='bold text-gray-700 text-4xl dark:text-white'>Sing In</h1>

                        {/* login forms */}
                        <div className=' m-5 pl-10 pr-10 flex w-full justify-around'>
                            <span className='cursor-pointer p-2 w-10 h-10 text-center text-gray-700 dark:text-white font-bold border border-gray-300 rounded-full hover:bg-gray-300 hover:text-white dark:hover:bg-green-500 dark:hover:border-none'>F</span>
                            <span className='cursor-pointer p-2 w-10 h-10 text-center text-gray-700 dark:text-white font-bold border border-gray-300 rounded-full hover:bg-gray-300 hover:text-white dark:hover:bg-green-500 dark:hover:border-none'>G+</span>
                            <span className='cursor-pointer p-2 w-10 h-10 text-center text-gray-700 dark:text-white font-bold border border-gray-300 rounded-full hover:bg-gray-300 hover:text-white dark:hover:bg-green-500 dark:hover:border-none'>IN</span>
                        </div>

                        <span className='w-full text-center text-gray-700 dark:text-white'>or use your account</span>

                        <div>

                            <InputGeneral type={'email'} id={'email'} placeholder={'E-mail'} />

                            <InputGeneral type={'password'} id={'password'} placeholder={'Password'} />

                        </div>
                        <p className=' w-full text-center m-2 text-center text-gray-600 dark:text-white'>Forgot your password?</p>

                        <button className='rounded-xl p-2 w-48 text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500'>Sing In</button>
                        
                        <Link to='/register' className='sm:hidden w-full text-center'>
                            <span className='text-gray-700 dark:text-white'>or create your <strong className='text-green-500'>account</strong></span>
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Login