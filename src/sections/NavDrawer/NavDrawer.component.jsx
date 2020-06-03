import React from 'react'

//import styles
import styles from './NavDrawer.module.scss'

//import images
import logo from '../../images/logo.svg'

//import icons
import {
    MdDashboard,
    MdDescription,
    MdEvent,
    MdPublish,
    MdPeople,
    MdCreditCard,
    MdPowerSettingsNew
} from 'react-icons/md'

export default function NavDrawer() {
    return (
        <nav className={styles.navDrawer}>
            <div className={styles.logo}>
                <img src={logo} alt='Mail Shark' />
            </div>
            <ul className={styles.mainLinks}>
                <li>
                    <MdDashboard size='1.5rem' color='#fff'/>
                    <p>Dashboard</p>
                </li>
                <li className={styles.active}>
                    <MdDescription size='1.5rem' color='#fff'/>
                    <p>Contracts</p>
                </li>
                <li>
                    <MdEvent size='1.5rem' color='#fff'/>
                    <p>Current Cycle</p>
                </li>
                <li>
                    <MdPublish size='1.5rem' color='#fff'/>
                    <p>Files</p>
                </li>
                <li>
                    <MdPeople size='1.5rem' color='#fff'/>
                    <p>Team</p>
                </li>
                <li>
                    <MdCreditCard size='1.5rem' color='#fff'/>
                    <p>Billing Info</p>
                </li>
            </ul>
            <ul className={styles.bottomLinks}>
                <li>
                    <MdPowerSettingsNew size='1.5rem' color='#fff'/>
                    <p>Logout</p>
                </li>
            </ul>
        </nav>
    )
}
