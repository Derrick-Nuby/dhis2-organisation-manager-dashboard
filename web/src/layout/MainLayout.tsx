import Sidebar from '../components/sidebar/Sidebar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';


const MainLayout: React.FC = () => {
    return (
        <div className={styles.layout}>
            <Sidebar />
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
