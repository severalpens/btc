pragma solidity ^0.8.0;

import "./ERC20.sol";

// Example class - a mock class using delivering from ERC20
contract BasicToken is ERC20 {
  constructor(uint256 initialBalance) ERC20("Basic", "BSC") public {
    _mint(msg.sender, initialBalance);
  }
    function decimals() public view override returns (uint8) {
        return 0;
    }
}