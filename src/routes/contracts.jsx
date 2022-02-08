/* src/App.js */
import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createContract } from '../graphql/mutations';
import { listContracts } from '../graphql/queries';

const initialState = { symbol: '', name: '', address: '' }

const Contracts = () => {
  const [formState, setFormState] = useState(initialState)
  const [contracts, setContracts] = useState([])

  useEffect(() => {
    fetchContracts()
  }, [])



  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }



  async function fetchContracts() {
    try {
      const contractData = await API.graphql(graphqlOperation(listContracts))
      const contracts = contractData.data.listContracts.items
      setContracts(contracts)
    } catch (err) { console.log('error fetching contracts') }
  }



  async function addContract() {
    try {
      if (!formState.name || !formState.address) return
      const contract = { ...formState }
      setContracts([...contracts, contract])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createContract, {input: contract}))
    } catch (err) {
      console.log('error creating contracts:', err)
    }
  }

  return (
    <div style={styles.container}>

      <h2>Contracts</h2>
      <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={event => setInput('address', event.target.value)}
        style={styles.input}
        value={formState.address}
        placeholder="Address"
      />
      <button style={styles.button} onClick={addContract}>Submit</button>
      {
        contracts.map((contract, index) => (
          <div key={contract.id ? contract.id : index} style={styles.todo}>
            <p style={styles.contractName}>{contract.name}</p>
            <p style={styles.contractAddress}>{contract.address}</p>
          </div>
        ))
      }
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  contractName: { fontSize: 20, fontWeight: 'bold' },
  contractAddress: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default Contracts;
