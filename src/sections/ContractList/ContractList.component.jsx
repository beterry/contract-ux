import React, { Component } from 'react'
import {Link} from 'react-router-dom'

//import styles
import styles from './ContractList.module.scss'

//import libraries
import moment from 'moment'
import numeral from 'numeral'

//import components
import Status from '../../components/Status/Status.component'

//import icons
import {MdChevronRight, MdArrowDownward} from 'react-icons/md'

//import utility fubction
import sortContracts from '../../utility/sortContracts'

function Contract({name, business, quantity, starting, status, id}) {
    return (
        <Link to={`/contracts/${id}`}>
            <li className={styles.contract}>
                <div className={styles.left}>
                    <div className={styles.col__name}><h3>{name}</h3></div>
                    <div className={styles.col__starting}><p>{starting}</p></div>
                    <div className={styles.col__business}><p>{business}</p></div>
                    <div className={styles.col__quantity}><p>{quantity}</p></div>
                </div>
                <div className={styles.right}>
                    <Status status={status} />
                    <button className='button__icon'><MdChevronRight size='1.5rem' /></button>
                </div>
            </li>
        </Link>
    )
}

export default class ContractList extends Component {
    constructor(props){
        super(props)
        this.state = {
            allContracts: Object.values(this.props.contracts),
            showCompleted: false,
            sort: 'dateDesc'
        }
        this.toggleCompleted = this.toggleCompleted.bind(this)
    }

    toggleCompleted() {
        this.setState((state, props) => ({showCompleted: !state.showCompleted}))
    }

    changeSort(newSort, e) {
        if(this.state.sort === newSort) {
            switch(newSort) {
                case 'dateDesc':
                    this.setState({sort: 'dateAsc'})
                    break
                case 'quantityDesc':
                    this.setState({sort: 'quantityAsc'})
                    break
                case 'nameDesc':
                    this.setState({sort: 'nameAsc'})
                    break
                case 'busDesc':
                    this.setState({sort: 'busAsc'})
                    break
                default:
                    this.setState({sort: 'dateDesc'})
                    break
            }
            return
        }
        this.setState({sort: newSort})
    }
   
    render() {
        let sortedContracts = this.state.allContracts
        //filter out completed
        if (!this.state.showCompleted) {
            sortedContracts = sortedContracts.filter((contract) => contract.status !== 2)
        }
        // function to sort array based on state
        sortedContracts = sortContracts(this.state.sort, sortedContracts)
        return (
            <section className={styles.contractList}>
                <ul>
                    <li className={styles.header}>
                        <div className={styles.left}>
                            <button
                                className={`${styles.col__name} ${styles.th}`}
                                onClick={(e) => this.changeSort('nameDesc', e)}
                            >
                                <h6>name</h6>
                                {
                                    /* conditionally render arrow */
                                    this.state.sort === 'nameDesc' ||
                                    this.state.sort === 'nameAsc'
                                    ? <MdArrowDownward size='1rem' className={`${styles.sortArrow} ${this.state.sort === 'nameAsc' ? 'flipped' : null}`}/>
                                    : null
                                }
                            </button>
                            
                            <button
                                className={`${styles.col__starting} ${styles.th}`}
                                onClick={(e) => this.changeSort('dateDesc', e)}
                            >
                                <h6>starting</h6>
                                {
                                    /* conditionally render arrow */
                                    this.state.sort === 'dateDesc' ||
                                    this.state.sort === 'dateAsc'
                                    ? <MdArrowDownward size='1rem' className={`${styles.sortArrow} ${this.state.sort === 'dateAsc' ? 'flipped' : null}`}/>
                                    : null
                                }
                            </button>

                            <button
                                className={`${styles.col__business} ${styles.th}`}
                                onClick={(e) => this.changeSort('busDesc', e)}
                            >
                                <h6>business</h6>
                                {
                                    /* conditionally render arrow */
                                    this.state.sort === 'busDesc' ||
                                    this.state.sort === 'busAsc'
                                    ? <MdArrowDownward size='1rem' className={`${styles.sortArrow} ${this.state.sort === 'busAsc' ? 'flipped' : null}`}/>
                                    : null
                                }
                            </button>

                            <button
                                className={`${styles.col__quantity} ${styles.th}`}
                                onClick={(e) => this.changeSort('quantityDesc', e)}
                            >
                                {
                                    /* conditionally render arrow */
                                    this.state.sort === 'quantityDesc' ||
                                    this.state.sort === 'quantityAsc'
                                    ? <MdArrowDownward size='1rem' className={`${styles.sortArrow} ${this.state.sort === 'quantityAsc' ? 'flipped' : null}`}/>
                                    : null
                                }
                                <h6>quantity</h6>
                                
                            </button>
                        </div>
                    </li>
                    {sortedContracts.map(contract => 
                        <Contract 
                            name={contract.name}
                            business={contract.business}
                            quantity={numeral(contract.quantity).format("0,0")}
                            starting={moment(contract.starting).format("MM/DD/YYYY")}
                            status={contract.status}
                            key={contract.id}
                            id={contract.id}
                        />
                    )}
                </ul>
                <button
                    className='button__text'
                    onClick={this.toggleCompleted}
                >
                    {this.state.showCompleted ? 'Hide Completed (15)' : 'Show Completed (15)'}
                </button>
            </section>
        )
    }
}
