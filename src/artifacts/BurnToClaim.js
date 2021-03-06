const BurnToClaim = {
  "contractName": "BurnToClaim",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "transactionId",
          "type": "bytes32"
        }
      ],
      "name": "entryTransactionEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "transactionId",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "tokenContract",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "hashlock",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timelock",
          "type": "uint256"
        }
      ],
      "name": "exitTransactionEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "transactionId",
          "type": "bytes32"
        }
      ],
      "name": "reclaimTransactionEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "message",
          "type": "string"
        }
      ],
      "name": "requireMockEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "message",
          "type": "string"
        }
      ],
      "name": "revertMockEvent",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "result",
          "type": "bool"
        },
        {
          "internalType": "string",
          "name": "message",
          "type": "string"
        }
      ],
      "name": "requireMock",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "contractAddress",
          "type": "address"
        }
      ],
      "name": "registerContract",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_burnAddress",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "_hashlock",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "_timelock",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_tokenContract",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "exitTransaction",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "transactionId",
          "type": "bytes32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_crosschainContractAddress",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "_transactionId",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "_burnAddress",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "_hashlock",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "_timelock",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_tokenContract",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "add",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_receiver",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "_transactionId",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "_preimage",
          "type": "bytes32"
        }
      ],
      "name": "entryTransaction",
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
          "name": "_crosschainContractAddress",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "_transactionId",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "_preimage",
          "type": "bytes32"
        }
      ],
      "name": "update",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_transactionId",
          "type": "bytes32"
        }
      ],
      "name": "reclaimTransaction",
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
          "internalType": "bytes32",
          "name": "_transactionId",
          "type": "bytes32"
        }
      ],
      "name": "reclaimTransaction1",
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
          "name": "_tokenContract",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "btcTransfer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_tokenContract",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "btcTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_transactionId",
          "type": "bytes32"
        }
      ],
      "name": "getContract",
      "outputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenContract",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "hashlock",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "timelock",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "withdrawn",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "refunded",
          "type": "bool"
        },
        {
          "internalType": "bytes32",
          "name": "preimage",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"transactionId\",\"type\":\"bytes32\"}],\"name\":\"entryTransactionEvent\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"transactionId\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"tokenContract\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"hashlock\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"timelock\",\"type\":\"uint256\"}],\"name\":\"exitTransactionEvent\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"transactionId\",\"type\":\"bytes32\"}],\"name\":\"reclaimTransactionEvent\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"message\",\"type\":\"string\"}],\"name\":\"requireMockEvent\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"message\",\"type\":\"string\"}],\"name\":\"revertMockEvent\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_crosschainContractAddress\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"_transactionId\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"_burnAddress\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"_hashlock\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"_timelock\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_tokenContract\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"add\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_tokenContract\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"btcTransfer\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_tokenContract\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"btcTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_receiver\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"_transactionId\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"_preimage\",\"type\":\"bytes32\"}],\"name\":\"entryTransaction\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_burnAddress\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"_hashlock\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"_timelock\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_tokenContract\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"exitTransaction\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"transactionId\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_transactionId\",\"type\":\"bytes32\"}],\"name\":\"getContract\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"tokenContract\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"hashlock\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"timelock\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"withdrawn\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"refunded\",\"type\":\"bool\"},{\"internalType\":\"bytes32\",\"name\":\"preimage\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_transactionId\",\"type\":\"bytes32\"}],\"name\":\"reclaimTransaction\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_transactionId\",\"type\":\"bytes32\"}],\"name\":\"reclaimTransaction1\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"contractAddress\",\"type\":\"address\"}],\"name\":\"registerContract\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"result\",\"type\":\"bool\"},{\"internalType\":\"string\",\"name\":\"message\",\"type\":\"string\"}],\"name\":\"requireMock\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_crosschainContractAddress\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"_transactionId\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"_preimage\",\"type\":\"bytes32\"}],\"name\":\"update\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/C/Users/Paul/Documents/GitHub/severalpens/burn-to-claim/contracts/BurnToClaim.sol\":\"BurnToClaim\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/Paul/Documents/GitHub/severalpens/burn-to-claim/contracts/BurnToClaim.sol\":{\"keccak256\":\"0xdbf8fa5bdbc6e1e29fc5dba4cd45b1426a177cfa4718bda91208213fe0901e6c\",\"urls\":[\"bzz-raw://08c72cc8769b107749c9ad1e6844753faf38275ec6670cc0e6abfc453c59f311\",\"dweb:/ipfs/QmeW9qbp7CQC1NnEgLuBu9ynmdmQmD1LUnAPUAj7ptbKPa\"]},\"@openzeppelin/contracts/GSN/Context.sol\":{\"keccak256\":\"0xdb26cbf4d028490f49831a7865c2fe1b28db44b535ca8d343785a3b768aae183\",\"urls\":[\"bzz-raw://840b14ce0315c47d49ba328f1f9fa7654ded1c9e1559e6c5e777a7b2dc28bf0a\",\"dweb:/ipfs/QmTLLabn4wcfGro9LEmUXUN2nwKqZSotXMvjDCLXEnLtZP\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x9a9cf02622cd7a64261b10534fc3260449da25c98c9e96d1b4ae8110a20e5806\",\"urls\":[\"bzz-raw://2df142592d1dc267d9549049ee3317fa190d2f87eaa565f86ab05ec83f7ab8f5\",\"dweb:/ipfs/QmSkJtcfWo7c42KnL5hho6GFxK6HRNV91XABx1P7xDtfLV\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xf204d98eef08edacf5a02a2af1516ea4febdb6aba7a1ae5ac8deb6e568fd3dbb\",\"urls\":[\"bzz-raw://c4dea62bffbd180772a6cfe7cb90e3a045c52d6b502bdb2fdff83193da42d8d0\",\"dweb:/ipfs/QmW8qGZ5nngajmv5Aamdrpkeuq7S5YCVaR7rtcqNekKHtK\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x5c26b39d26f7ed489e555d955dcd3e01872972e71fdd1528e93ec164e4f23385\",\"urls\":[\"bzz-raw://efdc632af6960cf865dbc113665ea1f5b90eab75cc40ec062b2f6ae6da582017\",\"dweb:/ipfs/QmfAZFDuG62vxmAN9DnXApv7e7PMzPqi4RkqqZHLMSQiY5\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xdfb4f812600ba4ce6738c35584ceb8c9433472583051b48ba5b1f66cb758a498\",\"urls\":[\"bzz-raw://df02dffe1c1de089d9b4f6192f0dcf464526f2230f420b3deec4645e0cdd2bff\",\"dweb:/ipfs/QmcqXGAU3KJqwrgUVoGJ2W8osomhSJ4R5kdsRpbuW3fELS\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b50612311806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806364ff30041161007157806364ff30041461028e5780636d0c27a8146102e6578063cbbd8a1d14610354578063d9d1ca4714610400578063e16c7d981461048e578063f46611f914610594576100a9565b8063159a962c146100ae57806322a5dde41461014457806340d1ce7314610188578063449b0395146101ce5780634cc28a1914610248575b600080fd5b61012e600480360360a08110156100c457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061065b565b6040518082815260200191505060405180910390f35b6101866004803603602081101561015a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610da4565b005b6101b46004803603602081101561019e57600080fd5b8101908080359060200190929190505050610ed0565b604051808215151515815260200191505060405180910390f35b61022e600480360360808110156101e457600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190505050611258565b604051808215151515815260200191505060405180910390f35b6102746004803603602081101561025e57600080fd5b8101908080359060200190929190505050611605565b604051808215151515815260200191505060405180910390f35b6102e4600480360360608110156102a457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291905050506119c7565b005b610352600480360360608110156102fc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611a7a565b005b6103fe600480360360e081101561036a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611b96565b005b61048c6004803603608081101561041657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611dee565b005b6104ba600480360360208110156104a457600080fd5b8101908080359060200190929190505050611f3f565b604051808a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018781526020018681526020018581526020018415151515815260200183151515158152602001828152602001995050505050505050505060405180910390f35b610659600480360360408110156105aa57600080fd5b81019080803515159060200190929190803590602001906401000000008111156105d357600080fd5b8201836020820111156105e557600080fd5b8035906020019184600183028401116401000000008311171561060757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061207f565b005b6000804290506106a3600084116040518060400160405280601881526020017f746f6b656e20616d6f756e74206d757374206265203e2030000000000000000081525061207f565b6107b3838573ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b15801561075857600080fd5b505afa15801561076c573d6000803e3d6000fd5b505050506040513d602081101561078257600080fd5b810190808051906020019092919050505010156040518060600160405280602181526020016122386021913961207f565b6107d781861160405180606001604052806023815260200161219c6023913961207f565b6002338886868a8a604051602001808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b815260140184815260200183815260200182815260200196505050505050506040516020818303038152906040526040518082805190602001908083835b602083106108e157805182526020820191506020810190506020830392506108be565b6001836020036101000a038019825116818451168082178552505050505050905001915050602060405180830381855afa158015610923573d6000803e3d6000fd5b5050506040513d602081101561093857600080fd5b810190808051906020019092919050505091506109548261212d565b156109c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f436f6e747261637420616c72656164792065786973747300000000000000000081525060200191505060405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff166323b872dd3389866040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610a8257600080fd5b505af1158015610a96573d6000803e3d6000fd5b505050506040513d6020811015610aac57600080fd5b8101908080519060200190929190505050610b12576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806122896022913960400191505060405180910390fd5b6040518061012001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018781526020018681526020016000151581526020016000151581526020016000801b81525060008084815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301556080820151816004015560a0820151816005015560c08201518160060160006101000a81548160ff02191690831515021790555060e08201518160060160016101000a81548160ff02191690831515021790555061010082015181600701559050508673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16837fa2a72d0528ccc829345e59386d5d35f088e634e3f387a029c08067fa727c654687878b42604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182815260200194505050505060405180910390a45095945050505050565b610df6600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156040518060600160405280602981526020016121bf6029913961207f565b60405180604001604052808273ffffffffffffffffffffffffffffffffffffffff16815260200160011515815250600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548160ff02191690831515021790555090505050565b6000610f19610ede8361212d565b6040518060400160405280601c81526020017f7472616e73616374696f6e496420646f6573206e6f742065786973740000000081525061207f565b610fbb3373ffffffffffffffffffffffffffffffffffffffff1660008085815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280601681526020017f726566756e6461626c653a206e6f742073656e6465720000000000000000000081525061207f565b6110236000151560008085815260200190815260200160002060060160019054906101000a900460ff161515146040518060400160405280601c81526020017f726566756e6461626c653a20616c726561647920726566756e6465640000000081525061207f565b61108b6000151560008085815260200190815260200160002060060160009054906101000a900460ff161515146040518060400160405280601d81526020017f726566756e6461626c653a20616c72656164792077697468647261776e00000081525061207f565b6000806000848152602001908152602001600020905060018160060160016101000a81548160ff0219169083151502179055508060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683600301546040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561119157600080fd5b505af11580156111a5573d6000803e3d6000fd5b505050506040513d60208110156111bb57600080fd5b8101908080519060200190929190505050611221576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806122896022913960400191505060405180910390fd5b827f7b932d7c3c50d56f3e342fca080984c95d87d5611ec3487235c1854056cc8eb460405160405180910390a26001915050919050565b60006112a16112668461212d565b6040518060400160405280601c81526020017f7472616e73616374696f6e496420646f6573206e6f742065786973740000000081525061207f565b6113b3600283604051602001808281526020019150506040516020818303038152906040526040518082805190602001908083835b602083106112f957805182526020820191506020810190506020830392506112d6565b6001836020036101000a038019825116818451168082178552505050505050905001915050602060405180830381855afa15801561133b573d6000803e3d6000fd5b5050506040513d602081101561135057600080fd5b810190808051906020019092919050505060008086815260200190815260200160002060040154146040518060400160405280601c81526020017f686173686c6f636b206861736820646f6573206e6f74206d617463680000000081525061207f565b61141b6000151560008086815260200190815260200160002060060160009054906101000a900460ff161515146040518060400160405280601f81526020017f776974686472617761626c653a20616c72656164792077697468647261776e0081525061207f565b6114544260008086815260200190815260200160002060050154116040518060600160405280603181526020016122ab6031913961207f565b6000806000858152602001908152602001600020905082816007018190555060018160060160006101000a81548160ff0219169083151502179055508060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb86886040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561153b57600080fd5b505af115801561154f573d6000803e3d6000fd5b505050506040513d602081101561156557600080fd5b81019080805190602001909291905050506115cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806122896022913960400191505060405180910390fd5b837fccc078c3cc52c3238bfb3152392fb494a9394ecab9842bb9c46395dc84ad29c660405160405180910390a26001915050949350505050565b600061164e6116138361212d565b6040518060400160405280601c81526020017f7472616e73616374696f6e496420646f6573206e6f742065786973740000000081525061207f565b6116f03373ffffffffffffffffffffffffffffffffffffffff1660008085815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280601681526020017f726566756e6461626c653a206e6f742073656e6465720000000000000000000081525061207f565b6117586000151560008085815260200190815260200160002060060160019054906101000a900460ff161515146040518060400160405280601c81526020017f726566756e6461626c653a20616c726561647920726566756e6465640000000081525061207f565b6117c06000151560008085815260200190815260200160002060060160009054906101000a900460ff161515146040518060400160405280601d81526020017f726566756e6461626c653a20616c72656164792077697468647261776e00000081525061207f565b6117fa426000808581526020019081526020016000206005015411156040518060600160405280602381526020016122156023913961207f565b6000806000848152602001908152602001600020905060018160060160016101000a81548160ff0219169083151502179055508060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683600301546040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561190057600080fd5b505af1158015611914573d6000803e3d6000fd5b505050506040513d602081101561192a57600080fd5b8101908080519060200190929190505050611990576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806122896022913960400191505060405180910390fd5b827f7b932d7c3c50d56f3e342fca080984c95d87d5611ec3487235c1854056cc8eb460405160405180910390a26001915050919050565b611a38600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160149054906101000a900460ff166040518060600160405280603081526020016122596030913961207f565b6000806000848152602001908152602001600020905081816007018190555060018160060160006101000a81548160ff02191690831515021790555050505050565b8273ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015611b0157600080fd5b505af1158015611b15573d6000803e3d6000fd5b505050506040513d6020811015611b2b57600080fd5b8101908080519060200190929190505050611b91576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806122896022913960400191505060405180910390fd5b505050565b611c07600160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160149054906101000a900460ff166040518060600160405280602d81526020016121e8602d913961207f565b6040518061012001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020018581526020018481526020016000151581526020016000151581526020016000801b81525060008088815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301556080820151816004015560a0820151816005015560c08201518160060160006101000a81548160ff02191690831515021790555060e08201518160060160016101000a81548160ff021916908315150217905550610100820151816007015590505050505050505050565b8373ffffffffffffffffffffffffffffffffffffffff166323b872dd8484846040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015611ea957600080fd5b505af1158015611ebd573d6000803e3d6000fd5b505050506040513d6020811015611ed357600080fd5b8101908080519060200190929190505050611f39576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806122896022913960400191505060405180910390fd5b50505050565b6000806000806000806000806000801515611f598b61212d565b15151415611fa15760008060008060008060008060008898508797508696508595508460001b94508393508060001b9050985098509850985098509850985098509850612072565b60008060008c815260200190815260200160002090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168260020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168360030154846004015485600501548660060160009054906101000a900460ff168760060160019054906101000a900460ff168860070154995099509950995099509950995099509950505b9193959799909294969850565b600015158215151415612129577f560da9d4a39e8b8b206d502334ec642be7774eaaf28dce67f25da29a45da89ec816040518080602001828103825283818151815260200191508051906020019080838360005b838110156120ee5780820151818401526020810190506120d3565b50505050905090810190601f16801561211b5780820380516001836020036101000a031916815260200191505b509250505060405180910390a15b5050565b60008073ffffffffffffffffffffffffffffffffffffffff1660008084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415905091905056fe74696d656c6f636b2074696d65206d75737420626520696e2074686520667574757265636f6e74726163742061646472657373206d757374206e6f74206265207a65726f206164647265737341646420636f727373436861696e206461746120636f6e74726163742061646472657373206e6f742065786974726566756e6461626c653a2074696d656c6f636b206e6f742079657420706173736564746f6b656e20616c6c6f77616e6365206d757374206265203e3d20616d6f756e7455706461746520636f727373436861696e206461746120636f6e74726163742061646472657373206e6f7420657869747472616e7366657246726f6d2073656e64657220746f2074686973206661696c6564776974686472617761626c653a2074696d656c6f636b2074696d65206d75737420626520696e2074686520667574757265a26469706673582212208e042db6a07826e209288f134d9aa8b27279591819f7df23da9ef11b234e8e6564736f6c63430006020033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100a95760003560e01c806364ff30041161007157806364ff30041461028e5780636d0c27a8146102e6578063cbbd8a1d14610354578063d9d1ca4714610400578063e16c7d981461048e578063f46611f914610594576100a9565b8063159a962c146100ae57806322a5dde41461014457806340d1ce7314610188578063449b0395146101ce5780634cc28a1914610248575b600080fd5b61012e600480360360a08110156100c457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061065b565b6040518082815260200191505060405180910390f35b6101866004803603602081101561015a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610da4565b005b6101b46004803603602081101561019e57600080fd5b8101908080359060200190929190505050610ed0565b604051808215151515815260200191505060405180910390f35b61022e600480360360808110156101e457600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190505050611258565b604051808215151515815260200191505060405180910390f35b6102746004803603602081101561025e57600080fd5b8101908080359060200190929190505050611605565b604051808215151515815260200191505060405180910390f35b6102e4600480360360608110156102a457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291905050506119c7565b005b610352600480360360608110156102fc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611a7a565b005b6103fe600480360360e081101561036a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611b96565b005b61048c6004803603608081101561041657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611dee565b005b6104ba600480360360208110156104a457600080fd5b8101908080359060200190929190505050611f3f565b604051808a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018781526020018681526020018581526020018415151515815260200183151515158152602001828152602001995050505050505050505060405180910390f35b610659600480360360408110156105aa57600080fd5b81019080803515159060200190929190803590602001906401000000008111156105d357600080fd5b8201836020820111156105e557600080fd5b8035906020019184600183028401116401000000008311171561060757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061207f565b005b6000804290506106a3600084116040518060400160405280601881526020017f746f6b656e20616d6f756e74206d757374206265203e2030000000000000000081525061207f565b6107b3838573ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b15801561075857600080fd5b505afa15801561076c573d6000803e3d6000fd5b505050506040513d602081101561078257600080fd5b810190808051906020019092919050505010156040518060600160405280602181526020016122386021913961207f565b6107d781861160405180606001604052806023815260200161219c6023913961207f565b6002338886868a8a604051602001808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b815260140184815260200183815260200182815260200196505050505050506040516020818303038152906040526040518082805190602001908083835b602083106108e157805182526020820191506020810190506020830392506108be565b6001836020036101000a038019825116818451168082178552505050505050905001915050602060405180830381855afa158015610923573d6000803e3d6000fd5b5050506040513d602081101561093857600080fd5b810190808051906020019092919050505091506109548261212d565b156109c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f436f6e747261637420616c72656164792065786973747300000000000000000081525060200191505060405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff166323b872dd3389866040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610a8257600080fd5b505af1158015610a96573d6000803e3d6000fd5b505050506040513d6020811015610aac57600080fd5b8101908080519060200190929190505050610b12576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806122896022913960400191505060405180910390fd5b6040518061012001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018781526020018681526020016000151581526020016000151581526020016000801b81525060008084815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301556080820151816004015560a0820151816005015560c08201518160060160006101000a81548160ff02191690831515021790555060e08201518160060160016101000a81548160ff02191690831515021790555061010082015181600701559050508673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16837fa2a72d0528ccc829345e59386d5d35f088e634e3f387a029c08067fa727c654687878b42604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182815260200194505050505060405180910390a45095945050505050565b610df6600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156040518060600160405280602981526020016121bf6029913961207f565b60405180604001604052808273ffffffffffffffffffffffffffffffffffffffff16815260200160011515815250600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548160ff02191690831515021790555090505050565b6000610f19610ede8361212d565b6040518060400160405280601c81526020017f7472616e73616374696f6e496420646f6573206e6f742065786973740000000081525061207f565b610fbb3373ffffffffffffffffffffffffffffffffffffffff1660008085815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280601681526020017f726566756e6461626c653a206e6f742073656e6465720000000000000000000081525061207f565b6110236000151560008085815260200190815260200160002060060160019054906101000a900460ff161515146040518060400160405280601c81526020017f726566756e6461626c653a20616c726561647920726566756e6465640000000081525061207f565b61108b6000151560008085815260200190815260200160002060060160009054906101000a900460ff161515146040518060400160405280601d81526020017f726566756e6461626c653a20616c72656164792077697468647261776e00000081525061207f565b6000806000848152602001908152602001600020905060018160060160016101000a81548160ff0219169083151502179055508060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683600301546040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561119157600080fd5b505af11580156111a5573d6000803e3d6000fd5b505050506040513d60208110156111bb57600080fd5b8101908080519060200190929190505050611221576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806122896022913960400191505060405180910390fd5b827f7b932d7c3c50d56f3e342fca080984c95d87d5611ec3487235c1854056cc8eb460405160405180910390a26001915050919050565b60006112a16112668461212d565b6040518060400160405280601c81526020017f7472616e73616374696f6e496420646f6573206e6f742065786973740000000081525061207f565b6113b3600283604051602001808281526020019150506040516020818303038152906040526040518082805190602001908083835b602083106112f957805182526020820191506020810190506020830392506112d6565b6001836020036101000a038019825116818451168082178552505050505050905001915050602060405180830381855afa15801561133b573d6000803e3d6000fd5b5050506040513d602081101561135057600080fd5b810190808051906020019092919050505060008086815260200190815260200160002060040154146040518060400160405280601c81526020017f686173686c6f636b206861736820646f6573206e6f74206d617463680000000081525061207f565b61141b6000151560008086815260200190815260200160002060060160009054906101000a900460ff161515146040518060400160405280601f81526020017f776974686472617761626c653a20616c72656164792077697468647261776e0081525061207f565b6114544260008086815260200190815260200160002060050154116040518060600160405280603181526020016122ab6031913961207f565b6000806000858152602001908152602001600020905082816007018190555060018160060160006101000a81548160ff0219169083151502179055508060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb86886040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561153b57600080fd5b505af115801561154f573d6000803e3d6000fd5b505050506040513d602081101561156557600080fd5b81019080805190602001909291905050506115cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806122896022913960400191505060405180910390fd5b837fccc078c3cc52c3238bfb3152392fb494a9394ecab9842bb9c46395dc84ad29c660405160405180910390a26001915050949350505050565b600061164e6116138361212d565b6040518060400160405280601c81526020017f7472616e73616374696f6e496420646f6573206e6f742065786973740000000081525061207f565b6116f03373ffffffffffffffffffffffffffffffffffffffff1660008085815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280601681526020017f726566756e6461626c653a206e6f742073656e6465720000000000000000000081525061207f565b6117586000151560008085815260200190815260200160002060060160019054906101000a900460ff161515146040518060400160405280601c81526020017f726566756e6461626c653a20616c726561647920726566756e6465640000000081525061207f565b6117c06000151560008085815260200190815260200160002060060160009054906101000a900460ff161515146040518060400160405280601d81526020017f726566756e6461626c653a20616c72656164792077697468647261776e00000081525061207f565b6117fa426000808581526020019081526020016000206005015411156040518060600160405280602381526020016122156023913961207f565b6000806000848152602001908152602001600020905060018160060160016101000a81548160ff0219169083151502179055508060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683600301546040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561190057600080fd5b505af1158015611914573d6000803e3d6000fd5b505050506040513d602081101561192a57600080fd5b8101908080519060200190929190505050611990576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806122896022913960400191505060405180910390fd5b827f7b932d7c3c50d56f3e342fca080984c95d87d5611ec3487235c1854056cc8eb460405160405180910390a26001915050919050565b611a38600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160149054906101000a900460ff166040518060600160405280603081526020016122596030913961207f565b6000806000848152602001908152602001600020905081816007018190555060018160060160006101000a81548160ff02191690831515021790555050505050565b8273ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015611b0157600080fd5b505af1158015611b15573d6000803e3d6000fd5b505050506040513d6020811015611b2b57600080fd5b8101908080519060200190929190505050611b91576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806122896022913960400191505060405180910390fd5b505050565b611c07600160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160149054906101000a900460ff166040518060600160405280602d81526020016121e8602d913961207f565b6040518061012001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020018581526020018481526020016000151581526020016000151581526020016000801b81525060008088815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301556080820151816004015560a0820151816005015560c08201518160060160006101000a81548160ff02191690831515021790555060e08201518160060160016101000a81548160ff021916908315150217905550610100820151816007015590505050505050505050565b8373ffffffffffffffffffffffffffffffffffffffff166323b872dd8484846040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015611ea957600080fd5b505af1158015611ebd573d6000803e3d6000fd5b505050506040513d6020811015611ed357600080fd5b8101908080519060200190929190505050611f39576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806122896022913960400191505060405180910390fd5b50505050565b6000806000806000806000806000801515611f598b61212d565b15151415611fa15760008060008060008060008060008898508797508696508595508460001b94508393508060001b9050985098509850985098509850985098509850612072565b60008060008c815260200190815260200160002090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168260020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168360030154846004015485600501548660060160009054906101000a900460ff168760060160019054906101000a900460ff168860070154995099509950995099509950995099509950505b9193959799909294969850565b600015158215151415612129577f560da9d4a39e8b8b206d502334ec642be7774eaaf28dce67f25da29a45da89ec816040518080602001828103825283818151815260200191508051906020019080838360005b838110156120ee5780820151818401526020810190506120d3565b50505050905090810190601f16801561211b5780820380516001836020036101000a031916815260200191505b509250505060405180910390a15b5050565b60008073ffffffffffffffffffffffffffffffffffffffff1660008084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415905091905056fe74696d656c6f636b2074696d65206d75737420626520696e2074686520667574757265636f6e74726163742061646472657373206d757374206e6f74206265207a65726f206164647265737341646420636f727373436861696e206461746120636f6e74726163742061646472657373206e6f742065786974726566756e6461626c653a2074696d656c6f636b206e6f742079657420706173736564746f6b656e20616c6c6f77616e6365206d757374206265203e3d20616d6f756e7455706461746520636f727373436861696e206461746120636f6e74726163742061646472657373206e6f7420657869747472616e7366657246726f6d2073656e64657220746f2074686973206661696c6564776974686472617761626c653a2074696d656c6f636b2074696d65206d75737420626520696e2074686520667574757265a26469706673582212208e042db6a07826e209288f134d9aa8b27279591819f7df23da9ef11b234e8e6564736f6c63430006020033",
  "sourceMap": "86:9420:1:-:0;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;86:9420:1;;;;;;;",
  "deployedSourceMap": "86:9420:1:-:0;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;86:9420:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1589:1661;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;1589:1661:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1253:328;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1253:328:1;;;;;;;;;;;;;;;;;;;:::i;:::-;;6629:1069;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6629:1069:1;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3988:1124;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;3988:1124:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;5567:1054;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5567:1054:1;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;5120:439;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5120:439:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;7706:259;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7706:259:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;3258:722;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;3258:722:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;7973:302;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;7973:302:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;8283:1018;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;8283:1018:1;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1087:158;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1087:158:1;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;1087:158:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1087:158:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;1087:158:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1087:158:1;;;;;;;;;;;;;;;:::i;:::-;;1589:1661;1785:21;1819:12;1834:3;1819:18;;1848:52;1870:1;1860:7;:11;1848:52;;;;;;;;;;;;;;;;;:11;:52::i;:::-;1911:173;2016:7;1943:14;1937:31;;;1969:10;1989:4;1937:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1937:58:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1937:58:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1937:58:1;;;;;;;;;;;;;;;;:86;;1911:173;;;;;;;;;;;;;;;;;:11;:173::i;:::-;2105:71;2129:7;2117:9;:19;2105:71;;;;;;;;;;;;;;;;;:11;:71::i;:::-;2205:238;2261:10;2290:12;2321:14;2354:7;2380:9;2408;2226:206;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;2226:206:1;;;2205:238;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;2205:238:1;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2205:238:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2205:238:1;;;;;;;;;;;;;;;;2189:254;;2460:27;2473:13;2460:12;:27::i;:::-;2456:66;;;2489:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2456:66;2558:14;2552:34;;;2605:10;2634:12;2665:7;2552:135;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2552:135:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2552:135:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2552:135:1;;;;;;;;;;;;;;;;2533:210;;2699:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2533:210;2787:233;;;;;;;;2815:10;2787:233;;;;;;2840:12;2787:233;;;;;;2867:14;2787:233;;;;;;2896:7;2787:233;;;;2918:9;2787:233;;;;2942:9;2787:233;;;;2966:5;2787:233;;;;;;2986:5;2787:233;;;;;;3006:3;2787:233;;;;;2756:13;:28;2770:13;2756:28;;;;;;;;;;;:264;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3126:12;3038:204;;3101:10;3038:204;;3073:13;3038:204;3153:14;3182:7;3204:9;3228:3;3038:204;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1589:1661;;;;;;;;:::o;1253:328::-;1324:124;1377:1;1350:29;;:15;:29;;;;1324:124;;;;;;;;;;;;;;;;;:11;:124::i;:::-;1496:77;;;;;;;;1528:15;1496:77;;;;;;1558:4;1496:77;;;;;1459:17;:34;1477:15;1459:34;;;;;;;;;;;;;;;:114;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1253:328;:::o;6629:1069::-;6718:4;6740:73;6752:28;6765:14;6752:12;:28::i;:::-;6740:73;;;;;;;;;;;;;;;;;:11;:73::i;:::-;6824:126;6890:10;6850:50;;:13;:29;6864:14;6850:29;;;;;;;;;;;:36;;;;;;;;;;;;:50;;;6824:126;;;;;;;;;;;;;;;;;:11;:126::i;:::-;6961:129;7029:5;6987:47;;:13;:29;7001:14;6987:29;;;;;;;;;;;:38;;;;;;;;;;;;:47;;;6961:129;;;;;;;;;;;;;;;;;:11;:129::i;:::-;7101:131;7170:5;7127:48;;:13;:29;7141:14;7127:29;;;;;;;;;;;:39;;;;;;;;;;;;:48;;;7101:131;;;;;;;;;;;;;;;;;:11;:131::i;:::-;7404:23;7430:13;:29;7444:14;7430:29;;;;;;;;;;;7404:55;;7483:4;7470:1;:10;;;:17;;;;;;;;;;;;;;;;;;7509:1;:15;;;;;;;;;;;;7503:31;;;7535:1;:8;;;;;;;;;;;;7545:1;:8;;;7503:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7503:51:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;7503:51:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7503:51:1;;;;;;;;;;;;;;;;7498:115;;7569:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7498:115;7653:14;7629:39;;;;;;;;;;7686:4;7679:11;;;6629:1069;;;:::o;3988:1124::-;4154:4;4171:73;4183:28;4196:14;4183:12;:28::i;:::-;4171:73;;;;;;;;;;;;;;;;;:11;:73::i;:::-;4255:176;4340:35;4364:9;4347:27;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;4347:27:1;;;4340:35;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;4340:35:1;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;4340:35:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4340:35:1;;;;;;;;;;;;;;;;4281:13;:29;4295:14;4281:29;;;;;;;;;;;:38;;;:94;4255:176;;;;;;;;;;;;;;;;;:11;:176::i;:::-;4442:133;4511:5;4468:48;;:13;:29;4482:14;4468:29;;;;;;;;;;;:39;;;;;;;;;;;;:48;;;4442:133;;;;;;;;;;;;;;;;;:11;:133::i;:::-;4586:147;4653:3;4612:13;:29;4626:14;4612:29;;;;;;;;;;;:38;;;:44;4586:147;;;;;;;;;;;;;;;;;:11;:147::i;:::-;4746:23;4772:13;:29;4786:14;4772:29;;;;;;;;;;;4746:55;;4825:9;4812:1;:10;;:22;;;;4859:4;4845:1;:11;;;:18;;;;;;;;;;;;;;;;;;4885:1;:15;;;;;;;;;;;;4879:31;;;4911:9;4922:7;4879:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4879:51:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;4879:51:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4879:51:1;;;;;;;;;;;;;;;;4874:209;;4946:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4874:209;5056:14;5034:37;;;;;;;;;;5100:4;5093:11;;;3988:1124;;;;;;:::o;5567:1054::-;5655:4;5677:73;5689:28;5702:14;5689:12;:28::i;:::-;5677:73;;;;;;;;;;;;;;;;;:11;:73::i;:::-;5761:126;5827:10;5787:50;;:13;:29;5801:14;5787:29;;;;;;;;;;;:36;;;;;;;;;;;;:50;;;5761:126;;;;;;;;;;;;;;;;;:11;:126::i;:::-;5898:129;5966:5;5924:47;;:13;:29;5938:14;5924:29;;;;;;;;;;;:38;;;;;;;;;;;;:47;;;5898:129;;;;;;;;;;;;;;;;;:11;:129::i;:::-;6038:131;6107:5;6064:48;;:13;:29;6078:14;6064:29;;;;;;;;;;;:39;;;;;;;;;;;;:48;;;6038:131;;;;;;;;;;;;;;;;;:11;:131::i;:::-;6180:134;6248:3;6206:13;:29;6220:14;6206:29;;;;;;;;;;;:38;;;:45;;6180:134;;;;;;;;;;;;;;;;;:11;:134::i;:::-;6327:23;6353:13;:29;6367:14;6353:29;;;;;;;;;;;6327:55;;6406:4;6393:1;:10;;;:17;;;;;;;;;;;;;;;;;;6432:1;:15;;;;;;;;;;;;6426:31;;;6458:1;:8;;;;;;;;;;;;6468:1;:8;;;6426:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6426:51:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;6426:51:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6426:51:1;;;;;;;;;;;;;;;;6421:115;;6492:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6421:115;6576:14;6552:39;;;;;;;;;;6609:4;6602:11;;;5567:1054;;;:::o;5120:439::-;5269:154;5295:17;:45;5313:26;5295:45;;;;;;;;;;;;;;;:52;;;;;;;;;;;;5269:154;;;;;;;;;;;;;;;;;:11;:154::i;:::-;5434:23;5460:13;:29;5474:14;5460:29;;;;;;;;;;;5434:55;;5513:9;5500:1;:10;;:22;;;;5547:4;5533:1;:11;;;:18;;;;;;;;;;;;;;;;;;5120:439;;;;:::o;7706:259::-;7853:14;7847:30;;;7878:10;7890:7;7847:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7847:51:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;7847:51:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7847:51:1;;;;;;;;;;;;;;;;7842:115;;7913:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7842:115;7706:259;;;:::o;3258:722::-;3545:151;3571:17;:45;3589:26;3571:45;;;;;;;;;;;;;;;:52;;;;;;;;;;;;3545:151;;;;;;;;;;;;;;;;;:11;:151::i;:::-;3739:233;;;;;;;;3767:10;3739:233;;;;;;3792:12;3739:233;;;;;;3819:14;3739:233;;;;;;3848:7;3739:233;;;;3870:9;3739:233;;;;3894:9;3739:233;;;;3918:5;3739:233;;;;;;3938:5;3739:233;;;;;;3958:3;3739:233;;;;;3707:13;:29;3721:14;3707:29;;;;;;;;;;;:265;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3258:722;;;;;;;:::o;7973:302::-;8150:14;8144:34;;;8179:7;8188:10;8200:7;8144:64;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8144:64:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;8144:64:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;8144:64:1;;;;;;;;;;;;;;;;8139:128;;8223:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8139:128;7973:302;;;;:::o;8283:1018::-;8390:14;8419:16;8450:21;8486:14;8515:16;8546;8577:14;8606:13;8634:16;8714:5;8682:37;;:28;8695:14;8682:12;:28::i;:::-;:37;;;8678:293;;;8768:1;8797;8826;8847;8867;8887;8907:5;8931;8955:1;8734:237;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8678:293;8982:23;9008:13;:29;9022:14;9008:29;;;;;;;;;;;8982:55;;9070:1;:8;;;;;;;;;;;;9093:1;:10;;;;;;;;;;;;9118:1;:15;;;;;;;;;;;;9148:1;:8;;;9171:1;:10;;;9196:1;:10;;;9221:1;:11;;;;;;;;;;;;9247:1;:10;;;;;;;;;;;;9272:1;:10;;;9048:245;;;;;;;;;;;;;;;;;;;8283:1018;;;;;;;;;;;;:::o;1087:158::-;1175:5;1165:15;;:6;:15;;;1162:76;;;1201:25;1218:7;1201:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1201:25:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1162:76;1087:158;;:::o;9309:194::-;9405:11;9492:1;9444:50;;:13;:29;9458:14;9444:29;;;;;;;;;;;:36;;;;;;;;;;;;:50;;;;9434:61;;9309:194;;;:::o",
  "source": "pragma solidity ^0.6.0;\r\n\r\nimport \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\r\n\r\ncontract BurnToClaim {\r\n    event exitTransactionEvent(\r\n        bytes32 indexed transactionId,\r\n        address indexed sender,\r\n        address indexed receiver,\r\n        address tokenContract,\r\n        uint256 amount,\r\n        bytes32 hashlock,\r\n        uint256 timelock\r\n    );\r\n    event entryTransactionEvent(bytes32 indexed transactionId);\r\n    event reclaimTransactionEvent(bytes32 indexed transactionId);\r\n\r\n    struct BurnTokenData {\r\n        address sender;\r\n        address receiver;\r\n        address tokenContract;\r\n        uint256 amount;\r\n        bytes32 hashlock;\r\n        uint256 timelock;\r\n        bool withdrawn;\r\n        bool refunded;\r\n        bytes32 preimage;\r\n    }\r\n    mapping(bytes32 => BurnTokenData) burnTokenData;\r\n    struct CrosschainAddress {\r\n        address contractAddress;\r\n        bool isExit;\r\n    }\r\n    mapping(address => CrosschainAddress) crosschainAddress;\r\n\r\n    event requireMockEvent(string  message);\r\n    event revertMockEvent(string  message);\r\n\r\n    function requireMock(bool result, string memory message) public {\r\n        if(result == false){\r\n            emit requireMockEvent(message);\r\n        }\r\n    }\r\n\r\n    function registerContract(address contractAddress) external {\r\n        requireMock(\r\n            contractAddress != address(0),\r\n            \"contract address must not be zero address\"\r\n        );\r\n        crosschainAddress[contractAddress] = CrosschainAddress(\r\n            contractAddress,\r\n            true\r\n        );\r\n    }\r\n\r\n    function exitTransaction(\r\n        address _burnAddress,\r\n        bytes32 _hashlock,\r\n        uint256 _timelock,\r\n        address _tokenContract,\r\n        uint256 _amount\r\n    ) external returns (bytes32 transactionId) {\r\n        uint timeNow = now;\r\n        requireMock(_amount > 0, \"token amount must be > 0\");\r\n        requireMock(\r\n            ERC20(_tokenContract).allowance(msg.sender, address(this)) >=\r\n                _amount,\r\n            \"token allowance must be >= amount\"\r\n        );\r\n        \r\n        requireMock(_timelock > timeNow, \"timelock time must be in the future\");\r\n\r\n        transactionId = sha256(\r\n            abi.encodePacked(\r\n                msg.sender,\r\n                _burnAddress,\r\n                _tokenContract,\r\n                _amount,\r\n                _hashlock,\r\n                _timelock\r\n            )\r\n        );\r\n\r\n        if (haveContract(transactionId)) revert(\"Contract already exists\");\r\n        if (\r\n            !ERC20(_tokenContract).transferFrom(\r\n                msg.sender,\r\n                _burnAddress,\r\n                _amount\r\n            )\r\n        ) revert(\"transferFrom sender to this failed\");\r\n\r\n        burnTokenData[transactionId] = BurnTokenData(\r\n            msg.sender,\r\n            _burnAddress,\r\n            _tokenContract,\r\n            _amount,\r\n            _hashlock,\r\n            _timelock,\r\n            false,\r\n            false,\r\n            0x0\r\n        );\r\n\r\n        emit exitTransactionEvent(\r\n            transactionId,\r\n            msg.sender,\r\n            _burnAddress,\r\n            _tokenContract,\r\n            _amount,\r\n            _hashlock,\r\n            now\r\n        );\r\n    }\r\n\r\n    function add(\r\n        address _crosschainContractAddress,\r\n        bytes32 _transactionId,\r\n        address _burnAddress,\r\n        bytes32 _hashlock,\r\n        uint256 _timelock,\r\n        address _tokenContract, // base token contract\r\n        uint256 _amount\r\n    ) external {\r\n        requireMock(\r\n            crosschainAddress[_crosschainContractAddress].isExit,\r\n            \"Add corssChain data contract address not exit\"\r\n        );\r\n        burnTokenData[_transactionId] = BurnTokenData(\r\n            msg.sender,\r\n            _burnAddress,\r\n            _tokenContract,\r\n            _amount,\r\n            _hashlock,\r\n            _timelock,\r\n            false,\r\n            false,\r\n            0x0\r\n        );\r\n    }\r\n\r\n    function entryTransaction(\r\n        uint256 _amount,\r\n        address _receiver,\r\n        bytes32 _transactionId,\r\n        bytes32 _preimage\r\n    ) external returns (bool) {\r\n        requireMock(haveContract(_transactionId), \"transactionId does not exist\");\r\n        requireMock(\r\n            burnTokenData[_transactionId].hashlock ==\r\n                sha256(abi.encodePacked(_preimage)),\r\n            \"hashlock hash does not match\"\r\n        );\r\n        requireMock(\r\n            burnTokenData[_transactionId].withdrawn == false,\r\n            \"withdrawable: already withdrawn\"\r\n        );\r\n        requireMock(\r\n            burnTokenData[_transactionId].timelock > now,\r\n            \"withdrawable: timelock time must be in the future\"\r\n        );\r\n\r\n        BurnTokenData storage c = burnTokenData[_transactionId];\r\n        c.preimage = _preimage;\r\n        c.withdrawn = true;\r\n        if (!ERC20(c.tokenContract).transfer(_receiver, _amount)){\r\n            revert(\"transferFrom sender to this failed\");\r\n        }\r\n        else{\r\n\r\n        emit entryTransactionEvent(_transactionId);\r\n        }\r\n        return true;\r\n    }\r\n\r\n    function update(\r\n        address _crosschainContractAddress,\r\n        bytes32 _transactionId,\r\n        bytes32 _preimage\r\n    ) external {\r\n        requireMock(\r\n            crosschainAddress[_crosschainContractAddress].isExit,\r\n            \"Update corssChain data contract address not exit\"\r\n        );\r\n        BurnTokenData storage c = burnTokenData[_transactionId];\r\n        c.preimage = _preimage;\r\n        c.withdrawn = true;\r\n    }\r\n\r\n    function reclaimTransaction(bytes32 _transactionId)\r\n        external\r\n        returns (bool)\r\n    {\r\n        requireMock(haveContract(_transactionId), \"transactionId does not exist\");\r\n        requireMock(\r\n            burnTokenData[_transactionId].sender == msg.sender,\r\n            \"refundable: not sender\"\r\n        );\r\n        requireMock(\r\n            burnTokenData[_transactionId].refunded == false,\r\n            \"refundable: already refunded\"\r\n        );\r\n        requireMock(\r\n            burnTokenData[_transactionId].withdrawn == false,\r\n            \"refundable: already withdrawn\"\r\n        );\r\n        requireMock(\r\n            burnTokenData[_transactionId].timelock <= now,\r\n            \"refundable: timelock not yet passed\"\r\n        );\r\n\r\n        BurnTokenData storage c = burnTokenData[_transactionId];\r\n        c.refunded = true;\r\n        if (!ERC20(c.tokenContract).transfer(c.sender, c.amount))\r\n            revert(\"transferFrom sender to this failed\");\r\n        emit reclaimTransactionEvent(_transactionId);\r\n        return true;\r\n    }\r\n\r\n    function reclaimTransaction1(bytes32 _transactionId)\r\n        external\r\n        returns (bool)\r\n    {\r\n        requireMock(haveContract(_transactionId), \"transactionId does not exist\");\r\n        requireMock(\r\n            burnTokenData[_transactionId].sender == msg.sender,\r\n            \"refundable: not sender\"\r\n        );\r\n        requireMock(\r\n            burnTokenData[_transactionId].refunded == false,\r\n            \"refundable: already refunded\"\r\n        );\r\n        requireMock(\r\n            burnTokenData[_transactionId].withdrawn == false,\r\n            \"refundable: already withdrawn\"\r\n        );\r\n        //   requireMock(\r\n        //     burnTokenData[_transactionId].timelock <= now,\r\n        //      \"refundable: timelock not yet passed\"\r\n        //);\r\n\r\n        BurnTokenData storage c = burnTokenData[_transactionId];\r\n        c.refunded = true;\r\n        if (!ERC20(c.tokenContract).transfer(c.sender, c.amount))\r\n            revert(\"transferFrom sender to this failed\");\r\n        emit reclaimTransactionEvent(_transactionId);\r\n        return true;\r\n    }\r\n\r\n    function btcTransfer(\r\n        address _tokenContract,\r\n        address _recipient,\r\n        uint256 _amount\r\n    ) external {\r\n        if (!ERC20(_tokenContract).transfer(_recipient, _amount))\r\n            revert(\"transferFrom sender to this failed\");\r\n    }\r\n\r\n    function btcTransferFrom(\r\n        address _tokenContract,\r\n        address _sender,\r\n        address _recipient,\r\n        uint256 _amount\r\n    ) external {\r\n        if (!ERC20(_tokenContract).transferFrom(_sender, _recipient, _amount))\r\n            revert(\"transferFrom sender to this failed\");\r\n    }\r\n\r\n    function getContract(bytes32 _transactionId)\r\n        public\r\n        view\r\n        returns (\r\n            address sender,\r\n            address receiver,\r\n            address tokenContract,\r\n            uint256 amount,\r\n            bytes32 hashlock,\r\n            uint256 timelock,\r\n            bool withdrawn,\r\n            bool refunded,\r\n            bytes32 preimage\r\n        )\r\n    {\r\n        if (haveContract(_transactionId) == false)\r\n            return (\r\n                address(0),\r\n                address(0),\r\n                address(0),\r\n                0,\r\n                0,\r\n                0,\r\n                false,\r\n                false,\r\n                0\r\n            );\r\n        BurnTokenData storage c = burnTokenData[_transactionId];\r\n        return (\r\n            c.sender,\r\n            c.receiver,\r\n            c.tokenContract,\r\n            c.amount,\r\n            c.hashlock,\r\n            c.timelock,\r\n            c.withdrawn,\r\n            c.refunded,\r\n            c.preimage\r\n        );\r\n    }\r\n\r\n    function haveContract(bytes32 _transactionId)\r\n        internal\r\n        view\r\n        returns (bool exists)\r\n    {\r\n        exists = (burnTokenData[_transactionId].sender != address(0));\r\n    }\r\n}\r\n",
  "sourcePath": "C:\\Users\\Paul\\Documents\\GitHub\\severalpens\\burn-to-claim\\contracts\\BurnToClaim.sol",
  "ast": {
    "absolutePath": "/C/Users/Paul/Documents/GitHub/severalpens/burn-to-claim/contracts/BurnToClaim.sol",
    "exportedSymbols": {
      "BurnToClaim": [
        747
      ]
    },
    "id": 748,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 31,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:1"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "id": 32,
        "nodeType": "ImportDirective",
        "scope": 748,
        "sourceUnit": 1483,
        "src": "27:55:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 747,
        "linearizedBaseContracts": [
          747
        ],
        "name": "BurnToClaim",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 48,
            "name": "exitTransactionEvent",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 47,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34,
                  "indexed": true,
                  "name": "transactionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 48,
                  "src": "151:29:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 33,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "151:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36,
                  "indexed": true,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 48,
                  "src": "191:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "191:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 38,
                  "indexed": true,
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 48,
                  "src": "224:24:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 37,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "224:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 40,
                  "indexed": false,
                  "name": "tokenContract",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 48,
                  "src": "259:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "259:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 42,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 48,
                  "src": "291:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 41,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "291:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 44,
                  "indexed": false,
                  "name": "hashlock",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 48,
                  "src": "316:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 43,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "316:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 46,
                  "indexed": false,
                  "name": "timelock",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 48,
                  "src": "343:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "343:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "140:226:1"
            },
            "src": "114:253:1"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 52,
            "name": "entryTransactionEvent",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 51,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50,
                  "indexed": true,
                  "name": "transactionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 52,
                  "src": "401:29:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 49,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "401:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "400:31:1"
            },
            "src": "373:59:1"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 56,
            "name": "reclaimTransactionEvent",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 55,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54,
                  "indexed": true,
                  "name": "transactionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 56,
                  "src": "468:29:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 53,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "468:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "467:31:1"
            },
            "src": "438:61:1"
          },
          {
            "canonicalName": "BurnToClaim.BurnTokenData",
            "id": 75,
            "members": [
              {
                "constant": false,
                "id": 58,
                "name": "sender",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 75,
                "src": "539:14:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 57,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "539:7:1",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 60,
                "name": "receiver",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 75,
                "src": "564:16:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 59,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "564:7:1",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 62,
                "name": "tokenContract",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 75,
                "src": "591:21:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 61,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "591:7:1",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 64,
                "name": "amount",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 75,
                "src": "623:14:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 63,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "623:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 66,
                "name": "hashlock",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 75,
                "src": "648:16:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 65,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "648:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 68,
                "name": "timelock",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 75,
                "src": "675:16:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 67,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "675:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 70,
                "name": "withdrawn",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 75,
                "src": "702:14:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 69,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "702:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 72,
                "name": "refunded",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 75,
                "src": "727:13:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 71,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "727:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 74,
                "name": "preimage",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 75,
                "src": "751:16:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 73,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "751:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "BurnTokenData",
            "nodeType": "StructDefinition",
            "scope": 747,
            "src": "507:268:1",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 79,
            "name": "burnTokenData",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 747,
            "src": "781:47:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
              "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData)"
            },
            "typeName": {
              "id": 78,
              "keyType": {
                "id": 76,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "789:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "781:33:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData)"
              },
              "valueType": {
                "contractScope": null,
                "id": 77,
                "name": "BurnTokenData",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 75,
                "src": "800:13:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                  "typeString": "struct BurnToClaim.BurnTokenData"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "canonicalName": "BurnToClaim.CrosschainAddress",
            "id": 84,
            "members": [
              {
                "constant": false,
                "id": 81,
                "name": "contractAddress",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 84,
                "src": "871:23:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 80,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "871:7:1",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 83,
                "name": "isExit",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 84,
                "src": "905:11:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 82,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "905:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "CrosschainAddress",
            "nodeType": "StructDefinition",
            "scope": 747,
            "src": "835:89:1",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 88,
            "name": "crosschainAddress",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 747,
            "src": "930:55:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_CrosschainAddress_$84_storage_$",
              "typeString": "mapping(address => struct BurnToClaim.CrosschainAddress)"
            },
            "typeName": {
              "id": 87,
              "keyType": {
                "id": 85,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "938:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "930:37:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_CrosschainAddress_$84_storage_$",
                "typeString": "mapping(address => struct BurnToClaim.CrosschainAddress)"
              },
              "valueType": {
                "contractScope": null,
                "id": 86,
                "name": "CrosschainAddress",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 84,
                "src": "949:17:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_CrosschainAddress_$84_storage_ptr",
                  "typeString": "struct BurnToClaim.CrosschainAddress"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 92,
            "name": "requireMockEvent",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 91,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 90,
                  "indexed": false,
                  "name": "message",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 92,
                  "src": "1017:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 89,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1017:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1016:17:1"
            },
            "src": "994:40:1"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 96,
            "name": "revertMockEvent",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 95,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 94,
                  "indexed": false,
                  "name": "message",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 96,
                  "src": "1062:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 93,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1062:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1061:17:1"
            },
            "src": "1040:39:1"
          },
          {
            "body": {
              "id": 112,
              "nodeType": "Block",
              "src": "1151:94:1",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 105,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 103,
                      "name": "result",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 98,
                      "src": "1165:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 104,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1175:5:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "1165:15:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 111,
                  "nodeType": "IfStatement",
                  "src": "1162:76:1",
                  "trueBody": {
                    "id": 110,
                    "nodeType": "Block",
                    "src": "1181:57:1",
                    "statements": [
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 107,
                              "name": "message",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 100,
                              "src": "1218:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 106,
                            "name": "requireMockEvent",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92,
                            "src": "1201:16:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 108,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1201:25:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 109,
                        "nodeType": "EmitStatement",
                        "src": "1196:30:1"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "functionSelector": "f46611f9",
            "id": 113,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "requireMock",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 101,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 98,
                  "name": "result",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 113,
                  "src": "1108:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 97,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1108:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 100,
                  "name": "message",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 113,
                  "src": "1121:21:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 99,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1121:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1107:36:1"
            },
            "returnParameters": {
              "id": 102,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1151:0:1"
            },
            "scope": 747,
            "src": "1087:158:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 137,
              "nodeType": "Block",
              "src": "1313:268:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 124,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 119,
                          "name": "contractAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 115,
                          "src": "1350:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 122,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1377:1:1",
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
                            "id": 121,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1369:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 120,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1369:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          },
                          "id": 123,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1369:10:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "1350:29:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "636f6e74726163742061646472657373206d757374206e6f74206265207a65726f2061646472657373",
                        "id": 125,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1394:43:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_195ce3edbca72ae3444345fb3462809f9a5d001970502d5f44badb51b99caa44",
                          "typeString": "literal_string \"contract address must not be zero address\""
                        },
                        "value": "contract address must not be zero address"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_195ce3edbca72ae3444345fb3462809f9a5d001970502d5f44badb51b99caa44",
                          "typeString": "literal_string \"contract address must not be zero address\""
                        }
                      ],
                      "id": 118,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "1324:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 126,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1324:124:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 127,
                  "nodeType": "ExpressionStatement",
                  "src": "1324:124:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 135,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 128,
                        "name": "crosschainAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 88,
                        "src": "1459:17:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_CrosschainAddress_$84_storage_$",
                          "typeString": "mapping(address => struct BurnToClaim.CrosschainAddress storage ref)"
                        }
                      },
                      "id": 130,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 129,
                        "name": "contractAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 115,
                        "src": "1477:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1459:34:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_CrosschainAddress_$84_storage",
                        "typeString": "struct BurnToClaim.CrosschainAddress storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 132,
                          "name": "contractAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 115,
                          "src": "1528:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 133,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1558:4:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 131,
                        "name": "CrosschainAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 84,
                        "src": "1496:17:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_CrosschainAddress_$84_storage_ptr_$",
                          "typeString": "type(struct BurnToClaim.CrosschainAddress storage pointer)"
                        }
                      },
                      "id": 134,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1496:77:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_CrosschainAddress_$84_memory",
                        "typeString": "struct BurnToClaim.CrosschainAddress memory"
                      }
                    },
                    "src": "1459:114:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_CrosschainAddress_$84_storage",
                      "typeString": "struct BurnToClaim.CrosschainAddress storage ref"
                    }
                  },
                  "id": 136,
                  "nodeType": "ExpressionStatement",
                  "src": "1459:114:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "22a5dde4",
            "id": 138,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "registerContract",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 116,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 115,
                  "name": "contractAddress",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 138,
                  "src": "1279:23:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 114,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1279:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1278:25:1"
            },
            "returnParameters": {
              "id": 117,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1313:0:1"
            },
            "scope": 747,
            "src": "1253:328:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 254,
              "nodeType": "Block",
              "src": "1808:1442:1",
              "statements": [
                {
                  "assignments": [
                    154
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 154,
                      "name": "timeNow",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 254,
                      "src": "1819:12:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 153,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1819:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 156,
                  "initialValue": {
                    "argumentTypes": null,
                    "id": 155,
                    "name": "now",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": -17,
                    "src": "1834:3:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1819:18:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 160,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 158,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 148,
                          "src": "1860:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 159,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1870:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1860:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "746f6b656e20616d6f756e74206d757374206265203e2030",
                        "id": 161,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1873:26:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_ef8462853d6a0c63b24b7e3a8f909d1829994486c1a37cf6bbf9abe6b4e2cab7",
                          "typeString": "literal_string \"token amount must be > 0\""
                        },
                        "value": "token amount must be > 0"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_ef8462853d6a0c63b24b7e3a8f909d1829994486c1a37cf6bbf9abe6b4e2cab7",
                          "typeString": "literal_string \"token amount must be > 0\""
                        }
                      ],
                      "id": 157,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "1848:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 162,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1848:52:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 163,
                  "nodeType": "ExpressionStatement",
                  "src": "1848:52:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 177,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 169,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "1969:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 170,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1969:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 173,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "1989:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_BurnToClaim_$747",
                                    "typeString": "contract BurnToClaim"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_BurnToClaim_$747",
                                    "typeString": "contract BurnToClaim"
                                  }
                                ],
                                "id": 172,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1981:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 171,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1981:7:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": null,
                                    "typeString": null
                                  }
                                }
                              },
                              "id": 174,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1981:13:1",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
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
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 166,
                                  "name": "_tokenContract",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 146,
                                  "src": "1943:14:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 165,
                                "name": "ERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1482,
                                "src": "1937:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC20_$1482_$",
                                  "typeString": "type(contract ERC20)"
                                }
                              },
                              "id": 167,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1937:21:1",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20_$1482",
                                "typeString": "contract ERC20"
                              }
                            },
                            "id": 168,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "allowance",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1131,
                            "src": "1937:31:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address,address) view external returns (uint256)"
                            }
                          },
                          "id": 175,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1937:58:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 176,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 148,
                          "src": "2016:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1937:86:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "746f6b656e20616c6c6f77616e6365206d757374206265203e3d20616d6f756e74",
                        "id": 178,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2038:35:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_98db95208a4165db2bf846b140f267671bc24ad3503084b9b0a60b8f7c8a0ad2",
                          "typeString": "literal_string \"token allowance must be >= amount\""
                        },
                        "value": "token allowance must be >= amount"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_98db95208a4165db2bf846b140f267671bc24ad3503084b9b0a60b8f7c8a0ad2",
                          "typeString": "literal_string \"token allowance must be >= amount\""
                        }
                      ],
                      "id": 164,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "1911:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 179,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1911:173:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 180,
                  "nodeType": "ExpressionStatement",
                  "src": "1911:173:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 184,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 182,
                          "name": "_timelock",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 144,
                          "src": "2117:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 183,
                          "name": "timeNow",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 154,
                          "src": "2129:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2117:19:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "74696d656c6f636b2074696d65206d75737420626520696e2074686520667574757265",
                        "id": 185,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2138:37:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_16dbfee8f738f21cc70987859d9176eb37f9ed0572f04024e006404bb83f7086",
                          "typeString": "literal_string \"timelock time must be in the future\""
                        },
                        "value": "timelock time must be in the future"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_16dbfee8f738f21cc70987859d9176eb37f9ed0572f04024e006404bb83f7086",
                          "typeString": "literal_string \"timelock time must be in the future\""
                        }
                      ],
                      "id": 181,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "2105:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 186,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2105:71:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 187,
                  "nodeType": "ExpressionStatement",
                  "src": "2105:71:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 201,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 188,
                      "name": "transactionId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 151,
                      "src": "2189:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 192,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "2261:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 193,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2261:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 194,
                              "name": "_burnAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 140,
                              "src": "2290:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 195,
                              "name": "_tokenContract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 146,
                              "src": "2321:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 196,
                              "name": "_amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 148,
                              "src": "2354:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 197,
                              "name": "_hashlock",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 142,
                              "src": "2380:9:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 198,
                              "name": "_timelock",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 144,
                              "src": "2408:9:1",
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
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 190,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2226:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 191,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberName": "encodePacked",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2226:16:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 199,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2226:206:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 189,
                        "name": "sha256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -22,
                        "src": "2205:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_sha256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 200,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2205:238:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "2189:254:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 202,
                  "nodeType": "ExpressionStatement",
                  "src": "2189:254:1"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 204,
                        "name": "transactionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 151,
                        "src": "2473:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 203,
                      "name": "haveContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 746,
                      "src": "2460:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (bytes32) view returns (bool)"
                      }
                    },
                    "id": 205,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2460:27:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 210,
                  "nodeType": "IfStatement",
                  "src": "2456:66:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "436f6e747261637420616c726561647920657869737473",
                          "id": 207,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2496:25:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_4ad9578906fc98bd5f65530f868927f605d82f03ccdb6e74a7708acdd463401a",
                            "typeString": "literal_string \"Contract already exists\""
                          },
                          "value": "Contract already exists"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_4ad9578906fc98bd5f65530f868927f605d82f03ccdb6e74a7708acdd463401a",
                            "typeString": "literal_string \"Contract already exists\""
                          }
                        ],
                        "id": 206,
                        "name": "revert",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -19,
                          -19
                        ],
                        "referencedDeclaration": -19,
                        "src": "2489:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (string memory) pure"
                        }
                      },
                      "id": 208,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2489:33:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 209,
                    "nodeType": "ExpressionStatement",
                    "src": "2489:33:1"
                  }
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 220,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "2551:136:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 215,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "2605:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 216,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2605:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 217,
                          "name": "_burnAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 140,
                          "src": "2634:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 218,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 148,
                          "src": "2665:7:1",
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
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 212,
                              "name": "_tokenContract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 146,
                              "src": "2558:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 211,
                            "name": "ERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1482,
                            "src": "2552:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_ERC20_$1482_$",
                              "typeString": "type(contract ERC20)"
                            }
                          },
                          "id": 213,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2552:21:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC20_$1482",
                            "typeString": "contract ERC20"
                          }
                        },
                        "id": 214,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transferFrom",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1188,
                        "src": "2552:34:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,address,uint256) external returns (bool)"
                        }
                      },
                      "id": 219,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2552:135:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 225,
                  "nodeType": "IfStatement",
                  "src": "2533:210:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "7472616e7366657246726f6d2073656e64657220746f2074686973206661696c6564",
                          "id": 222,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2706:36:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_d972a7c972449bdb9cebe63bbe70aabf7c1479cdd3def2eb6af0685384c9067a",
                            "typeString": "literal_string \"transferFrom sender to this failed\""
                          },
                          "value": "transferFrom sender to this failed"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_d972a7c972449bdb9cebe63bbe70aabf7c1479cdd3def2eb6af0685384c9067a",
                            "typeString": "literal_string \"transferFrom sender to this failed\""
                          }
                        ],
                        "id": 221,
                        "name": "revert",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -19,
                          -19
                        ],
                        "referencedDeclaration": -19,
                        "src": "2699:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (string memory) pure"
                        }
                      },
                      "id": 223,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2699:44:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 224,
                    "nodeType": "ExpressionStatement",
                    "src": "2699:44:1"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 241,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 226,
                        "name": "burnTokenData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79,
                        "src": "2756:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                          "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                        }
                      },
                      "id": 228,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 227,
                        "name": "transactionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 151,
                        "src": "2770:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2756:28:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                        "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 230,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "2815:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 231,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2815:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 232,
                          "name": "_burnAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 140,
                          "src": "2840:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 233,
                          "name": "_tokenContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 146,
                          "src": "2867:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 234,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 148,
                          "src": "2896:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 235,
                          "name": "_hashlock",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 142,
                          "src": "2918:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 236,
                          "name": "_timelock",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 144,
                          "src": "2942:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 237,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2966:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 238,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2986:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "307830",
                          "id": 239,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3006:3:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0x0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 229,
                        "name": "BurnTokenData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 75,
                        "src": "2787:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_BurnTokenData_$75_storage_ptr_$",
                          "typeString": "type(struct BurnToClaim.BurnTokenData storage pointer)"
                        }
                      },
                      "id": 240,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2787:233:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BurnTokenData_$75_memory",
                        "typeString": "struct BurnToClaim.BurnTokenData memory"
                      }
                    },
                    "src": "2756:264:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                      "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                    }
                  },
                  "id": 242,
                  "nodeType": "ExpressionStatement",
                  "src": "2756:264:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 244,
                        "name": "transactionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 151,
                        "src": "3073:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 245,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "3101:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 246,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3101:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 247,
                        "name": "_burnAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 140,
                        "src": "3126:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 248,
                        "name": "_tokenContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 146,
                        "src": "3153:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 249,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 148,
                        "src": "3182:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 250,
                        "name": "_hashlock",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 142,
                        "src": "3204:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 251,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -17,
                        "src": "3228:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 243,
                      "name": "exitTransactionEvent",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48,
                      "src": "3038:20:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,address,address,address,uint256,bytes32,uint256)"
                      }
                    },
                    "id": 252,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3038:204:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 253,
                  "nodeType": "EmitStatement",
                  "src": "3033:209:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "159a962c",
            "id": 255,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "exitTransaction",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 149,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 140,
                  "name": "_burnAddress",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 255,
                  "src": "1624:20:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 139,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1624:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 142,
                  "name": "_hashlock",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 255,
                  "src": "1655:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 141,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1655:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 144,
                  "name": "_timelock",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 255,
                  "src": "1683:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 143,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1683:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 146,
                  "name": "_tokenContract",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 255,
                  "src": "1711:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 145,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1711:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 148,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 255,
                  "src": "1744:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 147,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1744:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1613:153:1"
            },
            "returnParameters": {
              "id": 152,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 151,
                  "name": "transactionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 255,
                  "src": "1785:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 150,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1785:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1784:23:1"
            },
            "scope": 747,
            "src": "1589:1661:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 297,
              "nodeType": "Block",
              "src": "3534:446:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 273,
                            "name": "crosschainAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 88,
                            "src": "3571:17:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_CrosschainAddress_$84_storage_$",
                              "typeString": "mapping(address => struct BurnToClaim.CrosschainAddress storage ref)"
                            }
                          },
                          "id": 275,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 274,
                            "name": "_crosschainContractAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 257,
                            "src": "3589:26:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3571:45:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_CrosschainAddress_$84_storage",
                            "typeString": "struct BurnToClaim.CrosschainAddress storage ref"
                          }
                        },
                        "id": 276,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "isExit",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 83,
                        "src": "3571:52:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "41646420636f727373436861696e206461746120636f6e74726163742061646472657373206e6f742065786974",
                        "id": 277,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3638:47:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_2a5fc2dcb8536776234a86723839c06b1f29757e5bcd7d1cd6901f20647bb708",
                          "typeString": "literal_string \"Add corssChain data contract address not exit\""
                        },
                        "value": "Add corssChain data contract address not exit"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_2a5fc2dcb8536776234a86723839c06b1f29757e5bcd7d1cd6901f20647bb708",
                          "typeString": "literal_string \"Add corssChain data contract address not exit\""
                        }
                      ],
                      "id": 272,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "3545:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 278,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3545:151:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 279,
                  "nodeType": "ExpressionStatement",
                  "src": "3545:151:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 295,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 280,
                        "name": "burnTokenData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79,
                        "src": "3707:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                          "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                        }
                      },
                      "id": 282,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 281,
                        "name": "_transactionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 259,
                        "src": "3721:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3707:29:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                        "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 284,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "3767:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 285,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3767:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 286,
                          "name": "_burnAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 261,
                          "src": "3792:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 287,
                          "name": "_tokenContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 267,
                          "src": "3819:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 288,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 269,
                          "src": "3848:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 289,
                          "name": "_hashlock",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 263,
                          "src": "3870:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 290,
                          "name": "_timelock",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 265,
                          "src": "3894:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 291,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3918:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 292,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3938:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "307830",
                          "id": 293,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3958:3:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0x0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 283,
                        "name": "BurnTokenData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 75,
                        "src": "3739:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_BurnTokenData_$75_storage_ptr_$",
                          "typeString": "type(struct BurnToClaim.BurnTokenData storage pointer)"
                        }
                      },
                      "id": 294,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3739:233:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BurnTokenData_$75_memory",
                        "typeString": "struct BurnToClaim.BurnTokenData memory"
                      }
                    },
                    "src": "3707:265:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                      "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                    }
                  },
                  "id": 296,
                  "nodeType": "ExpressionStatement",
                  "src": "3707:265:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "cbbd8a1d",
            "id": 298,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "add",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 270,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 257,
                  "name": "_crosschainContractAddress",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 298,
                  "src": "3281:34:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 256,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3281:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 259,
                  "name": "_transactionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 298,
                  "src": "3326:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 258,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3326:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 261,
                  "name": "_burnAddress",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 298,
                  "src": "3359:20:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 260,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3359:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 263,
                  "name": "_hashlock",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 298,
                  "src": "3390:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 262,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3390:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 265,
                  "name": "_timelock",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 298,
                  "src": "3418:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 264,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3418:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 267,
                  "name": "_tokenContract",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 298,
                  "src": "3446:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 266,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3446:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 269,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 298,
                  "src": "3502:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 268,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3502:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3270:254:1"
            },
            "returnParameters": {
              "id": 271,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3534:0:1"
            },
            "scope": 747,
            "src": "3258:722:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 393,
              "nodeType": "Block",
              "src": "4160:952:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 313,
                            "name": "_transactionId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 304,
                            "src": "4196:14:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "id": 312,
                          "name": "haveContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 746,
                          "src": "4183:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view returns (bool)"
                          }
                        },
                        "id": 314,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4183:28:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "7472616e73616374696f6e496420646f6573206e6f74206578697374",
                        "id": 315,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4213:30:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5974d2ca08508be147e43e71b7048a0e5c3b7dc251866b5374fe67dd5b44c1a2",
                          "typeString": "literal_string \"transactionId does not exist\""
                        },
                        "value": "transactionId does not exist"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5974d2ca08508be147e43e71b7048a0e5c3b7dc251866b5374fe67dd5b44c1a2",
                          "typeString": "literal_string \"transactionId does not exist\""
                        }
                      ],
                      "id": 311,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "4171:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 316,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4171:73:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 317,
                  "nodeType": "ExpressionStatement",
                  "src": "4171:73:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "id": 329,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 319,
                              "name": "burnTokenData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 79,
                              "src": "4281:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                                "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                              }
                            },
                            "id": 321,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 320,
                              "name": "_transactionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 304,
                              "src": "4295:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4281:29:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                              "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                            }
                          },
                          "id": 322,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "hashlock",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 66,
                          "src": "4281:38:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 326,
                                  "name": "_preimage",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 306,
                                  "src": "4364:9:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 324,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -1,
                                  "src": "4347:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 325,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "4347:16:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 327,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4347:27:1",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 323,
                            "name": "sha256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -22,
                            "src": "4340:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_sha256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 328,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4340:35:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "src": "4281:94:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "686173686c6f636b206861736820646f6573206e6f74206d61746368",
                        "id": 330,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4390:30:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f69d465af376b0946a94d153fa61e1120954d7550ccad2ede50c179df9b911a9",
                          "typeString": "literal_string \"hashlock hash does not match\""
                        },
                        "value": "hashlock hash does not match"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_f69d465af376b0946a94d153fa61e1120954d7550ccad2ede50c179df9b911a9",
                          "typeString": "literal_string \"hashlock hash does not match\""
                        }
                      ],
                      "id": 318,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "4255:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 331,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4255:176:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 332,
                  "nodeType": "ExpressionStatement",
                  "src": "4255:176:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 339,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 334,
                              "name": "burnTokenData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 79,
                              "src": "4468:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                                "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                              }
                            },
                            "id": 336,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 335,
                              "name": "_transactionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 304,
                              "src": "4482:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4468:29:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                              "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                            }
                          },
                          "id": 337,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "withdrawn",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 70,
                          "src": "4468:39:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 338,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4511:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "src": "4468:48:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "776974686472617761626c653a20616c72656164792077697468647261776e",
                        "id": 340,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4531:33:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a7a1491df76b63b166fa25b3631de654587363606d31ccfadcdf86382f44f0da",
                          "typeString": "literal_string \"withdrawable: already withdrawn\""
                        },
                        "value": "withdrawable: already withdrawn"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a7a1491df76b63b166fa25b3631de654587363606d31ccfadcdf86382f44f0da",
                          "typeString": "literal_string \"withdrawable: already withdrawn\""
                        }
                      ],
                      "id": 333,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "4442:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 341,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4442:133:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 342,
                  "nodeType": "ExpressionStatement",
                  "src": "4442:133:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 349,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 344,
                              "name": "burnTokenData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 79,
                              "src": "4612:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                                "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                              }
                            },
                            "id": 346,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 345,
                              "name": "_transactionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 304,
                              "src": "4626:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4612:29:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                              "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                            }
                          },
                          "id": 347,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "timelock",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 68,
                          "src": "4612:38:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 348,
                          "name": "now",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -17,
                          "src": "4653:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4612:44:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "776974686472617761626c653a2074696d656c6f636b2074696d65206d75737420626520696e2074686520667574757265",
                        "id": 350,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4671:51:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f90a5049b744d27b4e847d49b0f3d774706fdfcfc2fa7fe6498583db4e9e564f",
                          "typeString": "literal_string \"withdrawable: timelock time must be in the future\""
                        },
                        "value": "withdrawable: timelock time must be in the future"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_f90a5049b744d27b4e847d49b0f3d774706fdfcfc2fa7fe6498583db4e9e564f",
                          "typeString": "literal_string \"withdrawable: timelock time must be in the future\""
                        }
                      ],
                      "id": 343,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "4586:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 351,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4586:147:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 352,
                  "nodeType": "ExpressionStatement",
                  "src": "4586:147:1"
                },
                {
                  "assignments": [
                    354
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 354,
                      "name": "c",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 393,
                      "src": "4746:23:1",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                        "typeString": "struct BurnToClaim.BurnTokenData"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 353,
                        "name": "BurnTokenData",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 75,
                        "src": "4746:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                          "typeString": "struct BurnToClaim.BurnTokenData"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 358,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 355,
                      "name": "burnTokenData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79,
                      "src": "4772:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                        "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                      }
                    },
                    "id": 357,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 356,
                      "name": "_transactionId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 304,
                      "src": "4786:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "4772:29:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                      "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4746:55:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 363,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 359,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 354,
                        "src": "4812:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                          "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                        }
                      },
                      "id": 361,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "preimage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 74,
                      "src": "4812:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 362,
                      "name": "_preimage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 306,
                      "src": "4825:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "4812:22:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 364,
                  "nodeType": "ExpressionStatement",
                  "src": "4812:22:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 369,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 365,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 354,
                        "src": "4845:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                          "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                        }
                      },
                      "id": 367,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "withdrawn",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 70,
                      "src": "4845:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 368,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4859:4:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "4845:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 370,
                  "nodeType": "ExpressionStatement",
                  "src": "4845:18:1"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 379,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "4878:52:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 376,
                          "name": "_receiver",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 302,
                          "src": "4911:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 377,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 300,
                          "src": "4922:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 372,
                                "name": "c",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 354,
                                "src": "4885:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                                  "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                                }
                              },
                              "id": 373,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "tokenContract",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 62,
                              "src": "4885:15:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 371,
                            "name": "ERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1482,
                            "src": "4879:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_ERC20_$1482_$",
                              "typeString": "type(contract ERC20)"
                            }
                          },
                          "id": 374,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4879:22:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC20_$1482",
                            "typeString": "contract ERC20"
                          }
                        },
                        "id": 375,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1114,
                        "src": "4879:31:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,uint256) external returns (bool)"
                        }
                      },
                      "id": 378,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4879:51:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 389,
                    "nodeType": "Block",
                    "src": "5016:67:1",
                    "statements": [
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 386,
                              "name": "_transactionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 304,
                              "src": "5056:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "id": 385,
                            "name": "entryTransactionEvent",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52,
                            "src": "5034:21:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$returns$__$",
                              "typeString": "function (bytes32)"
                            }
                          },
                          "id": 387,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5034:37:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 388,
                        "nodeType": "EmitStatement",
                        "src": "5029:42:1"
                      }
                    ]
                  },
                  "id": 390,
                  "nodeType": "IfStatement",
                  "src": "4874:209:1",
                  "trueBody": {
                    "id": 384,
                    "nodeType": "Block",
                    "src": "4931:71:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "7472616e7366657246726f6d2073656e64657220746f2074686973206661696c6564",
                              "id": 381,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4953:36:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d972a7c972449bdb9cebe63bbe70aabf7c1479cdd3def2eb6af0685384c9067a",
                                "typeString": "literal_string \"transferFrom sender to this failed\""
                              },
                              "value": "transferFrom sender to this failed"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_d972a7c972449bdb9cebe63bbe70aabf7c1479cdd3def2eb6af0685384c9067a",
                                "typeString": "literal_string \"transferFrom sender to this failed\""
                              }
                            ],
                            "id": 380,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -19,
                              -19
                            ],
                            "referencedDeclaration": -19,
                            "src": "4946:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory) pure"
                            }
                          },
                          "id": 382,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4946:44:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 383,
                        "nodeType": "ExpressionStatement",
                        "src": "4946:44:1"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 391,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "5100:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 310,
                  "id": 392,
                  "nodeType": "Return",
                  "src": "5093:11:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "449b0395",
            "id": 394,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "entryTransaction",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 307,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 300,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 394,
                  "src": "4024:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 299,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4024:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 302,
                  "name": "_receiver",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 394,
                  "src": "4050:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 301,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4050:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 304,
                  "name": "_transactionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 394,
                  "src": "4078:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 303,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4078:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 306,
                  "name": "_preimage",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 394,
                  "src": "4111:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 305,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4111:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4013:122:1"
            },
            "returnParameters": {
              "id": 310,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 309,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 394,
                  "src": "4154:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 308,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4154:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4153:6:1"
            },
            "scope": 747,
            "src": "3988:1124:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 429,
              "nodeType": "Block",
              "src": "5258:301:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 404,
                            "name": "crosschainAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 88,
                            "src": "5295:17:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_CrosschainAddress_$84_storage_$",
                              "typeString": "mapping(address => struct BurnToClaim.CrosschainAddress storage ref)"
                            }
                          },
                          "id": 406,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 405,
                            "name": "_crosschainContractAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 396,
                            "src": "5313:26:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "5295:45:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_CrosschainAddress_$84_storage",
                            "typeString": "struct BurnToClaim.CrosschainAddress storage ref"
                          }
                        },
                        "id": 407,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "isExit",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 83,
                        "src": "5295:52:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "55706461746520636f727373436861696e206461746120636f6e74726163742061646472657373206e6f742065786974",
                        "id": 408,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5362:50:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c9041ea039fe4629e10490bf2647dd1c29221ae608240f37d213dfd5af2d417c",
                          "typeString": "literal_string \"Update corssChain data contract address not exit\""
                        },
                        "value": "Update corssChain data contract address not exit"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c9041ea039fe4629e10490bf2647dd1c29221ae608240f37d213dfd5af2d417c",
                          "typeString": "literal_string \"Update corssChain data contract address not exit\""
                        }
                      ],
                      "id": 403,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "5269:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 409,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5269:154:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 410,
                  "nodeType": "ExpressionStatement",
                  "src": "5269:154:1"
                },
                {
                  "assignments": [
                    412
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 412,
                      "name": "c",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 429,
                      "src": "5434:23:1",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                        "typeString": "struct BurnToClaim.BurnTokenData"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 411,
                        "name": "BurnTokenData",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 75,
                        "src": "5434:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                          "typeString": "struct BurnToClaim.BurnTokenData"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 416,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 413,
                      "name": "burnTokenData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79,
                      "src": "5460:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                        "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                      }
                    },
                    "id": 415,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 414,
                      "name": "_transactionId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 398,
                      "src": "5474:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "5460:29:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                      "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5434:55:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 421,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 417,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 412,
                        "src": "5500:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                          "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                        }
                      },
                      "id": 419,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "preimage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 74,
                      "src": "5500:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 420,
                      "name": "_preimage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 400,
                      "src": "5513:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "5500:22:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 422,
                  "nodeType": "ExpressionStatement",
                  "src": "5500:22:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 427,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 423,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 412,
                        "src": "5533:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                          "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                        }
                      },
                      "id": 425,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "withdrawn",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 70,
                      "src": "5533:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 426,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5547:4:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "5533:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 428,
                  "nodeType": "ExpressionStatement",
                  "src": "5533:18:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "64ff3004",
            "id": 430,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "update",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 401,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 396,
                  "name": "_crosschainContractAddress",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 430,
                  "src": "5146:34:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 395,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5146:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 398,
                  "name": "_transactionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 430,
                  "src": "5191:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 397,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5191:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 400,
                  "name": "_preimage",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 430,
                  "src": "5224:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 399,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5224:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5135:113:1"
            },
            "returnParameters": {
              "id": 402,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5258:0:1"
            },
            "scope": 747,
            "src": "5120:439:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 519,
              "nodeType": "Block",
              "src": "5666:955:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 439,
                            "name": "_transactionId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 432,
                            "src": "5702:14:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "id": 438,
                          "name": "haveContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 746,
                          "src": "5689:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view returns (bool)"
                          }
                        },
                        "id": 440,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5689:28:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "7472616e73616374696f6e496420646f6573206e6f74206578697374",
                        "id": 441,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5719:30:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5974d2ca08508be147e43e71b7048a0e5c3b7dc251866b5374fe67dd5b44c1a2",
                          "typeString": "literal_string \"transactionId does not exist\""
                        },
                        "value": "transactionId does not exist"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5974d2ca08508be147e43e71b7048a0e5c3b7dc251866b5374fe67dd5b44c1a2",
                          "typeString": "literal_string \"transactionId does not exist\""
                        }
                      ],
                      "id": 437,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "5677:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 442,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5677:73:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 443,
                  "nodeType": "ExpressionStatement",
                  "src": "5677:73:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 451,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 445,
                              "name": "burnTokenData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 79,
                              "src": "5787:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                                "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                              }
                            },
                            "id": 447,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 446,
                              "name": "_transactionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 432,
                              "src": "5801:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "5787:29:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                              "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                            }
                          },
                          "id": 448,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 58,
                          "src": "5787:36:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 449,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "5827:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 450,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "5827:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "5787:50:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "726566756e6461626c653a206e6f742073656e646572",
                        "id": 452,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5852:24:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_edd5bfdacb483bdf26b05ebe186281e97d155ca7c516ffe52d11b5e39d79c23a",
                          "typeString": "literal_string \"refundable: not sender\""
                        },
                        "value": "refundable: not sender"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_edd5bfdacb483bdf26b05ebe186281e97d155ca7c516ffe52d11b5e39d79c23a",
                          "typeString": "literal_string \"refundable: not sender\""
                        }
                      ],
                      "id": 444,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "5761:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 453,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5761:126:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 454,
                  "nodeType": "ExpressionStatement",
                  "src": "5761:126:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 461,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 456,
                              "name": "burnTokenData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 79,
                              "src": "5924:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                                "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                              }
                            },
                            "id": 458,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 457,
                              "name": "_transactionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 432,
                              "src": "5938:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "5924:29:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                              "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                            }
                          },
                          "id": 459,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "refunded",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 72,
                          "src": "5924:38:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 460,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5966:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "src": "5924:47:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "726566756e6461626c653a20616c726561647920726566756e646564",
                        "id": 462,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5986:30:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_7b29f51b209a34fdcf95e658d91750e2d1af4c6890c540f7ec9b6060ebd16007",
                          "typeString": "literal_string \"refundable: already refunded\""
                        },
                        "value": "refundable: already refunded"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_7b29f51b209a34fdcf95e658d91750e2d1af4c6890c540f7ec9b6060ebd16007",
                          "typeString": "literal_string \"refundable: already refunded\""
                        }
                      ],
                      "id": 455,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "5898:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 463,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5898:129:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 464,
                  "nodeType": "ExpressionStatement",
                  "src": "5898:129:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 471,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 466,
                              "name": "burnTokenData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 79,
                              "src": "6064:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                                "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                              }
                            },
                            "id": 468,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 467,
                              "name": "_transactionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 432,
                              "src": "6078:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "6064:29:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                              "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                            }
                          },
                          "id": 469,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "withdrawn",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 70,
                          "src": "6064:39:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 470,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6107:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "src": "6064:48:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "726566756e6461626c653a20616c72656164792077697468647261776e",
                        "id": 472,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6127:31:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_3b5b42a6105acb76ce8eb8957616623bad95a1e8514f0d2809f4b82a9c3b0fce",
                          "typeString": "literal_string \"refundable: already withdrawn\""
                        },
                        "value": "refundable: already withdrawn"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_3b5b42a6105acb76ce8eb8957616623bad95a1e8514f0d2809f4b82a9c3b0fce",
                          "typeString": "literal_string \"refundable: already withdrawn\""
                        }
                      ],
                      "id": 465,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "6038:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 473,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6038:131:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 474,
                  "nodeType": "ExpressionStatement",
                  "src": "6038:131:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 481,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 476,
                              "name": "burnTokenData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 79,
                              "src": "6206:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                                "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                              }
                            },
                            "id": 478,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 477,
                              "name": "_transactionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 432,
                              "src": "6220:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "6206:29:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                              "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                            }
                          },
                          "id": 479,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "timelock",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 68,
                          "src": "6206:38:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 480,
                          "name": "now",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -17,
                          "src": "6248:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6206:45:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "726566756e6461626c653a2074696d656c6f636b206e6f742079657420706173736564",
                        "id": 482,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6266:37:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_53ffb24e93d3b349bff6339724d28c73880587cacedffccbcdea5da101fc50b9",
                          "typeString": "literal_string \"refundable: timelock not yet passed\""
                        },
                        "value": "refundable: timelock not yet passed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_53ffb24e93d3b349bff6339724d28c73880587cacedffccbcdea5da101fc50b9",
                          "typeString": "literal_string \"refundable: timelock not yet passed\""
                        }
                      ],
                      "id": 475,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "6180:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 483,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6180:134:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 484,
                  "nodeType": "ExpressionStatement",
                  "src": "6180:134:1"
                },
                {
                  "assignments": [
                    486
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 486,
                      "name": "c",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 519,
                      "src": "6327:23:1",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                        "typeString": "struct BurnToClaim.BurnTokenData"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 485,
                        "name": "BurnTokenData",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 75,
                        "src": "6327:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                          "typeString": "struct BurnToClaim.BurnTokenData"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 490,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 487,
                      "name": "burnTokenData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79,
                      "src": "6353:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                        "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                      }
                    },
                    "id": 489,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 488,
                      "name": "_transactionId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 432,
                      "src": "6367:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "6353:29:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                      "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6327:55:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 495,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 491,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 486,
                        "src": "6393:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                          "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                        }
                      },
                      "id": 493,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "refunded",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 72,
                      "src": "6393:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 494,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6406:4:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "6393:17:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 496,
                  "nodeType": "ExpressionStatement",
                  "src": "6393:17:1"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 507,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "6425:52:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 502,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 486,
                            "src": "6458:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                              "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                            }
                          },
                          "id": 503,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 58,
                          "src": "6458:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 504,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 486,
                            "src": "6468:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                              "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                            }
                          },
                          "id": 505,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "amount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 64,
                          "src": "6468:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 498,
                                "name": "c",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 486,
                                "src": "6432:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                                  "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                                }
                              },
                              "id": 499,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "tokenContract",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 62,
                              "src": "6432:15:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 497,
                            "name": "ERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1482,
                            "src": "6426:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_ERC20_$1482_$",
                              "typeString": "type(contract ERC20)"
                            }
                          },
                          "id": 500,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6426:22:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC20_$1482",
                            "typeString": "contract ERC20"
                          }
                        },
                        "id": 501,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1114,
                        "src": "6426:31:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,uint256) external returns (bool)"
                        }
                      },
                      "id": 506,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6426:51:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 512,
                  "nodeType": "IfStatement",
                  "src": "6421:115:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "7472616e7366657246726f6d2073656e64657220746f2074686973206661696c6564",
                          "id": 509,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6499:36:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_d972a7c972449bdb9cebe63bbe70aabf7c1479cdd3def2eb6af0685384c9067a",
                            "typeString": "literal_string \"transferFrom sender to this failed\""
                          },
                          "value": "transferFrom sender to this failed"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_d972a7c972449bdb9cebe63bbe70aabf7c1479cdd3def2eb6af0685384c9067a",
                            "typeString": "literal_string \"transferFrom sender to this failed\""
                          }
                        ],
                        "id": 508,
                        "name": "revert",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -19,
                          -19
                        ],
                        "referencedDeclaration": -19,
                        "src": "6492:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (string memory) pure"
                        }
                      },
                      "id": 510,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6492:44:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 511,
                    "nodeType": "ExpressionStatement",
                    "src": "6492:44:1"
                  }
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 514,
                        "name": "_transactionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 432,
                        "src": "6576:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 513,
                      "name": "reclaimTransactionEvent",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56,
                      "src": "6552:23:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32)"
                      }
                    },
                    "id": 515,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6552:39:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 516,
                  "nodeType": "EmitStatement",
                  "src": "6547:44:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 517,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "6609:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 436,
                  "id": 518,
                  "nodeType": "Return",
                  "src": "6602:11:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "4cc28a19",
            "id": 520,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "reclaimTransaction",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 433,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 432,
                  "name": "_transactionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 520,
                  "src": "5595:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 431,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5595:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5594:24:1"
            },
            "returnParameters": {
              "id": 436,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 435,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 520,
                  "src": "5655:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 434,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5655:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5654:6:1"
            },
            "scope": 747,
            "src": "5567:1054:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 599,
              "nodeType": "Block",
              "src": "6729:969:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 529,
                            "name": "_transactionId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 522,
                            "src": "6765:14:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "id": 528,
                          "name": "haveContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 746,
                          "src": "6752:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view returns (bool)"
                          }
                        },
                        "id": 530,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6752:28:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "7472616e73616374696f6e496420646f6573206e6f74206578697374",
                        "id": 531,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6782:30:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5974d2ca08508be147e43e71b7048a0e5c3b7dc251866b5374fe67dd5b44c1a2",
                          "typeString": "literal_string \"transactionId does not exist\""
                        },
                        "value": "transactionId does not exist"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5974d2ca08508be147e43e71b7048a0e5c3b7dc251866b5374fe67dd5b44c1a2",
                          "typeString": "literal_string \"transactionId does not exist\""
                        }
                      ],
                      "id": 527,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "6740:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 532,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6740:73:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 533,
                  "nodeType": "ExpressionStatement",
                  "src": "6740:73:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 541,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 535,
                              "name": "burnTokenData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 79,
                              "src": "6850:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                                "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                              }
                            },
                            "id": 537,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 536,
                              "name": "_transactionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 522,
                              "src": "6864:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "6850:29:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                              "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                            }
                          },
                          "id": 538,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 58,
                          "src": "6850:36:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 539,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "6890:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 540,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "6890:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "6850:50:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "726566756e6461626c653a206e6f742073656e646572",
                        "id": 542,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6915:24:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_edd5bfdacb483bdf26b05ebe186281e97d155ca7c516ffe52d11b5e39d79c23a",
                          "typeString": "literal_string \"refundable: not sender\""
                        },
                        "value": "refundable: not sender"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_edd5bfdacb483bdf26b05ebe186281e97d155ca7c516ffe52d11b5e39d79c23a",
                          "typeString": "literal_string \"refundable: not sender\""
                        }
                      ],
                      "id": 534,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "6824:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 543,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6824:126:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 544,
                  "nodeType": "ExpressionStatement",
                  "src": "6824:126:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 551,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 546,
                              "name": "burnTokenData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 79,
                              "src": "6987:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                                "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                              }
                            },
                            "id": 548,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 547,
                              "name": "_transactionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 522,
                              "src": "7001:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "6987:29:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                              "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                            }
                          },
                          "id": 549,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "refunded",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 72,
                          "src": "6987:38:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 550,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7029:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "src": "6987:47:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "726566756e6461626c653a20616c726561647920726566756e646564",
                        "id": 552,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7049:30:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_7b29f51b209a34fdcf95e658d91750e2d1af4c6890c540f7ec9b6060ebd16007",
                          "typeString": "literal_string \"refundable: already refunded\""
                        },
                        "value": "refundable: already refunded"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_7b29f51b209a34fdcf95e658d91750e2d1af4c6890c540f7ec9b6060ebd16007",
                          "typeString": "literal_string \"refundable: already refunded\""
                        }
                      ],
                      "id": 545,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "6961:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 553,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6961:129:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 554,
                  "nodeType": "ExpressionStatement",
                  "src": "6961:129:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 561,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 556,
                              "name": "burnTokenData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 79,
                              "src": "7127:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                                "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                              }
                            },
                            "id": 558,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 557,
                              "name": "_transactionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 522,
                              "src": "7141:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "7127:29:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                              "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                            }
                          },
                          "id": 559,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "withdrawn",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 70,
                          "src": "7127:39:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 560,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7170:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "src": "7127:48:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "726566756e6461626c653a20616c72656164792077697468647261776e",
                        "id": 562,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7190:31:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_3b5b42a6105acb76ce8eb8957616623bad95a1e8514f0d2809f4b82a9c3b0fce",
                          "typeString": "literal_string \"refundable: already withdrawn\""
                        },
                        "value": "refundable: already withdrawn"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_3b5b42a6105acb76ce8eb8957616623bad95a1e8514f0d2809f4b82a9c3b0fce",
                          "typeString": "literal_string \"refundable: already withdrawn\""
                        }
                      ],
                      "id": 555,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "7101:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 563,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7101:131:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 564,
                  "nodeType": "ExpressionStatement",
                  "src": "7101:131:1"
                },
                {
                  "assignments": [
                    566
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 566,
                      "name": "c",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 599,
                      "src": "7404:23:1",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                        "typeString": "struct BurnToClaim.BurnTokenData"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 565,
                        "name": "BurnTokenData",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 75,
                        "src": "7404:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                          "typeString": "struct BurnToClaim.BurnTokenData"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 570,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 567,
                      "name": "burnTokenData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79,
                      "src": "7430:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                        "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                      }
                    },
                    "id": 569,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 568,
                      "name": "_transactionId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 522,
                      "src": "7444:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "7430:29:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                      "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7404:55:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 575,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 571,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 566,
                        "src": "7470:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                          "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                        }
                      },
                      "id": 573,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "refunded",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 72,
                      "src": "7470:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 574,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7483:4:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "7470:17:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 576,
                  "nodeType": "ExpressionStatement",
                  "src": "7470:17:1"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 587,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "7502:52:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 582,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 566,
                            "src": "7535:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                              "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                            }
                          },
                          "id": 583,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 58,
                          "src": "7535:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 584,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 566,
                            "src": "7545:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                              "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                            }
                          },
                          "id": 585,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "amount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 64,
                          "src": "7545:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 578,
                                "name": "c",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 566,
                                "src": "7509:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                                  "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                                }
                              },
                              "id": 579,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "tokenContract",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 62,
                              "src": "7509:15:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 577,
                            "name": "ERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1482,
                            "src": "7503:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_ERC20_$1482_$",
                              "typeString": "type(contract ERC20)"
                            }
                          },
                          "id": 580,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7503:22:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC20_$1482",
                            "typeString": "contract ERC20"
                          }
                        },
                        "id": 581,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1114,
                        "src": "7503:31:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,uint256) external returns (bool)"
                        }
                      },
                      "id": 586,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7503:51:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 592,
                  "nodeType": "IfStatement",
                  "src": "7498:115:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "7472616e7366657246726f6d2073656e64657220746f2074686973206661696c6564",
                          "id": 589,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7576:36:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_d972a7c972449bdb9cebe63bbe70aabf7c1479cdd3def2eb6af0685384c9067a",
                            "typeString": "literal_string \"transferFrom sender to this failed\""
                          },
                          "value": "transferFrom sender to this failed"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_d972a7c972449bdb9cebe63bbe70aabf7c1479cdd3def2eb6af0685384c9067a",
                            "typeString": "literal_string \"transferFrom sender to this failed\""
                          }
                        ],
                        "id": 588,
                        "name": "revert",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -19,
                          -19
                        ],
                        "referencedDeclaration": -19,
                        "src": "7569:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (string memory) pure"
                        }
                      },
                      "id": 590,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7569:44:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 591,
                    "nodeType": "ExpressionStatement",
                    "src": "7569:44:1"
                  }
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 594,
                        "name": "_transactionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 522,
                        "src": "7653:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 593,
                      "name": "reclaimTransactionEvent",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56,
                      "src": "7629:23:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32)"
                      }
                    },
                    "id": 595,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7629:39:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 596,
                  "nodeType": "EmitStatement",
                  "src": "7624:44:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 597,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "7686:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 526,
                  "id": 598,
                  "nodeType": "Return",
                  "src": "7679:11:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "40d1ce73",
            "id": 600,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "reclaimTransaction1",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 523,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 522,
                  "name": "_transactionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 600,
                  "src": "6658:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 521,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6658:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6657:24:1"
            },
            "returnParameters": {
              "id": 526,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 525,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 600,
                  "src": "6718:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 524,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6718:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6717:6:1"
            },
            "scope": 747,
            "src": "6629:1069:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 622,
              "nodeType": "Block",
              "src": "7831:134:1",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 616,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "7846:52:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 613,
                          "name": "_recipient",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 604,
                          "src": "7878:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 614,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 606,
                          "src": "7890:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 610,
                              "name": "_tokenContract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 602,
                              "src": "7853:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 609,
                            "name": "ERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1482,
                            "src": "7847:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_ERC20_$1482_$",
                              "typeString": "type(contract ERC20)"
                            }
                          },
                          "id": 611,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7847:21:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC20_$1482",
                            "typeString": "contract ERC20"
                          }
                        },
                        "id": 612,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1114,
                        "src": "7847:30:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,uint256) external returns (bool)"
                        }
                      },
                      "id": 615,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7847:51:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 621,
                  "nodeType": "IfStatement",
                  "src": "7842:115:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "7472616e7366657246726f6d2073656e64657220746f2074686973206661696c6564",
                          "id": 618,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7920:36:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_d972a7c972449bdb9cebe63bbe70aabf7c1479cdd3def2eb6af0685384c9067a",
                            "typeString": "literal_string \"transferFrom sender to this failed\""
                          },
                          "value": "transferFrom sender to this failed"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_d972a7c972449bdb9cebe63bbe70aabf7c1479cdd3def2eb6af0685384c9067a",
                            "typeString": "literal_string \"transferFrom sender to this failed\""
                          }
                        ],
                        "id": 617,
                        "name": "revert",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -19,
                          -19
                        ],
                        "referencedDeclaration": -19,
                        "src": "7913:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (string memory) pure"
                        }
                      },
                      "id": 619,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7913:44:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 620,
                    "nodeType": "ExpressionStatement",
                    "src": "7913:44:1"
                  }
                }
              ]
            },
            "documentation": null,
            "functionSelector": "6d0c27a8",
            "id": 623,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "btcTransfer",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 607,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 602,
                  "name": "_tokenContract",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 623,
                  "src": "7737:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 601,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7737:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 604,
                  "name": "_recipient",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 623,
                  "src": "7770:18:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 603,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7770:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 606,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 623,
                  "src": "7799:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 605,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7799:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7726:95:1"
            },
            "returnParameters": {
              "id": 608,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7831:0:1"
            },
            "scope": 747,
            "src": "7706:259:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 648,
              "nodeType": "Block",
              "src": "8128:147:1",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 642,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "8143:65:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 638,
                          "name": "_sender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 627,
                          "src": "8179:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 639,
                          "name": "_recipient",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 629,
                          "src": "8188:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 640,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 631,
                          "src": "8200:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 635,
                              "name": "_tokenContract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 625,
                              "src": "8150:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 634,
                            "name": "ERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1482,
                            "src": "8144:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_ERC20_$1482_$",
                              "typeString": "type(contract ERC20)"
                            }
                          },
                          "id": 636,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8144:21:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC20_$1482",
                            "typeString": "contract ERC20"
                          }
                        },
                        "id": 637,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transferFrom",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1188,
                        "src": "8144:34:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,address,uint256) external returns (bool)"
                        }
                      },
                      "id": 641,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8144:64:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 647,
                  "nodeType": "IfStatement",
                  "src": "8139:128:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "7472616e7366657246726f6d2073656e64657220746f2074686973206661696c6564",
                          "id": 644,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8230:36:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_d972a7c972449bdb9cebe63bbe70aabf7c1479cdd3def2eb6af0685384c9067a",
                            "typeString": "literal_string \"transferFrom sender to this failed\""
                          },
                          "value": "transferFrom sender to this failed"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_d972a7c972449bdb9cebe63bbe70aabf7c1479cdd3def2eb6af0685384c9067a",
                            "typeString": "literal_string \"transferFrom sender to this failed\""
                          }
                        ],
                        "id": 643,
                        "name": "revert",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -19,
                          -19
                        ],
                        "referencedDeclaration": -19,
                        "src": "8223:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (string memory) pure"
                        }
                      },
                      "id": 645,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8223:44:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 646,
                    "nodeType": "ExpressionStatement",
                    "src": "8223:44:1"
                  }
                }
              ]
            },
            "documentation": null,
            "functionSelector": "d9d1ca47",
            "id": 649,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "btcTransferFrom",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 632,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 625,
                  "name": "_tokenContract",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 649,
                  "src": "8008:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 624,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8008:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 627,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 649,
                  "src": "8041:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 626,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8041:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 629,
                  "name": "_recipient",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 649,
                  "src": "8067:18:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 628,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8067:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 631,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 649,
                  "src": "8096:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 630,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8096:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7997:121:1"
            },
            "returnParameters": {
              "id": 633,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8128:0:1"
            },
            "scope": 747,
            "src": "7973:302:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 724,
              "nodeType": "Block",
              "src": "8667:634:1",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 676,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 673,
                          "name": "_transactionId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 651,
                          "src": "8695:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        ],
                        "id": 672,
                        "name": "haveContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 746,
                        "src": "8682:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bool_$",
                          "typeString": "function (bytes32) view returns (bool)"
                        }
                      },
                      "id": 674,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8682:28:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 675,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "8714:5:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "8682:37:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 697,
                  "nodeType": "IfStatement",
                  "src": "8678:293:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 679,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8768:1:1",
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
                            "id": 678,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "8760:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 677,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "8760:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          },
                          "id": 680,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8760:10:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 683,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8797:1:1",
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
                            "id": 682,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "8789:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 681,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "8789:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          },
                          "id": 684,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8789:10:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 687,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8826:1:1",
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
                            "id": 686,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "8818:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 685,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "8818:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          },
                          "id": 688,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8818:10:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 689,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8847:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 690,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8867:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 691,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8887:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 692,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8907:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 693,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8931:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 694,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8955:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "id": 695,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "8741:230:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_address_payable_$_t_address_payable_$_t_address_payable_$_t_rational_0_by_1_$_t_rational_0_by_1_$_t_rational_0_by_1_$_t_bool_$_t_bool_$_t_rational_0_by_1_$",
                        "typeString": "tuple(address payable,address payable,address payable,int_const 0,int_const 0,int_const 0,bool,bool,int_const 0)"
                      }
                    },
                    "functionReturnParameters": 671,
                    "id": 696,
                    "nodeType": "Return",
                    "src": "8734:237:1"
                  }
                },
                {
                  "assignments": [
                    699
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 699,
                      "name": "c",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 724,
                      "src": "8982:23:1",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                        "typeString": "struct BurnToClaim.BurnTokenData"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 698,
                        "name": "BurnTokenData",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 75,
                        "src": "8982:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                          "typeString": "struct BurnToClaim.BurnTokenData"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 703,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 700,
                      "name": "burnTokenData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79,
                      "src": "9008:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                        "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                      }
                    },
                    "id": 702,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 701,
                      "name": "_transactionId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 651,
                      "src": "9022:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "9008:29:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                      "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8982:55:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 704,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 699,
                          "src": "9070:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                            "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                          }
                        },
                        "id": 705,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 58,
                        "src": "9070:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 706,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 699,
                          "src": "9093:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                            "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                          }
                        },
                        "id": 707,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "receiver",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 60,
                        "src": "9093:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 708,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 699,
                          "src": "9118:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                            "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                          }
                        },
                        "id": 709,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "tokenContract",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62,
                        "src": "9118:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 710,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 699,
                          "src": "9148:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                            "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                          }
                        },
                        "id": 711,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "amount",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 64,
                        "src": "9148:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 712,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 699,
                          "src": "9171:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                            "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                          }
                        },
                        "id": 713,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "hashlock",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 66,
                        "src": "9171:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 714,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 699,
                          "src": "9196:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                            "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                          }
                        },
                        "id": 715,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "timelock",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 68,
                        "src": "9196:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 716,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 699,
                          "src": "9221:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                            "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                          }
                        },
                        "id": 717,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "withdrawn",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 70,
                        "src": "9221:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 718,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 699,
                          "src": "9247:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                            "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                          }
                        },
                        "id": 719,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "refunded",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 72,
                        "src": "9247:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 720,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 699,
                          "src": "9272:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                            "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                          }
                        },
                        "id": 721,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "preimage",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 74,
                        "src": "9272:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "id": 722,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "9055:238:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$_t_uint256_$_t_bool_$_t_bool_$_t_bytes32_$",
                      "typeString": "tuple(address,address,address,uint256,bytes32,uint256,bool,bool,bytes32)"
                    }
                  },
                  "functionReturnParameters": 671,
                  "id": 723,
                  "nodeType": "Return",
                  "src": "9048:245:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "e16c7d98",
            "id": 725,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getContract",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 652,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 651,
                  "name": "_transactionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 725,
                  "src": "8304:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 650,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8304:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8303:24:1"
            },
            "returnParameters": {
              "id": 671,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 654,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 725,
                  "src": "8390:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 653,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8390:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 656,
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 725,
                  "src": "8419:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 655,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8419:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 658,
                  "name": "tokenContract",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 725,
                  "src": "8450:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 657,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8450:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 660,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 725,
                  "src": "8486:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 659,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8486:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 662,
                  "name": "hashlock",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 725,
                  "src": "8515:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 661,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8515:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 664,
                  "name": "timelock",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 725,
                  "src": "8546:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 663,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8546:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 666,
                  "name": "withdrawn",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 725,
                  "src": "8577:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 665,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8577:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 668,
                  "name": "refunded",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 725,
                  "src": "8606:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 667,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8606:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 670,
                  "name": "preimage",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 725,
                  "src": "8634:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 669,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8634:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8375:286:1"
            },
            "scope": 747,
            "src": "8283:1018:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 745,
              "nodeType": "Block",
              "src": "9423:80:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 743,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 732,
                      "name": "exists",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 730,
                      "src": "9434:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 741,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 733,
                                "name": "burnTokenData",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 79,
                                "src": "9444:13:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                                  "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                                }
                              },
                              "id": 735,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 734,
                                "name": "_transactionId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 727,
                                "src": "9458:14:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "9444:29:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                                "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                              }
                            },
                            "id": 736,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 58,
                            "src": "9444:36:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 739,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9492:1:1",
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
                              "id": 738,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "9484:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 737,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "9484:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": null,
                                  "typeString": null
                                }
                              }
                            },
                            "id": 740,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9484:10:1",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "9444:50:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "id": 742,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "9443:52:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "9434:61:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 744,
                  "nodeType": "ExpressionStatement",
                  "src": "9434:61:1"
                }
              ]
            },
            "documentation": null,
            "id": 746,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "haveContract",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 728,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 727,
                  "name": "_transactionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 746,
                  "src": "9331:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 726,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "9331:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "9330:24:1"
            },
            "returnParameters": {
              "id": 731,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 730,
                  "name": "exists",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 746,
                  "src": "9405:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 729,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "9405:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "9404:13:1"
            },
            "scope": 747,
            "src": "9309:194:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "scope": 748,
        "src": "86:9420:1"
      }
    ],
    "src": "0:9508:1"
  },
  "legacyAST": {
    "absolutePath": "/C/Users/Paul/Documents/GitHub/severalpens/burn-to-claim/contracts/BurnToClaim.sol",
    "exportedSymbols": {
      "BurnToClaim": [
        747
      ]
    },
    "id": 748,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 31,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:1"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "id": 32,
        "nodeType": "ImportDirective",
        "scope": 748,
        "sourceUnit": 1483,
        "src": "27:55:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 747,
        "linearizedBaseContracts": [
          747
        ],
        "name": "BurnToClaim",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 48,
            "name": "exitTransactionEvent",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 47,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34,
                  "indexed": true,
                  "name": "transactionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 48,
                  "src": "151:29:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 33,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "151:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36,
                  "indexed": true,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 48,
                  "src": "191:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "191:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 38,
                  "indexed": true,
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 48,
                  "src": "224:24:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 37,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "224:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 40,
                  "indexed": false,
                  "name": "tokenContract",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 48,
                  "src": "259:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "259:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 42,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 48,
                  "src": "291:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 41,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "291:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 44,
                  "indexed": false,
                  "name": "hashlock",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 48,
                  "src": "316:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 43,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "316:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 46,
                  "indexed": false,
                  "name": "timelock",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 48,
                  "src": "343:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "343:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "140:226:1"
            },
            "src": "114:253:1"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 52,
            "name": "entryTransactionEvent",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 51,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50,
                  "indexed": true,
                  "name": "transactionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 52,
                  "src": "401:29:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 49,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "401:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "400:31:1"
            },
            "src": "373:59:1"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 56,
            "name": "reclaimTransactionEvent",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 55,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54,
                  "indexed": true,
                  "name": "transactionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 56,
                  "src": "468:29:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 53,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "468:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "467:31:1"
            },
            "src": "438:61:1"
          },
          {
            "canonicalName": "BurnToClaim.BurnTokenData",
            "id": 75,
            "members": [
              {
                "constant": false,
                "id": 58,
                "name": "sender",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 75,
                "src": "539:14:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 57,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "539:7:1",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 60,
                "name": "receiver",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 75,
                "src": "564:16:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 59,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "564:7:1",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 62,
                "name": "tokenContract",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 75,
                "src": "591:21:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 61,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "591:7:1",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 64,
                "name": "amount",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 75,
                "src": "623:14:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 63,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "623:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 66,
                "name": "hashlock",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 75,
                "src": "648:16:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 65,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "648:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 68,
                "name": "timelock",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 75,
                "src": "675:16:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 67,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "675:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 70,
                "name": "withdrawn",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 75,
                "src": "702:14:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 69,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "702:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 72,
                "name": "refunded",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 75,
                "src": "727:13:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 71,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "727:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 74,
                "name": "preimage",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 75,
                "src": "751:16:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 73,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "751:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "BurnTokenData",
            "nodeType": "StructDefinition",
            "scope": 747,
            "src": "507:268:1",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 79,
            "name": "burnTokenData",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 747,
            "src": "781:47:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
              "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData)"
            },
            "typeName": {
              "id": 78,
              "keyType": {
                "id": 76,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "789:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "781:33:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData)"
              },
              "valueType": {
                "contractScope": null,
                "id": 77,
                "name": "BurnTokenData",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 75,
                "src": "800:13:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                  "typeString": "struct BurnToClaim.BurnTokenData"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "canonicalName": "BurnToClaim.CrosschainAddress",
            "id": 84,
            "members": [
              {
                "constant": false,
                "id": 81,
                "name": "contractAddress",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 84,
                "src": "871:23:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 80,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "871:7:1",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 83,
                "name": "isExit",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 84,
                "src": "905:11:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 82,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "905:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "CrosschainAddress",
            "nodeType": "StructDefinition",
            "scope": 747,
            "src": "835:89:1",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 88,
            "name": "crosschainAddress",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 747,
            "src": "930:55:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_CrosschainAddress_$84_storage_$",
              "typeString": "mapping(address => struct BurnToClaim.CrosschainAddress)"
            },
            "typeName": {
              "id": 87,
              "keyType": {
                "id": 85,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "938:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "930:37:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_CrosschainAddress_$84_storage_$",
                "typeString": "mapping(address => struct BurnToClaim.CrosschainAddress)"
              },
              "valueType": {
                "contractScope": null,
                "id": 86,
                "name": "CrosschainAddress",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 84,
                "src": "949:17:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_CrosschainAddress_$84_storage_ptr",
                  "typeString": "struct BurnToClaim.CrosschainAddress"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 92,
            "name": "requireMockEvent",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 91,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 90,
                  "indexed": false,
                  "name": "message",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 92,
                  "src": "1017:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 89,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1017:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1016:17:1"
            },
            "src": "994:40:1"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 96,
            "name": "revertMockEvent",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 95,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 94,
                  "indexed": false,
                  "name": "message",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 96,
                  "src": "1062:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 93,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1062:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1061:17:1"
            },
            "src": "1040:39:1"
          },
          {
            "body": {
              "id": 112,
              "nodeType": "Block",
              "src": "1151:94:1",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 105,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 103,
                      "name": "result",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 98,
                      "src": "1165:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 104,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1175:5:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "1165:15:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 111,
                  "nodeType": "IfStatement",
                  "src": "1162:76:1",
                  "trueBody": {
                    "id": 110,
                    "nodeType": "Block",
                    "src": "1181:57:1",
                    "statements": [
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 107,
                              "name": "message",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 100,
                              "src": "1218:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 106,
                            "name": "requireMockEvent",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92,
                            "src": "1201:16:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory)"
                            }
                          },
                          "id": 108,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1201:25:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 109,
                        "nodeType": "EmitStatement",
                        "src": "1196:30:1"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "functionSelector": "f46611f9",
            "id": 113,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "requireMock",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 101,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 98,
                  "name": "result",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 113,
                  "src": "1108:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 97,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1108:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 100,
                  "name": "message",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 113,
                  "src": "1121:21:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 99,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1121:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1107:36:1"
            },
            "returnParameters": {
              "id": 102,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1151:0:1"
            },
            "scope": 747,
            "src": "1087:158:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 137,
              "nodeType": "Block",
              "src": "1313:268:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 124,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 119,
                          "name": "contractAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 115,
                          "src": "1350:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 122,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1377:1:1",
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
                            "id": 121,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1369:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 120,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1369:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          },
                          "id": 123,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1369:10:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "1350:29:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "636f6e74726163742061646472657373206d757374206e6f74206265207a65726f2061646472657373",
                        "id": 125,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1394:43:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_195ce3edbca72ae3444345fb3462809f9a5d001970502d5f44badb51b99caa44",
                          "typeString": "literal_string \"contract address must not be zero address\""
                        },
                        "value": "contract address must not be zero address"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_195ce3edbca72ae3444345fb3462809f9a5d001970502d5f44badb51b99caa44",
                          "typeString": "literal_string \"contract address must not be zero address\""
                        }
                      ],
                      "id": 118,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "1324:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 126,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1324:124:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 127,
                  "nodeType": "ExpressionStatement",
                  "src": "1324:124:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 135,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 128,
                        "name": "crosschainAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 88,
                        "src": "1459:17:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_CrosschainAddress_$84_storage_$",
                          "typeString": "mapping(address => struct BurnToClaim.CrosschainAddress storage ref)"
                        }
                      },
                      "id": 130,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 129,
                        "name": "contractAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 115,
                        "src": "1477:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1459:34:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_CrosschainAddress_$84_storage",
                        "typeString": "struct BurnToClaim.CrosschainAddress storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 132,
                          "name": "contractAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 115,
                          "src": "1528:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 133,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1558:4:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 131,
                        "name": "CrosschainAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 84,
                        "src": "1496:17:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_CrosschainAddress_$84_storage_ptr_$",
                          "typeString": "type(struct BurnToClaim.CrosschainAddress storage pointer)"
                        }
                      },
                      "id": 134,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1496:77:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_CrosschainAddress_$84_memory",
                        "typeString": "struct BurnToClaim.CrosschainAddress memory"
                      }
                    },
                    "src": "1459:114:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_CrosschainAddress_$84_storage",
                      "typeString": "struct BurnToClaim.CrosschainAddress storage ref"
                    }
                  },
                  "id": 136,
                  "nodeType": "ExpressionStatement",
                  "src": "1459:114:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "22a5dde4",
            "id": 138,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "registerContract",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 116,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 115,
                  "name": "contractAddress",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 138,
                  "src": "1279:23:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 114,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1279:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1278:25:1"
            },
            "returnParameters": {
              "id": 117,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1313:0:1"
            },
            "scope": 747,
            "src": "1253:328:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 254,
              "nodeType": "Block",
              "src": "1808:1442:1",
              "statements": [
                {
                  "assignments": [
                    154
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 154,
                      "name": "timeNow",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 254,
                      "src": "1819:12:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 153,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1819:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 156,
                  "initialValue": {
                    "argumentTypes": null,
                    "id": 155,
                    "name": "now",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": -17,
                    "src": "1834:3:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1819:18:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 160,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 158,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 148,
                          "src": "1860:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 159,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1870:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1860:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "746f6b656e20616d6f756e74206d757374206265203e2030",
                        "id": 161,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1873:26:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_ef8462853d6a0c63b24b7e3a8f909d1829994486c1a37cf6bbf9abe6b4e2cab7",
                          "typeString": "literal_string \"token amount must be > 0\""
                        },
                        "value": "token amount must be > 0"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_ef8462853d6a0c63b24b7e3a8f909d1829994486c1a37cf6bbf9abe6b4e2cab7",
                          "typeString": "literal_string \"token amount must be > 0\""
                        }
                      ],
                      "id": 157,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "1848:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 162,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1848:52:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 163,
                  "nodeType": "ExpressionStatement",
                  "src": "1848:52:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 177,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 169,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "1969:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 170,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1969:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 173,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "1989:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_BurnToClaim_$747",
                                    "typeString": "contract BurnToClaim"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_BurnToClaim_$747",
                                    "typeString": "contract BurnToClaim"
                                  }
                                ],
                                "id": 172,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1981:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 171,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1981:7:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": null,
                                    "typeString": null
                                  }
                                }
                              },
                              "id": 174,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1981:13:1",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
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
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 166,
                                  "name": "_tokenContract",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 146,
                                  "src": "1943:14:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 165,
                                "name": "ERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1482,
                                "src": "1937:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC20_$1482_$",
                                  "typeString": "type(contract ERC20)"
                                }
                              },
                              "id": 167,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1937:21:1",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20_$1482",
                                "typeString": "contract ERC20"
                              }
                            },
                            "id": 168,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "allowance",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1131,
                            "src": "1937:31:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address,address) view external returns (uint256)"
                            }
                          },
                          "id": 175,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1937:58:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 176,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 148,
                          "src": "2016:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1937:86:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "746f6b656e20616c6c6f77616e6365206d757374206265203e3d20616d6f756e74",
                        "id": 178,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2038:35:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_98db95208a4165db2bf846b140f267671bc24ad3503084b9b0a60b8f7c8a0ad2",
                          "typeString": "literal_string \"token allowance must be >= amount\""
                        },
                        "value": "token allowance must be >= amount"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_98db95208a4165db2bf846b140f267671bc24ad3503084b9b0a60b8f7c8a0ad2",
                          "typeString": "literal_string \"token allowance must be >= amount\""
                        }
                      ],
                      "id": 164,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "1911:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 179,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1911:173:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 180,
                  "nodeType": "ExpressionStatement",
                  "src": "1911:173:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 184,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 182,
                          "name": "_timelock",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 144,
                          "src": "2117:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 183,
                          "name": "timeNow",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 154,
                          "src": "2129:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2117:19:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "74696d656c6f636b2074696d65206d75737420626520696e2074686520667574757265",
                        "id": 185,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2138:37:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_16dbfee8f738f21cc70987859d9176eb37f9ed0572f04024e006404bb83f7086",
                          "typeString": "literal_string \"timelock time must be in the future\""
                        },
                        "value": "timelock time must be in the future"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_16dbfee8f738f21cc70987859d9176eb37f9ed0572f04024e006404bb83f7086",
                          "typeString": "literal_string \"timelock time must be in the future\""
                        }
                      ],
                      "id": 181,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "2105:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 186,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2105:71:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 187,
                  "nodeType": "ExpressionStatement",
                  "src": "2105:71:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 201,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 188,
                      "name": "transactionId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 151,
                      "src": "2189:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 192,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "2261:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 193,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2261:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 194,
                              "name": "_burnAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 140,
                              "src": "2290:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 195,
                              "name": "_tokenContract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 146,
                              "src": "2321:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 196,
                              "name": "_amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 148,
                              "src": "2354:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 197,
                              "name": "_hashlock",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 142,
                              "src": "2380:9:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 198,
                              "name": "_timelock",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 144,
                              "src": "2408:9:1",
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
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 190,
                              "name": "abi",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -1,
                              "src": "2226:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_abi",
                                "typeString": "abi"
                              }
                            },
                            "id": 191,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberName": "encodePacked",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2226:16:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                              "typeString": "function () pure returns (bytes memory)"
                            }
                          },
                          "id": 199,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2226:206:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 189,
                        "name": "sha256",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -22,
                        "src": "2205:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_sha256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (bytes memory) pure returns (bytes32)"
                        }
                      },
                      "id": 200,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2205:238:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "2189:254:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 202,
                  "nodeType": "ExpressionStatement",
                  "src": "2189:254:1"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 204,
                        "name": "transactionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 151,
                        "src": "2473:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 203,
                      "name": "haveContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 746,
                      "src": "2460:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (bytes32) view returns (bool)"
                      }
                    },
                    "id": 205,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2460:27:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 210,
                  "nodeType": "IfStatement",
                  "src": "2456:66:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "436f6e747261637420616c726561647920657869737473",
                          "id": 207,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2496:25:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_4ad9578906fc98bd5f65530f868927f605d82f03ccdb6e74a7708acdd463401a",
                            "typeString": "literal_string \"Contract already exists\""
                          },
                          "value": "Contract already exists"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_4ad9578906fc98bd5f65530f868927f605d82f03ccdb6e74a7708acdd463401a",
                            "typeString": "literal_string \"Contract already exists\""
                          }
                        ],
                        "id": 206,
                        "name": "revert",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -19,
                          -19
                        ],
                        "referencedDeclaration": -19,
                        "src": "2489:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (string memory) pure"
                        }
                      },
                      "id": 208,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2489:33:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 209,
                    "nodeType": "ExpressionStatement",
                    "src": "2489:33:1"
                  }
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 220,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "2551:136:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 215,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "2605:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 216,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2605:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 217,
                          "name": "_burnAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 140,
                          "src": "2634:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 218,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 148,
                          "src": "2665:7:1",
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
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 212,
                              "name": "_tokenContract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 146,
                              "src": "2558:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 211,
                            "name": "ERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1482,
                            "src": "2552:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_ERC20_$1482_$",
                              "typeString": "type(contract ERC20)"
                            }
                          },
                          "id": 213,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2552:21:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC20_$1482",
                            "typeString": "contract ERC20"
                          }
                        },
                        "id": 214,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transferFrom",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1188,
                        "src": "2552:34:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,address,uint256) external returns (bool)"
                        }
                      },
                      "id": 219,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2552:135:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 225,
                  "nodeType": "IfStatement",
                  "src": "2533:210:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "7472616e7366657246726f6d2073656e64657220746f2074686973206661696c6564",
                          "id": 222,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2706:36:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_d972a7c972449bdb9cebe63bbe70aabf7c1479cdd3def2eb6af0685384c9067a",
                            "typeString": "literal_string \"transferFrom sender to this failed\""
                          },
                          "value": "transferFrom sender to this failed"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_d972a7c972449bdb9cebe63bbe70aabf7c1479cdd3def2eb6af0685384c9067a",
                            "typeString": "literal_string \"transferFrom sender to this failed\""
                          }
                        ],
                        "id": 221,
                        "name": "revert",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -19,
                          -19
                        ],
                        "referencedDeclaration": -19,
                        "src": "2699:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (string memory) pure"
                        }
                      },
                      "id": 223,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2699:44:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 224,
                    "nodeType": "ExpressionStatement",
                    "src": "2699:44:1"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 241,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 226,
                        "name": "burnTokenData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79,
                        "src": "2756:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                          "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                        }
                      },
                      "id": 228,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 227,
                        "name": "transactionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 151,
                        "src": "2770:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2756:28:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                        "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 230,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "2815:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 231,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2815:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 232,
                          "name": "_burnAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 140,
                          "src": "2840:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 233,
                          "name": "_tokenContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 146,
                          "src": "2867:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 234,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 148,
                          "src": "2896:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 235,
                          "name": "_hashlock",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 142,
                          "src": "2918:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 236,
                          "name": "_timelock",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 144,
                          "src": "2942:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 237,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2966:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 238,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2986:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "307830",
                          "id": 239,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3006:3:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0x0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 229,
                        "name": "BurnTokenData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 75,
                        "src": "2787:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_BurnTokenData_$75_storage_ptr_$",
                          "typeString": "type(struct BurnToClaim.BurnTokenData storage pointer)"
                        }
                      },
                      "id": 240,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2787:233:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BurnTokenData_$75_memory",
                        "typeString": "struct BurnToClaim.BurnTokenData memory"
                      }
                    },
                    "src": "2756:264:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                      "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                    }
                  },
                  "id": 242,
                  "nodeType": "ExpressionStatement",
                  "src": "2756:264:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 244,
                        "name": "transactionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 151,
                        "src": "3073:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 245,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "3101:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 246,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3101:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 247,
                        "name": "_burnAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 140,
                        "src": "3126:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 248,
                        "name": "_tokenContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 146,
                        "src": "3153:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 249,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 148,
                        "src": "3182:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 250,
                        "name": "_hashlock",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 142,
                        "src": "3204:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 251,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -17,
                        "src": "3228:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 243,
                      "name": "exitTransactionEvent",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 48,
                      "src": "3038:20:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,address,address,address,uint256,bytes32,uint256)"
                      }
                    },
                    "id": 252,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3038:204:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 253,
                  "nodeType": "EmitStatement",
                  "src": "3033:209:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "159a962c",
            "id": 255,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "exitTransaction",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 149,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 140,
                  "name": "_burnAddress",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 255,
                  "src": "1624:20:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 139,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1624:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 142,
                  "name": "_hashlock",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 255,
                  "src": "1655:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 141,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1655:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 144,
                  "name": "_timelock",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 255,
                  "src": "1683:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 143,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1683:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 146,
                  "name": "_tokenContract",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 255,
                  "src": "1711:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 145,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1711:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 148,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 255,
                  "src": "1744:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 147,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1744:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1613:153:1"
            },
            "returnParameters": {
              "id": 152,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 151,
                  "name": "transactionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 255,
                  "src": "1785:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 150,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1785:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1784:23:1"
            },
            "scope": 747,
            "src": "1589:1661:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 297,
              "nodeType": "Block",
              "src": "3534:446:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 273,
                            "name": "crosschainAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 88,
                            "src": "3571:17:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_CrosschainAddress_$84_storage_$",
                              "typeString": "mapping(address => struct BurnToClaim.CrosschainAddress storage ref)"
                            }
                          },
                          "id": 275,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 274,
                            "name": "_crosschainContractAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 257,
                            "src": "3589:26:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3571:45:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_CrosschainAddress_$84_storage",
                            "typeString": "struct BurnToClaim.CrosschainAddress storage ref"
                          }
                        },
                        "id": 276,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "isExit",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 83,
                        "src": "3571:52:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "41646420636f727373436861696e206461746120636f6e74726163742061646472657373206e6f742065786974",
                        "id": 277,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3638:47:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_2a5fc2dcb8536776234a86723839c06b1f29757e5bcd7d1cd6901f20647bb708",
                          "typeString": "literal_string \"Add corssChain data contract address not exit\""
                        },
                        "value": "Add corssChain data contract address not exit"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_2a5fc2dcb8536776234a86723839c06b1f29757e5bcd7d1cd6901f20647bb708",
                          "typeString": "literal_string \"Add corssChain data contract address not exit\""
                        }
                      ],
                      "id": 272,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "3545:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 278,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3545:151:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 279,
                  "nodeType": "ExpressionStatement",
                  "src": "3545:151:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 295,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 280,
                        "name": "burnTokenData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79,
                        "src": "3707:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                          "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                        }
                      },
                      "id": 282,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 281,
                        "name": "_transactionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 259,
                        "src": "3721:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3707:29:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                        "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 284,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "3767:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 285,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3767:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 286,
                          "name": "_burnAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 261,
                          "src": "3792:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 287,
                          "name": "_tokenContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 267,
                          "src": "3819:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 288,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 269,
                          "src": "3848:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 289,
                          "name": "_hashlock",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 263,
                          "src": "3870:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 290,
                          "name": "_timelock",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 265,
                          "src": "3894:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 291,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3918:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 292,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3938:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "307830",
                          "id": 293,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3958:3:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0x0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 283,
                        "name": "BurnTokenData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 75,
                        "src": "3739:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_BurnTokenData_$75_storage_ptr_$",
                          "typeString": "type(struct BurnToClaim.BurnTokenData storage pointer)"
                        }
                      },
                      "id": 294,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3739:233:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BurnTokenData_$75_memory",
                        "typeString": "struct BurnToClaim.BurnTokenData memory"
                      }
                    },
                    "src": "3707:265:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                      "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                    }
                  },
                  "id": 296,
                  "nodeType": "ExpressionStatement",
                  "src": "3707:265:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "cbbd8a1d",
            "id": 298,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "add",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 270,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 257,
                  "name": "_crosschainContractAddress",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 298,
                  "src": "3281:34:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 256,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3281:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 259,
                  "name": "_transactionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 298,
                  "src": "3326:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 258,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3326:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 261,
                  "name": "_burnAddress",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 298,
                  "src": "3359:20:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 260,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3359:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 263,
                  "name": "_hashlock",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 298,
                  "src": "3390:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 262,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3390:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 265,
                  "name": "_timelock",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 298,
                  "src": "3418:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 264,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3418:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 267,
                  "name": "_tokenContract",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 298,
                  "src": "3446:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 266,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3446:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 269,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 298,
                  "src": "3502:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 268,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3502:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3270:254:1"
            },
            "returnParameters": {
              "id": 271,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3534:0:1"
            },
            "scope": 747,
            "src": "3258:722:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 393,
              "nodeType": "Block",
              "src": "4160:952:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 313,
                            "name": "_transactionId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 304,
                            "src": "4196:14:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "id": 312,
                          "name": "haveContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 746,
                          "src": "4183:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view returns (bool)"
                          }
                        },
                        "id": 314,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4183:28:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "7472616e73616374696f6e496420646f6573206e6f74206578697374",
                        "id": 315,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4213:30:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5974d2ca08508be147e43e71b7048a0e5c3b7dc251866b5374fe67dd5b44c1a2",
                          "typeString": "literal_string \"transactionId does not exist\""
                        },
                        "value": "transactionId does not exist"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5974d2ca08508be147e43e71b7048a0e5c3b7dc251866b5374fe67dd5b44c1a2",
                          "typeString": "literal_string \"transactionId does not exist\""
                        }
                      ],
                      "id": 311,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "4171:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 316,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4171:73:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 317,
                  "nodeType": "ExpressionStatement",
                  "src": "4171:73:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "id": 329,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 319,
                              "name": "burnTokenData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 79,
                              "src": "4281:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                                "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                              }
                            },
                            "id": 321,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 320,
                              "name": "_transactionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 304,
                              "src": "4295:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4281:29:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                              "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                            }
                          },
                          "id": 322,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "hashlock",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 66,
                          "src": "4281:38:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 326,
                                  "name": "_preimage",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 306,
                                  "src": "4364:9:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 324,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -1,
                                  "src": "4347:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 325,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "4347:16:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 327,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4347:27:1",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 323,
                            "name": "sha256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -22,
                            "src": "4340:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_sha256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 328,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4340:35:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "src": "4281:94:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "686173686c6f636b206861736820646f6573206e6f74206d61746368",
                        "id": 330,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4390:30:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f69d465af376b0946a94d153fa61e1120954d7550ccad2ede50c179df9b911a9",
                          "typeString": "literal_string \"hashlock hash does not match\""
                        },
                        "value": "hashlock hash does not match"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_f69d465af376b0946a94d153fa61e1120954d7550ccad2ede50c179df9b911a9",
                          "typeString": "literal_string \"hashlock hash does not match\""
                        }
                      ],
                      "id": 318,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "4255:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 331,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4255:176:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 332,
                  "nodeType": "ExpressionStatement",
                  "src": "4255:176:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 339,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 334,
                              "name": "burnTokenData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 79,
                              "src": "4468:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                                "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                              }
                            },
                            "id": 336,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 335,
                              "name": "_transactionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 304,
                              "src": "4482:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4468:29:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                              "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                            }
                          },
                          "id": 337,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "withdrawn",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 70,
                          "src": "4468:39:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 338,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4511:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "src": "4468:48:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "776974686472617761626c653a20616c72656164792077697468647261776e",
                        "id": 340,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4531:33:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a7a1491df76b63b166fa25b3631de654587363606d31ccfadcdf86382f44f0da",
                          "typeString": "literal_string \"withdrawable: already withdrawn\""
                        },
                        "value": "withdrawable: already withdrawn"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a7a1491df76b63b166fa25b3631de654587363606d31ccfadcdf86382f44f0da",
                          "typeString": "literal_string \"withdrawable: already withdrawn\""
                        }
                      ],
                      "id": 333,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "4442:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 341,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4442:133:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 342,
                  "nodeType": "ExpressionStatement",
                  "src": "4442:133:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 349,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 344,
                              "name": "burnTokenData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 79,
                              "src": "4612:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                                "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                              }
                            },
                            "id": 346,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 345,
                              "name": "_transactionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 304,
                              "src": "4626:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4612:29:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                              "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                            }
                          },
                          "id": 347,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "timelock",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 68,
                          "src": "4612:38:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 348,
                          "name": "now",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -17,
                          "src": "4653:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4612:44:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "776974686472617761626c653a2074696d656c6f636b2074696d65206d75737420626520696e2074686520667574757265",
                        "id": 350,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4671:51:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f90a5049b744d27b4e847d49b0f3d774706fdfcfc2fa7fe6498583db4e9e564f",
                          "typeString": "literal_string \"withdrawable: timelock time must be in the future\""
                        },
                        "value": "withdrawable: timelock time must be in the future"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_f90a5049b744d27b4e847d49b0f3d774706fdfcfc2fa7fe6498583db4e9e564f",
                          "typeString": "literal_string \"withdrawable: timelock time must be in the future\""
                        }
                      ],
                      "id": 343,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "4586:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 351,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4586:147:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 352,
                  "nodeType": "ExpressionStatement",
                  "src": "4586:147:1"
                },
                {
                  "assignments": [
                    354
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 354,
                      "name": "c",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 393,
                      "src": "4746:23:1",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                        "typeString": "struct BurnToClaim.BurnTokenData"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 353,
                        "name": "BurnTokenData",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 75,
                        "src": "4746:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                          "typeString": "struct BurnToClaim.BurnTokenData"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 358,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 355,
                      "name": "burnTokenData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79,
                      "src": "4772:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                        "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                      }
                    },
                    "id": 357,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 356,
                      "name": "_transactionId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 304,
                      "src": "4786:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "4772:29:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                      "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4746:55:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 363,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 359,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 354,
                        "src": "4812:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                          "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                        }
                      },
                      "id": 361,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "preimage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 74,
                      "src": "4812:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 362,
                      "name": "_preimage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 306,
                      "src": "4825:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "4812:22:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 364,
                  "nodeType": "ExpressionStatement",
                  "src": "4812:22:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 369,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 365,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 354,
                        "src": "4845:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                          "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                        }
                      },
                      "id": 367,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "withdrawn",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 70,
                      "src": "4845:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 368,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4859:4:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "4845:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 370,
                  "nodeType": "ExpressionStatement",
                  "src": "4845:18:1"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 379,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "4878:52:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 376,
                          "name": "_receiver",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 302,
                          "src": "4911:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 377,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 300,
                          "src": "4922:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 372,
                                "name": "c",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 354,
                                "src": "4885:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                                  "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                                }
                              },
                              "id": 373,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "tokenContract",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 62,
                              "src": "4885:15:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 371,
                            "name": "ERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1482,
                            "src": "4879:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_ERC20_$1482_$",
                              "typeString": "type(contract ERC20)"
                            }
                          },
                          "id": 374,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4879:22:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC20_$1482",
                            "typeString": "contract ERC20"
                          }
                        },
                        "id": 375,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1114,
                        "src": "4879:31:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,uint256) external returns (bool)"
                        }
                      },
                      "id": 378,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4879:51:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 389,
                    "nodeType": "Block",
                    "src": "5016:67:1",
                    "statements": [
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 386,
                              "name": "_transactionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 304,
                              "src": "5056:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "id": 385,
                            "name": "entryTransactionEvent",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 52,
                            "src": "5034:21:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$returns$__$",
                              "typeString": "function (bytes32)"
                            }
                          },
                          "id": 387,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5034:37:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 388,
                        "nodeType": "EmitStatement",
                        "src": "5029:42:1"
                      }
                    ]
                  },
                  "id": 390,
                  "nodeType": "IfStatement",
                  "src": "4874:209:1",
                  "trueBody": {
                    "id": 384,
                    "nodeType": "Block",
                    "src": "4931:71:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "7472616e7366657246726f6d2073656e64657220746f2074686973206661696c6564",
                              "id": 381,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4953:36:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d972a7c972449bdb9cebe63bbe70aabf7c1479cdd3def2eb6af0685384c9067a",
                                "typeString": "literal_string \"transferFrom sender to this failed\""
                              },
                              "value": "transferFrom sender to this failed"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_d972a7c972449bdb9cebe63bbe70aabf7c1479cdd3def2eb6af0685384c9067a",
                                "typeString": "literal_string \"transferFrom sender to this failed\""
                              }
                            ],
                            "id": 380,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -19,
                              -19
                            ],
                            "referencedDeclaration": -19,
                            "src": "4946:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory) pure"
                            }
                          },
                          "id": 382,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4946:44:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 383,
                        "nodeType": "ExpressionStatement",
                        "src": "4946:44:1"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 391,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "5100:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 310,
                  "id": 392,
                  "nodeType": "Return",
                  "src": "5093:11:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "449b0395",
            "id": 394,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "entryTransaction",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 307,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 300,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 394,
                  "src": "4024:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 299,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4024:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 302,
                  "name": "_receiver",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 394,
                  "src": "4050:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 301,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4050:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 304,
                  "name": "_transactionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 394,
                  "src": "4078:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 303,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4078:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 306,
                  "name": "_preimage",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 394,
                  "src": "4111:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 305,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4111:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4013:122:1"
            },
            "returnParameters": {
              "id": 310,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 309,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 394,
                  "src": "4154:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 308,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4154:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4153:6:1"
            },
            "scope": 747,
            "src": "3988:1124:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 429,
              "nodeType": "Block",
              "src": "5258:301:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 404,
                            "name": "crosschainAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 88,
                            "src": "5295:17:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_CrosschainAddress_$84_storage_$",
                              "typeString": "mapping(address => struct BurnToClaim.CrosschainAddress storage ref)"
                            }
                          },
                          "id": 406,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 405,
                            "name": "_crosschainContractAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 396,
                            "src": "5313:26:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "5295:45:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_CrosschainAddress_$84_storage",
                            "typeString": "struct BurnToClaim.CrosschainAddress storage ref"
                          }
                        },
                        "id": 407,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "isExit",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 83,
                        "src": "5295:52:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "55706461746520636f727373436861696e206461746120636f6e74726163742061646472657373206e6f742065786974",
                        "id": 408,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5362:50:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c9041ea039fe4629e10490bf2647dd1c29221ae608240f37d213dfd5af2d417c",
                          "typeString": "literal_string \"Update corssChain data contract address not exit\""
                        },
                        "value": "Update corssChain data contract address not exit"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c9041ea039fe4629e10490bf2647dd1c29221ae608240f37d213dfd5af2d417c",
                          "typeString": "literal_string \"Update corssChain data contract address not exit\""
                        }
                      ],
                      "id": 403,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "5269:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 409,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5269:154:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 410,
                  "nodeType": "ExpressionStatement",
                  "src": "5269:154:1"
                },
                {
                  "assignments": [
                    412
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 412,
                      "name": "c",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 429,
                      "src": "5434:23:1",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                        "typeString": "struct BurnToClaim.BurnTokenData"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 411,
                        "name": "BurnTokenData",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 75,
                        "src": "5434:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                          "typeString": "struct BurnToClaim.BurnTokenData"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 416,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 413,
                      "name": "burnTokenData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79,
                      "src": "5460:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                        "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                      }
                    },
                    "id": 415,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 414,
                      "name": "_transactionId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 398,
                      "src": "5474:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "5460:29:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                      "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5434:55:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 421,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 417,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 412,
                        "src": "5500:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                          "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                        }
                      },
                      "id": 419,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "preimage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 74,
                      "src": "5500:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 420,
                      "name": "_preimage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 400,
                      "src": "5513:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "5500:22:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 422,
                  "nodeType": "ExpressionStatement",
                  "src": "5500:22:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 427,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 423,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 412,
                        "src": "5533:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                          "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                        }
                      },
                      "id": 425,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "withdrawn",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 70,
                      "src": "5533:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 426,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5547:4:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "5533:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 428,
                  "nodeType": "ExpressionStatement",
                  "src": "5533:18:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "64ff3004",
            "id": 430,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "update",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 401,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 396,
                  "name": "_crosschainContractAddress",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 430,
                  "src": "5146:34:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 395,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5146:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 398,
                  "name": "_transactionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 430,
                  "src": "5191:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 397,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5191:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 400,
                  "name": "_preimage",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 430,
                  "src": "5224:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 399,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5224:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5135:113:1"
            },
            "returnParameters": {
              "id": 402,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5258:0:1"
            },
            "scope": 747,
            "src": "5120:439:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 519,
              "nodeType": "Block",
              "src": "5666:955:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 439,
                            "name": "_transactionId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 432,
                            "src": "5702:14:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "id": 438,
                          "name": "haveContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 746,
                          "src": "5689:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view returns (bool)"
                          }
                        },
                        "id": 440,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5689:28:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "7472616e73616374696f6e496420646f6573206e6f74206578697374",
                        "id": 441,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5719:30:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5974d2ca08508be147e43e71b7048a0e5c3b7dc251866b5374fe67dd5b44c1a2",
                          "typeString": "literal_string \"transactionId does not exist\""
                        },
                        "value": "transactionId does not exist"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5974d2ca08508be147e43e71b7048a0e5c3b7dc251866b5374fe67dd5b44c1a2",
                          "typeString": "literal_string \"transactionId does not exist\""
                        }
                      ],
                      "id": 437,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "5677:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 442,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5677:73:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 443,
                  "nodeType": "ExpressionStatement",
                  "src": "5677:73:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 451,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 445,
                              "name": "burnTokenData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 79,
                              "src": "5787:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                                "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                              }
                            },
                            "id": 447,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 446,
                              "name": "_transactionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 432,
                              "src": "5801:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "5787:29:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                              "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                            }
                          },
                          "id": 448,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 58,
                          "src": "5787:36:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 449,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "5827:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 450,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "5827:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "5787:50:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "726566756e6461626c653a206e6f742073656e646572",
                        "id": 452,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5852:24:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_edd5bfdacb483bdf26b05ebe186281e97d155ca7c516ffe52d11b5e39d79c23a",
                          "typeString": "literal_string \"refundable: not sender\""
                        },
                        "value": "refundable: not sender"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_edd5bfdacb483bdf26b05ebe186281e97d155ca7c516ffe52d11b5e39d79c23a",
                          "typeString": "literal_string \"refundable: not sender\""
                        }
                      ],
                      "id": 444,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "5761:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 453,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5761:126:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 454,
                  "nodeType": "ExpressionStatement",
                  "src": "5761:126:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 461,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 456,
                              "name": "burnTokenData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 79,
                              "src": "5924:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                                "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                              }
                            },
                            "id": 458,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 457,
                              "name": "_transactionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 432,
                              "src": "5938:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "5924:29:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                              "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                            }
                          },
                          "id": 459,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "refunded",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 72,
                          "src": "5924:38:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 460,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5966:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "src": "5924:47:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "726566756e6461626c653a20616c726561647920726566756e646564",
                        "id": 462,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5986:30:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_7b29f51b209a34fdcf95e658d91750e2d1af4c6890c540f7ec9b6060ebd16007",
                          "typeString": "literal_string \"refundable: already refunded\""
                        },
                        "value": "refundable: already refunded"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_7b29f51b209a34fdcf95e658d91750e2d1af4c6890c540f7ec9b6060ebd16007",
                          "typeString": "literal_string \"refundable: already refunded\""
                        }
                      ],
                      "id": 455,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "5898:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 463,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5898:129:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 464,
                  "nodeType": "ExpressionStatement",
                  "src": "5898:129:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 471,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 466,
                              "name": "burnTokenData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 79,
                              "src": "6064:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                                "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                              }
                            },
                            "id": 468,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 467,
                              "name": "_transactionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 432,
                              "src": "6078:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "6064:29:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                              "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                            }
                          },
                          "id": 469,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "withdrawn",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 70,
                          "src": "6064:39:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 470,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6107:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "src": "6064:48:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "726566756e6461626c653a20616c72656164792077697468647261776e",
                        "id": 472,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6127:31:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_3b5b42a6105acb76ce8eb8957616623bad95a1e8514f0d2809f4b82a9c3b0fce",
                          "typeString": "literal_string \"refundable: already withdrawn\""
                        },
                        "value": "refundable: already withdrawn"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_3b5b42a6105acb76ce8eb8957616623bad95a1e8514f0d2809f4b82a9c3b0fce",
                          "typeString": "literal_string \"refundable: already withdrawn\""
                        }
                      ],
                      "id": 465,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "6038:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 473,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6038:131:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 474,
                  "nodeType": "ExpressionStatement",
                  "src": "6038:131:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 481,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 476,
                              "name": "burnTokenData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 79,
                              "src": "6206:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                                "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                              }
                            },
                            "id": 478,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 477,
                              "name": "_transactionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 432,
                              "src": "6220:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "6206:29:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                              "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                            }
                          },
                          "id": 479,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "timelock",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 68,
                          "src": "6206:38:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 480,
                          "name": "now",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -17,
                          "src": "6248:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6206:45:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "726566756e6461626c653a2074696d656c6f636b206e6f742079657420706173736564",
                        "id": 482,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6266:37:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_53ffb24e93d3b349bff6339724d28c73880587cacedffccbcdea5da101fc50b9",
                          "typeString": "literal_string \"refundable: timelock not yet passed\""
                        },
                        "value": "refundable: timelock not yet passed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_53ffb24e93d3b349bff6339724d28c73880587cacedffccbcdea5da101fc50b9",
                          "typeString": "literal_string \"refundable: timelock not yet passed\""
                        }
                      ],
                      "id": 475,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "6180:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 483,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6180:134:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 484,
                  "nodeType": "ExpressionStatement",
                  "src": "6180:134:1"
                },
                {
                  "assignments": [
                    486
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 486,
                      "name": "c",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 519,
                      "src": "6327:23:1",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                        "typeString": "struct BurnToClaim.BurnTokenData"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 485,
                        "name": "BurnTokenData",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 75,
                        "src": "6327:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                          "typeString": "struct BurnToClaim.BurnTokenData"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 490,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 487,
                      "name": "burnTokenData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79,
                      "src": "6353:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                        "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                      }
                    },
                    "id": 489,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 488,
                      "name": "_transactionId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 432,
                      "src": "6367:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "6353:29:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                      "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6327:55:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 495,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 491,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 486,
                        "src": "6393:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                          "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                        }
                      },
                      "id": 493,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "refunded",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 72,
                      "src": "6393:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 494,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6406:4:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "6393:17:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 496,
                  "nodeType": "ExpressionStatement",
                  "src": "6393:17:1"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 507,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "6425:52:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 502,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 486,
                            "src": "6458:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                              "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                            }
                          },
                          "id": 503,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 58,
                          "src": "6458:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 504,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 486,
                            "src": "6468:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                              "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                            }
                          },
                          "id": 505,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "amount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 64,
                          "src": "6468:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 498,
                                "name": "c",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 486,
                                "src": "6432:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                                  "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                                }
                              },
                              "id": 499,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "tokenContract",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 62,
                              "src": "6432:15:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 497,
                            "name": "ERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1482,
                            "src": "6426:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_ERC20_$1482_$",
                              "typeString": "type(contract ERC20)"
                            }
                          },
                          "id": 500,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6426:22:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC20_$1482",
                            "typeString": "contract ERC20"
                          }
                        },
                        "id": 501,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1114,
                        "src": "6426:31:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,uint256) external returns (bool)"
                        }
                      },
                      "id": 506,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6426:51:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 512,
                  "nodeType": "IfStatement",
                  "src": "6421:115:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "7472616e7366657246726f6d2073656e64657220746f2074686973206661696c6564",
                          "id": 509,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6499:36:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_d972a7c972449bdb9cebe63bbe70aabf7c1479cdd3def2eb6af0685384c9067a",
                            "typeString": "literal_string \"transferFrom sender to this failed\""
                          },
                          "value": "transferFrom sender to this failed"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_d972a7c972449bdb9cebe63bbe70aabf7c1479cdd3def2eb6af0685384c9067a",
                            "typeString": "literal_string \"transferFrom sender to this failed\""
                          }
                        ],
                        "id": 508,
                        "name": "revert",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -19,
                          -19
                        ],
                        "referencedDeclaration": -19,
                        "src": "6492:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (string memory) pure"
                        }
                      },
                      "id": 510,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6492:44:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 511,
                    "nodeType": "ExpressionStatement",
                    "src": "6492:44:1"
                  }
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 514,
                        "name": "_transactionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 432,
                        "src": "6576:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 513,
                      "name": "reclaimTransactionEvent",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56,
                      "src": "6552:23:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32)"
                      }
                    },
                    "id": 515,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6552:39:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 516,
                  "nodeType": "EmitStatement",
                  "src": "6547:44:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 517,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "6609:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 436,
                  "id": 518,
                  "nodeType": "Return",
                  "src": "6602:11:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "4cc28a19",
            "id": 520,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "reclaimTransaction",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 433,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 432,
                  "name": "_transactionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 520,
                  "src": "5595:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 431,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5595:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5594:24:1"
            },
            "returnParameters": {
              "id": 436,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 435,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 520,
                  "src": "5655:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 434,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5655:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5654:6:1"
            },
            "scope": 747,
            "src": "5567:1054:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 599,
              "nodeType": "Block",
              "src": "6729:969:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 529,
                            "name": "_transactionId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 522,
                            "src": "6765:14:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "id": 528,
                          "name": "haveContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 746,
                          "src": "6752:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view returns (bool)"
                          }
                        },
                        "id": 530,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6752:28:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "7472616e73616374696f6e496420646f6573206e6f74206578697374",
                        "id": 531,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6782:30:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5974d2ca08508be147e43e71b7048a0e5c3b7dc251866b5374fe67dd5b44c1a2",
                          "typeString": "literal_string \"transactionId does not exist\""
                        },
                        "value": "transactionId does not exist"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5974d2ca08508be147e43e71b7048a0e5c3b7dc251866b5374fe67dd5b44c1a2",
                          "typeString": "literal_string \"transactionId does not exist\""
                        }
                      ],
                      "id": 527,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "6740:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 532,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6740:73:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 533,
                  "nodeType": "ExpressionStatement",
                  "src": "6740:73:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 541,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 535,
                              "name": "burnTokenData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 79,
                              "src": "6850:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                                "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                              }
                            },
                            "id": 537,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 536,
                              "name": "_transactionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 522,
                              "src": "6864:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "6850:29:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                              "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                            }
                          },
                          "id": 538,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 58,
                          "src": "6850:36:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 539,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "6890:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 540,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "6890:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "6850:50:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "726566756e6461626c653a206e6f742073656e646572",
                        "id": 542,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6915:24:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_edd5bfdacb483bdf26b05ebe186281e97d155ca7c516ffe52d11b5e39d79c23a",
                          "typeString": "literal_string \"refundable: not sender\""
                        },
                        "value": "refundable: not sender"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_edd5bfdacb483bdf26b05ebe186281e97d155ca7c516ffe52d11b5e39d79c23a",
                          "typeString": "literal_string \"refundable: not sender\""
                        }
                      ],
                      "id": 534,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "6824:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 543,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6824:126:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 544,
                  "nodeType": "ExpressionStatement",
                  "src": "6824:126:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 551,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 546,
                              "name": "burnTokenData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 79,
                              "src": "6987:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                                "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                              }
                            },
                            "id": 548,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 547,
                              "name": "_transactionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 522,
                              "src": "7001:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "6987:29:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                              "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                            }
                          },
                          "id": 549,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "refunded",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 72,
                          "src": "6987:38:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 550,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7029:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "src": "6987:47:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "726566756e6461626c653a20616c726561647920726566756e646564",
                        "id": 552,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7049:30:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_7b29f51b209a34fdcf95e658d91750e2d1af4c6890c540f7ec9b6060ebd16007",
                          "typeString": "literal_string \"refundable: already refunded\""
                        },
                        "value": "refundable: already refunded"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_7b29f51b209a34fdcf95e658d91750e2d1af4c6890c540f7ec9b6060ebd16007",
                          "typeString": "literal_string \"refundable: already refunded\""
                        }
                      ],
                      "id": 545,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "6961:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 553,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6961:129:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 554,
                  "nodeType": "ExpressionStatement",
                  "src": "6961:129:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 561,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 556,
                              "name": "burnTokenData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 79,
                              "src": "7127:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                                "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                              }
                            },
                            "id": 558,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 557,
                              "name": "_transactionId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 522,
                              "src": "7141:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "7127:29:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                              "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                            }
                          },
                          "id": 559,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "withdrawn",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 70,
                          "src": "7127:39:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 560,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7170:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "src": "7127:48:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "726566756e6461626c653a20616c72656164792077697468647261776e",
                        "id": 562,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7190:31:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_3b5b42a6105acb76ce8eb8957616623bad95a1e8514f0d2809f4b82a9c3b0fce",
                          "typeString": "literal_string \"refundable: already withdrawn\""
                        },
                        "value": "refundable: already withdrawn"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_3b5b42a6105acb76ce8eb8957616623bad95a1e8514f0d2809f4b82a9c3b0fce",
                          "typeString": "literal_string \"refundable: already withdrawn\""
                        }
                      ],
                      "id": 555,
                      "name": "requireMock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "7101:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory)"
                      }
                    },
                    "id": 563,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7101:131:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 564,
                  "nodeType": "ExpressionStatement",
                  "src": "7101:131:1"
                },
                {
                  "assignments": [
                    566
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 566,
                      "name": "c",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 599,
                      "src": "7404:23:1",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                        "typeString": "struct BurnToClaim.BurnTokenData"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 565,
                        "name": "BurnTokenData",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 75,
                        "src": "7404:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                          "typeString": "struct BurnToClaim.BurnTokenData"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 570,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 567,
                      "name": "burnTokenData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79,
                      "src": "7430:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                        "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                      }
                    },
                    "id": 569,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 568,
                      "name": "_transactionId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 522,
                      "src": "7444:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "7430:29:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                      "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7404:55:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 575,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 571,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 566,
                        "src": "7470:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                          "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                        }
                      },
                      "id": 573,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "refunded",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 72,
                      "src": "7470:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 574,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7483:4:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "7470:17:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 576,
                  "nodeType": "ExpressionStatement",
                  "src": "7470:17:1"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 587,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "7502:52:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 582,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 566,
                            "src": "7535:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                              "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                            }
                          },
                          "id": 583,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 58,
                          "src": "7535:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 584,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 566,
                            "src": "7545:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                              "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                            }
                          },
                          "id": 585,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "amount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 64,
                          "src": "7545:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 578,
                                "name": "c",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 566,
                                "src": "7509:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                                  "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                                }
                              },
                              "id": 579,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "tokenContract",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 62,
                              "src": "7509:15:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 577,
                            "name": "ERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1482,
                            "src": "7503:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_ERC20_$1482_$",
                              "typeString": "type(contract ERC20)"
                            }
                          },
                          "id": 580,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7503:22:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC20_$1482",
                            "typeString": "contract ERC20"
                          }
                        },
                        "id": 581,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1114,
                        "src": "7503:31:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,uint256) external returns (bool)"
                        }
                      },
                      "id": 586,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7503:51:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 592,
                  "nodeType": "IfStatement",
                  "src": "7498:115:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "7472616e7366657246726f6d2073656e64657220746f2074686973206661696c6564",
                          "id": 589,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7576:36:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_d972a7c972449bdb9cebe63bbe70aabf7c1479cdd3def2eb6af0685384c9067a",
                            "typeString": "literal_string \"transferFrom sender to this failed\""
                          },
                          "value": "transferFrom sender to this failed"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_d972a7c972449bdb9cebe63bbe70aabf7c1479cdd3def2eb6af0685384c9067a",
                            "typeString": "literal_string \"transferFrom sender to this failed\""
                          }
                        ],
                        "id": 588,
                        "name": "revert",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -19,
                          -19
                        ],
                        "referencedDeclaration": -19,
                        "src": "7569:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (string memory) pure"
                        }
                      },
                      "id": 590,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7569:44:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 591,
                    "nodeType": "ExpressionStatement",
                    "src": "7569:44:1"
                  }
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 594,
                        "name": "_transactionId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 522,
                        "src": "7653:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 593,
                      "name": "reclaimTransactionEvent",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56,
                      "src": "7629:23:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32)"
                      }
                    },
                    "id": 595,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7629:39:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 596,
                  "nodeType": "EmitStatement",
                  "src": "7624:44:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 597,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "7686:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 526,
                  "id": 598,
                  "nodeType": "Return",
                  "src": "7679:11:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "40d1ce73",
            "id": 600,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "reclaimTransaction1",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 523,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 522,
                  "name": "_transactionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 600,
                  "src": "6658:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 521,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6658:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6657:24:1"
            },
            "returnParameters": {
              "id": 526,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 525,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 600,
                  "src": "6718:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 524,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6718:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6717:6:1"
            },
            "scope": 747,
            "src": "6629:1069:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 622,
              "nodeType": "Block",
              "src": "7831:134:1",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 616,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "7846:52:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 613,
                          "name": "_recipient",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 604,
                          "src": "7878:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 614,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 606,
                          "src": "7890:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 610,
                              "name": "_tokenContract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 602,
                              "src": "7853:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 609,
                            "name": "ERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1482,
                            "src": "7847:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_ERC20_$1482_$",
                              "typeString": "type(contract ERC20)"
                            }
                          },
                          "id": 611,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7847:21:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC20_$1482",
                            "typeString": "contract ERC20"
                          }
                        },
                        "id": 612,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1114,
                        "src": "7847:30:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,uint256) external returns (bool)"
                        }
                      },
                      "id": 615,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7847:51:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 621,
                  "nodeType": "IfStatement",
                  "src": "7842:115:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "7472616e7366657246726f6d2073656e64657220746f2074686973206661696c6564",
                          "id": 618,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7920:36:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_d972a7c972449bdb9cebe63bbe70aabf7c1479cdd3def2eb6af0685384c9067a",
                            "typeString": "literal_string \"transferFrom sender to this failed\""
                          },
                          "value": "transferFrom sender to this failed"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_d972a7c972449bdb9cebe63bbe70aabf7c1479cdd3def2eb6af0685384c9067a",
                            "typeString": "literal_string \"transferFrom sender to this failed\""
                          }
                        ],
                        "id": 617,
                        "name": "revert",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -19,
                          -19
                        ],
                        "referencedDeclaration": -19,
                        "src": "7913:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (string memory) pure"
                        }
                      },
                      "id": 619,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7913:44:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 620,
                    "nodeType": "ExpressionStatement",
                    "src": "7913:44:1"
                  }
                }
              ]
            },
            "documentation": null,
            "functionSelector": "6d0c27a8",
            "id": 623,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "btcTransfer",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 607,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 602,
                  "name": "_tokenContract",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 623,
                  "src": "7737:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 601,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7737:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 604,
                  "name": "_recipient",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 623,
                  "src": "7770:18:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 603,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7770:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 606,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 623,
                  "src": "7799:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 605,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7799:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7726:95:1"
            },
            "returnParameters": {
              "id": 608,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7831:0:1"
            },
            "scope": 747,
            "src": "7706:259:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 648,
              "nodeType": "Block",
              "src": "8128:147:1",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 642,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "8143:65:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 638,
                          "name": "_sender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 627,
                          "src": "8179:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 639,
                          "name": "_recipient",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 629,
                          "src": "8188:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 640,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 631,
                          "src": "8200:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 635,
                              "name": "_tokenContract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 625,
                              "src": "8150:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 634,
                            "name": "ERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1482,
                            "src": "8144:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_ERC20_$1482_$",
                              "typeString": "type(contract ERC20)"
                            }
                          },
                          "id": 636,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8144:21:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC20_$1482",
                            "typeString": "contract ERC20"
                          }
                        },
                        "id": 637,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transferFrom",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1188,
                        "src": "8144:34:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,address,uint256) external returns (bool)"
                        }
                      },
                      "id": 641,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8144:64:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 647,
                  "nodeType": "IfStatement",
                  "src": "8139:128:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "7472616e7366657246726f6d2073656e64657220746f2074686973206661696c6564",
                          "id": 644,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8230:36:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_d972a7c972449bdb9cebe63bbe70aabf7c1479cdd3def2eb6af0685384c9067a",
                            "typeString": "literal_string \"transferFrom sender to this failed\""
                          },
                          "value": "transferFrom sender to this failed"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_d972a7c972449bdb9cebe63bbe70aabf7c1479cdd3def2eb6af0685384c9067a",
                            "typeString": "literal_string \"transferFrom sender to this failed\""
                          }
                        ],
                        "id": 643,
                        "name": "revert",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -19,
                          -19
                        ],
                        "referencedDeclaration": -19,
                        "src": "8223:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (string memory) pure"
                        }
                      },
                      "id": 645,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8223:44:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 646,
                    "nodeType": "ExpressionStatement",
                    "src": "8223:44:1"
                  }
                }
              ]
            },
            "documentation": null,
            "functionSelector": "d9d1ca47",
            "id": 649,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "btcTransferFrom",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 632,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 625,
                  "name": "_tokenContract",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 649,
                  "src": "8008:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 624,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8008:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 627,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 649,
                  "src": "8041:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 626,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8041:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 629,
                  "name": "_recipient",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 649,
                  "src": "8067:18:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 628,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8067:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 631,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 649,
                  "src": "8096:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 630,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8096:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7997:121:1"
            },
            "returnParameters": {
              "id": 633,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8128:0:1"
            },
            "scope": 747,
            "src": "7973:302:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 724,
              "nodeType": "Block",
              "src": "8667:634:1",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 676,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 673,
                          "name": "_transactionId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 651,
                          "src": "8695:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        ],
                        "id": 672,
                        "name": "haveContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 746,
                        "src": "8682:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bool_$",
                          "typeString": "function (bytes32) view returns (bool)"
                        }
                      },
                      "id": 674,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8682:28:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 675,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "8714:5:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "8682:37:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 697,
                  "nodeType": "IfStatement",
                  "src": "8678:293:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 679,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8768:1:1",
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
                            "id": 678,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "8760:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 677,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "8760:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          },
                          "id": 680,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8760:10:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 683,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8797:1:1",
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
                            "id": 682,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "8789:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 681,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "8789:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          },
                          "id": 684,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8789:10:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 687,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8826:1:1",
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
                            "id": 686,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "8818:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 685,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "8818:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          },
                          "id": 688,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8818:10:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 689,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8847:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 690,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8867:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 691,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8887:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 692,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8907:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 693,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8931:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 694,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8955:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "id": 695,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "8741:230:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_address_payable_$_t_address_payable_$_t_address_payable_$_t_rational_0_by_1_$_t_rational_0_by_1_$_t_rational_0_by_1_$_t_bool_$_t_bool_$_t_rational_0_by_1_$",
                        "typeString": "tuple(address payable,address payable,address payable,int_const 0,int_const 0,int_const 0,bool,bool,int_const 0)"
                      }
                    },
                    "functionReturnParameters": 671,
                    "id": 696,
                    "nodeType": "Return",
                    "src": "8734:237:1"
                  }
                },
                {
                  "assignments": [
                    699
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 699,
                      "name": "c",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 724,
                      "src": "8982:23:1",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                        "typeString": "struct BurnToClaim.BurnTokenData"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 698,
                        "name": "BurnTokenData",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 75,
                        "src": "8982:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                          "typeString": "struct BurnToClaim.BurnTokenData"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 703,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 700,
                      "name": "burnTokenData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79,
                      "src": "9008:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                        "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                      }
                    },
                    "id": 702,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 701,
                      "name": "_transactionId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 651,
                      "src": "9022:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "9008:29:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                      "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8982:55:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 704,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 699,
                          "src": "9070:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                            "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                          }
                        },
                        "id": 705,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 58,
                        "src": "9070:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 706,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 699,
                          "src": "9093:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                            "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                          }
                        },
                        "id": 707,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "receiver",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 60,
                        "src": "9093:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 708,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 699,
                          "src": "9118:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                            "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                          }
                        },
                        "id": 709,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "tokenContract",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 62,
                        "src": "9118:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 710,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 699,
                          "src": "9148:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                            "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                          }
                        },
                        "id": 711,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "amount",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 64,
                        "src": "9148:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 712,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 699,
                          "src": "9171:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                            "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                          }
                        },
                        "id": 713,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "hashlock",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 66,
                        "src": "9171:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 714,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 699,
                          "src": "9196:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                            "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                          }
                        },
                        "id": 715,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "timelock",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 68,
                        "src": "9196:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 716,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 699,
                          "src": "9221:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                            "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                          }
                        },
                        "id": 717,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "withdrawn",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 70,
                        "src": "9221:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 718,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 699,
                          "src": "9247:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                            "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                          }
                        },
                        "id": 719,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "refunded",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 72,
                        "src": "9247:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 720,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 699,
                          "src": "9272:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_BurnTokenData_$75_storage_ptr",
                            "typeString": "struct BurnToClaim.BurnTokenData storage pointer"
                          }
                        },
                        "id": 721,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "preimage",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 74,
                        "src": "9272:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "id": 722,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "9055:238:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$_t_uint256_$_t_bool_$_t_bool_$_t_bytes32_$",
                      "typeString": "tuple(address,address,address,uint256,bytes32,uint256,bool,bool,bytes32)"
                    }
                  },
                  "functionReturnParameters": 671,
                  "id": 723,
                  "nodeType": "Return",
                  "src": "9048:245:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "e16c7d98",
            "id": 725,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getContract",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 652,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 651,
                  "name": "_transactionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 725,
                  "src": "8304:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 650,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8304:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8303:24:1"
            },
            "returnParameters": {
              "id": 671,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 654,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 725,
                  "src": "8390:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 653,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8390:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 656,
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 725,
                  "src": "8419:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 655,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8419:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 658,
                  "name": "tokenContract",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 725,
                  "src": "8450:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 657,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8450:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 660,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 725,
                  "src": "8486:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 659,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8486:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 662,
                  "name": "hashlock",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 725,
                  "src": "8515:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 661,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8515:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 664,
                  "name": "timelock",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 725,
                  "src": "8546:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 663,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8546:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 666,
                  "name": "withdrawn",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 725,
                  "src": "8577:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 665,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8577:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 668,
                  "name": "refunded",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 725,
                  "src": "8606:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 667,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8606:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 670,
                  "name": "preimage",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 725,
                  "src": "8634:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 669,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8634:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8375:286:1"
            },
            "scope": 747,
            "src": "8283:1018:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 745,
              "nodeType": "Block",
              "src": "9423:80:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 743,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 732,
                      "name": "exists",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 730,
                      "src": "9434:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 741,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 733,
                                "name": "burnTokenData",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 79,
                                "src": "9444:13:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_BurnTokenData_$75_storage_$",
                                  "typeString": "mapping(bytes32 => struct BurnToClaim.BurnTokenData storage ref)"
                                }
                              },
                              "id": 735,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 734,
                                "name": "_transactionId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 727,
                                "src": "9458:14:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "9444:29:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_BurnTokenData_$75_storage",
                                "typeString": "struct BurnToClaim.BurnTokenData storage ref"
                              }
                            },
                            "id": 736,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 58,
                            "src": "9444:36:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 739,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9492:1:1",
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
                              "id": 738,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "9484:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 737,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "9484:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": null,
                                  "typeString": null
                                }
                              }
                            },
                            "id": 740,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9484:10:1",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "9444:50:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "id": 742,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "9443:52:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "9434:61:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 744,
                  "nodeType": "ExpressionStatement",
                  "src": "9434:61:1"
                }
              ]
            },
            "documentation": null,
            "id": 746,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "haveContract",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 728,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 727,
                  "name": "_transactionId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 746,
                  "src": "9331:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 726,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "9331:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "9330:24:1"
            },
            "returnParameters": {
              "id": 731,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 730,
                  "name": "exists",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 746,
                  "src": "9405:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 729,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "9405:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "9404:13:1"
            },
            "scope": 747,
            "src": "9309:194:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "scope": 748,
        "src": "86:9420:1"
      }
    ],
    "src": "0:9508:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.2+commit.bacdbe57.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.2.0",
  "updatedAt": "2020-11-09T06:22:16.104Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}

export default BurnToClaim