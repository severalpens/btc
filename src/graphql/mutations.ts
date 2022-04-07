/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTx = /* GraphQL */ `
  mutation CreateTx($input: CreateTxInput!, $condition: ModelTxConditionInput) {
    createTx(input: $input, condition: $condition) {
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
export const updateTx = /* GraphQL */ `
  mutation UpdateTx($input: UpdateTxInput!, $condition: ModelTxConditionInput) {
    updateTx(input: $input, condition: $condition) {
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
export const deleteTx = /* GraphQL */ `
  mutation DeleteTx($input: DeleteTxInput!, $condition: ModelTxConditionInput) {
    deleteTx(input: $input, condition: $condition) {
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
export const createBurnAccount = /* GraphQL */ `
  mutation CreateBurnAccount(
    $input: CreateBurnAccountInput!
    $condition: ModelBurnAccountConditionInput
  ) {
    createBurnAccount(input: $input, condition: $condition) {
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
export const updateBurnAccount = /* GraphQL */ `
  mutation UpdateBurnAccount(
    $input: UpdateBurnAccountInput!
    $condition: ModelBurnAccountConditionInput
  ) {
    updateBurnAccount(input: $input, condition: $condition) {
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
export const deleteBurnAccount = /* GraphQL */ `
  mutation DeleteBurnAccount(
    $input: DeleteBurnAccountInput!
    $condition: ModelBurnAccountConditionInput
  ) {
    deleteBurnAccount(input: $input, condition: $condition) {
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
export const createHashPair = /* GraphQL */ `
  mutation CreateHashPair(
    $input: CreateHashPairInput!
    $condition: ModelHashPairConditionInput
  ) {
    createHashPair(input: $input, condition: $condition) {
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
export const updateHashPair = /* GraphQL */ `
  mutation UpdateHashPair(
    $input: UpdateHashPairInput!
    $condition: ModelHashPairConditionInput
  ) {
    updateHashPair(input: $input, condition: $condition) {
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
export const deleteHashPair = /* GraphQL */ `
  mutation DeleteHashPair(
    $input: DeleteHashPairInput!
    $condition: ModelHashPairConditionInput
  ) {
    deleteHashPair(input: $input, condition: $condition) {
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
export const createTxLog = /* GraphQL */ `
  mutation CreateTxLog(
    $input: CreateTxLogInput!
    $condition: ModelTxLogConditionInput
  ) {
    createTxLog(input: $input, condition: $condition) {
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
export const updateTxLog = /* GraphQL */ `
  mutation UpdateTxLog(
    $input: UpdateTxLogInput!
    $condition: ModelTxLogConditionInput
  ) {
    updateTxLog(input: $input, condition: $condition) {
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
export const deleteTxLog = /* GraphQL */ `
  mutation DeleteTxLog(
    $input: DeleteTxLogInput!
    $condition: ModelTxLogConditionInput
  ) {
    deleteTxLog(input: $input, condition: $condition) {
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
export const createLog = /* GraphQL */ `
  mutation CreateLog(
    $input: CreateLogInput!
    $condition: ModelLogConditionInput
  ) {
    createLog(input: $input, condition: $condition) {
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
export const updateLog = /* GraphQL */ `
  mutation UpdateLog(
    $input: UpdateLogInput!
    $condition: ModelLogConditionInput
  ) {
    updateLog(input: $input, condition: $condition) {
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
export const deleteLog = /* GraphQL */ `
  mutation DeleteLog(
    $input: DeleteLogInput!
    $condition: ModelLogConditionInput
  ) {
    deleteLog(input: $input, condition: $condition) {
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
export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
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
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
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
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
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
export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
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
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
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
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
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
export const createContract = /* GraphQL */ `
  mutation CreateContract(
    $input: CreateContractInput!
    $condition: ModelContractConditionInput
  ) {
    createContract(input: $input, condition: $condition) {
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
export const updateContract = /* GraphQL */ `
  mutation UpdateContract(
    $input: UpdateContractInput!
    $condition: ModelContractConditionInput
  ) {
    updateContract(input: $input, condition: $condition) {
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
export const deleteContract = /* GraphQL */ `
  mutation DeleteContract(
    $input: DeleteContractInput!
    $condition: ModelContractConditionInput
  ) {
    deleteContract(input: $input, condition: $condition) {
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
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
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
