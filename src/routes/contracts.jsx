//TODO: Refactor this component. Split into smaller components.
import React, { useState, useEffect } from "react";
import parseFile from "./parseFile";
import { API } from 'aws-amplify';
import { listContracts } from '../graphql/queries';
import { createContract} from '../graphql/mutations';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


//Material UI Specifications:
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));

const initialState = { symbol: '', name: '', initialAmount: '', artifact: {}, created: 0 }

//Uploader component is the main functional component.
const Uploader = () => {

  // material UI specification
  const classes = useStyles(); 

  //React hooks used to read/write variables
  const [artifact, setArtifact] = useState([]);
  const [contract, setContract] = useState([]);
  const [contracts, setContracts] = useState([]);
  let fileReader;

  //TODO: Auto-populate contracts list on load. 
  useEffect(() => {
  }, []);

  
  const handleFileRead = (e) => {
    const content = fileReader.result;
  };

  //Refer to https://dev.to/ilonacodes/frontend-shorts-how-to-read-content-from-the-file-input-in-react-1kfb
  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  return (
    <div className="uploader" >
      <h3>Load Contracts</h3>
      <div className="input-group file-chooser">
        <div className="custom-file">
          <input type="file" className="custom-file-input" onChange={e => handleFileChosen(e.target.files[0])} />
          <label className="custom-file-label" htmlFor="inputGroupFile04">Choose file</label>
        </div>
      </div>
      <div>
        <div className="obd">
          <h3>Contracts</h3>
        </div>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Network</TableCell>
          <TableCell>Symbol</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contracts.map((contract) => (
            <TableRow key={contract.id}>
              <TableCell  component="th" scope="row">
                {contract.sku}
              </TableCell>
              <TableCell>{contract.network}</TableCell>
              <TableCell>{contract.symbol}</TableCell>
              <TableCell>{contract.name}</TableCell>
              <TableCell>{contract.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </div>
  )
}

export default Uploader;

