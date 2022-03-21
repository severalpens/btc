// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Transaction, Account, Contract, Todo } = initSchema(schema);

export {
  Transaction,
  Account,
  Contract,
  Todo
};