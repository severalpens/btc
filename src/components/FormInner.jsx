
const FormInner = (props) => {

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <label htmlFor="artifact">Artifact JSON file</label>
          <br />
          <input type="file" id="artifact" name="artifact" accept=".json" onChange={e => props.handleFileChosen((e.target)?.files?.[0])} />
        </div>
        <div>
          <label htmlFor="initialBalance">Initial Balance</label>
          <br />
          <input id="initialBalance" name="initialBalance" defaultValue="10000" onChange={e => props.setInitialBalance(e.target.value)}></input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );

}


export default FormInner;