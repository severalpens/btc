/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTxLogInput = {
  id?: string | null,
  transactionType?: string | null,
  transactionHash?: string | null,
  timestamp?: number | null,
  _version?: number | null,
};

export type ModelTxLogConditionInput = {
  transactionType?: ModelStringInput | null,
  transactionHash?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  and?: Array< ModelTxLogConditionInput | null > | null,
  or?: Array< ModelTxLogConditionInput | null > | null,
  not?: ModelTxLogConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type TxLog = {
  __typename: "TxLog",
  id?: string,
  transactionType?: string | null,
  transactionHash?: string | null,
  timestamp?: number | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateTxLogInput = {
  id: string,
  transactionType?: string | null,
  transactionHash?: string | null,
  timestamp?: number | null,
  _version?: number | null,
};

export type DeleteTxLogInput = {
  id: string,
  _version?: number | null,
};

export type CreateLogInput = {
  id?: string | null,
  transactionType?: string | null,
  transactionHash?: string | null,
  timestamp?: number | null,
  _version?: number | null,
};

export type ModelLogConditionInput = {
  transactionType?: ModelStringInput | null,
  transactionHash?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  and?: Array< ModelLogConditionInput | null > | null,
  or?: Array< ModelLogConditionInput | null > | null,
  not?: ModelLogConditionInput | null,
};

export type Log = {
  __typename: "Log",
  id?: string,
  transactionType?: string | null,
  transactionHash?: string | null,
  timestamp?: number | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateLogInput = {
  id: string,
  transactionType?: string | null,
  transactionHash?: string | null,
  timestamp?: number | null,
  _version?: number | null,
};

export type DeleteLogInput = {
  id: string,
  _version?: number | null,
};

export type CreateTransactionInput = {
  id?: string | null,
  transactionId?: string | null,
  timestamp?: number | null,
  _version?: number | null,
};

export type ModelTransactionConditionInput = {
  transactionId?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  and?: Array< ModelTransactionConditionInput | null > | null,
  or?: Array< ModelTransactionConditionInput | null > | null,
  not?: ModelTransactionConditionInput | null,
};

export type Transaction = {
  __typename: "Transaction",
  id?: string,
  transactionId?: string | null,
  timestamp?: number | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateTransactionInput = {
  id: string,
  transactionId?: string | null,
  timestamp?: number | null,
  _version?: number | null,
};

export type DeleteTransactionInput = {
  id: string,
  _version?: number | null,
};

export type CreateAccountInput = {
  id?: string | null,
  name?: string | null,
  address?: string | null,
  privateKey?: string | null,
  balance?: string | null,
  _version?: number | null,
};

export type ModelAccountConditionInput = {
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  privateKey?: ModelStringInput | null,
  balance?: ModelStringInput | null,
  and?: Array< ModelAccountConditionInput | null > | null,
  or?: Array< ModelAccountConditionInput | null > | null,
  not?: ModelAccountConditionInput | null,
};

export type Account = {
  __typename: "Account",
  id?: string,
  name?: string | null,
  address?: string | null,
  privateKey?: string | null,
  balance?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateAccountInput = {
  id: string,
  name?: string | null,
  address?: string | null,
  privateKey?: string | null,
  balance?: string | null,
  _version?: number | null,
};

export type DeleteAccountInput = {
  id: string,
  _version?: number | null,
};

export type CreateContractInput = {
  id?: string | null,
  symbol?: string | null,
  name?: string | null,
  address?: string | null,
  initialBalance?: string | null,
  network?: string | null,
  owner?: string | null,
  abi?: string | null,
  timestamp?: number | null,
  _version?: number | null,
};

export type ModelContractConditionInput = {
  symbol?: ModelStringInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  initialBalance?: ModelStringInput | null,
  network?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  abi?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  and?: Array< ModelContractConditionInput | null > | null,
  or?: Array< ModelContractConditionInput | null > | null,
  not?: ModelContractConditionInput | null,
};

export type Contract = {
  __typename: "Contract",
  id?: string,
  symbol?: string | null,
  name?: string | null,
  address?: string | null,
  initialBalance?: string | null,
  network?: string | null,
  owner?: string | null,
  abi?: string | null,
  timestamp?: number | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateContractInput = {
  id: string,
  symbol?: string | null,
  name?: string | null,
  address?: string | null,
  initialBalance?: string | null,
  network?: string | null,
  owner?: string | null,
  abi?: string | null,
  timestamp?: number | null,
  _version?: number | null,
};

export type DeleteContractInput = {
  id: string,
  _version?: number | null,
};

export type CreateTodoInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  _version?: number | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type Todo = {
  __typename: "Todo",
  id?: string,
  name?: string | null,
  description?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  _version?: number | null,
};

export type DeleteTodoInput = {
  id: string,
  _version?: number | null,
};

export type ModelTxLogFilterInput = {
  id?: ModelIDInput | null,
  transactionType?: ModelStringInput | null,
  transactionHash?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  and?: Array< ModelTxLogFilterInput | null > | null,
  or?: Array< ModelTxLogFilterInput | null > | null,
  not?: ModelTxLogFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTxLogConnection = {
  __typename: "ModelTxLogConnection",
  items?:  Array<TxLog | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelLogFilterInput = {
  id?: ModelIDInput | null,
  transactionType?: ModelStringInput | null,
  transactionHash?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  and?: Array< ModelLogFilterInput | null > | null,
  or?: Array< ModelLogFilterInput | null > | null,
  not?: ModelLogFilterInput | null,
};

export type ModelLogConnection = {
  __typename: "ModelLogConnection",
  items?:  Array<Log | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTransactionFilterInput = {
  id?: ModelIDInput | null,
  transactionId?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  and?: Array< ModelTransactionFilterInput | null > | null,
  or?: Array< ModelTransactionFilterInput | null > | null,
  not?: ModelTransactionFilterInput | null,
};

export type ModelTransactionConnection = {
  __typename: "ModelTransactionConnection",
  items?:  Array<Transaction | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAccountFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  privateKey?: ModelStringInput | null,
  balance?: ModelStringInput | null,
  and?: Array< ModelAccountFilterInput | null > | null,
  or?: Array< ModelAccountFilterInput | null > | null,
  not?: ModelAccountFilterInput | null,
};

export type ModelAccountConnection = {
  __typename: "ModelAccountConnection",
  items?:  Array<Account | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelContractFilterInput = {
  id?: ModelIDInput | null,
  symbol?: ModelStringInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  initialBalance?: ModelStringInput | null,
  network?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  abi?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  and?: Array< ModelContractFilterInput | null > | null,
  or?: Array< ModelContractFilterInput | null > | null,
  not?: ModelContractFilterInput | null,
};

export type ModelContractConnection = {
  __typename: "ModelContractConnection",
  items?:  Array<Contract | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items?:  Array<Todo | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateTxLogMutationVariables = {
  input?: CreateTxLogInput,
  condition?: ModelTxLogConditionInput | null,
};

export type CreateTxLogMutation = {
  createTxLog?:  {
    __typename: "TxLog",
    id: string,
    transactionType?: string | null,
    transactionHash?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTxLogMutationVariables = {
  input?: UpdateTxLogInput,
  condition?: ModelTxLogConditionInput | null,
};

export type UpdateTxLogMutation = {
  updateTxLog?:  {
    __typename: "TxLog",
    id: string,
    transactionType?: string | null,
    transactionHash?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTxLogMutationVariables = {
  input?: DeleteTxLogInput,
  condition?: ModelTxLogConditionInput | null,
};

export type DeleteTxLogMutation = {
  deleteTxLog?:  {
    __typename: "TxLog",
    id: string,
    transactionType?: string | null,
    transactionHash?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLogMutationVariables = {
  input?: CreateLogInput,
  condition?: ModelLogConditionInput | null,
};

export type CreateLogMutation = {
  createLog?:  {
    __typename: "Log",
    id: string,
    transactionType?: string | null,
    transactionHash?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLogMutationVariables = {
  input?: UpdateLogInput,
  condition?: ModelLogConditionInput | null,
};

export type UpdateLogMutation = {
  updateLog?:  {
    __typename: "Log",
    id: string,
    transactionType?: string | null,
    transactionHash?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLogMutationVariables = {
  input?: DeleteLogInput,
  condition?: ModelLogConditionInput | null,
};

export type DeleteLogMutation = {
  deleteLog?:  {
    __typename: "Log",
    id: string,
    transactionType?: string | null,
    transactionHash?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTransactionMutationVariables = {
  input?: CreateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type CreateTransactionMutation = {
  createTransaction?:  {
    __typename: "Transaction",
    id: string,
    transactionId?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTransactionMutationVariables = {
  input?: UpdateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type UpdateTransactionMutation = {
  updateTransaction?:  {
    __typename: "Transaction",
    id: string,
    transactionId?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTransactionMutationVariables = {
  input?: DeleteTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type DeleteTransactionMutation = {
  deleteTransaction?:  {
    __typename: "Transaction",
    id: string,
    transactionId?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAccountMutationVariables = {
  input?: CreateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type CreateAccountMutation = {
  createAccount?:  {
    __typename: "Account",
    id: string,
    name?: string | null,
    address?: string | null,
    privateKey?: string | null,
    balance?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAccountMutationVariables = {
  input?: UpdateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type UpdateAccountMutation = {
  updateAccount?:  {
    __typename: "Account",
    id: string,
    name?: string | null,
    address?: string | null,
    privateKey?: string | null,
    balance?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAccountMutationVariables = {
  input?: DeleteAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type DeleteAccountMutation = {
  deleteAccount?:  {
    __typename: "Account",
    id: string,
    name?: string | null,
    address?: string | null,
    privateKey?: string | null,
    balance?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateContractMutationVariables = {
  input?: CreateContractInput,
  condition?: ModelContractConditionInput | null,
};

export type CreateContractMutation = {
  createContract?:  {
    __typename: "Contract",
    id: string,
    symbol?: string | null,
    name?: string | null,
    address?: string | null,
    initialBalance?: string | null,
    network?: string | null,
    owner?: string | null,
    abi?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContractMutationVariables = {
  input?: UpdateContractInput,
  condition?: ModelContractConditionInput | null,
};

export type UpdateContractMutation = {
  updateContract?:  {
    __typename: "Contract",
    id: string,
    symbol?: string | null,
    name?: string | null,
    address?: string | null,
    initialBalance?: string | null,
    network?: string | null,
    owner?: string | null,
    abi?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContractMutationVariables = {
  input?: DeleteContractInput,
  condition?: ModelContractConditionInput | null,
};

export type DeleteContractMutation = {
  deleteContract?:  {
    __typename: "Contract",
    id: string,
    symbol?: string | null,
    name?: string | null,
    address?: string | null,
    initialBalance?: string | null,
    network?: string | null,
    owner?: string | null,
    abi?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTodoMutationVariables = {
  input?: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name?: string | null,
    description?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input?: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name?: string | null,
    description?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input?: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name?: string | null,
    description?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTxLogQueryVariables = {
  id?: string,
};

export type GetTxLogQuery = {
  getTxLog?:  {
    __typename: "TxLog",
    id: string,
    transactionType?: string | null,
    transactionHash?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTxLogsQueryVariables = {
  filter?: ModelTxLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTxLogsQuery = {
  listTxLogs?:  {
    __typename: "ModelTxLogConnection",
    items:  Array< {
      __typename: "TxLog",
      id: string,
      transactionType?: string | null,
      transactionHash?: string | null,
      timestamp?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTxLogsQueryVariables = {
  filter?: ModelTxLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTxLogsQuery = {
  syncTxLogs?:  {
    __typename: "ModelTxLogConnection",
    items:  Array< {
      __typename: "TxLog",
      id: string,
      transactionType?: string | null,
      transactionHash?: string | null,
      timestamp?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetLogQueryVariables = {
  id?: string,
};

export type GetLogQuery = {
  getLog?:  {
    __typename: "Log",
    id: string,
    transactionType?: string | null,
    transactionHash?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLogsQueryVariables = {
  filter?: ModelLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLogsQuery = {
  listLogs?:  {
    __typename: "ModelLogConnection",
    items:  Array< {
      __typename: "Log",
      id: string,
      transactionType?: string | null,
      transactionHash?: string | null,
      timestamp?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncLogsQueryVariables = {
  filter?: ModelLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLogsQuery = {
  syncLogs?:  {
    __typename: "ModelLogConnection",
    items:  Array< {
      __typename: "Log",
      id: string,
      transactionType?: string | null,
      transactionHash?: string | null,
      timestamp?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTransactionQueryVariables = {
  id?: string,
};

export type GetTransactionQuery = {
  getTransaction?:  {
    __typename: "Transaction",
    id: string,
    transactionId?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTransactionsQueryVariables = {
  filter?: ModelTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTransactionsQuery = {
  listTransactions?:  {
    __typename: "ModelTransactionConnection",
    items:  Array< {
      __typename: "Transaction",
      id: string,
      transactionId?: string | null,
      timestamp?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTransactionsQueryVariables = {
  filter?: ModelTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTransactionsQuery = {
  syncTransactions?:  {
    __typename: "ModelTransactionConnection",
    items:  Array< {
      __typename: "Transaction",
      id: string,
      transactionId?: string | null,
      timestamp?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAccountQueryVariables = {
  id?: string,
};

export type GetAccountQuery = {
  getAccount?:  {
    __typename: "Account",
    id: string,
    name?: string | null,
    address?: string | null,
    privateKey?: string | null,
    balance?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAccountsQueryVariables = {
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountsQuery = {
  listAccounts?:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      name?: string | null,
      address?: string | null,
      privateKey?: string | null,
      balance?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAccountsQueryVariables = {
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAccountsQuery = {
  syncAccounts?:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      name?: string | null,
      address?: string | null,
      privateKey?: string | null,
      balance?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetContractQueryVariables = {
  id?: string,
};

export type GetContractQuery = {
  getContract?:  {
    __typename: "Contract",
    id: string,
    symbol?: string | null,
    name?: string | null,
    address?: string | null,
    initialBalance?: string | null,
    network?: string | null,
    owner?: string | null,
    abi?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContractsQueryVariables = {
  filter?: ModelContractFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContractsQuery = {
  listContracts?:  {
    __typename: "ModelContractConnection",
    items:  Array< {
      __typename: "Contract",
      id: string,
      symbol?: string | null,
      name?: string | null,
      address?: string | null,
      initialBalance?: string | null,
      network?: string | null,
      owner?: string | null,
      abi?: string | null,
      timestamp?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncContractsQueryVariables = {
  filter?: ModelContractFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncContractsQuery = {
  syncContracts?:  {
    __typename: "ModelContractConnection",
    items:  Array< {
      __typename: "Contract",
      id: string,
      symbol?: string | null,
      name?: string | null,
      address?: string | null,
      initialBalance?: string | null,
      network?: string | null,
      owner?: string | null,
      abi?: string | null,
      timestamp?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id?: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name?: string | null,
    description?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name?: string | null,
      description?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTodosQuery = {
  syncTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name?: string | null,
      description?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateTxLogSubscription = {
  onCreateTxLog?:  {
    __typename: "TxLog",
    id: string,
    transactionType?: string | null,
    transactionHash?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTxLogSubscription = {
  onUpdateTxLog?:  {
    __typename: "TxLog",
    id: string,
    transactionType?: string | null,
    transactionHash?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTxLogSubscription = {
  onDeleteTxLog?:  {
    __typename: "TxLog",
    id: string,
    transactionType?: string | null,
    transactionHash?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLogSubscription = {
  onCreateLog?:  {
    __typename: "Log",
    id: string,
    transactionType?: string | null,
    transactionHash?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLogSubscription = {
  onUpdateLog?:  {
    __typename: "Log",
    id: string,
    transactionType?: string | null,
    transactionHash?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLogSubscription = {
  onDeleteLog?:  {
    __typename: "Log",
    id: string,
    transactionType?: string | null,
    transactionHash?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTransactionSubscription = {
  onCreateTransaction?:  {
    __typename: "Transaction",
    id: string,
    transactionId?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTransactionSubscription = {
  onUpdateTransaction?:  {
    __typename: "Transaction",
    id: string,
    transactionId?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTransactionSubscription = {
  onDeleteTransaction?:  {
    __typename: "Transaction",
    id: string,
    transactionId?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAccountSubscription = {
  onCreateAccount?:  {
    __typename: "Account",
    id: string,
    name?: string | null,
    address?: string | null,
    privateKey?: string | null,
    balance?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAccountSubscription = {
  onUpdateAccount?:  {
    __typename: "Account",
    id: string,
    name?: string | null,
    address?: string | null,
    privateKey?: string | null,
    balance?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAccountSubscription = {
  onDeleteAccount?:  {
    __typename: "Account",
    id: string,
    name?: string | null,
    address?: string | null,
    privateKey?: string | null,
    balance?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateContractSubscription = {
  onCreateContract?:  {
    __typename: "Contract",
    id: string,
    symbol?: string | null,
    name?: string | null,
    address?: string | null,
    initialBalance?: string | null,
    network?: string | null,
    owner?: string | null,
    abi?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContractSubscription = {
  onUpdateContract?:  {
    __typename: "Contract",
    id: string,
    symbol?: string | null,
    name?: string | null,
    address?: string | null,
    initialBalance?: string | null,
    network?: string | null,
    owner?: string | null,
    abi?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContractSubscription = {
  onDeleteContract?:  {
    __typename: "Contract",
    id: string,
    symbol?: string | null,
    name?: string | null,
    address?: string | null,
    initialBalance?: string | null,
    network?: string | null,
    owner?: string | null,
    abi?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name?: string | null,
    description?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name?: string | null,
    description?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name?: string | null,
    description?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
