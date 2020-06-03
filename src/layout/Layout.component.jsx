import React, { Component } from 'react'

//import styles
import styles from './Layout.module.scss'

//import sections
import NavDrawer from '../sections/NavDrawer/NavDrawer.component'
import TopBar from '../sections/TopBar/TopBar.component'

export default class Layout extends Component {
    render() {
        return (
            <div className={styles.layout}>
                <NavDrawer />
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
