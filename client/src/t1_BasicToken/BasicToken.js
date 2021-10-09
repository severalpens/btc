import React from 'react';
import Button from '@material-ui/core/Button';
import { ethers } from "ethers";

//Contract details
const artifact = require("../artifacts/contracts/BasicToken.sol/BasicToken.json");
const contractConstructorArgs = [100000];

const createBasicToken = async function () {
  window.ethereum.request({ method: 'eth_requestAccounts' });
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const factory = new ethers.ContractFactory(artifact.abi, artifact.bytecode, signer);
  const deployment = await factory.deploy(...contractConstructorArgs);
  const contract = await deployment.deployed();
  localStorage.setItem('ft', contract.address);
  delete contract.deployTransaction.data;
  localStorage.setItem('deployTransaction',  JSON.stringify(contract.deployTransaction,null,2));
}

export function BasicToken() {
  return (
    <>
      <form noValidate autoComplete="off">
        <Button variant="contained" color="primary" onClick={createBasicToken}>
          Create Fungible Token
        </Button>
      </form>
      <br/>
      <strong>Result:</strong>
      <pre>
      {localStorage.getItem("deployTransaction")}
      </pre>
    </>
  );
}

