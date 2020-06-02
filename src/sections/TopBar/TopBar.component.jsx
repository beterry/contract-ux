import React, { Component } from 'react'

//import styles
import styles from './TopBar.module.scss'

//import icons
import {MdMenu, MdFilterList, MdStore} from 'react-icons/md'

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
                    <h1>Contracts</h1>
                </div>
                <div>
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
                </div>
            </nav>
        )
    }
}
