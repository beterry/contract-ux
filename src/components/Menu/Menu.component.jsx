import React, { Component } from 'react'

//import styles
import styles from './Menu.module.scss'

//import icons
import {MdMoreVert} from 'react-icons/md'

//dropdown menu
function Dropdown() {
    return(
        <ul className={styles.dropdown}>
            <li>View Artwork</li>
            <li>View Mail Area</li>
        </ul>
    )
}

//renders button
//state.menuOpen determines wheter to render menu
export default class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {menuOpen: false}
        this.openMenu = this.openMenu.bind(this)
        this.closeMenu = this.closeMenu.bind(this)
    }

    openMenu() {
        if (!this.state.menuOpen) {
            this.setState({menuOpen: true})
        }
    }

    closeMenu() {
        document.removeEventListener('click', this.closeMenu)
        this.setState({menuOpen: false})
    }

    //prevent memory leak if back button is pressed while menu is open
    componentWillUnmount() {
        document.removeEventListener('click', this.closeMenu)
        this.setState({menuOpen: false})
    }
    
    render() {
        //if menu is open -> any click will dismiss
        if(this.state.menuOpen){
            document.addEventListener('click', this.closeMenu)
        }
        return (
            <div className={styles.menu}>
                <button
                    className='button__icon'
                    onClick={this.openMenu}
                >
                    <MdMoreVert size='1.5rem'/>
                </button>
                {/* conditionally render menu */}
                {this.state.menuOpen ? 
                    <Dropdown />:
                    null
                }
            </div>
        )
    }
}
