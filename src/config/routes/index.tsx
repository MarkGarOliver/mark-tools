// @flow 
import * as React from 'react';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from '../../pages/auth/login';

// Pages
import Home from '../../pages/home';

type Props = {
    
};

const Rotas = (props: Props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<LoginPage/>  } />
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas