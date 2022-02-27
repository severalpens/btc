import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowCircleRightIcon,
  XIcon,
  CloudUploadIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'



const deploy = [
  {
    name: 'Burn to Claim',
    description: 'Deploy a burn-to-claim contract',
    href: '#',
    icon: CloudUploadIcon,
  },
  {
    name: 'ERC20',
    description: 'Deploy a standard ERC20 (fungible tokens) contract,',
    href: '#',
    icon: CloudUploadIcon,
  },
  {
    name: 'ERC721',
    description: 'Deploy a standard ERC721 (NFT) contract,',
    href: '#',
    icon: CloudUploadIcon,
  },
]

const initialize = [
  {
    name: 'Register Contract',
    description: 'Register an ERC20 or ERC721 token in a Burn-to-Claim contract',
    href: '#',
    icon: ArrowCircleRightIcon,
  },
  {
    name: 'Transfer',
    description: 'Transfer an initial token amont to a Burn to Claim contract',
    href: '#',
    icon: ArrowCircleRightIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}




function Navbar(props) {

  const [accounts, setAccounts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let userAccounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccounts(userAccounts);
      console.log(userAccounts)
    }
    fetchData();
  }, [])



  return (
    <div className="container flex justify-between mx-auto border border-black px-4">
    <div className="p-6 columns-2  flex">
      <div className="mx-6">
        <a className="font-bold" href="/">
          BTC
        </a>
      </div>
      <div className="mx-6">
        <a className="" href="/">
          Deploy
        </a>
      </div>
      <div className="mx-6">
        <a className="" href="/">
          Initialize
        </a>
      </div>
      <div className="mx-6">
        <a className="" href="/">
          Transfer
        </a>
      </div>
    </div>
    <div className="p-6 columns-2">Login</div>
  </div>
  );
}

export default withAuthenticator(Navbar);