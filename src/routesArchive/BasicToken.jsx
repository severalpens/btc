import { useParams, useNavigate } from 'react-router-dom';
import { getBasicToken, deleteBasicToken } from '../basicTokensData';

export default function BasicTokenForm() {
  let navigate = useNavigate();
  let params = useParams();
  let basicToken = getBasicToken(parseInt(params.basicTokenId, 10));
  console.log(basicToken);
  return (
    <main style={{ padding: '1rem' }}>
      <h2>Total Due: {basicToken.amount}</h2>
      <p>
        {basicToken.name}: {basicToken.number}
      </p>
      <p>Due Date: {basicToken.due}</p>
      <p>
        <button
          onClick={() => {
            deleteBasicToken(basicToken.number);
            navigate('/basicTokens');
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}
