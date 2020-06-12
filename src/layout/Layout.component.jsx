import React, { Component } from 'react'
import {Link} from 'react-router-dom'

//import styles
import styles from './Layout.module.scss'

//import images
import logo from '../images/logo.svg'

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

//import sections
import TopBar from '../sections/TopBar/TopBar.component'

function NavDrawer() {
    return (
        <nav className={styles.navDrawer}>
            <div className={styles.logo}>
                <img src={logo} alt='Mail Shark' />
            </div>
            <ul className={styles.mainLinks}>
                <li className={styles.drawer__inactive}>
                    <MdDashboard size='1.5rem' color='#fff'/>
                    <p>Dashboard</p>
                </li>
                <Link to='/contracts'>
                    <li className={styles.drawer__active}>
                        <MdDescription size='1.5rem' color='#fff'/>
                        <p>Contracts</p>
                    </li>
                </Link>
                <li className={styles.drawer__inactive}>
                    <MdEvent size='1.5rem' color='#fff'/>
                    <p>Current Cycle</p>
                </li>
                <li className={styles.drawer__inactive}>
                    <MdPublish size='1.5rem' color='#fff'/>
                    <p>Files</p>
                </li>
                <li className={styles.drawer__inactive}>
                    <MdPeople size='1.5rem' color='#fff'/>
                    <p>Team</p>
                </li>
                <li className={styles.drawer__inactive}>
                    <MdCreditCard size='1.5rem' color='#fff'/>
                    <p>Billing Info</p>
                </li>
            </ul>
            <ul className={styles.bottomLinks}>
                <li className={styles.drawer__inactive}>
                    <MdPowerSettingsNew size='1.5rem' color='#fff'/>
                    <p>Logout</p>
                </li>
            </ul>
        </nav>
    )
}

export default class Layout extends Component {
    render() {
        return (
            <div className={styles.layout}>
                <NavDrawer />
                <div className={styles.underlay} />
                <div className={styles.right}>
                    <TopBar />
                    <main>
                        {this.props.children}
                    </main>
                </div>
            </div>
        )
    }
}
