import React from 'react'
import {Switch, Route, useHistory} from 'react-router-dom'

//import styles
import styles from './TopBar.module.scss'

//import icons
import {MdMenu, MdFileDownload, MdArrowBack} from 'react-icons/md'

export default function TopBar() {
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
                        <button className='button__icon'>
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
