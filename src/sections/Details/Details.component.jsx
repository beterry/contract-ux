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
import Menu from '../../components/Menu/Menu.component'

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
            <div className={styles.stat_icon}>{children}</div>
            <h3>{value}</h3>
            <h6>{title}</h6>
        </div>
    )
}

function Stats({business, starting, ending, quantity}) {
    return(
        <section className={styles.stats_container}>
            <Stat title='business' value={business}><MdStore size='1.5rem'/></Stat>
            <Stat title='invoicing starts' value={starting}><MdToday size='1.5rem'/></Stat>
            <Stat title='invoicing ends' value={ending}><MdEvent size='1.5rem'/></Stat>
            <Stat title='quantity' value={quantity}><MdLocalShipping size='1.5rem'/></Stat>
        </section>
    )
}

function CampaignList({campaigns}) {
    return(
        <ul className={styles.list_campaigns}>
            {/* header row */}
            <li className={styles.header_campaigns}>
                <h6 className={styles.campaign_number}>#</h6>
                <div className={styles.row_inner_campaign}>
                    <h6 className={styles.col_product}>product</h6>
                    <h6 className={styles.col_start}>starting</h6>
                </div>
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
        <li className={`${styles.row}`}>
            <h3 className={styles.campaign_number}>{number}</h3>
            <div className={styles.row_inner_campaign}>
                <h3 className={styles.col_product}>{product}</h3>
                <p className={styles.col_start}>{start}</p>
            </div>
            <div className={styles.button_dots}>
                <Menu />
            </div>
            <div className={styles.button_actions}>
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
                className={styles.row}
                key={index}
            >
                <div className={styles.row_inner_item}>
                    <p className={styles.col_item}>{item.product}</p>
                    <p className={styles.col_cost}>{numeral(item.total).format("$0.00")}</p>
                </div>
                <div className={styles.button_download}>
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
                    <div className={styles.row_inner_invoice}>
                        <h3 className={styles.col_total}>{getTotal(this.props.items)}</h3>
                        <p className={styles.col_paid}>{this.props.date}</p>
                    </div>
                    <div className={styles.button_expand}>
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

function InvoiceList({invoices}) {
    return(
        <>
            <ul className={styles.list_invoices}>
                {/* header row */}
                <li className={styles.header_invoices}>
                    <h6 className={styles.col_total}>amount</h6>
                    <h6 className={styles.col_paid}>paid</h6>
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

function Tables({campaigns, invoices, starting}) {
    return(
        <section className={styles.tables_container}>
            <div>
                <h2>Campaigns</h2>
                <CampaignList campaigns={campaigns} />
            </div>
            <div>
                <h2>Recent Invoices</h2>
                {invoices.length !== 0 ?
                    <InvoiceList invoices={invoices} /> :
                    <p className={styles.table_empty}>{`No recent invoices. Invoicing starts: ${starting}`}</p>
                }
                
            </div>
        </section>
    )
}

function Details(props) {
    //reads URL param and sets contract based on id
    const contract = props.contracts[props.match.params.contractId]
    return(
        <div className={styles.container}>
            <section className={styles.title_container}>
                <div className={styles.title_left}>
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
            {/* <DetailTabs
                campaigns={contract.campaigns}
                invoices={contract.invoices}
                starting={moment(contract.starting).format("MM/DD/YY")}
            /> */}
            <Tables
                campaigns={contract.campaigns}
                invoices={contract.invoices}
                starting={moment(contract.starting).format("MM/DD/YY")}
            />
        </div>
    )
}

export default withRouter(Details)