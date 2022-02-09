import {
  useLocation,
  NavLink,
  Outlet,
  useSearchParams,
} from 'react-router-dom';

import { getBasicTokens } from '../basicTokensData';

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

export default function BasicTokens() {
  let basicTokens = getBasicTokens();
  let [searchParams, setSearchParams] = useSearchParams({ replace: true });

  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ borderRight: 'solid 1px', padding: '1rem' }}>
        <input
          value={searchParams.get('filter') || ''}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter }, { replace: true });
            } else {
              setSearchParams({}, { replace: true });
            }
          }}
        />
        {basicTokens
          .filter((basicToken) => {
            let filter = searchParams.get('filter');
            if (!filter) return true;
            let name = basicToken.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((basicToken) => (
            <QueryNavLink
              key={basicToken.number}
              style={({ isActive }) => {
                return {
                  display: 'block',
                  margin: '1rem 0',
                  color: isActive ? 'red' : '',
                };
              }}
              to={`/basictokens/${basicToken.number}`}
            >
              {basicToken.name}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
