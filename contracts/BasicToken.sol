pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyCollectible is ERC20 {
    constructor(name, symbol) ERC20(name, symbol) {

    }
}