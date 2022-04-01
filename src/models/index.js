// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TxLog, Log, Transaction, Account, Contract, Todo } = initSchema(schema);

export {
  TxLog,
  Log,
  Transaction,
  Account,
  Contract,
  Todo
};