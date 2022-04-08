import { useState, useEffect } from "react";
import Blockchain from './Blockchain';
import TableOuter from "./TableOuter";
import Contracts from "./Contracts";
import Logs from "./Logs";
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import ContractCombobox from "./ContractCombobox";

const blockchain = new Blockchain();

export default function TextInput(props) {

const {setItem, componentId} = props.setItem;

  return (
            <input type="text" className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700
                    focus:bg-white 
                    focus:border-blue-600 
                    focus:outline-none
                  "
              placeholder="1"
              id={componentId}
              name={componentId}
              defaultValue="1"
              onChange={e => setItem(e.target.value)}
            />
  )
}
