import React, { Component } from 'react'

//import styles
import styles from './ContractList.module.scss'

//import components
import Contract from '../../components/lists/Contract/Contract.component'

//import libraries
import moment from 'moment'

//filter sort function for setting state
const filterStatus = (contracts, status) => {
    let filteredArray = contracts.filter(contract => contract.status === status)
    filteredArray.sort((a,b) => b.starting.getTime() - a.starting.getTime())
    return filteredArray
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
                    <h6 className={styles.requiresAction}>Requires Action</h6>
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
                    <h6 className={styles.active}>Active</h6>
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
