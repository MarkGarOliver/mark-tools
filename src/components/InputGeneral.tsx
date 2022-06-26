// @flow 
import * as React from 'react';
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    isRequired?: boolean;
};

const InputGeneral = (props: Props) => {

    const {placeholder, type, id, isRequired} = props

    return (

        <div className='m-2'>
            <input className='w-80 h-10 bg-gray-100 placeholder-gray-500 p-2 focus:outline-none' placeholder={placeholder} type={type} id={id} required={isRequired}/>
        </div>
    );
};

export default InputGeneral