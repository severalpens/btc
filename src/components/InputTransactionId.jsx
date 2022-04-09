
export default function InputTransactionId(props) {
    const { txs, setTransactionId } = props;

    return (
        <div className="mb-3 xl:w-96" >
            <input type="text" className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white 
                focus:border-blue-600 
                focus:outline-none
                "
                id="transactionId"
                name="transactionId"
                onChange={e => setTransactionId(e.target.value)}
                list="transactionIdOptionsList"
            />
            <datalist id="transactionIdOptionsList">
                {txs ? txs.map((tx) => (
                    <option key={tx.id} value={tx.transactionId}>
                   {tx.transactionId}{" | "}{tx.tokenAddress.slice(0, 5) + '..' + tx.tokenAddress.slice(tx.tokenAddress.length - 4)}
                        </option>
                    )) : ''}
            </datalist>
        </div>
    )
}
