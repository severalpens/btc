export default function AccountCombobox(props) {
    const { accounts, setAddress } = props;
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
                {accounts ? accounts.map((account) => (
                    <option key={account.id} value={account.address}>{account.name}</option>
                )) : ''}
            </datalist>
        </div>
    )
}
