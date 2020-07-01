import React, { Component } from 'react'
import {Link, Switch, Route, useHistory} from 'react-router-dom'

//import styles
import styles from './Layout.module.scss'

//import images
import logo from '../images/logo.svg'
import fav from '../images/favicon.svg'

//import icons
import {
    MdDashboard,
    MdDescription,
    MdEvent,
    MdPublish,
    MdPeople,
    MdCreditCard,
    MdPowerSettingsNew,
    MdMenu,
    MdFileDownload,
    MdArrowBack
} from 'react-icons/md'

function NavDrawer({isOpen}) {
    return (
        <nav className={isOpen ? styles.navDrawer__open : styles.navDrawer__closed}>
            <div className={styles.logo}>
                <img src={isOpen ? logo : fav} alt='Mail Shark' />
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

function TopBar({toggleMenu}) {
    let history = useHistory()
    function handleClick() {
        history.push('/contracts')
    }
    return (
        <nav className={styles.topBar}>
            <div>
                {/* Back Button */}
                <Switch>
                    <Route path="/contracts/:contractId">
                        <button
                            className='button__icon'
                            onClick={handleClick}
                        >
                            <MdArrowBack 
                                color='#fff'
                                size='1.5rem'
                            />
                        </button>
                    </Route>
                    <Route path="/contracts">
                        <button
                            className='button__icon'
                            onClick={toggleMenu}
                        >
                            <MdMenu 
                                color='#fff'
                                size='1.5rem'
                            />
                        </button>
                    </Route>
                </Switch>

                {/* Title */}
                <Switch>
                    <Route path="/contracts/:contractId">
                        <h5>Contract Details</h5>
                    </Route>
                    <Route path="/contracts">
                        <h5>Contracts</h5>
                    </Route>
                </Switch>
            </div>
            <div>
                <Switch>
                    <Route path="/contracts/:contractId">
                        <button className='button__icon'>
                            <MdFileDownload 
                                color='#fff'
                                size='1.5rem'
                            />
                        </button>
                    </Route>
                </Switch>
                
            </div>
        </nav>
    )
}

export default class Layout extends Component {
    constructor(props){
        super(props)
        this.state = {drawerOpen: true}
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu() {
        this.setState(state => ({
            drawerOpen: !state.drawerOpen
        }))
    }

    render() {
        return (
            <div className={styles.layout}>
                <NavDrawer isOpen={this.state.drawerOpen}/>
                <div className={this.state.drawerOpen ? styles.right__open : styles.right__closed}>
                    <TopBar toggleMenu={this.toggleMenu}/>
                    <main>
                        {this.props.children}
                    </main>
                </div>
            </div>
        )
    }
}
