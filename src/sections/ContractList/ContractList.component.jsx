import React, { Component } from 'react'
import {Link} from 'react-router-dom'

//import styles
import styles from './ContractList.module.scss'

//import libraries
import moment from 'moment'

//filter sort function for setting state
const filterStatus = (contracts, status) => {
    let filteredArray = contracts.filter(contract => contract.status === status)
    filteredArray.sort((a,b) => b.starting.getTime() - a.starting.getTime())
    return filteredArray
}

function Contract({name, business, quantity, starting, id}) {
    return (
        <Link to={`/contracts/${id}`}>
            <li className={styles.contract}>
                <div>
                    <h2>{name}</h2>
                    <p>{business}</p>
                    <p>{quantity}</p>
                </div>
                <div>
                    <p>{starting}</p>
                </div>
            </li>
        </Link>
    )
}

export default class ContractList extends Component {
    constructor(props){
        super(props)
        this.state = {
            //calls filterStatus function to filter and sort
            requiresAction: filterStatus(Object.values(this.props.contracts), "requires action"),
            active: filterStatus(Object.values(this.props.contracts), "active")
        }
    }
   
    render() {
        console.log(this.state.requiresAction)
        console.log(this.state.active)
        return (
            <section className={styles.contractList}>
                <div>
                    <h5 className={styles.requiresAction}>Requires Action</h5>
                    <ul>
                        {this.state.requiresAction.map(contract => 
                            <Contract 
                                name={contract.name}
                                business={contract.business}
                                quantity={contract.quantity}
                                starting={moment(contract.starting).format("M/D/YYYY")}
                                key={contract.id}
                                id={contract.id}
                            />
                        )}
                    </ul>
                    <h5 className={styles.active}>Active</h5>
                    <ul>
                        {this.state.active.map(contract => 
                            <Contract 
                                name={contract.name}
                                business={contract.business}
                                quantity={contract.quantity}
                                starting={moment(contract.starting).format("M/D/YYYY")}
                                key={contract.id}
                                id={contract.id}
                            />
                        )}
                    </ul>
                </div>
            </section>
        )
    }
}
