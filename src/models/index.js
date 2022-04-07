// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { HashPair, TxLog, Log, Transaction, Account, Contract, Todo } = initSchema(schema);

export {
  HashPair,
  TxLog,
  Log,
  Transaction,
  Account,
  Contract,
  Todo
};