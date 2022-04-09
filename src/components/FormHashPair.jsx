import { API,Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';

function HashPairNew() {

 async function handleClick() {
    const apiName = 'api2';
    const path = '/hashpair';
    const user = await Auth.currentAuthenticatedUser();
    const token = await user.signInUserSession.idToken.jwtToken;

    const myInit = { // OPTIONAL
      headers: {Authorization: token}, // OPTIONAL
    //  response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
      // queryStringParameters: {  // OPTIONAL
      //   name: 'param',
      // },
    };

    API
      .get(apiName, path,myInit)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error.response);
      });
  }



  return (
    <div>
      <button onClick={handleClick}>New Hash</button>
    </div>
  )
}

export default withAuthenticator(HashPairNew)