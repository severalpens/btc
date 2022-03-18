import React from 'react'
import { Link } from 'react-router-dom'

export default function TransferMenu() {
    return (
        <div className="ml-16 my-16 ">
            <div>
                <h2 className="font-medium leading-tight text-4xl mt-0 mb-8 text-blue-600">Transfer</h2>
                <div>
                    <Link to="/">Approve</Link>
                </div>
                <div>
                    <Link to="/">Exit Transaction</Link>
                </div>
                <div>
                    <Link to="/">Reclaim Transaction</Link>
                </div>
                <div>
                    <Link to="/">Update</Link>
                </div>
                <div>
                    <Link to="/">Add</Link>
                </div>
                <div>
                    <Link to="/">Entry Transaction</Link>
                </div>
            </div>
        </div>
    )
}
