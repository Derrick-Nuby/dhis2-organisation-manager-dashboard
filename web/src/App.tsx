import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.module.css';


const App: React.FC = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<MainLayout />} >
                    <Route index element={<Home />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route >
            </>
        )
    );



    return (
        <RouterProvider router={router} />
        // <Home />
    );
};

export default App;
