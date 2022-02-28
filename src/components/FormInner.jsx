import FormArtifact from "./FormArtifact";
import FormInitialBalance from "./FormInitialAmount";

const FormInner = (props) => {

  return (
    <div className="flex justify-center">
      <form onSubmit={props.handleSubmit}>
        <FormArtifact handleFileChosen={props.handleFileChosen}/>
        <FormInitialBalance setInitialBalance={props.setInitialBalance}/>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}


export default FormInner;