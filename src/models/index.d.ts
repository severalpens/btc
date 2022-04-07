import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class HashPair {
  readonly id: string;
  readonly hash?: string;
  readonly secret?: string;
  constructor(init: ModelInit<HashPair>);
  static copyOf(source: HashPair, mutator: (draft: MutableModel<HashPair>) => MutableModel<HashPair> | void): HashPair;
}

export declare class TxLog {
  readonly id: string;
  readonly transactionType?: string;
  readonly transactionHash?: string;
  readonly timestamp?: number;
  constructor(init: ModelInit<TxLog>);
  static copyOf(source: TxLog, mutator: (draft: MutableModel<TxLog>) => MutableModel<TxLog> | void): TxLog;
}

export declare class Log {
  readonly id: string;
  readonly transactionType?: string;
  readonly transactionHash?: string;
  readonly timestamp?: number;
  constructor(init: ModelInit<Log>);
  static copyOf(source: Log, mutator: (draft: MutableModel<Log>) => MutableModel<Log> | void): Log;
}

export declare class Transaction {
  readonly id: string;
  readonly transactionId?: string;
  readonly timestamp?: number;
  constructor(init: ModelInit<Transaction>);
  static copyOf(source: Transaction, mutator: (draft: MutableModel<Transaction>) => MutableModel<Transaction> | void): Transaction;
}

export declare class Account {
  readonly id: string;
  readonly name?: string;
  readonly address?: string;
  readonly privateKey?: string;
  readonly balance?: string;
  constructor(init: ModelInit<Account>);
  static copyOf(source: Account, mutator: (draft: MutableModel<Account>) => MutableModel<Account> | void): Account;
}

export declare class Contract {
  readonly id: string;
  readonly symbol?: string;
  readonly name?: string;
  readonly address?: string;
  readonly initialBalance?: string;
  readonly network?: string;
  readonly owner?: string;
  readonly abi?: string;
  readonly timestamp?: number;
  constructor(init: ModelInit<Contract>);
  static copyOf(source: Contract, mutator: (draft: MutableModel<Contract>) => MutableModel<Contract> | void): Contract;
}

export declare class Todo {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  constructor(init: ModelInit<Todo>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}