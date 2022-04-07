// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BurnAccount, HashPair, TxLog, Log, Transaction, Account, Contract, Todo } = initSchema(schema);

export {
  BurnAccount,
  HashPair,
  TxLog,
  Log,
  Transaction,
  Account,
  Contract,
  Todo
};