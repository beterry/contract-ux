import React from 'react'

//import styles
import styles from './Contract.module.scss'

export default function Contract({name, business, quantity, starting}) {
    return (
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
    )
}
