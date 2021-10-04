import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Results from './Results';
import {createBasicToken} from './CreateBasicToken'

export function Component() {
  return (
    <>
      <form noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="contained" color="primary" onClick={createBasicToken}>
          Primary
        </Button>
      </form>
      <Results></Results>
    </>
  );
}

