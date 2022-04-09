import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';


  export async function fetchContracts(setContracts) {
    let graphqlResult = await API.graphql({ query: queries.listContracts });
    let contract = JSON.parse(window.localStorage.getItem('contract'));
    let cl = graphqlResult.data.listContracts.items.filter(x => !x._deleted && contract.address !== x.address);
    setContracts(cl);
  }

  export async function fetchHashPairs(setHashPairs) {
    let graphqlResult = await API.graphql({ query: queries.listHashPairs });
    let hps = graphqlResult.data.listHashPairs.items.filter(x => !x._deleted);
    setHashPairs(hps);
  }

   
  export async function fetchBurnAccounts(setBurnAccounts) {
    let graphqlResult = await API.graphql({ query: queries.listBurnAccounts });
    let hps = graphqlResult.data.listBurnAccounts.items.filter(x => !x._deleted);
    setBurnAccounts(hps);
  }

   
  export async function deleteBurnAccount(burnAccount, setBurnAccounts) {
    let input = {id: burnAccount.id, _version: 1};
    await API.graphql({ query: mutations.deleteBurnAccount, variables: {input}});
    fetchBurnAccounts(setBurnAccounts);
  }


 export async function fetchTxs(setTxs) {
        let graphqlResult = await API.graphql({ query: queries.listTxs });
        let hps = graphqlResult.data.listTxs.items.filter(x => !x._deleted);
        setTxs(hps);
      }
    
    