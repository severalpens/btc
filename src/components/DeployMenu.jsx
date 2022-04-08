import React from 'react'
import { Link } from 'react-router-dom'

export default function TransactionsMenu() {
    return (
        <div className="ml-16 my-16 ">
            <div>
                <h2 className="font-medium leading-tight text-4xl mt-0 mb-8 text-blue-600">Deploy</h2>
                <div>
                    <Link to="/deploy/deploy">Deploy</Link>
                </div>
                <div>
                    <Link to="/deploy/initialize">Initialize</Link>
                </div>
            </div>
        </div>
    )
}
