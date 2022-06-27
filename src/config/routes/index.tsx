// @flow 
import * as React from 'react';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AboutPage from '../../pages/about';
import LoginPage from '../../pages/auth/login';
import RegisterPage from '../../pages/auth/register';
import ContactPage from '../../pages/contact';

// Pages
import Home from '../../pages/home';
import TasksPage from '../../pages/tasks';

type Props = {
    
};

const Rotas = (props: Props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Home/>} />
                <Route path='/login' element={<LoginPage/>  } />
                <Route path='/register' element={<RegisterPage/>  } />
                <Route path='/tasks' element={<TasksPage/>  } />
                <Route path='/contact' element={<ContactPage/>  } />
                <Route path='/about' element={<AboutPage/>  } />
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas