export default function Table(props) {
    const contracts = props.contracts || [];

    const contractListItems = contracts.map((c) => {
       return(<li key={c.id}>{c.name}</li>)
    });

  return (
    <ul>{contractListItems}</ul>
  )
}


