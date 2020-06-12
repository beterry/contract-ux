import React, { Component } from 'react'
import {Link} from 'react-router-dom'

//import styles
import styles from './ContractList.module.scss'

//import libraries
import moment from 'moment'

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
            contracts: Object.values(this.props.contracts)
        }
    }
   
    render() {
        return (
            <section className={styles.contractList}>
                <ul>
                    {this.state.contracts.map(contract => 
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
            </section>
        )
    }
}
