// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.7.0;

import "./ConvertLib.sol";

contract BtcHollow {
    mapping(address => uint256) balances;

    event ExitTransactionEvent(
        bytes32 indexed transactionId,
        address indexed sender,
        address indexed receiver,
        address tokenContract,
        uint256 amount,
        bytes32 hashlock,
        uint256 timelock
    );

    constructor() public {
        balances[tx.origin] = 10000;
    }

    function registerContract(address contractAddress)
        public
        returns (bool result)
    {
        return true;
    }

    function exitTransaction(
        address burnAddress,
        bytes32 hashlock,
        uint256 timelock,
        address tokenContract,
        uint256 amount
    ) public returns (bytes32 transactionId) {
        transactionId = sha256(
            abi.encodePacked(
                msg.sender,
                burnAddress,
                tokenContract,
                amount,
                hashlock,
                timelock
            )
        );
        emit ExitTransactionEvent(
            transactionId,
            msg.sender,
            burnAddress,
            tokenContract,
            amount,
            hashlock,
            now
        );
        return transactionId;
    }

  function reclaimTransaction(bytes32 _transactionId)
        external
        returns (bool result)
    {
		return true;
	}


 function add(
        address crosschainContractAddress,
        bytes32 transactionId,
        address burnAddress,
        bytes32 hashlock,
        uint256 timelock,
        address tokenContract, // base token contract
        uint256 amount
    ) 
        external
        returns (bool result)
    {
		return true;
	}



 function entryTransaction(
        uint256 amount,
        address receiver,
        bytes32 transactionId,
        bytes32 preimage
    ) 
        external
        returns (bool result)
    {
		return true;
	}



 function update(
        address crosschainContractAddress,
        bytes32 transactionId,
        bytes32 preimage
    ) 
        external
        returns (bool result)
    {
		return true;
	}

}
