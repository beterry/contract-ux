import React from 'react'
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
            <ul>
                <li className={styles.header}>
                    <button
                        className={`${styles.col_name} ${styles.button_header}`}
                        onClick={(e) => changeSort('nameDesc', e)}
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
                        onClick={(e) => changeSort('dateDesc', e)}
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
                        onClick={(e) => changeSort('busDesc', e)}
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
                        onClick={(e) => changeSort('quantityDesc', e)}
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
            </ul>
            <button
                className='button__text'
                onClick={toggleCompleted}
            >
                {showCompleted ? `Hide Completed (${numberCompleted})` : `Show Completed (${numberCompleted})`}
            </button>
        </section>
    )
}
