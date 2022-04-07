// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tx, BurnAccount, HashPair, TxLog, Log, Transaction, Account, Contract, Todo } = initSchema(schema);

export {
  Tx,
  BurnAccount,
  HashPair,
  TxLog,
  Log,
  Transaction,
  Account,
  Contract,
  Todo
};