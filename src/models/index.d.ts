import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





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