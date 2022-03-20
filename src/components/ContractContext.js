import React from 'react';

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const ContractContext = React.createContext({
    address: '0x0',
    setAddress: () => {},
  });