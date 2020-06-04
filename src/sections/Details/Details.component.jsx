import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import moment from 'moment'

//import styles
import styles from './Details.module.scss'

//import icons
import {MdArrowForward} from 'react-icons/md'

function List(props) {
    return (
        <li className={styles.detail}>
            {props.children}
        </li>
    )
}

function Campaigns({campaigns}) {
    return (
        <div className={styles.campaignGrid}>
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
        this.state = {activeTab: 1}
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
                        <p>Paid Invoices</p>}
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
                    <h2>{contract.quantity}</h2>
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