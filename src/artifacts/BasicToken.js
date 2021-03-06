 const BasicToken =   {
  "contractName": "BasicToken",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "initialBalance",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "randomVar",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "randomVar2",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"initialBalance\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"randomVar\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"randomVar2\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}.     * Requirements:     * - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`).     * Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is called.     * NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller.     * This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}.     * Emits an {Approval} event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller.     * This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}.     * Emits an {Approval} event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}.     * Requirements:     * - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}.     * Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20};     * Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`.\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/C/Users/Paul/Documents/GitHub/severalpens/burn-to-claim/contracts/BasicToken.sol\":\"BasicToken\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/Paul/Documents/GitHub/severalpens/burn-to-claim/contracts/BasicToken.sol\":{\"keccak256\":\"0x4fc47db4e585923968899ba85f1969aded73ef85849f973b1791d9284981323a\",\"urls\":[\"bzz-raw://0d680d9b347154cbb9873f7bf103c46214e64e05d7a7ce30fcf8ae1f0243424a\",\"dweb:/ipfs/Qmcf3gJa6w54gvGURka21PFVF8yNqnyFhJ5ckYEJa4wQfv\"]},\"@openzeppelin/contracts/GSN/Context.sol\":{\"keccak256\":\"0xdb26cbf4d028490f49831a7865c2fe1b28db44b535ca8d343785a3b768aae183\",\"urls\":[\"bzz-raw://840b14ce0315c47d49ba328f1f9fa7654ded1c9e1559e6c5e777a7b2dc28bf0a\",\"dweb:/ipfs/QmTLLabn4wcfGro9LEmUXUN2nwKqZSotXMvjDCLXEnLtZP\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x9a9cf02622cd7a64261b10534fc3260449da25c98c9e96d1b4ae8110a20e5806\",\"urls\":[\"bzz-raw://2df142592d1dc267d9549049ee3317fa190d2f87eaa565f86ab05ec83f7ab8f5\",\"dweb:/ipfs/QmSkJtcfWo7c42KnL5hho6GFxK6HRNV91XABx1P7xDtfLV\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xf204d98eef08edacf5a02a2af1516ea4febdb6aba7a1ae5ac8deb6e568fd3dbb\",\"urls\":[\"bzz-raw://c4dea62bffbd180772a6cfe7cb90e3a045c52d6b502bdb2fdff83193da42d8d0\",\"dweb:/ipfs/QmW8qGZ5nngajmv5Aamdrpkeuq7S5YCVaR7rtcqNekKHtK\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x5c26b39d26f7ed489e555d955dcd3e01872972e71fdd1528e93ec164e4f23385\",\"urls\":[\"bzz-raw://efdc632af6960cf865dbc113665ea1f5b90eab75cc40ec062b2f6ae6da582017\",\"dweb:/ipfs/QmfAZFDuG62vxmAN9DnXApv7e7PMzPqi4RkqqZHLMSQiY5\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xdfb4f812600ba4ce6738c35584ceb8c9433472583051b48ba5b1f66cb758a498\",\"urls\":[\"bzz-raw://df02dffe1c1de089d9b4f6192f0dcf464526f2230f420b3deec4645e0cdd2bff\",\"dweb:/ipfs/QmcqXGAU3KJqwrgUVoGJ2W8osomhSJ4R5kdsRpbuW3fELS\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b50604051620015d7380380620015d7833981810160405260208110156200003757600080fd5b81019080805190602001909291905050506040518060400160405280600581526020017f42617369630000000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f42534300000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000cc929190620003b9565b508060049080519060200190620000e5929190620003b9565b506012600560006101000a81548160ff021916908360ff16021790555050506200011633826200012f60201b60201c565b6200012860006200030d60201b60201c565b5062000468565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620001d3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b620001e7600083836200032b60201b60201c565b62000203816002546200033060201b62000f9b1790919060201c565b60028190555062000261816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546200033060201b62000f9b1790919060201c565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b80600560006101000a81548160ff021916908360ff16021790555050565b505050565b600080828401905083811015620003af576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620003fc57805160ff19168380011785556200042d565b828001600101855582156200042d579182015b828111156200042c5782518255916020019190600101906200040f565b5b5090506200043c919062000440565b5090565b6200046591905b808211156200046157600081600090555060010162000447565b5090565b90565b61115f80620004786000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806370a082311161008c57806395d89b411161006657806395d89b411461037f578063a457c2d714610402578063a9059cbb14610468578063dd62ed3e146104ce576100cf565b806370a08231146102eb5780638fc34b0f14610343578063911793ff14610361576100cf565b806306fdde03146100d4578063095ea7b31461015757806318160ddd146101bd57806323b872dd146101db578063313ce567146102615780633950935114610285575b600080fd5b6100dc610546565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561011c578082015181840152602081019050610101565b50505050905090810190601f1680156101495780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101a36004803603604081101561016d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506105e8565b604051808215151515815260200191505060405180910390f35b6101c5610606565b6040518082815260200191505060405180910390f35b610247600480360360608110156101f157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610610565b604051808215151515815260200191505060405180910390f35b6102696106e9565b604051808260ff1660ff16815260200191505060405180910390f35b6102d16004803603604081101561029b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610700565b604051808215151515815260200191505060405180910390f35b61032d6004803603602081101561030157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107b3565b6040518082815260200191505060405180910390f35b61034b6107fb565b6040518082815260200191505060405180910390f35b610369610801565b6040518082815260200191505060405180910390f35b610387610807565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103c75780820151818401526020810190506103ac565b50505050905090810190601f1680156103f45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61044e6004803603604081101561041857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108a9565b604051808215151515815260200191505060405180910390f35b6104b46004803603604081101561047e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610976565b604051808215151515815260200191505060405180910390f35b610530600480360360408110156104e457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610994565b6040518082815260200191505060405180910390f35b606060038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105de5780601f106105b3576101008083540402835291602001916105de565b820191906000526020600020905b8154815290600101906020018083116105c157829003601f168201915b5050505050905090565b60006105fc6105f5610a1b565b8484610a23565b6001905092915050565b6000600254905090565b600061061d848484610c1a565b6106de84610629610a1b565b6106d98560405180606001604052806028815260200161109460289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061068f610a1b565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610edb9092919063ffffffff16565b610a23565b600190509392505050565b6000600560009054906101000a900460ff16905090565b60006107a961070d610a1b565b846107a4856001600061071e610a1b565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f9b90919063ffffffff16565b610a23565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60065481565b60075481565b606060048054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561089f5780601f106108745761010080835404028352916020019161089f565b820191906000526020600020905b81548152906001019060200180831161088257829003601f168201915b5050505050905090565b600061096c6108b6610a1b565b846109678560405180606001604052806025815260200161110560259139600160006108e0610a1b565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610edb9092919063ffffffff16565b610a23565b6001905092915050565b600061098a610983610a1b565b8484610c1a565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610aa9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806110e16024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b2f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061104c6022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610ca0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806110bc6025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d26576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806110296023913960400191505060405180910390fd5b610d31838383611023565b610d9c8160405180606001604052806026815260200161106e602691396000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610edb9092919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610e2f816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f9b90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000838311158290610f88576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610f4d578082015181840152602081019050610f32565b50505050905090810190601f168015610f7a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b600080828401905083811015611019576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212201ac44cbc343d89fcff5e1d3c1893426d485c5a567514a26d47dd274a3f87dc3264736f6c63430006020033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100cf5760003560e01c806370a082311161008c57806395d89b411161006657806395d89b411461037f578063a457c2d714610402578063a9059cbb14610468578063dd62ed3e146104ce576100cf565b806370a08231146102eb5780638fc34b0f14610343578063911793ff14610361576100cf565b806306fdde03146100d4578063095ea7b31461015757806318160ddd146101bd57806323b872dd146101db578063313ce567146102615780633950935114610285575b600080fd5b6100dc610546565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561011c578082015181840152602081019050610101565b50505050905090810190601f1680156101495780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101a36004803603604081101561016d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506105e8565b604051808215151515815260200191505060405180910390f35b6101c5610606565b6040518082815260200191505060405180910390f35b610247600480360360608110156101f157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610610565b604051808215151515815260200191505060405180910390f35b6102696106e9565b604051808260ff1660ff16815260200191505060405180910390f35b6102d16004803603604081101561029b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610700565b604051808215151515815260200191505060405180910390f35b61032d6004803603602081101561030157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107b3565b6040518082815260200191505060405180910390f35b61034b6107fb565b6040518082815260200191505060405180910390f35b610369610801565b6040518082815260200191505060405180910390f35b610387610807565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103c75780820151818401526020810190506103ac565b50505050905090810190601f1680156103f45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61044e6004803603604081101561041857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108a9565b604051808215151515815260200191505060405180910390f35b6104b46004803603604081101561047e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610976565b604051808215151515815260200191505060405180910390f35b610530600480360360408110156104e457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610994565b6040518082815260200191505060405180910390f35b606060038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105de5780601f106105b3576101008083540402835291602001916105de565b820191906000526020600020905b8154815290600101906020018083116105c157829003601f168201915b5050505050905090565b60006105fc6105f5610a1b565b8484610a23565b6001905092915050565b6000600254905090565b600061061d848484610c1a565b6106de84610629610a1b565b6106d98560405180606001604052806028815260200161109460289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061068f610a1b565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610edb9092919063ffffffff16565b610a23565b600190509392505050565b6000600560009054906101000a900460ff16905090565b60006107a961070d610a1b565b846107a4856001600061071e610a1b565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f9b90919063ffffffff16565b610a23565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60065481565b60075481565b606060048054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561089f5780601f106108745761010080835404028352916020019161089f565b820191906000526020600020905b81548152906001019060200180831161088257829003601f168201915b5050505050905090565b600061096c6108b6610a1b565b846109678560405180606001604052806025815260200161110560259139600160006108e0610a1b565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610edb9092919063ffffffff16565b610a23565b6001905092915050565b600061098a610983610a1b565b8484610c1a565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610aa9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806110e16024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b2f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061104c6022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610ca0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806110bc6025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d26576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806110296023913960400191505060405180910390fd5b610d31838383611023565b610d9c8160405180606001604052806026815260200161106e602691396000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610edb9092919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610e2f816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f9b90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000838311158290610f88576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610f4d578082015181840152602081019050610f32565b50505050905090810190601f168015610f7a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b600080828401905083811015611019576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212201ac44cbc343d89fcff5e1d3c1893426d485c5a567514a26d47dd274a3f87dc3264736f6c63430006020033",
  "sourceMap": "147:227:0:-:0;;;181:135;8:9:-1;5:2;;;30:1;27;20:12;5:2;181:135:0;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;181:135:0;;;;;;;;;;;;;;;;2013:141:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2093:4;2085:5;:12;;;;;;;;;;;;:::i;:::-;;2117:6;2107:7;:16;;;;;;;;;;;;:::i;:::-;;2145:2;2133:9;;:14;;;;;;;;;;;;;;;;;;2013:141;;253:33:0::1;259:10;271:14;253:5;;;:33;;:::i;:::-;293:17;308:1;293:14;;;:17;;:::i;:::-;181:135:::0;147:227;;7835:370:5;7937:1;7918:21;;:7;:21;;;;7910:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7986:49;8015:1;8019:7;8028:6;7986:20;;;:49;;:::i;:::-;8061:24;8078:6;8061:12;;:16;;;;;;:24;;;;:::i;:::-;8046:12;:39;;;;8116:30;8139:6;8116:9;:18;8126:7;8116:18;;;;;;;;;;;;;;;;:22;;;;;;:30;;;;:::i;:::-;8095:9;:18;8105:7;8095:18;;;;;;;;;;;;;;;:51;;;;8182:7;8161:37;;8178:1;8161:37;;;8191:6;8161:37;;;;;;;;;;;;;;;;;;7835:370;;:::o;10022:88::-;10094:9;10082;;:21;;;;;;;;;;;;;;;;;;10022:88;:::o;10697:92::-;;;;:::o;874:176:4:-;932:7;951:9;967:1;963;:5;951:17;;991:1;986;:6;;978:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1042:1;1035:8;;;874:176;;;;:::o;147:227:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "147:227:0:-:0;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;147:227:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2219:81:5;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2219:81:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4255:166;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4255:166:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3262:98;;;:::i;:::-;;;;;;;;;;;;;;;;;;;4881:317;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4881:317:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3121:81;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;5593:215;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5593:215:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3418:117;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3418:117:5;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;322:21:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;348:22;;;:::i;:::-;;;;;;;;;;;;;;;;;;;2413:85:5;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2413:85:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6295:266;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6295:266:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3738:172;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3738:172:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3968:149;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3968:149:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;2219:81;2256:13;2288:5;2281:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2219:81;:::o;4255:166::-;4338:4;4354:39;4363:12;:10;:12::i;:::-;4377:7;4386:6;4354:8;:39::i;:::-;4410:4;4403:11;;4255:166;;;;:::o;3262:98::-;3315:7;3341:12;;3334:19;;3262:98;:::o;4881:317::-;4987:4;5003:36;5013:6;5021:9;5032:6;5003:9;:36::i;:::-;5049:121;5058:6;5066:12;:10;:12::i;:::-;5080:89;5118:6;5080:89;;;;;;;;;;;;;;;;;:11;:19;5092:6;5080:19;;;;;;;;;;;;;;;:33;5100:12;:10;:12::i;:::-;5080:33;;;;;;;;;;;;;;;;:37;;:89;;;;;:::i;:::-;5049:8;:121::i;:::-;5187:4;5180:11;;4881:317;;;;;:::o;3121:81::-;3162:5;3186:9;;;;;;;;;;;3179:16;;3121:81;:::o;5593:215::-;5681:4;5697:83;5706:12;:10;:12::i;:::-;5720:7;5729:50;5768:10;5729:11;:25;5741:12;:10;:12::i;:::-;5729:25;;;;;;;;;;;;;;;:34;5755:7;5729:34;;;;;;;;;;;;;;;;:38;;:50;;;;:::i;:::-;5697:8;:83::i;:::-;5797:4;5790:11;;5593:215;;;;:::o;3418:117::-;3484:7;3510:9;:18;3520:7;3510:18;;;;;;;;;;;;;;;;3503:25;;3418:117;;;:::o;322:21:0:-;;;;:::o;348:22::-;;;;:::o;2413:85:5:-;2452:13;2484:7;2477:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2413:85;:::o;6295:266::-;6388:4;6404:129;6413:12;:10;:12::i;:::-;6427:7;6436:96;6475:15;6436:96;;;;;;;;;;;;;;;;;:11;:25;6448:12;:10;:12::i;:::-;6436:25;;;;;;;;;;;;;;;:34;6462:7;6436:34;;;;;;;;;;;;;;;;:38;;:96;;;;;:::i;:::-;6404:8;:129::i;:::-;6550:4;6543:11;;6295:266;;;;:::o;3738:172::-;3824:4;3840:42;3850:12;:10;:12::i;:::-;3864:9;3875:6;3840:9;:42::i;:::-;3899:4;3892:11;;3738:172;;;;:::o;3968:149::-;4057:7;4083:11;:18;4095:5;4083:18;;;;;;;;;;;;;;;:27;4102:7;4083:27;;;;;;;;;;;;;;;;4076:34;;3968:149;;;;:::o;590:104:3:-;643:15;677:10;670:17;;590:104;:::o;9359:340:5:-;9477:1;9460:19;;:5;:19;;;;9452:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9557:1;9538:21;;:7;:21;;;;9530:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9639:6;9609:11;:18;9621:5;9609:18;;;;;;;;;;;;;;;:27;9628:7;9609:27;;;;;;;;;;;;;;;:36;;;;9676:7;9660:32;;9669:5;9660:32;;;9685:6;9660:32;;;;;;;;;;;;;;;;;;9359:340;;;:::o;7035:530::-;7158:1;7140:20;;:6;:20;;;;7132:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7241:1;7220:23;;:9;:23;;;;7212:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7294:47;7315:6;7323:9;7334:6;7294:20;:47::i;:::-;7372:71;7394:6;7372:71;;;;;;;;;;;;;;;;;:9;:17;7382:6;7372:17;;;;;;;;;;;;;;;;:21;;:71;;;;;:::i;:::-;7352:9;:17;7362:6;7352:17;;;;;;;;;;;;;;;:91;;;;7476:32;7501:6;7476:9;:20;7486:9;7476:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;7453:9;:20;7463:9;7453:20;;;;;;;;;;;;;;;:55;;;;7540:9;7523:35;;7532:6;7523:35;;;7551:6;7523:35;;;;;;;;;;;;;;;;;;7035:530;;;:::o;1746:187:4:-;1832:7;1864:1;1859;:6;;1867:12;1851:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1851:29:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1890:9;1906:1;1902;:5;1890:17;;1925:1;1918:8;;;1746:187;;;;;:::o;874:176::-;932:7;951:9;967:1;963;:5;951:17;;991:1;986;:6;;978:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1042:1;1035:8;;;874:176;;;;:::o;10697:92:5:-;;;;:::o",
  "source": "pragma solidity ^0.6.0;\r\n\r\nimport \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\r\n\r\n// Example class - a mock class using delivering from ERC20\r\ncontract BasicToken is ERC20 {\r\n  constructor(uint256 initialBalance) ERC20(\"Basic\", \"BSC\") public {\r\n    _mint(msg.sender, initialBalance);\r\n    _setupDecimals(0);\r\n  }\r\n\r\n  uint public randomVar;\r\n  uint public randomVar2;\r\n}\r\n",
  "sourcePath": "C:\\Users\\Paul\\Documents\\GitHub\\severalpens\\burn-to-claim\\contracts\\BasicToken.sol",
  "ast": {
    "absolutePath": "/C/Users/Paul/Documents/GitHub/severalpens/burn-to-claim/contracts/BasicToken.sol",
    "exportedSymbols": {
      "BasicToken": [
        29
      ]
    },
    "id": 30,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 30,
        "sourceUnit": 1483,
        "src": "27:55:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3,
              "name": "ERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1482,
              "src": "170:5:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$1482",
                "typeString": "contract ERC20"
              }
            },
            "id": 4,
            "nodeType": "InheritanceSpecifier",
            "src": "170:5:0"
          }
        ],
        "contractDependencies": [
          807,
          1482,
          1551
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 29,
        "linearizedBaseContracts": [
          29,
          1482,
          1551,
          807
        ],
        "name": "BasicToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 23,
              "nodeType": "Block",
              "src": "246:70:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 14,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "259:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 15,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "259:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16,
                        "name": "initialBalance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6,
                        "src": "271:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 13,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1362,
                      "src": "253:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 17,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "253:33:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 18,
                  "nodeType": "ExpressionStatement",
                  "src": "253:33:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 20,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "308:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        }
                      ],
                      "id": 19,
                      "name": "_setupDecimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1471,
                      "src": "293:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint8_$returns$__$",
                        "typeString": "function (uint8)"
                      }
                    },
                    "id": 21,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "293:17:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 22,
                  "nodeType": "ExpressionStatement",
                  "src": "293:17:0"
                }
              ]
            },
            "documentation": null,
            "id": 24,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "4261736963",
                    "id": 9,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "223:7:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_be0920ca2f453cc2f26759b0d061dd7c42a6e69b1287006960a7c4bf8d4dbdb3",
                      "typeString": "literal_string \"Basic\""
                    },
                    "value": "Basic"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "425343",
                    "id": 10,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "232:5:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_4602a37e2aeaf2820d53eaeb5ab645d0d45172d006889d176509ed9e7cfa6144",
                      "typeString": "literal_string \"BSC\""
                    },
                    "value": "BSC"
                  }
                ],
                "id": 11,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 8,
                  "name": "ERC20",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1482,
                  "src": "217:5:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC20_$1482_$",
                    "typeString": "type(contract ERC20)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "217:21:0"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 7,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6,
                  "name": "initialBalance",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 24,
                  "src": "193:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "193:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "192:24:0"
            },
            "returnParameters": {
              "id": 12,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "246:0:0"
            },
            "scope": 29,
            "src": "181:135:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "8fc34b0f",
            "id": 26,
            "name": "randomVar",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 29,
            "src": "322:21:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 25,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "322:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "911793ff",
            "id": 28,
            "name": "randomVar2",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 29,
            "src": "348:22:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 27,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "348:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          }
        ],
        "scope": 30,
        "src": "147:227:0"
      }
    ],
    "src": "0:376:0"
  },
  "legacyAST": {
    "absolutePath": "/C/Users/Paul/Documents/GitHub/severalpens/burn-to-claim/contracts/BasicToken.sol",
    "exportedSymbols": {
      "BasicToken": [
        29
      ]
    },
    "id": 30,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 30,
        "sourceUnit": 1483,
        "src": "27:55:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3,
              "name": "ERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1482,
              "src": "170:5:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$1482",
                "typeString": "contract ERC20"
              }
            },
            "id": 4,
            "nodeType": "InheritanceSpecifier",
            "src": "170:5:0"
          }
        ],
        "contractDependencies": [
          807,
          1482,
          1551
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 29,
        "linearizedBaseContracts": [
          29,
          1482,
          1551,
          807
        ],
        "name": "BasicToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 23,
              "nodeType": "Block",
              "src": "246:70:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 14,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "259:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 15,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "259:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16,
                        "name": "initialBalance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6,
                        "src": "271:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 13,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1362,
                      "src": "253:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 17,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "253:33:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 18,
                  "nodeType": "ExpressionStatement",
                  "src": "253:33:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 20,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "308:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        }
                      ],
                      "id": 19,
                      "name": "_setupDecimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1471,
                      "src": "293:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint8_$returns$__$",
                        "typeString": "function (uint8)"
                      }
                    },
                    "id": 21,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "293:17:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 22,
                  "nodeType": "ExpressionStatement",
                  "src": "293:17:0"
                }
              ]
            },
            "documentation": null,
            "id": 24,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "4261736963",
                    "id": 9,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "223:7:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_be0920ca2f453cc2f26759b0d061dd7c42a6e69b1287006960a7c4bf8d4dbdb3",
                      "typeString": "literal_string \"Basic\""
                    },
                    "value": "Basic"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "425343",
                    "id": 10,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "232:5:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_4602a37e2aeaf2820d53eaeb5ab645d0d45172d006889d176509ed9e7cfa6144",
                      "typeString": "literal_string \"BSC\""
                    },
                    "value": "BSC"
                  }
                ],
                "id": 11,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 8,
                  "name": "ERC20",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1482,
                  "src": "217:5:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC20_$1482_$",
                    "typeString": "type(contract ERC20)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "217:21:0"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 7,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6,
                  "name": "initialBalance",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 24,
                  "src": "193:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "193:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "192:24:0"
            },
            "returnParameters": {
              "id": 12,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "246:0:0"
            },
            "scope": 29,
            "src": "181:135:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "8fc34b0f",
            "id": 26,
            "name": "randomVar",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 29,
            "src": "322:21:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 25,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "322:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "911793ff",
            "id": 28,
            "name": "randomVar2",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 29,
            "src": "348:22:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 27,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "348:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          }
        ],
        "scope": 30,
        "src": "147:227:0"
      }
    ],
    "src": "0:376:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.2+commit.bacdbe57.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.2.0",
  "updatedAt": "2020-11-09T06:22:16.062Z",
  "devdoc": {
    "methods": {
      "allowance(address,address)": {
        "details": "See {IERC20-allowance}."
      },
      "approve(address,uint256)": {
        "details": "See {IERC20-approve}.     * Requirements:     * - `spender` cannot be the zero address."
      },
      "balanceOf(address)": {
        "details": "See {IERC20-balanceOf}."
      },
      "decimals()": {
        "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`).     * Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is called.     * NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
      },
      "decreaseAllowance(address,uint256)": {
        "details": "Atomically decreases the allowance granted to `spender` by the caller.     * This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}.     * Emits an {Approval} event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
      },
      "increaseAllowance(address,uint256)": {
        "details": "Atomically increases the allowance granted to `spender` by the caller.     * This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}.     * Emits an {Approval} event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address."
      },
      "name()": {
        "details": "Returns the name of the token."
      },
      "symbol()": {
        "details": "Returns the symbol of the token, usually a shorter version of the name."
      },
      "totalSupply()": {
        "details": "See {IERC20-totalSupply}."
      },
      "transfer(address,uint256)": {
        "details": "See {IERC20-transfer}.     * Requirements:     * - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See {IERC20-transferFrom}.     * Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20};     * Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`."
      }
    }
  },
  "userdoc": {
    "methods": {}
  }
}

export default BasicToken;