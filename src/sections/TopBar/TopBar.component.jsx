import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

//import styles
import styles from './TopBar.module.scss'

//import icons
import {MdMenu, MdFilterList, MdStore, MdFileDownload} from 'react-icons/md'

export default class TopBar extends Component {
    render() {
        return (
            <nav className={styles.topBar}>
                <div>
                    <button>
                        <MdMenu 
                            color='#fff'
                            size='1.5rem'
                        />
                    </button>
                    
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
                    {/* Buttons */}
                    <Switch>
                        <Route path="/contracts/:contractId">
                            <button>
                                <MdFileDownload 
                                    color='#fff'
                                    size='1.5rem'
                                />
                            </button>
                        </Route>
                        <Route path="/contracts">
                            <button>
                                <MdFilterList 
                                    color='#fff'
                                    size='1.5rem'
                                />
                            </button>
                            <button>
                                <MdStore 
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
}
