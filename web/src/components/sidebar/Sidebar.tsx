import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <aside className={`${styles.sidebar}`}>
            <div>
                <ul className={`${styles.menuLinks}`}>
                    <li>
                        <Link className={`${styles.linkDefault}`} to="pbfsetup">PBF Setup</Link>
                    </li>
                    <li>
                        <Link className={`${styles.linkDefault}`} to="pbfdataentry">PBF Data Entry</Link>
                    </li>
                    <li>
                        <Link className={`${styles.linkDefault}`} to="qualityscoreentry">Quality Score Entry</Link>
                    </li>
                    <li>
                        <Link className={`${styles.linkDefault}`} to="qualitymaxscore">Quality max score</Link>
                    </li >
                    <li>
                        <Link className={`${styles.linkDefault}`} to="dataelementtariffandtargetmanagement">Data Element Tariff and Target Management</Link>
                    </li>
                    <li>
                        <Link className={`${styles.linkDefault}`} to="bankdetailsmanagement">Bank Details Management</Link>
                    </li >
                    <li>
                        <Link className={`${styles.linkDefault}`} to="qualityscorepayment">Quality Score Payment</Link>
                    </li >
                    <li>
                        <Link className={`${styles.linkDefault}`} to="qualityscorepayment">Quality Score Payment</Link>
                    </li >
                    <li>
                        <Link className={`${styles.linkDefault}`} to="lookup">Lookup</Link>
                    </li >
                    <li>
                        <Link className={`${styles.linkDefault}`} to="lookup">Lookup</Link>
                    </li >
                    <li>
                        <Link className={`${styles.linkDefault}`} to="paymentadjustment">Payment Adjustment</Link>
                    </li >
                    <li>
                        <Link className={`${styles.linkDefault}`} to="paymentadjustment">Payment Adjustment</Link>
                    </li >
                </ul >
            </div >
        </aside >
    );
};

export default Sidebar;
