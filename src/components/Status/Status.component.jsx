import React from 'react'

import styles from './Status.module.scss'

export default function Status({status}) {
    let statusClass = ''
    let statusString = ''
    switch(status) {
        case 0:
            statusString = 'Requires Action'
            statusClass = styles.status__ra
            break
        case 1:
            statusString = 'Active'
            statusClass = styles.status__active
            break
        default:
            statusString = 'Completed'
            statusClass = styles.status__completed
            break
    }
    return (
        <div className={statusClass}>
            <p>{statusString}</p>
        </div>
    )
}
