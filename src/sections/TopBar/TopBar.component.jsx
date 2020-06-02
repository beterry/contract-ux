import React, { Component } from 'react'

//import styles
import styles from './TopBar.module.scss'

export default class TopBar extends Component {
    render() {
        return (
            <nav className={styles.topBar}>
                <h1>Contracts</h1>
            </nav>
        )
    }
}
