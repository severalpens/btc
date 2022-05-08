# Burn-to-Claim Demo App
### Cross-chain Value Transfer App using [Burn-to-Claim](https://www.sciencedirect.com/science/article/abs/pii/S1389128621004369) protocol by [Babu Pillai](https://scholar.google.ch/citations?user=Xtg1XHIAAAAJ&hl=en)

### Burn-to-Claim Protocol
The function of the burn-to-claim protocol is to transfer value (eg ERC20 tokens) from one blockchain to another OR timeout and return the funds.


### This App
This app facilitates the building and testing of an Ethereum contract that contains methods used to implement a PoC demo of the protocol.



### How To Use
- Install [Truffle](https://trufflesuite.com/) and compile the contracts located in [./compilers/truffle/contracts](./compilers/truffle/contracts)
- Install the [Metamask](https://metamask.io) browser extension in Chrome (or similar).
- Login to [https://btc.severalpens.com](https://btc.severalpens.com)
- Load the artifacts (.json files) compiled using Truffle into the app.
- Fill out other entities as needed.
- Run different transactions through the app and inspect the resulting logs in [etherscan](https://etherscan.io).

### Technical Details
See the [DeveloperReadme.md](./DeveloperReadme.md) file for details on the app and the protocol.

### Template for Ethereum Based Projects
It should be easy to fork this repo and create new Ethereum based apps. As well as Ethereum integration the app was built using the following:
- AWS Amplify
- React (create-react-app)
- Typescript
- React Router
- Ethers.js
- Tailwind
