import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

//import styles
import styles from './Details.module.scss'

//import icons
import {MdArrowForward, MdReceipt, MdFileDownload, MdClose} from 'react-icons/md'


//param: array
//adds together item totals
const getTotal = (items) => {
    let total = 0
    items.forEach((item) => total += item.total)
    return total
}

function List(props) {
    return (
        <li className={styles.detail}>
            {props.children}
        </li>
    )
}

function Campaigns({campaigns}) {
    return (
        <div className={styles.campaigns}>
            {campaigns.map((campaign, index) => 
                <Card
                    product={campaign.product}
                    start={moment(campaign.start).format("MM/DD/YY")}
                    end={moment(campaign.end).format("MM/DD/YY")}
                    artwork={campaign.artwork}
                    campaignNumber={index + 1}
                    key={`${index} ${campaign.product}`}
                />
            )}
        </div>
    )
}

class Invoices extends Component {
    constructor(props){
        super(props)
        this.state = {
            sheet: false,
            items: [],
            invoiceDate: moment(new Date(2020, 5, 3)).format('MMMM Do, YYYY')
        }
        this.closeSheet = this.closeSheet.bind(this)
        this.openSheet = this.openSheet.bind(this)
    }

    openSheet(items, invoiceDate, e) {
        this.setState({
            sheet: true,
            items,
            invoiceDate
        })
    }

    closeSheet() {
        this.setState({sheet: false})
    }

    render() {

        const invoices = this.props.invoices

        return (
            <>
                <div className={styles.invoices}>
                    <ul>
                        {/*
                            if there are invoices, render a li for each
                            else, give a message
                        */}
                        {invoices.length !== 0 ?
                            invoices.map((invoice) => 
                                <li
                                    key={invoice.date.toDateString()}
                                    onClick={(e) => this.openSheet(invoice.items, moment(invoice.date).format('MMMM Do, YYYY'), e)}
                                >
                                    <div className={styles.invoices__icon}>
                                        <MdReceipt size='1.5rem' />
                                    </div>
                                    <div className={styles.invoices__row}>
                                        <h3>{moment(invoice.date).format("MM/DD/YY")}</h3>
                                        <p>{numeral(getTotal(invoice.items)).format("$0.00")}</p>
                                    </div>
                                </li>
                            ):
                            <p className={styles.invoices__none}>No Paid Invoices</p>
                        }
                    </ul>
                </div>
                <InvoiceSheet
                    open={this.state.sheet}
                    closeSheet={this.closeSheet}
                    items={this.state.items}
                    date={this.state.invoiceDate}
                /> 
            </>
        )
    }
    
}

function InvoiceSheet({closeSheet, items, date, open}) {
    return(
        <>
        {open ? 
            <div
                className={styles.sheet__overlay}
                onClick={closeSheet}
            /> :
            null
        }
         <div className={`${styles.sheet} ${open ? styles.sheet__active : null}`}>
             <h1>{`Invoice on ${date}`}</h1>
             <ul>
                {items.map((item, index) => 
                    <li key={index}>
                        <p>{item.product}</p>
                        <p>{`$${item.total}`}</p>
                        <div>
                            <button>
                                <MdFileDownload size='1.5rem' color='#FF8C00'/>
                            </button>
                        </div>
                    </li>
                )}
                {items.length > 1 ?
                    <li className={styles.sheet__total}>
                        <p>Total</p>
                        <p>{`$${getTotal(items)}`}</p>
                    </li> :
                    null
                }
            </ul>
            <div className={styles.sheet__close}>
                <button
                    onClick={closeSheet}
                >
                    <MdClose size='1.5rem' color='#fff'/>
                </button>
            </div>
            
         </div>
         </>
    )
}

function Card({product, start, end, artwork, campaignNumber}) {
    return (
        <div className={styles.card}>
            <div className={styles.card__imgContainer}>
                <img src={`/artwork/${artwork}`} alt={product}/>
            </div>
            <div className={styles.card__content}>
                <h6>{`Campaign ${campaignNumber}`}</h6>
                <h3>{product}</h3>
                <div className={styles.card__dateRange}>
                    <p>{start}</p>
                    <MdArrowForward size='1.5rem'/>
                    <p>{end}</p>
                </div>
                <div className={styles.card__buttons}>
                    <button className='button__text'>Artwork</button>
                    <button className='button__text'>Map</button>
                </div>
            </div>
        </div>
    )
}

class Tabs extends Component {
    constructor(props){
        super(props)
        this.state = {activeTab: 2}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(tabNumber, e) {
        e.preventDefault()
        if(this.state.activeTab === tabNumber){
            return
        }
        this.setState({activeTab: tabNumber})
    }

    render() {
        return (
            <div>
                <nav className={styles.tabs}>
                    <button
                        className={this.state.activeTab === 1 ? styles.tab__active : styles.tab__inactive}
                        onClick={(e) => this.handleClick(1, e)}
                    >
                        Campaigns
                    </button>
                    <button
                        className={this.state.activeTab === 2 ? styles.tab__active : styles.tab__inactive}
                        onClick={(e) => this.handleClick(2, e)}
                    >
                        Paid Invoices
                    </button>
                </nav>
                <div>
                    {this.state.activeTab === 1 ?
                        <Campaigns campaigns={this.props.campaigns} /> :
                        <Invoices invoices={this.props.invoices}/>}
                </div>
            </div>
        )
    }
}

function getAction(status) {
    switch(status) {
        case 'active':
            return 'See Current Cycle'
        case 'requires action':
            return 'Approve Contract'
        default:
            return false
    }
}

function Details (props) {
    //reads URL param and sets contract based on id
    const contract = props.contracts[props.match.params.contractId]
    return (
        <div className={styles.details}>
            <div className={styles.left}>
                <List>
                    <h6>Contract Name</h6>
                    <h2>{contract.name}</h2>
                </List>
                <List>
                    <h6>Business</h6>
                    <h2>{contract.business}</h2>
                </List>
                <List>
                    <h6>Starting</h6>
                    <h2>{moment(contract.starting).format("MMMM Do, YYYY")}</h2>
                </List>
                <List>
                    <h6>Ending</h6>
                    <h2>{moment(contract.ending).format("MMMM Do, YYYY")}</h2>
                </List>
                <List>
                    <h6>Quantity</h6>
                    <h2>{numeral(contract.quantity).format("0,0")}</h2>
                </List>
                <List>
                    <h6>Status</h6>
                    <h2 className='capitalize'>{contract.status}</h2>
                </List>
                {getAction(contract.status) ? <button className='button__contained'>{getAction(contract.status)}</button> : undefined}
            </div>
            <div className={styles.right}>
                <Tabs 
                    campaigns={contract.campaigns}
                    invoices={contract.invoices}
                />
            </div>
        </div>
    )
}

export default withRouter(Details)