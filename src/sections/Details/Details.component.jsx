import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

//import styles
import styles from './Details.module.scss'

//import icons
import {
    MdImage,
    MdMap,
    MdExpandMore,
    MdFileDownload,
    MdStore,
    MdEvent,
    MdToday,
    MdLocalShipping
} from 'react-icons/md'

//components
import Status from '../../components/Status/Status.component'

//param: array
//adds together item totals
const getTotal = (items) => {
    let total = 0
    items.forEach((item) => total += item.total)
    return numeral(total).format("$0.00")
}

function ActionButton({status}) {
    return(
        <div className={styles.action}>
            {status === 1 ? <button className='button__contained'>Current Cycle</button> : null}
            {status === 0 ? <button className='button__contained'>Approve Contract</button> : null}
            {status === 2 ? <button className='button__contained'>Renew Contract</button> : null}
        </div>
    )
}

function Stat({title, value, children}) {
    return(
        <div className={styles.stat}>
            <div className={styles.stat__icon}>{children}</div>
            <h3>{value}</h3>
            <h6>{title}</h6>
        </div>
    )
}

function Stats({business, starting, ending, quantity}) {
    return(
        <section className={styles.stat__container}>
            <Stat title='business' value={business}><MdStore size='1.5rem'/></Stat>
            <Stat title='invoicing starts' value={starting}><MdToday size='1.5rem'/></Stat>
            <Stat title='invoicing ends' value={ending}><MdEvent size='1.5rem'/></Stat>
            <Stat title='quantity' value={quantity}><MdLocalShipping size='1.5rem'/></Stat>
        </section>
    )
}

class DetailTabs extends Component {
    constructor(props){
        super(props)
        this.state = {openTab: 1}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(newTab){
        if (newTab === this.state.openTab){
            return
        }
        this.setState({openTab: newTab})
    }


    render() {
        let renderTab
        if (this.state.openTab === 1){
            renderTab = <CampaignList campaigns={this.props.campaigns} />
        } else{
            renderTab = <InvoiceTable invoices={this.props.invoices} />
            if(this.props.invoices.length === 0){
                renderTab = <p className={styles.noInvoices}>{`Invoices start ${this.props.starting}`}</p>
            }
        }
        return(
            <section className={styles.tabs}>
                <nav>
                    <button
                        className={this.state.openTab === 1 ? styles.tab__active : styles.tab__inactive}
                        onClick={() => this.handleClick(1)}
                    >
                        Campaigns
                    </button>
                    <button
                        className={this.state.openTab === 2 ? styles.tab__active : styles.tab__inactive}
                        onClick={() => this.handleClick(2)}
                    >
                        Paid Invoices
                    </button>
                </nav>
                {renderTab}
            </section>
        )
    }
}

function CampaignList({campaigns}) {
    return(
        <ul>
            {/* header row */}
            <li className={styles.row}>
                <h6 className={styles.col__number}>#</h6>
                <h6 className={styles.col__product}>product</h6>
                <h6 className={styles.col__start}>starting</h6>
            </li>
            {campaigns.map((campaign, index) =>
                <CampaignRow
                    number={index + 1}
                    product={campaign.product}
                    start={moment(campaign.start).format("MM/DD/YY")}
                    key={`campaign ${index + 1}`}
                />
            )}
        </ul>
    )
}

function CampaignRow({number, product, start}) {
    return(
        <li className={styles.row}>
            <p className={styles.col__number}>{number}</p>
            <h3 className={styles.col__product}>{product}</h3>
            <p className={styles.col__start}>{start}</p>
            <div className={styles.col__buttons}>
                <button className='button__icon'><MdMap size='1.5rem'/></button>
                <button className='button__icon'><MdImage size='1.5rem'/></button>
            </div>
        </li>
    )
}

function ItemRows({items}) {
    return(
        <>
        {items.map((item, index) =>
            <li
                className={`${styles.row} text__gray`}
                key={index}
            >
                <p className={styles.col__item}>{item.product}</p>
                <p className={styles.col__amount}>{numeral(item.total).format("$0.00")}</p>
                <div className={styles.col__buttons}>
                    <button
                        className='button__icon'
                    >
                        <MdFileDownload size='1.5rem'/>
                    </button>
                </div>
            </li>
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
                <li className={styles.row}>
                    <p className={styles.col__paid}>{this.props.date}</p>
                    <h3 className={styles.col__amount}>{getTotal(this.props.items)}</h3>
                    <div className={styles.col__buttons}>
                        <button
                            className={`button__icon ${this.state.open ? 'flipped' : null}`}
                            onClick={this.handleClick}
                        >
                            <MdExpandMore size='1.5rem'/>
                        </button>
                    </div>
                </li>
                {this.state.open ? <ItemRows items={this.props.items}/> : null}
            </>
        )
    }
}

function InvoiceTable({invoices}) {
    return(
        <>
            <ul className={styles.list__invoices}>
                {/* header row */}
                <li className={styles.row}>
                    <h6 className={styles.col__paid}>paid</h6>
                    <h6 className={styles.col__amount}>amount</h6>
                </li>
                {invoices.map((invoice, index) => 
                    <InvoiceRow
                        date={moment(invoice.date).format("MM/DD/YY")}
                        items={invoice.items}
                        key={`invoice__${index}`}
                    />
                )}
            </ul>
            {invoices.length >= 3 ?
                <button className='button__text'>See All Invoices</button> :
                null
            }
        </>
    )
}

function Details(props) {
    //reads URL param and sets contract based on id
    const contract = props.contracts[props.match.params.contractId]
    return(
        <div className={styles.details}>
            <section className={styles.container__title}>
                <div className={styles.title}>
                    <h1>{contract.name}</h1>
                    <Status status={contract.status} />
                </div>
                <ActionButton status={contract.status} />
            </section>
            <Stats 
                business={contract.business}
                starting={moment(contract.starting).format("MMMM Do, YYYY")}
                ending={moment(contract.ending).format("MMMM Do, YYYY")}
                quantity={numeral(contract.quantity).format("0,0")}
            />
            <DetailTabs
                campaigns={contract.campaigns}
                invoices={contract.invoices}
                starting={moment(contract.starting).format("MM/DD/YY")}
            />
        </div>
    )
}

export default withRouter(Details)