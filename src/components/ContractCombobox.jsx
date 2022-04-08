export default function ContractCombobox(props) {
    const { contracts, setAddress } = props;
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
                id="address"
                name="address"
                onChange={e => setAddress(e.target.value)}
                list="optionslist"
            />
            <datalist id="optionslist">
                {contracts ? contracts.map((contract) => (
                    <option key={contract.id} value={contract.address}>{contract.network}{" | "}{contract.name}{" | "}{contract.owner.slice(0, 5) + '..' + contract.owner.slice(contract.owner.length - 4)}</option>
                )) : ''}
            </datalist>
        </div>
    )
}
