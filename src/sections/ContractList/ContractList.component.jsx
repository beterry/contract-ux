import React, { Component } from 'react'
import {Link} from 'react-router-dom'

//import styles
import styles from './ContractList.module.scss'

//import libraries
import moment from 'moment' //for formatting dates
import numeral from 'numeral' //for formatting numbers

//import components
import Status from '../../components/Status/Status.component'

//import icons
import {MdChevronRight, MdArrowDownward, MdArrowDropDown} from 'react-icons/md'

//row in the list
function Contract({name, business, quantity, starting, status, id}) {
    return (
        <Link to={`/contracts/${id}`}>
            <li className={styles.contract}>
                <div className={styles.row_inner__contract}>
                    <div className={styles.col_name}><h3>{name}</h3></div>
                    <div className={styles.col_starting}><p>{starting}</p></div>
                    <div className={styles.col_business}><p>{business}</p></div>
                    <div className={styles.col_quantity}><p>{quantity}</p></div>
                </div>
                <div className={styles.col_status}>
                    <Status status={status} />
                    <MdChevronRight size='1.5rem' />
                </div>
            </li>
        </Link>
    )
}

//sorting dropdown menu on mobile screens
//props.children is the menu which is toggled based on menuOpen
class SortDropdown extends Component{
    constructor(props){
        super(props)
        this.state = {
            menuOpen: false
        }
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

    //prevent memory leak if contract is clicked when the menu is open
    componentWillUnmount() {
        document.removeEventListener('click', this.closeMenu)
        this.setState({menuOpen: false})
    }

    render() {
        //sets event listener so any click closes the menu
        if(this.state.menuOpen){
            document.addEventListener('click', this.closeMenu)
        }
        let sortText = ''
        //determine the text displayed to the user
        switch(this.props.sort){
            case 'dateDesc':
                sortText = 'Most Recent'
                break
            case 'dateAsc':
                sortText = 'Oldest'
                break
            case 'nameDesc':
                sortText = 'Name: A-Z'
                break
            case 'nameAsc':
                sortText = 'Name: Z-A'
                break
            case 'busDesc':
                sortText = 'Business: A-Z'
                break
            case 'busAsc':
                sortText = 'Business: Z-A'
                break
            default:
                sortText = 'Default'
        }
        return (
            <div className={styles.dropdown_container}>
                <p>Sort by</p>
                <button
                    className={styles.button_dropdown}
                    onClick={this.openMenu}
                >
                    <p>{sortText}</p>
                    <MdArrowDropDown size='1.5rem'/>
                </button>
                {this.state.menuOpen ? this.props.children : null}
            </div>
        )
    }
}

export default function ContractList ({
    sortedContracts,
    changeSort,
    toggleCompleted,
    sort,
    showCompleted,
    numberCompleted
}) {
    return (
        <section className={styles.list_contracts}>
            {/* sorting dropdown renders on mobile screens */}
            <SortDropdown sort={sort}>
                <ul className={styles.dropdown}>
                    <button onClick={(e) => changeSort('dateDesc', e)}>Most Recent</button>
                    <button onClick={(e) => changeSort('dateAsc', e)}>Oldest</button>
                    <button onClick={(e) => changeSort('nameDesc', e)}>Name: A-Z</button>
                    <button onClick={(e) => changeSort('nameAsc', e)}>Name: Z-A</button>
                    <button onClick={(e) => changeSort('busDesc', e)}>Business: A-Z</button>
                    <button onClick={(e) => changeSort('busAsc', e)}>Business: Z-A</button>
                </ul>
            </SortDropdown>
            {/* start of contract list */}
            <ul>
                {/* header row with buttons for sorting on desktop screens */}
                <li className={styles.header}>
                    <button
                        className={`${styles.col_name} ${styles.button_header}`}
                        onClick={
                            sort === 'nameDesc' ?
                            (e) => changeSort('nameAsc', e) :
                            (e) => changeSort('nameDesc', e)
                        }
                    >
                        <h6>name</h6>
                        {
                            /* conditionally render arrow */
                            sort === 'nameDesc' ||
                            sort === 'nameAsc'
                            ? <MdArrowDownward size='1rem' className={`${styles.sortArrow} ${sort === 'nameAsc' ? 'flipped' : null}`}/>
                            : null
                        }
                    </button>
                    <button
                        className={`${styles.col_starting} ${styles.button_header}`}
                        onClick={
                            sort === 'dateDesc' ?
                            (e) => changeSort('dateAsc', e) :
                            (e) => changeSort('dateDesc', e)
                        }
                    >
                        <h6>starting</h6>
                        {
                            /* conditionally render arrow */
                            sort === 'dateDesc' ||
                            sort === 'dateAsc'
                            ? <MdArrowDownward size='1rem' className={`${styles.sortArrow} ${sort === 'dateAsc' ? 'flipped' : null}`}/>
                            : null
                        }
                    </button>
                    <button
                        className={`${styles.col_business} ${styles.button_header}`}
                        onClick={
                            sort === 'busDesc' ?
                            (e) => changeSort('busAsc', e) :
                            (e) => changeSort('busDesc', e)
                        }
                    >
                        <h6>business</h6>
                        {
                            /* conditionally render arrow */
                            sort === 'busDesc' ||
                            sort === 'busAsc'
                            ? <MdArrowDownward size='1rem' className={`${styles.sortArrow} ${sort === 'busAsc' ? 'flipped' : null}`}/>
                            : null
                        }
                    </button>
                    <button
                        className={`${styles.col_quantity} ${styles.button_header}`}
                        onClick={
                            sort === 'quantityDesc' ?
                            (e) => changeSort('quantityAsc', e) :
                            (e) => changeSort('quantityDesc', e)
                        }
                    >
                        {
                            /* conditionally render arrow */
                            sort === 'quantityDesc' ||
                            sort === 'quantityAsc'
                            ? <MdArrowDownward size='1rem' className={`${styles.sortArrow} ${sort === 'quantityAsc' ? 'flipped' : null}`}/>
                            : null
                        }
                        <h6>quantity</h6>
                    </button>
                    <div className={styles.col_status} />
                </li>
                {/* loop over array of contracts and render a row for each */}
                {sortedContracts.map(contract => 
                    <Contract 
                        name={contract.name}
                        business={contract.business}
                        quantity={numeral(contract.quantity).format("0,0")}
                        starting={moment(contract.starting).format("MM/DD/YY")}
                        status={contract.status}
                        key={contract.id}
                        id={contract.id}
                    />
                )}
            {/* end of contract list */}
            </ul>
            {/* button shows completed */}
            <button
                className='button__text'
                onClick={toggleCompleted}
            >
                {showCompleted ? `Hide Completed (${numberCompleted})` : `Show Completed (${numberCompleted})`}
            </button>
        </section>
    )
}
