import React from 'react'
import {useHistory} from 'react-router-dom'

//import styles
import styles from './Message.module.scss'

export default function Message() {
    let history = useHistory()
    return (
        <div className={styles.message_container}>
            <section>
                <h2>Customer Portal</h2>
                <p>Mail Shark is an industry-leading direct mail and print company located in Mohnton, Pennsylvania. They offer many different services including unique, pay-weekly mailing programs and commercial printing. After enrolling in a program at Mail Shark, a customer gets access to an online portal where they can view contract details, upload files, and much more.</p>
                <p>As UI/UX Designer at Mail Shark, I was assigned to redesign the customer portal UI.</p>
            </section>
            <section>
                <h2>Contract UX</h2>
                <p>I developed the <b>Contracts</b> feature of the customer portal as a coding challenge for myself.</p>
                <p>The <b>Contracts</b> feature of the customer portal allows a customer to view the list of their active and completed mailing/printing contracts (programs). The user can click on a contract in the list and view additional information, such as campaigns in a mailing program and recent weekly invoices.</p>
                <p> To view this feature I developed, click the highlighted button in the menu or the button below.</p>
                <p>You can view the code  
                    <a 
                        href='https://github.com/beterry/contract-ux'
                        rel="noopener noreferrer"
                        target='_blank'
                    >
                        {' here.'}
                    </a>
                </p>
            </section>
            <button
                className='button__contained'
                onClick={() => history.push("/contracts")}
            >
                View Contracts Feature
            </button>
        </div>
    )
}
