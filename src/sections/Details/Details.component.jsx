import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

//import styles
import styles from './Details.module.scss'

//import icons
import {MdImage, MdMap, MdExpandMore, MdFileDownload} from 'react-icons/md'

//components
import Status from '../../components/Status/Status.component'

//param: array
//adds together item totals
const getTotal = (items) => {
    let total = 0
    items.forEach((item) => total += item.total)
    return numeral(total).format("$0.00")
}

function ActionButtons({status}) {
    return(
        <section className={styles.actions}>
            {status === 1 ? <button className='button__contained'>Current Cycle</button> : null}
            {status === 0 ? <button className='button__contained'>Approve Contract</button> : null}
            {status === 2 ? <button className='button__contained'>Renew Contract</button> : null}
            <button className='button__text'>Download</button>
        </section>
    )
}

function Stat({title, value}) {
    return(
        <div className={styles.stat}>
            <h6>{title}</h6>
            <h3>{value}</h3>
        </div>
    )
}

function Stats({business, starting, ending, quantity}) {
    return(
        <section className={styles.stat__container}>
            <Stat title='business' value={business} />
            <Stat title='starting' value={starting} />
            <Stat title='ending' value={ending} />
            <Stat title='quantity' value={quantity} />
        </section>
    )
}

function CampaignRow({number, product, start, end, weeks, status}) {
    let statusClass = ''
    let statusString = ''
    switch(status) {
        case 0:
            statusString = 'Pending Artwork'
            statusClass = 'text__orange'
            break
        case 1:
            statusString = 'Active'
            statusClass = 'text__green'
            break
        default:
            statusString = 'Completed'
            statusClass = 'text__gray'
            break
    }
    return(
        <tr>
            <td>{number}</td>
            <td>{product}</td>
            <td>{start}</td>
            <td>{end}</td>
            <td>{weeks}</td>
            <td className={statusClass}>
                {statusString}
            </td>
            <td className={styles.col__buttons}>
                {status !== 0 ? <button className='button__icon'><MdImage size='1.5rem'/></button> : null}
                <button className='button__icon'><MdMap size='1.5rem'/></button>
            </td>
        </tr>
    )
}

function CampaignTable({campaigns}) {
    return(
        <section className={styles.table__campaign}>
            <h2>Campaigns</h2>
            <table>
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                </colgroup>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Weeks</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {campaigns.map((campaign, index) => 
                        <CampaignRow
                            number={index + 1}
                            product={campaign.product}
                            start={moment(campaign.start).format('MM/DD/YY')}
                            end={moment(campaign.end).format('MM/DD/YY')}
                            weeks={campaign.weeks}
                            status={campaign.status}
                            key={`campaign__${index}`}
                        />
                    )}
                </tbody>
            </table>
        </section>
    )
}

function ItemRows({items}) {
    return(
        <>
        {items.map((item, index) => 
            <tr
                key={index}
                className='text__gray'
            >
                <td className={styles.cell__product}>{item.product}</td>
                <td>{numeral(item.total).format("$0.00")}</td>
                <td className={styles.col__buttons}>
                    <button
                        className='button__icon'
                    >
                        <MdFileDownload size='1.5rem'/>
                    </button>
                </td>
            </tr>
        )}
        </>
    )
}

class InvoiceRow extends Component {
    constructor(props){
        super(props)
        this.state = {open: false}
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({open: this.state.open ? false : true})
    }
    render() {
        return(
            <>
                <tr>
                    <td>{this.props.date}</td>
                    <td>{getTotal(this.props.items)}</td>
                    <td className={styles.col__buttons}>
                        <button
                            className={`button__icon ${this.state.open ? 'flipped' : null}`}
                            onClick={this.handleClick}
                        >
                            <MdExpandMore size='1.5rem'/>
                        </button>
                    </td>
                </tr>
                {this.state.open ? <ItemRows items={this.props.items}/> : null}
            </>
        )
    }
}

function InvoiceTable({invoices}) {
    return(
        <section className={styles.table__invoices}>
            <h2>Recent Invoices</h2>
            <table>
                <colgroup>
                    <col />
                    <col />
                    <col />
                </colgroup>
                <thead>
                    <tr>
                        <th>Paid</th>
                        <th>Amount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map((invoice, index) => 
                        <InvoiceRow
                            date={moment(invoice.date).format("MM/DD/YY")}
                            items={invoice.items}
                            key={`invoice__${index}`}
                        />
                    )}
                </tbody>
            </table>
        </section>
    )
}

function Details(props) {
    //reads URL param and sets contract based on id
    const contract = props.contracts[props.match.params.contractId]
    return(
        <div className={styles.details}>
            <section className={styles.details__title}>
                <h1>{contract.name}</h1>
                <Status status={contract.status} />
            </section>
            <ActionButtons status={contract.status}/>
            <Stats 
                business={contract.business}
                starting={moment(contract.starting).format("MMMM Do, YYYY")}
                ending={moment(contract.ending).format("MMMM Do, YYYY")}
                quantity={numeral(contract.quantity).format("0,0")}
            />
            <CampaignTable campaigns={contract.campaigns} />
            <InvoiceTable invoices={contract.invoices}/>
        </div>
    )
}

export default withRouter(Details)