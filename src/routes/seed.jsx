/* src/App.js */
import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listContracts, listAccounts} from '../graphql/queries';

const initialState = { network: '', subject: '', object: '', amount: '' }

const Seed = () => {
  const [formState, setFormState] = useState(initialState)
  const [contracts, setContracts] = useState([])

  useEffect(() => {
    fetchContracts()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  function transfer(){
    
  }

  async function fetchContracts() {
    try {
      const contractData = await API.graphql(graphqlOperation(listContracts))
      const contracts = contractData.data.listContracts.items
      setContracts(contracts)
    } catch (err) { console.log('error fetching contracts') }
  }


  return (
    <div style={styles.container}>

      <h2>Seed BTC Contract (Transfer)</h2>
      <input
        onChange={event => setInput('network', event.target.value)}
        style={styles.input}
        value={formState.network}
        placeholder="Network"
      />
      <input
        onChange={event => setInput('subject', event.target.value)}
        style={styles.input}
        value={formState.subject}
        placeholder="Subject"
      />
      <input
        onChange={event => setInput('object', event.target.value)}
        style={styles.input}
        value={formState.object}
        placeholder="object"
      />
      <input
        onChange={event => setInput('amount', event.target.value)}
        style={styles.input}
        value={formState.amount}
        placeholder="amount"
      />
      <button style={styles.button} onClick={transfer}>Transfer</button>
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

export default Seed;
