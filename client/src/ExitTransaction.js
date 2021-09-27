import Menu from './Menu';

function ExitTransaction() {
  return (
<form noValidate autoComplete="off">
<TextField id="standard-basic" label="Standard" />
<TextField id="filled-basic" label="Filled" variant="filled" />
<TextField id="outlined-basic" label="Outlined" variant="outlined" />
<Button variant="contained">Default</Button>
<Button variant="contained" color="primary">
Primary
</Button>
<Button variant="contained" color="secondary">
Secondary
</Button>
<Button variant="contained" disabled>
Disabled
</Button>
<Button variant="contained" color="primary" href="#contained-buttons">
Link
</Button>
<ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
<Button>One</Button>
<Button>Two</Button>
<Button>Three</Button>
</ButtonGroup>
</form>  
    );
}

export default ExitTransaction;
