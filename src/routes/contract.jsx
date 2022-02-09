/* src/App.js */
import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listContracts, listAccounts} from '../graphql/queries';
import { ethers } from "ethers";

const initialState = { recipient: '',  amount: '' }

const Contract = () => {
  const [formState, setFormState] = useState(initialState)
  const [address, setAddress] = useState('')


  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  const deploy = async function () {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const factory = new ethers.ContractFactory(artifact.abi, artifact.bytecode, signer);
    const deployment = await factory.deploy(...contractConstructorArgs);
    const contract = await deployment.deployed();
    localStorage.setItem('ft', contract.address);
    return contract.deployTransaction;
  
}
  return (
    <div style={styles.container}>

      <h2>Transfer Eth</h2>
      <input
        onChange={event => setInput('recipient', event.target.value)}
        style={styles.input}
        value={formState.recipient}
        placeholder="Recipient"
      />
      <input
        onChange={event => setInput('amount', event.target.value)}
        style={styles.input}
        value={formState.amount}
        placeholder="amount"
      />
      <button style={styles.button} onClick={transfer}>Transfer</button>
      <div>tx: {txHash}</div>
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

export default Contract;
