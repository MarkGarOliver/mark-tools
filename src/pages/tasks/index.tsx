// @flow 
import * as React from 'react';
import DivisorHorizontal from '../../components/DivisorHorizontal';
import InputGeneral from '../../components/InputGeneral';
type Props = {

};
const TasksPage = (props: Props) => {
    return (
        <div className="p-10 ">
            
            <div className="grid grid-cols-2 border rounded-xl">

                <div className='bg-gradient-to-r from-green-500 to-green-400 rounded-l-xl'>
                    <div className='flex justify-center h-full flex-wrap rounded-l-xl text-white p-10 bg-gradient-to-r from-green-500 to-green-400'>

                        <div className='flex  items-center'>

                            <div className='text-center'>


                                <h1 className='mb-2 font-bold text-4xl'>Hi, Don't Forget!</h1>
                                <h2 className='text-md'>Do at least one task a day and maintain your productivity</h2>

          
                               
                            </div>

                        </div>
                    </div>
                </div>

                <div className='flex  justify-center'>

                    <div>
                        <h1 className='text-center m-5 bold text-gray-700 text-4xl'>Create Task</h1>

                        <InputGeneral
                            type={'text'}
                            id={"taskName"}
                            placeholder={'Enter task name'}
                        />

                        <textarea className='m-2 w-80 bg-gray-100 placeholder-gray-500 p-2 focus:outline-none' name="taskTxt" id="taskTxt" rows={4} placeholder="Type task description  "></textarea>


                        <button className='block ml-2 m-5 p-2 w-32 text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500'>salvar</button>
                    </div>
                </div>




            </div>
            <DivisorHorizontal />
            <h1 className='text-center m-5 bold text-gray-700 text-4xl'>Tasks</h1>

            <div className='flex flex-wrap justify-around '>



                <div id='card' className='m-1 w-96 border rounded-xl'>
                    <h1 className='m-5 font-semibold text-gray-700 text-lg'>Title of the task 1</h1>

                    <p className='m-5'>little description of task Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit necessitatibus dolores repellendus soluta laudantium </p>

                    <button className='m-5 p-2 w-32 rounded-xl text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500'>ReadMore</button>
                </div>





                <div id='card' className='m-1 w-96 border rounded-xl'>
                    <h1 className='m-5 font-semibold text-gray-700 text-lg'>Title of the task 1</h1>

                    <p className='m-5'>little description of task Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit necessitatibus dolores repellendus soluta laudantium </p>

                    <button className='m-5 p-2 w-32 rounded-xl text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500'>ReadMore</button>
                </div>






                <div id='card' className='m-1 w-96 border rounded-xl'>
                    <h1 className='m-5 font-semibold text-gray-700 text-lg'>Title of the task 1</h1>

                    <p className='m-5'>little description of task Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit necessitatibus dolores repellendus soluta laudantium </p>

                    <button className='m-5 p-2 w-32 rounded-xl text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500'>ReadMore</button>
                </div>






                <div id='card' className='m-1 w-96 border rounded-xl'>
                    <h1 className='m-5 font-semibold text-gray-700 text-lg'>Title of the task 1</h1>

                    <p className='m-5'>little description of task Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit necessitatibus dolores repellendus soluta laudantium </p>

                    <button className='m-5 p-2 w-32 rounded-xl text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500'>ReadMore</button>
                </div>






                <div id='card' className='m-1 w-96 border rounded-xl'>
                    <h1 className='m-5 font-semibold text-gray-700 text-lg'>Title of the task 1</h1>

                    <p className='m-5'>little description of task Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit necessitatibus dolores repellendus soluta laudantium </p>

                    <button className='m-5 p-2 w-32 rounded-xl text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500'>ReadMore</button>
                </div>






                <div id='card' className='m-1 w-96 border rounded-xl'>
                    <h1 className='m-5 font-semibold text-gray-700 text-lg'>Title of the task 1</h1>

                    <p className='m-5'>little description of task Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit necessitatibus dolores repellendus soluta laudantium </p>

                    <button className='m-5 p-2 w-32 rounded-xl text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500'>ReadMore</button>
                </div>






                <div id='card' className='m-1 w-96 border rounded-xl'>
                    <h1 className='m-5 font-semibold text-gray-700 text-lg'>Title of the task 1</h1>

                    <p className='m-5'>little description of task Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit necessitatibus dolores repellendus soluta laudantium </p>

                    <button className='m-5 p-2 w-32 rounded-xl text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500'>ReadMore</button>
                </div>






                <div id='card' className='m-1 w-96 border rounded-xl'>
                    <h1 className='m-5 font-semibold text-gray-700 text-lg'>Title of the task 1</h1>

                    <p className='m-5'>little description of task Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit necessitatibus dolores repellendus soluta laudantium </p>

                    <button className='m-5 p-2 w-32 rounded-xl text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500'>ReadMore</button>
                </div>






                <div id='card' className='m-1 w-96 border rounded-xl'>
                    <h1 className='m-5 font-semibold text-gray-700 text-lg'>Title of the task 1</h1>

                    <p className='m-5'>little description of task Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit necessitatibus dolores repellendus soluta laudantium </p>

                    <button className='m-5 p-2 w-32 rounded-xl text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500'>ReadMore</button>
                </div>

            </div>

        </div>
    );
};

export default TasksPage;