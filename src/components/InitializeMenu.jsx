import React from 'react'
import { Link } from 'react-router-dom'

export default function InitializeMenu() {
    return (
        <div className="ml-16 my-16 ">
            <div>
                <h2 className="font-medium leading-tight text-4xl mt-0 mb-8 text-blue-600">Initialize</h2>
                <div>
                    <Link to="/">Register Contract</Link>

                </div>
                <div>
                    <Link to="/">Transfer</Link>

                </div>
            </div>
        </div>
    )
}
