
export default function HashCombobox(props) {
    const { hashPairs, setHash } = props;

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
                onChange={e => setHash(e.target.value)}
                list="hashOptionsList"
            />
            <datalist id="hashOptionsList">
                {hashPairs ? hashPairs.map((hashPair) => (
                    <option key={hashPair.id} value={hashPair.hash}>
                        {hashPair.hash.slice(0, 5) + '..' + hashPair.hash.slice(hashPair.hash.length - 4)}
                        {" | "}
                        {hashPair.secret.slice(0, 5) + '..' + hashPair.secret.slice(hashPair.secret.length - 4)}
                        </option>
                    )) : ''}
            </datalist>
        </div>
    )
}
