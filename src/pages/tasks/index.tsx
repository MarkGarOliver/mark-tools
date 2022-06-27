// @flow 
import * as React from 'react';
import DivisorHorizontal from '../../components/DivisorHorizontal';
import InputGeneral from '../../components/InputGeneral';
import { NavBar } from '../../components/partials/NavBar';
type Props = {

};
const TasksPage = (props: Props) => {
    return (
        <>
            <NavBar />

            <div className="p-10 ">
                <div className="sm:grid sm:grid-cols-2 dark:border-none shadow rounded-xl">

                    <div className='hidden sm:block bg-gradient-to-r from-green-500 to-green-400 rounded-l-xl '>
                        <div className='flex justify-center h-full flex-wrap rounded-l-xl text-white p-10 bg-gradient-to-r from-green-500 to-green-400'>

                            <div className='flex  items-center'>

                                <div className='text-center'>


                                    <h1 className='mb-2 font-bold text-4xl'>Hi, Don't Forget!</h1>
                                    <h2 className='text-md'>Do at least one task a day and maintain your productivity</h2>



                                </div>

                            </div>
                        </div>
                    </div>

                    {/* divide */}

                    <div className='flex dark:bg-gray-800 dark:sm:rounded-r-xl dark:sm:rounded-l-none dark:rounded-xl justify-center'>

                        <div>
                            <h1 className='text-center m-5 bold text-gray-700 text-4xl dark:text-white'>Create Task</h1>

                            <InputGeneral
                                type={'text'}
                                id={"taskName"}
                                placeholder={'Enter task name'}
                            />

                            <textarea className=' rounded-md m-2 w-56 sm:w-60 lg:w-80 bg-gray-100 placeholder-gray-500 p-2 focus:outline-none' name="taskTxt" id="taskTxt" rows={4} placeholder="Type task description  "></textarea>


                            <button className='rounded-md block ml-2 m-5 p-2 w-32 text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500'>salvar</button>
                        </div>
                    </div>


 

                </div>
                <DivisorHorizontal />

                <h1 className='text-center m-5 bold text-gray-700 text-4xl dark:text-white'>Tasks</h1>

                <div className='flex flex-wrap justify-around '>



                    <div id='card' className='m-1 w-96 shadow rounded-xl dark:border-slate-800 dark:bg-slate-800 dark:text-white'>

                        <h4 className='m-5 text-2xl font-bold text-slate-800 dark:text-green-400'>Title of the task 1</h4>

                        <p className='m-5 font-normal text-gray-700 dark:text-gray-400'>little description of task Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit necessitatibus dolores repellendus soluta laudantium </p>


                        <button className='m-5 p-2 w-32 rounded-md text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500'>ReadMore</button>
                    </div>


                    <div id='card' className='m-1 w-96 shadow rounded-xl dark:border-slate-800 dark:bg-slate-800 dark:text-white'>

                        <h4 className='m-5 text-2xl font-bold text-slate-800 dark:text-green-400'>Title of the task 1</h4>

                        <p className='m-5 font-normal text-gray-700 dark:text-gray-400'>little description of task Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit necessitatibus dolores repellendus soluta laudantium </p>


                        <button className='m-5 p-2 w-32 rounded-md text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500'>ReadMore</button>
                    </div>


                    <div id='card' className='m-1 w-96 shadow rounded-xl dark:border-slate-800 dark:bg-slate-800 dark:text-white'>

                        <h4 className='m-5 text-2xl font-bold text-slate-800 dark:text-green-400'>Title of the task 1</h4>

                        <p className='m-5 font-normal text-gray-700 dark:text-gray-400'>little description of task Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit necessitatibus dolores repellendus soluta laudantium </p>


                        <button className='m-5 p-2 w-32 rounded-md text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500'>ReadMore</button>
                    </div>


                    <div id='card' className='m-1 w-96 shadow rounded-xl dark:border-slate-800 dark:bg-slate-800 dark:text-white'>

                        <h4 className='m-5 text-2xl font-bold text-slate-800 dark:text-green-400'>Title of the task 1</h4>

                        <p className='m-5 font-normal text-gray-700 dark:text-gray-400'>little description of task Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit necessitatibus dolores repellendus soluta laudantium </p>


                        <button className='m-5 p-2 w-32 rounded-md text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500'>ReadMore</button>
                    </div>


                    <div id='card' className='m-1 w-96 shadow rounded-xl dark:border-slate-800 dark:bg-slate-800 dark:text-white'>

                        <h4 className='m-5 text-2xl font-bold text-slate-800 dark:text-green-400'>Title of the task 1</h4>

                        <p className='m-5 font-normal text-gray-700 dark:text-gray-400'>little description of task Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit necessitatibus dolores repellendus soluta laudantium </p>


                        <button className='m-5 p-2 w-32 rounded-md text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500'>ReadMore</button>
                    </div>


                    <div id='card' className='m-1 w-96 shadow rounded-xl dark:border-slate-800 dark:bg-slate-800 dark:text-white'>

                        <h4 className='m-5 text-2xl font-bold text-slate-800 dark:text-green-400'>Title of the task 1</h4>

                        <p className='m-5 font-normal text-gray-700 dark:text-gray-400'>little description of task Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit necessitatibus dolores repellendus soluta laudantium </p>


                        <button className='m-5 p-2 w-32 rounded-md text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500'>ReadMore</button>
                    </div>



                </div>

            </div>
        </>
    );
};

export default TasksPage;