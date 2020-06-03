import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Details extends Component {
    render() {
        const contracts = this.props.contracts
        const id = this.props.match.params.contractId
        return (
            <div>
                <p>{contracts[id].name}</p>
            </div>
        )
    }
}

export default withRouter(Details)