import React from 'react'
import { Link } from 'react-router-dom'

export default function TransactionsMenu() {
    return (
        <div className="ml-16 my-16 ">
            <div>
                <h2 className="font-medium leading-tight text-4xl mt-0 mb-8 text-blue-600">Elements</h2>
                <div>
                    <Link to="/contracts">Contracts</Link>
                </div>
                <div>
                    <Link to="/accounts">Accounts</Link>
                </div>
                <div>
                    <Link to="/hashpairs">Hash Pairs</Link>
                </div>
                <div>
                    <Link to="/burnaccounts">Burn Accounts</Link>
                </div>
            </div>
        </div>
    )
}
