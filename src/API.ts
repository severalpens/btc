/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTxInput = {
  id?: string | null,
  transactionHash?: string | null,
  burnAddress?: string | null,
  hash?: string | null,
  periodEndSeconds?: string | null,
  tokenAddress?: string | null,
  amount?: string | null,
  transactionId?: string | null,
  timestamp?: number | null,
  _version?: number | null,
};

export type ModelTxConditionInput = {
  transactionHash?: ModelStringInput | null,
  burnAddress?: ModelStringInput | null,
  hash?: ModelStringInput | null,
  periodEndSeconds?: ModelStringInput | null,
  tokenAddress?: ModelStringInput | null,
  amount?: ModelStringInput | null,
  transactionId?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  and?: Array< ModelTxConditionInput | null > | null,
  or?: Array< ModelTxConditionInput | null > | null,
  not?: ModelTxConditionInput | null,
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

export type Tx = {
  __typename: "Tx",
  id?: string,
  transactionHash?: string | null,
  burnAddress?: string | null,
  hash?: string | null,
  periodEndSeconds?: string | null,
  tokenAddress?: string | null,
  amount?: string | null,
  transactionId?: string | null,
  timestamp?: number | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateTxInput = {
  id: string,
  transactionHash?: string | null,
  burnAddress?: string | null,
  hash?: string | null,
  periodEndSeconds?: string | null,
  tokenAddress?: string | null,
  amount?: string | null,
  transactionId?: string | null,
  timestamp?: number | null,
  _version?: number | null,
};

export type DeleteTxInput = {
  id: string,
  _version?: number | null,
};

export type CreateBurnAccountInput = {
  id?: string | null,
  address?: string | null,
  privateKey?: string | null,
  _version?: number | null,
};

export type ModelBurnAccountConditionInput = {
  address?: ModelStringInput | null,
  privateKey?: ModelStringInput | null,
  and?: Array< ModelBurnAccountConditionInput | null > | null,
  or?: Array< ModelBurnAccountConditionInput | null > | null,
  not?: ModelBurnAccountConditionInput | null,
};

export type BurnAccount = {
  __typename: "BurnAccount",
  id?: string,
  address?: string | null,
  privateKey?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateBurnAccountInput = {
  id: string,
  address?: string | null,
  privateKey?: string | null,
  _version?: number | null,
};

export type DeleteBurnAccountInput = {
  id: string,
  _version?: number | null,
};

export type CreateHashPairInput = {
  id?: string | null,
  hash?: string | null,
  secret?: string | null,
  _version?: number | null,
};

export type ModelHashPairConditionInput = {
  hash?: ModelStringInput | null,
  secret?: ModelStringInput | null,
  and?: Array< ModelHashPairConditionInput | null > | null,
  or?: Array< ModelHashPairConditionInput | null > | null,
  not?: ModelHashPairConditionInput | null,
};

export type HashPair = {
  __typename: "HashPair",
  id?: string,
  hash?: string | null,
  secret?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateHashPairInput = {
  id: string,
  hash?: string | null,
  secret?: string | null,
  _version?: number | null,
};

export type DeleteHashPairInput = {
  id: string,
  _version?: number | null,
};

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

export type ModelTxFilterInput = {
  id?: ModelIDInput | null,
  transactionHash?: ModelStringInput | null,
  burnAddress?: ModelStringInput | null,
  hash?: ModelStringInput | null,
  periodEndSeconds?: ModelStringInput | null,
  tokenAddress?: ModelStringInput | null,
  amount?: ModelStringInput | null,
  transactionId?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  and?: Array< ModelTxFilterInput | null > | null,
  or?: Array< ModelTxFilterInput | null > | null,
  not?: ModelTxFilterInput | null,
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

export type ModelTxConnection = {
  __typename: "ModelTxConnection",
  items?:  Array<Tx | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelBurnAccountFilterInput = {
  id?: ModelIDInput | null,
  address?: ModelStringInput | null,
  privateKey?: ModelStringInput | null,
  and?: Array< ModelBurnAccountFilterInput | null > | null,
  or?: Array< ModelBurnAccountFilterInput | null > | null,
  not?: ModelBurnAccountFilterInput | null,
};

export type ModelBurnAccountConnection = {
  __typename: "ModelBurnAccountConnection",
  items?:  Array<BurnAccount | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelHashPairFilterInput = {
  id?: ModelIDInput | null,
  hash?: ModelStringInput | null,
  secret?: ModelStringInput | null,
  and?: Array< ModelHashPairFilterInput | null > | null,
  or?: Array< ModelHashPairFilterInput | null > | null,
  not?: ModelHashPairFilterInput | null,
};

export type ModelHashPairConnection = {
  __typename: "ModelHashPairConnection",
  items?:  Array<HashPair | null >,
  nextToken?: string | null,
  startedAt?: number | null,
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

export type CreateTxMutationVariables = {
  input?: CreateTxInput,
  condition?: ModelTxConditionInput | null,
};

export type CreateTxMutation = {
  createTx?:  {
    __typename: "Tx",
    id: string,
    transactionHash?: string | null,
    burnAddress?: string | null,
    hash?: string | null,
    periodEndSeconds?: string | null,
    tokenAddress?: string | null,
    amount?: string | null,
    transactionId?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTxMutationVariables = {
  input?: UpdateTxInput,
  condition?: ModelTxConditionInput | null,
};

export type UpdateTxMutation = {
  updateTx?:  {
    __typename: "Tx",
    id: string,
    transactionHash?: string | null,
    burnAddress?: string | null,
    hash?: string | null,
    periodEndSeconds?: string | null,
    tokenAddress?: string | null,
    amount?: string | null,
    transactionId?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTxMutationVariables = {
  input?: DeleteTxInput,
  condition?: ModelTxConditionInput | null,
};

export type DeleteTxMutation = {
  deleteTx?:  {
    __typename: "Tx",
    id: string,
    transactionHash?: string | null,
    burnAddress?: string | null,
    hash?: string | null,
    periodEndSeconds?: string | null,
    tokenAddress?: string | null,
    amount?: string | null,
    transactionId?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBurnAccountMutationVariables = {
  input?: CreateBurnAccountInput,
  condition?: ModelBurnAccountConditionInput | null,
};

export type CreateBurnAccountMutation = {
  createBurnAccount?:  {
    __typename: "BurnAccount",
    id: string,
    address?: string | null,
    privateKey?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBurnAccountMutationVariables = {
  input?: UpdateBurnAccountInput,
  condition?: ModelBurnAccountConditionInput | null,
};

export type UpdateBurnAccountMutation = {
  updateBurnAccount?:  {
    __typename: "BurnAccount",
    id: string,
    address?: string | null,
    privateKey?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBurnAccountMutationVariables = {
  input?: DeleteBurnAccountInput,
  condition?: ModelBurnAccountConditionInput | null,
};

export type DeleteBurnAccountMutation = {
  deleteBurnAccount?:  {
    __typename: "BurnAccount",
    id: string,
    address?: string | null,
    privateKey?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateHashPairMutationVariables = {
  input?: CreateHashPairInput,
  condition?: ModelHashPairConditionInput | null,
};

export type CreateHashPairMutation = {
  createHashPair?:  {
    __typename: "HashPair",
    id: string,
    hash?: string | null,
    secret?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateHashPairMutationVariables = {
  input?: UpdateHashPairInput,
  condition?: ModelHashPairConditionInput | null,
};

export type UpdateHashPairMutation = {
  updateHashPair?:  {
    __typename: "HashPair",
    id: string,
    hash?: string | null,
    secret?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteHashPairMutationVariables = {
  input?: DeleteHashPairInput,
  condition?: ModelHashPairConditionInput | null,
};

export type DeleteHashPairMutation = {
  deleteHashPair?:  {
    __typename: "HashPair",
    id: string,
    hash?: string | null,
    secret?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
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

export type GetTxQueryVariables = {
  id?: string,
};

export type GetTxQuery = {
  getTx?:  {
    __typename: "Tx",
    id: string,
    transactionHash?: string | null,
    burnAddress?: string | null,
    hash?: string | null,
    periodEndSeconds?: string | null,
    tokenAddress?: string | null,
    amount?: string | null,
    transactionId?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTxsQueryVariables = {
  filter?: ModelTxFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTxsQuery = {
  listTxs?:  {
    __typename: "ModelTxConnection",
    items:  Array< {
      __typename: "Tx",
      id: string,
      transactionHash?: string | null,
      burnAddress?: string | null,
      hash?: string | null,
      periodEndSeconds?: string | null,
      tokenAddress?: string | null,
      amount?: string | null,
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

export type SyncTxesQueryVariables = {
  filter?: ModelTxFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTxesQuery = {
  syncTxes?:  {
    __typename: "ModelTxConnection",
    items:  Array< {
      __typename: "Tx",
      id: string,
      transactionHash?: string | null,
      burnAddress?: string | null,
      hash?: string | null,
      periodEndSeconds?: string | null,
      tokenAddress?: string | null,
      amount?: string | null,
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

export type GetBurnAccountQueryVariables = {
  id?: string,
};

export type GetBurnAccountQuery = {
  getBurnAccount?:  {
    __typename: "BurnAccount",
    id: string,
    address?: string | null,
    privateKey?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBurnAccountsQueryVariables = {
  filter?: ModelBurnAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBurnAccountsQuery = {
  listBurnAccounts?:  {
    __typename: "ModelBurnAccountConnection",
    items:  Array< {
      __typename: "BurnAccount",
      id: string,
      address?: string | null,
      privateKey?: string | null,
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

export type SyncBurnAccountsQueryVariables = {
  filter?: ModelBurnAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBurnAccountsQuery = {
  syncBurnAccounts?:  {
    __typename: "ModelBurnAccountConnection",
    items:  Array< {
      __typename: "BurnAccount",
      id: string,
      address?: string | null,
      privateKey?: string | null,
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

export type GetHashPairQueryVariables = {
  id?: string,
};

export type GetHashPairQuery = {
  getHashPair?:  {
    __typename: "HashPair",
    id: string,
    hash?: string | null,
    secret?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListHashPairsQueryVariables = {
  filter?: ModelHashPairFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHashPairsQuery = {
  listHashPairs?:  {
    __typename: "ModelHashPairConnection",
    items:  Array< {
      __typename: "HashPair",
      id: string,
      hash?: string | null,
      secret?: string | null,
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

export type SyncHashPairsQueryVariables = {
  filter?: ModelHashPairFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncHashPairsQuery = {
  syncHashPairs?:  {
    __typename: "ModelHashPairConnection",
    items:  Array< {
      __typename: "HashPair",
      id: string,
      hash?: string | null,
      secret?: string | null,
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

export type OnCreateTxSubscription = {
  onCreateTx?:  {
    __typename: "Tx",
    id: string,
    transactionHash?: string | null,
    burnAddress?: string | null,
    hash?: string | null,
    periodEndSeconds?: string | null,
    tokenAddress?: string | null,
    amount?: string | null,
    transactionId?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTxSubscription = {
  onUpdateTx?:  {
    __typename: "Tx",
    id: string,
    transactionHash?: string | null,
    burnAddress?: string | null,
    hash?: string | null,
    periodEndSeconds?: string | null,
    tokenAddress?: string | null,
    amount?: string | null,
    transactionId?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTxSubscription = {
  onDeleteTx?:  {
    __typename: "Tx",
    id: string,
    transactionHash?: string | null,
    burnAddress?: string | null,
    hash?: string | null,
    periodEndSeconds?: string | null,
    tokenAddress?: string | null,
    amount?: string | null,
    transactionId?: string | null,
    timestamp?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBurnAccountSubscription = {
  onCreateBurnAccount?:  {
    __typename: "BurnAccount",
    id: string,
    address?: string | null,
    privateKey?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBurnAccountSubscription = {
  onUpdateBurnAccount?:  {
    __typename: "BurnAccount",
    id: string,
    address?: string | null,
    privateKey?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBurnAccountSubscription = {
  onDeleteBurnAccount?:  {
    __typename: "BurnAccount",
    id: string,
    address?: string | null,
    privateKey?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateHashPairSubscription = {
  onCreateHashPair?:  {
    __typename: "HashPair",
    id: string,
    hash?: string | null,
    secret?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateHashPairSubscription = {
  onUpdateHashPair?:  {
    __typename: "HashPair",
    id: string,
    hash?: string | null,
    secret?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteHashPairSubscription = {
  onDeleteHashPair?:  {
    __typename: "HashPair",
    id: string,
    hash?: string | null,
    secret?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
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
