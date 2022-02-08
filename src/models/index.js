// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Account, Contract, Todo } = initSchema(schema);

export {
  Account,
  Contract,
  Todo
};