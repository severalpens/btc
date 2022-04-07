/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTx = /* GraphQL */ `
  subscription OnCreateTx {
    onCreateTx {
      id
      transactionHash
      burnAddress
      hash
      periodEndSeconds
      tokenAddress
      amount
      transactionId
      timestamp
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTx = /* GraphQL */ `
  subscription OnUpdateTx {
    onUpdateTx {
      id
      transactionHash
      burnAddress
      hash
      periodEndSeconds
      tokenAddress
      amount
      transactionId
      timestamp
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTx = /* GraphQL */ `
  subscription OnDeleteTx {
    onDeleteTx {
      id
      transactionHash
      burnAddress
      hash
      periodEndSeconds
      tokenAddress
      amount
      transactionId
      timestamp
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBurnAccount = /* GraphQL */ `
  subscription OnCreateBurnAccount {
    onCreateBurnAccount {
      id
      address
      privateKey
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBurnAccount = /* GraphQL */ `
  subscription OnUpdateBurnAccount {
    onUpdateBurnAccount {
      id
      address
      privateKey
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBurnAccount = /* GraphQL */ `
  subscription OnDeleteBurnAccount {
    onDeleteBurnAccount {
      id
      address
      privateKey
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateHashPair = /* GraphQL */ `
  subscription OnCreateHashPair {
    onCreateHashPair {
      id
      hash
      secret
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateHashPair = /* GraphQL */ `
  subscription OnUpdateHashPair {
    onUpdateHashPair {
      id
      hash
      secret
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteHashPair = /* GraphQL */ `
  subscription OnDeleteHashPair {
    onDeleteHashPair {
      id
      hash
      secret
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTxLog = /* GraphQL */ `
  subscription OnCreateTxLog {
    onCreateTxLog {
      id
      transactionType
      transactionHash
      timestamp
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTxLog = /* GraphQL */ `
  subscription OnUpdateTxLog {
    onUpdateTxLog {
      id
      transactionType
      transactionHash
      timestamp
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTxLog = /* GraphQL */ `
  subscription OnDeleteTxLog {
    onDeleteTxLog {
      id
      transactionType
      transactionHash
      timestamp
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLog = /* GraphQL */ `
  subscription OnCreateLog {
    onCreateLog {
      id
      transactionType
      transactionHash
      timestamp
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLog = /* GraphQL */ `
  subscription OnUpdateLog {
    onUpdateLog {
      id
      transactionType
      transactionHash
      timestamp
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLog = /* GraphQL */ `
  subscription OnDeleteLog {
    onDeleteLog {
      id
      transactionType
      transactionHash
      timestamp
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction {
    onCreateTransaction {
      id
      transactionId
      timestamp
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction {
    onUpdateTransaction {
      id
      transactionId
      timestamp
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction {
    onDeleteTransaction {
      id
      transactionId
      timestamp
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount {
    onCreateAccount {
      id
      name
      address
      privateKey
      balance
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount {
    onUpdateAccount {
      id
      name
      address
      privateKey
      balance
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount {
    onDeleteAccount {
      id
      name
      address
      privateKey
      balance
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateContract = /* GraphQL */ `
  subscription OnCreateContract {
    onCreateContract {
      id
      symbol
      name
      address
      initialBalance
      network
      owner
      abi
      timestamp
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateContract = /* GraphQL */ `
  subscription OnUpdateContract {
    onUpdateContract {
      id
      symbol
      name
      address
      initialBalance
      network
      owner
      abi
      timestamp
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteContract = /* GraphQL */ `
  subscription OnDeleteContract {
    onDeleteContract {
      id
      symbol
      name
      address
      initialBalance
      network
      owner
      abi
      timestamp
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
