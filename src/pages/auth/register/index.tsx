// @flow 
import * as React from 'react';
import { Link } from 'react-router-dom';
import InputGeneral from '../../../components/InputGeneral';
type Props = {

};
const RegisterPage = (props: Props) => {
    return (
        <div className='flex justify-center p-20'>
            <div className='sm:grid sm:divide-x divide-none sm:grid-cols-2 rounded-xl shadow w-[800px] h-[500px]'>

                <div className='flex flex-wrap justify-center rounded-xl sm:rounded-l-xl sm:rounded-r-none p-5 dark:bg-slate-800'>
                    
                    <div className='flex flex-wrap justify-center'>
                        <h1 className='bold text-center text-gray-700 text-4xl dark:text-white'>Create Account</h1>

                        {/* login forms */}
                        <div className=' m-5 pl-10 pr-10 flex w-full justify-around'>
                            <span className='cursor-pointer p-2 w-10 h-10 text-center text-gray-700 dark:text-white  font-bold border border-gray-300 rounded-full hover:bg-gray-300 hover:text-white dark:hover:bg-green-500 dark:hover:border-none'>F</span>
                            <span className='cursor-pointer p-2 w-10 h-10 text-center text-gray-700 dark:text-white  font-bold border border-gray-300 rounded-full hover:bg-gray-300 hover:text-white dark:hover:bg-green-500 dark:hover:border-none'>G+</span>
                            <span className='cursor-pointer p-2 w-10 h-10 text-center text-gray-700 dark:text-white  font-bold border border-gray-300 rounded-full hover:bg-gray-300 hover:text-white dark:hover:bg-green-500 dark:hover:border-none'>IN</span>
                        </div>

                        <span className='text-gray-700 dark:text-white'>or use your email for registration</span>

                        <div>

                            <InputGeneral type={'text'} id='name' placeholder='Full Name' isRequired={true}/>
                            <InputGeneral type={'email'} id={'email'} placeholder={'E-mail Adress'} isRequired={true}/>
                            <InputGeneral type={'password'} id={'password'} placeholder={'Password'} isRequired={true}/>
                            <InputGeneral type={'password'} id={'password'} placeholder={'Repeat Password'} isRequired={true}/>

                        </div>

                        <button className='m-5 rounded-xl p-2 w-48 text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500'>Sing Up</button>
                    </div>
                </div>

                {/* divisor grid */}

                <div className='hidden sm:block flex justify-center flex-wrap rounded-r-xl text-white p-10 bg-gradient-to-r from-green-500 to-green-400'>

                    <div className='flex flex-wrap items-center h-full'>

                        <div className='text-center'>

                            <h1 className='mb-2 font-bold text-4xl'>Welcome Back!</h1>
                            <h2 className='text-md'>To keep connected with us please login with your personal info</h2>

                            <Link to={'/Login'}>
                                <div className='mr-auto ml-auto mt-3 p-2 h-10 w-48 font-semibold border rounded-xl hover:border-none hover:bg-white hover:text-gray-400'>
                                    Sing In

                                </div>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default RegisterPage;
